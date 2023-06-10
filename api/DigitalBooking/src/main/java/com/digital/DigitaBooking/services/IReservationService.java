package com.digital.DigitaBooking.services;


import com.digital.DigitaBooking.models.dtos.ReservationDTO;

import java.util.Set;

public interface IReservationService {

    void saveReservation(ReservationDTO reservationDTO);

    ReservationDTO getReservation(Long id);

    void updateReservation(Long id, ReservationDTO reservationDTO);

    void deleteReservation(Long id);

    Set<ReservationDTO> getReservations();
}
