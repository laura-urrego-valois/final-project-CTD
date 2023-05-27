package com.digital.DigitaBooking.models.entitys;

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

    @Column
    @NotNull
    private String userName;

    @Column
    @NotNull
    private String lastName;

    @Column
    @NotNull
    private String email;

    @Column
    @NotNull
    private String password;

    @JsonIgnore
    @ManyToOne
    @JoinColumn(referencedColumnName = "idUserRole")
    private UserRole userRole;

}
