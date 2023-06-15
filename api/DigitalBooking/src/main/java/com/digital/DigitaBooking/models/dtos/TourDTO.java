package com.digital.DigitaBooking.models.dtos;

import com.digital.DigitaBooking.models.entities.Category;
import com.digital.DigitaBooking.models.entities.Country;
import com.digital.DigitaBooking.models.entities.Feature;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.*;

import java.util.Set;

@Data
@JsonIgnoreProperties(ignoreUnknown = true)
public class TourDTO {

    private Long id;
    private String tourName;
    private String tourDescription;
    private String tourClassification;
    private Integer tourCapacity;
    private Boolean tourAvailability;
    private Double tourPrice;
    private Integer tourScore;
    private Integer categoryId;
    private Category category;
    private Set<Feature> features;
    private Set<Long> featuresId;
    private Integer CountryId;
    private Country country;

}
