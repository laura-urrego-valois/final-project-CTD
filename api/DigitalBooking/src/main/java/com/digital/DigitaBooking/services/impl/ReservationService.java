package com.digital.DigitaBooking.services.impl;

import com.digital.DigitaBooking.models.dtos.ReservationDTO;
import com.digital.DigitaBooking.models.entities.Reservation;
import com.digital.DigitaBooking.repositories.IReservationRepository;
import com.digital.DigitaBooking.services.IReservationService;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.List;
import java.util.Optional;
import java.util.Set;

@Service
public class ReservationService implements IReservationService {

    @Autowired
    private IReservationRepository reservationRepository;

    @Autowired
    ObjectMapper mapper;

    @Override
    public void saveReservation(ReservationDTO reservationDTO) {
        Reservation reservation = mapper.convertValue(reservationDTO, Reservation.class);
        reservationRepository.save(reservation);
    }

    @Override
    public ReservationDTO getReservation(Long id) {
        Optional<Reservation> reservation = reservationRepository.findById(id);
        ReservationDTO reservationDTO = null;
        if (reservation.isPresent())
            reservationDTO = mapper.convertValue(reservation, ReservationDTO.class);

        return reservationDTO;
    }

    @Override
    public void updateReservation(Long id, ReservationDTO reservationDTO) {
        Optional<Reservation> optionalReservation = reservationRepository.findById(id).map(reservation -> {
            reservation.setInitialDate(reservationDTO.getInitialDate());
            reservation.setFinalDate(reservationDTO.getFinalDate());
            reservation.setStartTime(reservationDTO.getStartTime());
            return reservationRepository.save(reservation);
        });

    }

    @Override
    public void deleteReservation(Long id) {

        reservationRepository.deleteById(id);

    }

    @Override
    public Set<ReservationDTO> getReservations() {
        List<Reservation> reservations = reservationRepository.findAll();
        Set<ReservationDTO> reservationsDTO = new HashSet<>();
        for (Reservation reservation :
                reservations) {
            reservationsDTO.add(mapper.convertValue(reservation, ReservationDTO.class));

        }
        return reservationsDTO;
    }
}
