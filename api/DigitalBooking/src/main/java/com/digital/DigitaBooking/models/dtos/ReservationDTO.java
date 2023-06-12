package com.digital.DigitaBooking.models.dtos;

import lombok.Data;

import java.time.LocalDate;
import java.time.LocalTime;

@Data
public class ReservationDTO {

    private Long id;
    private LocalDate initialDate;
    private LocalDate finalDate;
    private LocalTime startTime;

}
