package com.digital.DigitaBooking.services;

import com.digital.DigitaBooking.models.entitys.Tour;
import com.digital.DigitaBooking.models.dtos.TourDTO;
import com.digital.DigitaBooking.repositories.ITourRepository;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class TourService implements ITourService {

    @Autowired
    private ITourRepository tourRepository;

    @Autowired
    ObjectMapper mapper;

    @Override
    public void saveTour(TourDTO tourDTO) {
        Tour tour = mapper.convertValue(tourDTO, Tour.class);
        tourRepository.save(tour);
    }

    @Override
    public TourDTO getTour(Long id) {
        Optional<Tour> tour = tourRepository.findById(id);
        TourDTO tourDTO = null;
        if (tour.isPresent())
            tourDTO = mapper.convertValue(tour, TourDTO.class);

        return tourDTO;
    }

    @Override
    public void deleteTour(Long id) {
        tourRepository.deleteById(id);
    }

    @Override
    public Set<TourDTO> getTours() {
        List<Tour> tours = tourRepository.findAll();
        Set<TourDTO> toursDTO = new HashSet<>();
        for (Tour tour :
                tours) {
            toursDTO.add(mapper.convertValue(tour, TourDTO.class));

        }
        return toursDTO;
    }

}
