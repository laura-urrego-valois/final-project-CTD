package com.digital.DigitaBooking.models;

import lombok.*;

public class TourDTO {

    @Getter
    @Setter
    private Long idTour;
    private String tourImageURL;
    private String tourName;
    private String tourDescription;
    private String tourClassification;
    private Integer tourCapacity;
    private Boolean tourAvailability;
    private Double tourPrice;
    private Integer tourScore;
}
