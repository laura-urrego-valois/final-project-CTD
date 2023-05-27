package com.digital.DigitaBooking.models;

import lombok.*;

public class CategoryDTO {

    @Getter
    @Setter
    private Integer idCategory;
    private String categoryName;
    private String categoryDescription;
    private String categoryImageURL;
}
