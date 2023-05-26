package com.digital.DigitaBooking.controllers;

import com.digital.DigitaBooking.models.Tour;
import com.digital.DigitaBooking.models.TourDTO;
import com.digital.DigitaBooking.services.TourService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@RestController
@RequestMapping("/Tours")
public class TourController {

    @Autowired
    private TourService tourService;

    @PostMapping
    public ResponseEntity<?> saveTour(@RequestBody TourDTO tourDTO) {
        tourService.saveTour(tourDTO);
        return ResponseEntity.ok(HttpStatus.OK);

    }

    @GetMapping(path = "/{id}")
    public TourDTO getTour(@PathVariable Long id) {
        return tourService.getTour(id);
    }

    @DeleteMapping(path = "/{id}")
    public ResponseEntity<?> deleteTour(@PathVariable Long id) {
        tourService.deleteTour(id);
        return ResponseEntity.ok(HttpStatus.OK);
    }

    @GetMapping
    public Collection<TourDTO> getTours() {
        return tourService.getTours();
    }

}
