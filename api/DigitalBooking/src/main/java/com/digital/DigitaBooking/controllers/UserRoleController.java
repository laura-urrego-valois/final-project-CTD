package com.digital.DigitaBooking.controllers;

import com.digital.DigitaBooking.models.UserRoleDTO;
import com.digital.DigitaBooking.services.UserRoleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/UserRole")
public class UserRoleController {

    @Autowired
    private UserRoleService userRoleService;

    @GetMapping(path = "/{id}")
    public UserRoleDTO getUserRole(@PathVariable Long id){
        return userRoleService.getUserRole(id);
    }
}
