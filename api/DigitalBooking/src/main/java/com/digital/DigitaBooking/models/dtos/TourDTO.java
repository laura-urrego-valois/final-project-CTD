package com.digital.DigitaBooking.models.dtos;

import lombok.*;

@Data
public class TourDTO {

    private Long id;
    private String tourImageURL;
    private String tourName;
    private String tourDescription;
    private String tourClassification;
    private Integer tourCapacity;
    private Boolean tourAvailability;
    private Double tourPrice;
    private Integer tourScore;
}
