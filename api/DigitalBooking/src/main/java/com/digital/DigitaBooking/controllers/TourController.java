package com.digital.DigitaBooking.controllers;

import com.digital.DigitaBooking.AWSS3Service;
import com.digital.DigitaBooking.models.dtos.ImageDTO;
import com.digital.DigitaBooking.models.dtos.ImageLoaderDTO;
import com.digital.DigitaBooking.models.dtos.TourDTO;
import com.digital.DigitaBooking.models.dtos.UserDTO;
import com.digital.DigitaBooking.service.impl.AWSS3ServiceImpl;
import com.digital.DigitaBooking.services.impl.ImageService;
import com.digital.DigitaBooking.services.impl.TourService;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.apache.catalina.mapper.Mapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
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
@RequestMapping("/tours")
public class TourController {

    @Autowired
    private TourService tourService;

    @Autowired
    private AWSS3ServiceImpl awss3Service;

    @Autowired
    private ImageService imageService;

    @Autowired
    private ImageDTO imageDTO;

    private ObjectMapper mapper = new ObjectMapper();

    @PostMapping
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<?> saveTour(@RequestBody TourDTO tourDTO) {
        tourService.saveTour(tourDTO);
        return ResponseEntity.ok(HttpStatus.OK);

    }

    @PostMapping(path = "/load_image")
    public ResponseEntity<HttpStatus> loadImage(@RequestPart(value="files") List<MultipartFile> imagenes,
    @RequestPart(value="Tour") String tourString) throws IOException {

        List<String> imagesURL = new ArrayList<>();
        TourDTO tourDTO = mapper.readValue(tourString,TourDTO.class);
        try {
            tourService.saveTour(tourDTO);
//            tourService.getTour()
            for (MultipartFile image: imagenes){
                File mainFile = new File(image.getOriginalFilename());
                String newFileName = System.currentTimeMillis() + "_" + mainFile.getName();
                awss3Service.uploadFile(image);
                imageDTO.setImageTitle(mainFile.getName());
                imageDTO.setImageUrl(awss3Service.generateUrl(newFileName).replaceFirst("/[0-9]+_", "/_"));
//                imageDTO.setTour(tourService.getTour());
                imageService.saveImage(imageDTO);

                imagesURL.add(awss3Service.generateUrl(newFileName).replaceFirst("/[0-9]+_", "/_"));


//                public void addImagesToProduct(Product newProduct, List<String> imagesURLs){
//                    List<ProductImageEntity> images = imagesURLs.stream().map(url -> new ProductImageEntity(null, url, newProduct)).toList();
//                    productImageRepository.saveAll(images);
//                }
            }


        }catch (Exception e){
            return ResponseEntity.ok(HttpStatus.BAD_REQUEST);
        }

        return ResponseEntity.ok(HttpStatus.OK);
    }

    @GetMapping(path = "/{id}")
    public TourDTO getTour(@PathVariable Long id) {
        return tourService.getTour(id);
    }

    @DeleteMapping(path = "/{id}")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<?> deleteTour(@PathVariable Long id) {
        tourService.deleteTour(id);
        return ResponseEntity.ok(HttpStatus.OK);
    }

    @GetMapping
    public Collection<TourDTO> getTours() {

        return tourService.getTours();
    }

    @GetMapping(path = "byCategory/{id}")
    public Collection<TourDTO> getToursByCategory(@PathVariable Integer id) {
        return tourService.getToursByCategory(id);
    }

    @PutMapping(path = "/{id}")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<?> updateTour(@PathVariable Long id, @RequestBody TourDTO tourDTO) {
        tourService.updateTour(id, tourDTO);
        return ResponseEntity.ok(HttpStatus.OK);
    }

    @GetMapping(path = "/country/{id}")
    public Collection<TourDTO> getToursByCountry(@PathVariable Integer id) {

        return tourService.getToursByCountry(id);
    }


}
