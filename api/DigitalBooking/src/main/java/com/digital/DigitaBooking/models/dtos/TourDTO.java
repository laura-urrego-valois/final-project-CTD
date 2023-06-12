package com.digital.DigitaBooking.models.dtos;

import com.digital.DigitaBooking.models.entities.Category;
import lombok.*;

@Data
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
}
