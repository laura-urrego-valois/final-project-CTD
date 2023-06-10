package com.digital.DigitaBooking.models.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import lombok.Builder;
import lombok.Data;

import java.util.HashSet;
import java.util.Set;

@Data
@Entity
@Table
public class Tour {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @NotNull
    private Long id;

    @Column
    @NotNull
    private String tourName;

    @Column(columnDefinition = "VARCHAR(1000)")
    @NotNull
    private String tourDescription;

    @Column
    @NotNull
    private String tourClassification;

    @Column
    @NotNull
    private Integer tourCapacity;

    @Column
    @NotNull
    private Boolean tourAvailability;

    @Column
    @NotNull
    private Double tourPrice;

    @Column
    @NotNull
    private Integer tourScore;

    @JsonIgnore
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "category", referencedColumnName = "id")
    private Category category;

    @JsonIgnore
    @ManyToMany(fetch = FetchType.LAZY, cascade = CascadeType.MERGE)
    @JoinTable(name = "tour_feature",
            joinColumns = @JoinColumn(name = "id_tour"),
            inverseJoinColumns = @JoinColumn(name = "id_feature"))
    private Set<Feature> features = new HashSet<>();

    @JsonIgnore
    @OneToMany(mappedBy = "tour", fetch = FetchType.LAZY)
    private Set<Image> images = new HashSet<>();

    @JsonIgnore
    @ManyToOne
    @JoinColumn(name = "country", referencedColumnName = "id")
    private Country country;

    @JsonIgnore
    @OneToMany(mappedBy = "tour", fetch = FetchType.LAZY)
    private Set<Reservation> reservations = new HashSet<>();

    @JsonIgnore
    @OneToMany(mappedBy = "tour", fetch = FetchType.LAZY)
    private Set<Favorite> favorites = new HashSet<>();

}
