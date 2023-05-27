package com.digital.DigitaBooking.models.entitys;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import lombok.Data;

import java.util.HashSet;
import java.util.Set;

@Data
@Entity
@Table
public class UserRole {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @NotNull
    private Long id;

    @Column
    @NotNull
    private String userRole;

    @JsonIgnore
    @OneToMany(mappedBy = "userRole")
    private Set<User> users = new HashSet<>();

}
