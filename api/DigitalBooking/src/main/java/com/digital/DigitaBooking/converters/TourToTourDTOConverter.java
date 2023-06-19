package com.digital.DigitaBooking.converters;

import com.digital.DigitaBooking.models.dtos.TourDTO;
import com.digital.DigitaBooking.models.entities.Tour;
import org.springframework.core.convert.converter.Converter;
import org.springframework.stereotype.Component;

@Component
public class TourToTourDTOConverter implements Converter<Tour, TourDTO> {

    @Override
    public TourDTO convert(Tour tour) {
        TourDTO tourDTO = new TourDTO();
        //tourDTO.setTourImageURL(tour.getImages());
        tourDTO.setId(tour.getId());
        tourDTO.setTourName(tour.getTourName());
        tourDTO.setTourDescription(tour.getTourDescription());
        tourDTO.setTourClassification(tour.getTourClassification());
        tourDTO.setTourCapacity(tour.getTourCapacity());
        tourDTO.setTourAvailability(tour.getTourAvailability());
        tourDTO.setTourPrice(tour.getTourPrice());
        tourDTO.setTourScore(tour.getTourScore());
        tourDTO.setCategoryId(tour.getCategory().getId());
        tourDTO.setCountryId(tour.getCountry().getId());
        tourDTO.setFeatures(tour.getFeatures());
        tourDTO.setImages(tour.getImages());
        return tourDTO;
    }
}
