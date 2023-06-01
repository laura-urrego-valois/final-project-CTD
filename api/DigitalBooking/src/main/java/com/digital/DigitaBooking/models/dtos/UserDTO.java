package com.digital.DigitaBooking.models.dtos;

import lombok.*;

@Data
public class UserDTO {

    private Long id;
    private String userName;
    private String lastName;
    private String email;
    private String password;
    private String role;
}
