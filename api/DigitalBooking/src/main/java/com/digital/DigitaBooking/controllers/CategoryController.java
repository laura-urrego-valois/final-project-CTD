package com.digital.DigitaBooking.controllers;

import com.digital.DigitaBooking.models.Category;
import com.digital.DigitaBooking.models.CategoryDTO;
import com.digital.DigitaBooking.services.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@RestController
@RequestMapping("/Category")
public class CategoryController {
    @Autowired
    private CategoryService categoryService;

    @PostMapping
    public ResponseEntity<?> saveCategory(@RequestBody CategoryDTO categoryDTO) {
        categoryService.saveCategory(categoryDTO);
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

}
