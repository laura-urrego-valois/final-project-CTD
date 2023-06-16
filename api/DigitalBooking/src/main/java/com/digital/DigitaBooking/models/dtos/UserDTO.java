package com.digital.DigitaBooking.models.dtos;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.*;

@Data
@JsonIgnoreProperties(ignoreUnknown = true)
public class UserDTO {

    private Long id;
    private String userName;
    private String userEmail;
    private String userFirstName;
    private String userLastName;
    private String password;
    private String role;
}
