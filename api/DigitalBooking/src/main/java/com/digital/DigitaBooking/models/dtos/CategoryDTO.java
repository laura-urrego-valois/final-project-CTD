package com.digital.DigitaBooking.models.dtos;

import com.digital.DigitaBooking.models.entitys.Tour;
import lombok.*;

import java.util.Set;

@Data
public class CategoryDTO {

    private Integer idCategory;
    private String categoryName;
    private String categoryDescription;
    private String categoryImageURL;
    private Set<Tour> tours;
}
