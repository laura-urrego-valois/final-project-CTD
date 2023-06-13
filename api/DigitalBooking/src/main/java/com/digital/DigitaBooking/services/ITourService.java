package com.digital.DigitaBooking.services;

import com.digital.DigitaBooking.models.dtos.TourDTO;
import com.digital.DigitaBooking.models.entities.Tour;


import java.util.Set;

public interface ITourService {

    void saveTour(TourDTO tourDTO);

    TourDTO getTour(Long id);

    void updateTour(Long id, TourDTO tourDTO);

    void deleteTour(Long id);

    Set<TourDTO> getTours();

    Set<TourDTO> getToursByCategory(Integer id);

}
