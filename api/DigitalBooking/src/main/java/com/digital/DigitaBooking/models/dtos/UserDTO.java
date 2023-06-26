package com.digital.DigitaBooking.models.dtos;

import com.digital.DigitaBooking.models.entities.Tour;
import com.digital.DigitaBooking.models.entities.score.Score;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.*;

import java.util.List;
import java.util.stream.Collectors;

@Data
@JsonIgnoreProperties(ignoreUnknown = true)
public class UserDTO {

    private Long id;
    private String userName;
    private String userFirstName;
    private String userLastName;
    private String password;
    private String role;
    private Double latitude;
    private Double longitude;
    private List<ScoreDTO> scoreList;


    private List<ScoreDTO> convertScoreListToDTO(List<Score> scores) {

        return scores.stream().map(ScoreDTO::new).collect(Collectors.toList());
    }

    // El código convierte una lista de objetos Score en una lista de objetos ScoreDTO.
}