package com.digital.DigitaBooking.models.dtos;

import com.digital.DigitaBooking.models.entities.score.Score;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@JsonIgnoreProperties(ignoreUnknown = true)
public class ScoreDTO {

    private Long id;
    private Long scoreId;
    private Long userId;
    private String userFirstName;
    private Integer value;

    public ScoreDTO(Score score) {
        this.id = score.getId();
        this.scoreId = score.getCounter().getId();
        this.userId = score.getUser().getId();
        this.userFirstName = score.getUser().getUserFirstName();
        this.value = score.getValue();
    }

}
