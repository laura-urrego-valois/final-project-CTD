package com.digital.DigitaBooking.services;

import com.digital.DigitaBooking.models.Tour;
import com.digital.DigitaBooking.repositories.ITourRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Optional;

@Service
public class TourService {
    @Autowired
    ITourRepository productRepository;

    public ArrayList<Tour> getTours(){
        return (ArrayList<Tour>) productRepository.findAll();
    }

    public Tour saveTour(Tour tour){
        return productRepository.save(tour);
    }

    public Optional<Tour> getById(Long id){
        return productRepository.findById(id);
    }


}
