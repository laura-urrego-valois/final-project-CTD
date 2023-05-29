package com.digital.DigitaBooking.services;

import com.digital.DigitaBooking.models.dtos.AuthorizationResponse;
import com.digital.DigitaBooking.models.dtos.UserLogin;
import com.digital.DigitaBooking.models.dtos.UserSignUp;
import lombok.AllArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class AuthenticationService implements IAuthenticationService{

    private final AuthenticationManager authenticationManager;
    private final UserService userService;


    @Override
    public AuthorizationResponse signUp(UserSignUp userSignUp) {
        return null;
    }

    @Override
    public AuthorizationResponse logIn(UserLogin userLogin) {
        return null;
    }
}
