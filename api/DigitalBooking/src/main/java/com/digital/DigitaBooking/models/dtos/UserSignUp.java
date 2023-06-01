package com.digital.DigitaBooking.models.dtos;

import jakarta.persistence.Column;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import lombok.*;
import org.hibernate.validator.constraints.Length;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class UserSignUp {

    // La clase "UserSignUp" es un objeto de transferencia de datos utilizado para
    // representar los datos de registro de usuarios, incluyendo un nombre de usuario y una
    // contraseña.

    @NotEmpty
    @Length(min = 8, max = 20)
    private String userName;

    @NotEmpty
    @Length(min = 4, max = 20)
    private String userLastName;


    @NotEmpty
    @Length(min = 15, max = 30)
    private String userEmail;

    @NotEmpty
    @Length(min = 4, max = 20)
    private String password;


}
