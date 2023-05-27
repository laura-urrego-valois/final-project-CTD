package com.digital.DigitaBooking.services;

import com.digital.DigitaBooking.models.UserDTO;

import java.util.Set;

public interface IUserService {

    void saveUser(UserDTO estudianteDTO);

    UserDTO getUser(Long id);

    Set<UserDTO> getUsers();

}
