package com.digital.DigitaBooking.models.dtos;

import com.digital.DigitaBooking.models.entities.*;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.*;

import java.util.Set;

@Data
@NoArgsConstructor
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
    private Integer CountryId;
    private Set<Feature> features;
    private Set<Long> featuresId;
    private Set<Image> images;
    private CounterDTO counter;
    private Double latitude;
    private Double longitude;

    public TourDTO(Tour tour) {
        if (tour.getCounter() != null) {
            this.counter = new CounterDTO(tour.getCounter());
        }
    }
}
