package com.digital.DigitaBooking.models.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import java.util.HashSet;
import java.util.Set;

@Setter
@Getter
@Entity
@Table
public class Feature {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @NotNull
    private Long id;

    @Column
    @NotNull
    private String featureName;

    @JsonIgnore
    @ManyToMany(mappedBy = "features", fetch = FetchType.LAZY)
    private Set<Tour> tours = new HashSet<>();

}
