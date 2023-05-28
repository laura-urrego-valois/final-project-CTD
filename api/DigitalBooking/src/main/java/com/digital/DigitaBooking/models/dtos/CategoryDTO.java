package com.digital.DigitaBooking.models.dtos;

import lombok.*;

@Data
public class CategoryDTO {

    private Integer id;
    private String categoryName;
    private String categoryDescription;
    private String categoryImageURL;
}
