package com.digital.DigitaBooking.services;

import com.digital.DigitaBooking.models.entitys.UserRole;
import com.digital.DigitaBooking.models.dtos.UserRoleDTO;
import com.digital.DigitaBooking.repositories.IUserRoleRepository;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserRoleService implements IUserRoleService {

    @Autowired
    private IUserRoleRepository userRoleRepository;

    @Autowired
    ObjectMapper mapper;

    @Override
    public UserRoleDTO getUserRole(Long id) {
        Optional<UserRole> userRole = userRoleRepository.findById(id);
        UserRoleDTO userRoleDTO = null;
        if (userRole.isPresent())
            userRoleDTO = mapper.convertValue(userRole, UserRoleDTO.class);

        return userRoleDTO;
    }
}