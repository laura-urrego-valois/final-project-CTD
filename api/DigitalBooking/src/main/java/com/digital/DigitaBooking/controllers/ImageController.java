package com.digital.DigitaBooking.controllers;

import com.digital.DigitaBooking.models.dtos.ImageDTO;
import com.digital.DigitaBooking.models.dtos.ImageLoaderDTO;
import com.digital.DigitaBooking.services.impl.ImageService;


import jdk.jshell.Snippet;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;

import java.nio.file.Path;
import java.util.Collection;
import java.util.List;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/images")
public class ImageController {

    @Autowired
    private ImageService imageService;

    @PostMapping(path = "/load_image", consumes = {MediaType.MULTIPART_FORM_DATA_VALUE})
    public ResponseEntity<HttpStatus> loadImage(@RequestBody(required = true) @RequestParam List<MultipartFile> images) throws IOException {
        try {
//            List<MultipartFile> images = imageLoaderDTO.getImages();
            for (MultipartFile image: images){
                String fileName = image.getOriginalFilename();
                File tempFile = new File(System.getProperty("java.io.tmpdir")+"/"+fileName);
                File localFile = new File("C:\\Users\\Usuario\\Pictures\\Saved Pictures\\prueba.jpg");
                image.transferTo(tempFile);
                //Files.copy(image.getInputStream(),localFile.toPath());
                return ResponseEntity.ok(HttpStatus.OK);
            }
//            File localFile = new File("C:\\Users\\Usuario\\Pictures\\Saved Pictures\\prueba.jpg");
//            Files.copy(images.getInputStream(),localFile.toPath());
//            return ResponseEntity.ok(HttpStatus.OK);
        }catch (Exception e){
            return ResponseEntity.ok(HttpStatus.BAD_REQUEST);
        }
        return ResponseEntity.ok(HttpStatus.OK);
    }

    @PostMapping
    @PreAuthorize("hasRole('ADMIN')")
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
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<?> updateImage(@PathVariable Long id, @RequestBody ImageDTO imageDTO) {

        imageService.updateImage(id, imageDTO);
        return ResponseEntity.ok(HttpStatus.OK);
    }

    @DeleteMapping(path = "/{id}")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<?> deleteImage(@PathVariable Long id) {

        imageService.deleteImage(id);
        return ResponseEntity.ok(HttpStatus.OK);
    }
}
