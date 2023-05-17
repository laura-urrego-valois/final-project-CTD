package com.digital.DigitaBooking.controllers;

import com.digital.DigitaBooking.models.Tour;
import com.digital.DigitaBooking.services.TourService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.Optional;

@RestController
@RequestMapping("/tours")
public class TourController {

    @Autowired
    private TourService tourService;

    @GetMapping
    public ArrayList<Tour> getTours(){
        return this.tourService.getTours();
    }

    @PostMapping
    public Tour saveTours(@RequestBody Tour tour){
        return  this.tourService.saveTour(tour);
    }

    @GetMapping(path = "/{id}")
    public Optional<Tour> getToursById(@PathVariable Long id){
        return this.tourService.getById(id);
    }

}
