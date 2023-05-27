package com.digital.DigitaBooking.services;

import com.digital.DigitaBooking.models.User;
import com.digital.DigitaBooking.models.UserDTO;
import com.digital.DigitaBooking.repositories.IUserRepository;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class UserService implements IUserService {

    @Autowired
    private IUserRepository userRepository;
    @Autowired
    ObjectMapper mapper;

    @Override
    public void saveUser(UserDTO userDTO) {
        User user = mapper.convertValue(userDTO, User.class);
        userRepository.save(user);

    }

    @Override
    public UserDTO getUser(Long id) {
        Optional<User> user = userRepository.findById(id);
        UserDTO userDTO = null;
        if (user.isPresent())
            userDTO = mapper.convertValue(user, UserDTO.class);

        return userDTO;
    }

    @Override
    public Set<UserDTO> getUsers() {
        List<User> users = userRepository.findAll();
        Set<UserDTO> usersDTO = new HashSet<>();
        for (User user :
                users) {
            usersDTO.add(mapper.convertValue(user, UserDTO.class));

        }
        return usersDTO;
    }
}
