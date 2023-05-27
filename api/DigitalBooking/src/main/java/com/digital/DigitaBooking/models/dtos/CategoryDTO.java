package com.digital.DigitaBooking.models.dtos;

import com.digital.DigitaBooking.models.entitys.Tour;
import lombok.*;

import java.util.Set;

@Data
public class CategoryDTO {

    private Integer id;
    private String categoryName;
    private String categoryDescription;
    private String categoryImageURL;
}
