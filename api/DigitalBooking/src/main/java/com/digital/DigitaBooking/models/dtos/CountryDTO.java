package com.digital.DigitaBooking.models.dtos;

import com.digital.DigitaBooking.models.entities.Tour;
import lombok.Data;

import java.util.Set;

@Data
public class CountryDTO {

    private Integer id;
    private String countryName;
    private Set<Tour> tour;

}
