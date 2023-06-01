package com.digital.DigitaBooking.models.dtos;

import jakarta.validation.constraints.NotEmpty;
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
    private String password;


}
