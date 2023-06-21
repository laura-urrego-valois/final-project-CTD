package com.digital.DigitaBooking.util;

import lombok.Data;

import java.time.LocalDate;

@Data
public class TourFilter {

    private LocalDate InitialDate;
    private LocalDate FinalDate;
    private Integer countryId;
    private Integer categoryId;
    private Integer offset;
    private Integer limit;
}
