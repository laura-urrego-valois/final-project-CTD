package com.digital.DigitaBooking.controllers;

import com.digital.DigitaBooking.models.Tour;
import com.digital.DigitaBooking.services.TourService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.Optional;

@RestController
@RequestMapping("/tours")
public class TourController {

    @Autowired
    private TourService tourService;

    @GetMapping
    public ArrayList<Tour> getTours() {
        return this.tourService.getTours();
    }

    @PostMapping
    public Tour saveTours(@RequestBody Tour tour) {
        return this.tourService.saveTour(tour);
    }

    @GetMapping(path = "/{id}")
    public Optional<Tour> getToursById(@PathVariable Long id) {
        return this.tourService.getById(id);
    }

    @DeleteMapping(path = "/{id}")
    public ResponseEntity<String> deleteTour(@PathVariable Long id) {
        Optional<Tour> tourOptional = tourService.getById(id);

        if (tourOptional.isPresent()) {
            tourService.deleteTourById(id);
            return ResponseEntity.ok("Ha eliminado el tour de manera exitosa.");
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("El tour con id: " + id + " no fue encontrado");
        }
    }

}
