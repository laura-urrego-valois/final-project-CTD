package com.digital.DigitaBooking.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import lombok.Data;

@Data
@Entity
@Table(name = "User")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @NotNull
    private Long idUser;

    @Column(name = "name")
    @NotNull
    private String userName;

    @Column(name = "lastName")
    @NotNull
    private String lastName;

    @Column(name = "email")
    @NotNull
    private String email;

    @Column(name = "password")
    @NotNull
    private String password;

    @JsonIgnore
    @ManyToOne
    @JoinColumn(name = "userRole", referencedColumnName = "idUserRole")
    private UserRole userRole;


}
