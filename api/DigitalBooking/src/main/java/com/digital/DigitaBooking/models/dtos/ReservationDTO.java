package com.digital.DigitaBooking.models.dtos;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Data;

import java.time.LocalDate;
import java.time.LocalTime;

@Data
@JsonIgnoreProperties(ignoreUnknown = true)
public class ReservationDTO {

    private Long id;
    private LocalDate initialDate;
    private LocalDate finalDate;
    private LocalTime startTime;

}
