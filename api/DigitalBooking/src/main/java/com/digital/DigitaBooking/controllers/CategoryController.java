package com.digital.DigitaBooking.controllers;

import com.digital.DigitaBooking.models.dtos.CategoryDTO;
import com.digital.DigitaBooking.models.dtos.ImageCategoryDTO;
import com.digital.DigitaBooking.models.dtos.ImageDTO;
import com.digital.DigitaBooking.models.dtos.TourDTO;
import com.digital.DigitaBooking.models.entities.Category;
import com.digital.DigitaBooking.models.entities.ImageCategory;
import com.digital.DigitaBooking.models.entities.Tour;
import com.digital.DigitaBooking.service.impl.AWSS3ServiceImpl;
import com.digital.DigitaBooking.services.impl.CategoryService;
import com.digital.DigitaBooking.services.impl.ImageCategoryService;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.Optional;
@CrossOrigin(origins="*")
@RestController
@RequestMapping("/category")
public class CategoryController {
    @Autowired
    private CategoryService categoryService;

    @Autowired
    private AWSS3ServiceImpl awss3Service;

    @Autowired
    private ImageCategoryService imageCategoryService;

    private ObjectMapper mapper = new ObjectMapper();

    @PostMapping
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<?> saveCategory(@RequestPart CategoryDTO categoryDTO,@RequestPart ImageCategory imageCategory) {
        categoryService.saveCategory(categoryDTO, imageCategory);
        return ResponseEntity.ok(HttpStatus.OK);
    }

    @PostMapping(path = "/load_image")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<HttpStatus> loadImage(@RequestPart(value="file") MultipartFile image,
                                                @RequestPart(value="Category") String categoryString) throws IOException {
        ImageCategoryDTO imageCategoryDTO = new ImageCategoryDTO();
        CategoryDTO categoryDTO = mapper.readValue(categoryString,CategoryDTO.class);

        try {
                File mainFile = new File(image.getOriginalFilename());
                String newFileName = System.currentTimeMillis() + "_" + mainFile.getName();
                awss3Service.uploadFile(image);
                imageCategoryDTO.setImageTitle(mainFile.getName());
                imageCategoryDTO.setImageUrl(awss3Service.generateUrl(newFileName).replaceFirst("/[0-9]+_", "/_"));
                ImageCategory newImageCategory = imageCategoryService.saveImageCategory(imageCategoryDTO);
                categoryService.saveCategory(categoryDTO, newImageCategory);


        }catch (Exception e){
            return ResponseEntity.ok(HttpStatus.BAD_REQUEST);
        }

        return ResponseEntity.ok(HttpStatus.OK);
    }

    @GetMapping(path = "/{id}")
    public CategoryDTO getCategory(@PathVariable Integer id) {

        return categoryService.getCategory(id);
    }

    @GetMapping
    public Collection<CategoryDTO> getCategories() {

        return categoryService.getCategories();
    }

    @PutMapping(path = "/{id}")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<?> updateCategory(@PathVariable Integer id, @RequestBody CategoryDTO categoryDTO) {
        categoryService.updateCategory(id, categoryDTO);
        return ResponseEntity.ok(HttpStatus.OK);
    }

    @DeleteMapping(path = "/{id}")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<?> deleteCategory(@PathVariable Integer id) {
        categoryService.deleteCategory(id);
        return ResponseEntity.ok(HttpStatus.OK);
    }

}
