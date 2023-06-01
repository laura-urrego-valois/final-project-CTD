package com.digital.DigitaBooking.services;

import com.digital.DigitaBooking.models.dtos.TourDTO;

import java.util.Set;

public interface ITourService {

    void saveTour(TourDTO tourDTO);

    TourDTO getTour(Long id);

    void deleteTour(Long id);

    Set<TourDTO> getTours();
}
