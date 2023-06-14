package com.digital.DigitaBooking.models.dtos;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Data;

@Data
@JsonIgnoreProperties(ignoreUnknown = true)
public class CountryDTO {

    private Integer id;
    private String countryName;

}
