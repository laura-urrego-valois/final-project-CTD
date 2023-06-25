package com.digital.DigitaBooking.services;


import com.digital.DigitaBooking.exceptions.BadRequestException;
import com.digital.DigitaBooking.models.dtos.ReservationDTO;
import com.digital.DigitaBooking.models.entities.Reservation;

import java.util.List;
import java.util.Set;

public interface IReservationService {

    Reservation saveReservation(ReservationDTO reservationDTO) throws BadRequestException;

    Reservation getReservationById(Long id) throws BadRequestException;

    Boolean deleteReservation(Long id) throws BadRequestException;

    List<Reservation> getReservationsByTour(Long id) throws BadRequestException;

    List<Reservation> getReservationsByUser(Long id) throws BadRequestException;

}