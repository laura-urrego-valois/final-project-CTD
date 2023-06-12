package com.digital.DigitaBooking.controllers;

import com.digital.DigitaBooking.models.dtos.ReservationDTO;
import com.digital.DigitaBooking.services.impl.ReservationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/reservation")
public class ReservationController {

    @Autowired
    private ReservationService reservationService;

    @PostMapping
    @PreAuthorize("hasRole('USER')")
    public ResponseEntity<?> saveReservation(@RequestBody ReservationDTO reservationDTO) {
        reservationService.saveReservation(reservationDTO);
        return ResponseEntity.ok(HttpStatus.OK);
    }

    @GetMapping(path = "/{id}")
    public ReservationDTO getReservation(@PathVariable Long id) {

        return reservationService.getReservation(id);
    }

    @GetMapping
    public Collection<ReservationDTO> getReservations() {

        return reservationService.getReservations();
    }

    @PutMapping(path = "/{id}")
    @PreAuthorize("hasRole('USER')")
    public ResponseEntity<?> updateReservation(@PathVariable Long id, @RequestBody ReservationDTO reservationDTO) {
        reservationService.updateReservation(id, reservationDTO);
        return ResponseEntity.ok(HttpStatus.OK);
    }

    @DeleteMapping(path = "/{id}")
    @PreAuthorize("hasRole('USER')")
    public ResponseEntity<?> deleteReservation(@PathVariable Long id) {
        reservationService.deleteReservation(id);
        return ResponseEntity.ok(HttpStatus.OK);
    }
}
