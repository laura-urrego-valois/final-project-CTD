package com.digital.DigitaBooking.models.dtos;

import com.digital.DigitaBooking.models.entities.*;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.*;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Set;

@Data
@NoArgsConstructor
@JsonIgnoreProperties(ignoreUnknown = true)
public class TourDTO {

    private Long id;
    private String tourName;
    private String tourDescription;
    private String tourClassification;
    private Integer tourCapacity;
    private Boolean tourAvailability;
    private Double tourPrice;
    private Integer tourScore;
    private Integer categoryId;
    private Integer CountryId;
    private Set<Feature> features;
    private Set<Long> featuresId;
    private Set<Image> images;
    private CounterDTO counter;
    private List<ReservationDTO> reservationList;
    private Integer earliestCheckInHour;
    private Integer latestCheckInHour;

    public TourDTO(Tour tour) {
        if (tour.getCounter() != null) {
            this.counter = new CounterDTO(tour.getCounter());
        }
    }

    private List<ReservationDTO> convertReservationsToReservationsDTO(List<Reservation> reservationList) {
        if (reservationList == null) {
            return new ArrayList<>();
        } else {
            List<ReservationDTO> calendar = new ArrayList<ReservationDTO>();
            LocalDate today = LocalDate.now();
            for (Reservation reservation : reservationList
            ) {
                boolean reservationAlreadyEnded = today.isBefore(reservation.getFinalDate());
                if (reservationAlreadyEnded) {
                    ReservationDTO interval = new ReservationDTO(reservation);
                    calendar.add(interval);
                }
            }
            return calendar;
        }
    }

    // Este método convierte una lista de objetos Reservation en una lista de objetos ReservationDTO.
    // El método filtra las reservas que aún no han finalizado y las convierte en objetos ReservationDTO,
    // esto puede ser útil para mostrar únicamente las reservas activas o futuras en una interfaz de usuario
    // o para realizar algún tipo de procesamiento o cálculo basado en las reservas activas.

}
