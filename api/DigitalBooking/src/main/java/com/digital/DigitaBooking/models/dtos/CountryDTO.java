package com.digital.DigitaBooking.models.dtos;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.digital.DigitaBooking.models.entities.Tour;
import lombok.Data;

import java.util.Set;

@Data
@JsonIgnoreProperties(ignoreUnknown = true)
public class CountryDTO {

    private Integer id;
    private String countryName;
    private Set<Tour> tour;

}
