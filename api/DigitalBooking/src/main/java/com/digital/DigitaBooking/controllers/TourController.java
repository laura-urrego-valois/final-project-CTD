package com.digital.DigitaBooking.controllers;

import com.digital.DigitaBooking.AWSS3Service;
import com.digital.DigitaBooking.exceptions.BadRequestException;
import com.digital.DigitaBooking.models.dtos.ImageDTO;
import com.digital.DigitaBooking.models.dtos.ImageLoaderDTO;
import com.digital.DigitaBooking.models.dtos.TourDTO;
import com.digital.DigitaBooking.models.dtos.UserDTO;
import com.digital.DigitaBooking.models.entities.Tour;
import com.digital.DigitaBooking.service.impl.AWSS3ServiceImpl;
import com.digital.DigitaBooking.services.impl.ImageService;
import com.digital.DigitaBooking.services.impl.TourService;
import com.digital.DigitaBooking.util.TourFilter;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.apache.catalina.mapper.Mapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/tours")
public class TourController {

    @Autowired
    private TourService tourService;

    @Autowired
    private AWSS3ServiceImpl awss3Service;

    @Autowired
    private ImageService imageService;

    private ObjectMapper mapper = new ObjectMapper();

    @PostMapping
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<HttpStatus> loadImage(@RequestPart(value = "files") List<MultipartFile> imagenes,
                                                @RequestPart(value = "Tour") String tourString) throws IOException {
        ImageDTO imageDTO = new ImageDTO();
//        List<String> imagesURL = new ArrayList<>();
        TourDTO tourDTO = mapper.readValue(tourString, TourDTO.class);
        Tour newTour = tourService.saveTour(tourDTO);
        System.out.println(newTour.toString());
        try {
            for (MultipartFile image : imagenes) {
                File mainFile = new File(image.getOriginalFilename());
                String newFileName = System.currentTimeMillis() + "_" + mainFile.getName();
                awss3Service.uploadFile(image);
                imageDTO.setImageTitle(mainFile.getName());
                imageDTO.setImageUrl(awss3Service.generateUrl(newFileName).replaceFirst("/[0-9]+_", "/_"));
                imageService.saveImage(imageDTO, newTour);
                mainFile.delete();
            }

        } catch (Exception e) {
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
        System.out.println(id);
        tourService.updateTour(id, tourDTO);
        return ResponseEntity.ok(HttpStatus.OK);
    }

    @GetMapping(path = "/country/{id}")
    public Collection<TourDTO> getToursByCountry(@PathVariable Integer id) {

        return tourService.getToursByCountry(id);
    }

    @GetMapping(path = "/country/name/{countryName}")
    public ResponseEntity<List<TourDTO>> getToursByCountryName(@PathVariable String countryName) throws BadRequestException {
        List<TourDTO> toursByCountryName = tourService.findAllToursByCountryName(countryName);
        return ResponseEntity.ok(toursByCountryName);
    }

    @GetMapping(path = "/filterByCountryAndDates/{countryId}/{startDate}/{endDate}")
    public ResponseEntity<List<TourDTO>> filterByCountryAndDates(@PathVariable Integer countryId, @PathVariable @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate initialDate, @PathVariable @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate finalDate) throws BadRequestException {
        TourFilter tourFilter = new TourFilter();
        tourFilter.setInitialDate(initialDate);
        tourFilter.setFinalDate(finalDate);
        tourFilter.setCountryId(countryId);
        List<TourDTO> filteredTours = tourService.findToursByCountryAndDates(tourFilter);
        return ResponseEntity.ok(filteredTours);
    }

}
