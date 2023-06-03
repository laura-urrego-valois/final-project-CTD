package com.digital.DigitaBooking.controllers;

import com.digital.DigitaBooking.models.dtos.TourDTO;
import com.digital.DigitaBooking.services.TourService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@CrossOrigin(maxAge = 3600)
@RestController
@RequestMapping("/tours")
public class TourController {

    @Autowired
    private TourService tourService;

    @PostMapping
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<?> saveTour(@RequestBody TourDTO tourDTO) {
        tourService.saveTour(tourDTO);
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

}
