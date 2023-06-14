package com.digital.DigitaBooking.models.dtos;

import lombok.*;

@Data
public class UserDTO {

    private Long id;
    private String userName;
    private String userEmail;
    private String userFirstName;
    private String userLastName;
    private String password;
    private String role;
}
