package com.digital.DigitaBooking.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import lombok.Data;

import java.util.HashSet;
import java.util.Set;

@Data
@Entity
@Table(name = "User_role")
public class UserRole {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @NotNull
    private Long idUserRole;

    @Column(name = "userRole")
    @NotNull
    private String userRole;

    @JsonIgnore
    @OneToMany(mappedBy = "userRole")
    private Set<User> users = new HashSet<>();

}
