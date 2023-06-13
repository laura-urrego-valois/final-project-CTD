package com.digital.DigitaBooking.models.dtos;

import com.digital.DigitaBooking.models.entities.Tour;
import lombok.Data;

import java.util.Set;

@Data
public class FeatureDTO {

    private Long id;
    private String featureName;
    private Set<Tour> tour;
    private Set<Long> featureId;
}
