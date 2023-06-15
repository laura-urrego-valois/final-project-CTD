package com.digital.DigitaBooking.models.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import lombok.Data;

import java.util.HashSet;
import java.util.Set;


@Data
@Entity
@Table
public class Country {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column
    @NotNull
    private String countryName;

    @Column
    private String capitalName;

    @Column
    private Double latitude;

    @Column
    private Double longitude;

    @JsonIgnore
    @OneToMany(mappedBy = "country", fetch = FetchType.LAZY)
    private Set<Tour> tours = new HashSet<>();
}
