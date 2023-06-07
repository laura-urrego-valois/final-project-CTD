package com.digital.DigitaBooking.controllers;

import com.digital.DigitaBooking.models.dtos.ImageDTO;
import com.digital.DigitaBooking.services.impl.ImageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;

@CrossOrigin(maxAge = 3600)
@RestController
@RequestMapping("/image")
public class ImageController {

    @Autowired
    private ImageService imageService;

    @PostMapping
    public ResponseEntity<?> saveImage(@RequestBody ImageDTO imageDTO) {

        imageService.saveImage(imageDTO);
        return ResponseEntity.ok(HttpStatus.OK);
    }

    @GetMapping(path = "/{id}")
    public ImageDTO getImage(@PathVariable Long id) {

        return imageService.getImage(id);
    }

    @GetMapping
    public Collection<ImageDTO> getImages() {

        return imageService.getImages();
    }

    @PutMapping(path = "/{id}")
    public ResponseEntity<?> updateImage(@PathVariable Long id, @RequestBody ImageDTO imageDTO) {

        imageService.updateImage(id, imageDTO);
        return ResponseEntity.ok(HttpStatus.OK);
    }

    @DeleteMapping(path = "/{id}")
    public ResponseEntity<?> deleteImage(@PathVariable Long id) {

        imageService.deleteImage(id);
        return ResponseEntity.ok(HttpStatus.OK);
    }
}
