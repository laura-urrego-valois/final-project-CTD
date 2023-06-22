package com.digital.DigitaBooking.services.impl;

import com.digital.DigitaBooking.exceptions.BadRequestException;
import com.digital.DigitaBooking.models.dtos.ReservationDTO;
import com.digital.DigitaBooking.models.entities.Reservation;
import com.digital.DigitaBooking.models.entities.Tour;
import com.digital.DigitaBooking.models.entities.User;
import com.digital.DigitaBooking.repositories.IReservationRepository;
import com.digital.DigitaBooking.services.IReservationService;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.HashSet;
import java.util.List;
import java.util.Optional;
import java.util.Set;


@Service
public class ReservationService implements IReservationService {

    @Autowired
    private IReservationRepository reservationRepository;

    @Autowired
    private TourService tourService;

    @Autowired
    private UserService userService;

    @Override
    public Reservation saveReservation(Reservation reservation) throws BadRequestException {
        boolean IdAssigned = reservation.getId() != null;
        boolean validStartTime = reservation.getStartTime() <= 24;
        // Esto es útil para validar si la hora de inicio está dentro del rango válido de un día y asegurarse
        // de que no exceda las 24 horas en el formato de 24 horas.
        boolean validInterval = reservation.getInitialDate().isBefore(reservation.getFinalDate());
        validInterval &= !(reservation.getInitialDate().isBefore(LocalDate.now()));
        // Se está verificando que el intervalo de reserva sea válido, es decir, que la fecha inicial no sea
        // anterior a la fecha actual.
        if (IdAssigned) {
            throw new BadRequestException("Ya existe una reserva para el ID asignado.");
        }
        if (!validInterval) {
            throw new BadRequestException("El intervalo de reserva no es válido.");
        }
        if (!validStartTime) {
            throw new BadRequestException("La hora de inicio no es válida.");
        }
        Tour tour = tourService.searchTourByIdAsClass(reservation.getTour().getId());
        User user = userService.searchUserByIdAsClass(reservation.getUser().getId());
        boolean isInitialDateValidRange = tour.getEarliestCheckInHour() <= reservation.getStartTime();
        if (!isInitialDateValidRange) {
            throw new BadRequestException("La hora de check-in no es posible asignarla.");
            // Esta línea de código se utiliza para verificar si la hora de inicio de una reserva
            // (reservation.getStartTime()) está dentro del rango aceptado para el último horario de check-in
            // de un tour (tour.getEarliestCheckInHour())
            // La excepción se lanza si la hora de check-in no cumple con la condición de estar dentro del
            // rango aceptado.
        }
        boolean isIntervalDateAvailable = true;
        for (Reservation previousReservation : tour.getReservations()) {
            boolean distinct = !reservation.getInitialDate().isBefore(previousReservation.getFinalDate());
            distinct |= !reservation.getFinalDate().isAfter(previousReservation.getInitialDate());
            isIntervalDateAvailable &= distinct;
            // Se verifica si el intervalo de fechas de la reserva actual no se superpone con ninguna de las
            // reservas anteriores del tour, y actualiza la variable isIntervalDateAvailable en función de
            // esta verificación. Si en algún momento se encuentra una superposición, la variable se establece
            // en false, indicando que el intervalo de fechas no está disponible.
        }
        if (!isIntervalDateAvailable) {
            throw new BadRequestException("El intervalo de fechas no está disponible porque ya ha sido ocupado.");
        } else {
            Reservation saved = reservationRepository.save(reservation);
            tour.addReservation(saved);
            user.addReservation(saved);
            return saved;
        }
    }

    @Override
    public Reservation getReservationById(Long id) throws BadRequestException {
        if (id == null) {
            throw new BadRequestException("El ID de la reserva es nulo.");
        }
        Optional<Reservation> optionalReservation = reservationRepository.findById(id);
        if (optionalReservation.isPresent()) {
            return optionalReservation.get();
        } else {
            throw new BadRequestException("No existe una reserva con el ID " + id + ".");
        }
    }

    @Override
    public Boolean deleteReservation(Long id) throws BadRequestException {
        Optional<Reservation> optionalReservation = reservationRepository.findById(id);
        if (optionalReservation.isPresent()) {
            reservationRepository.deleteById(id);
            return true;
        } else {
            throw new BadRequestException("No existe una reserva con el ID " + id + ".");
        }
    }

    @Override
    public List<Reservation> getReservationsByTour(Long id) throws BadRequestException {
        if (id == null) {
            throw new BadRequestException("El ID del tour es nulo.");
        }
        try {
            tourService.getTour(id);
        } catch (Exception e) {
            throw new BadRequestException("El ID del tour no corresponde con un tour almacenado en la base de datos.");
        }
        List<Reservation> results = reservationRepository.getReservationByTourId(id);
        setUsersAsNull(results);
        return results;
    }
    // El objetivo de este método es obtener una lista de reservas asociadas a un tour específico.

    @Override
    public List<Reservation> getReservationsByUser(Long id) throws BadRequestException {
        if (id == null) {
            throw new BadRequestException("El ID del usuario es nulo.");
        }
        try {
            userService.getUser(id);
        } catch (Exception e) {
            throw new BadRequestException("El ID del usuario no corresponde con un usuario almacenado en la base de datos.");
        }
        List<Reservation> results = reservationRepository.getReservationByUserId(id);
        return results;
    }

    private void setUsersAsNull(List<Reservation> reservations) {
        for (Reservation reservation : reservations) {
            reservation.setUser(null);
        }
    }

    // Con este método desvinculamos las referencias a los usuarios en las reservas, estableciendo el
    // campo user como null. Esto puede ser útil en situaciones donde se desea eliminar la relación entre
    // las reservas y los usuarios, o cuando se necesita limpiar o reiniciar el campo user en las
    // reservas.
}