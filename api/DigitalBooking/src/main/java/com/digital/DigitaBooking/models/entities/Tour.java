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
public class Tour {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
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
    @ManyToOne
    @JoinColumn(name = "category", referencedColumnName = "id")
    private Category category;

    @JsonIgnore
    @ManyToMany
    @JoinTable(name = "tour_feature",
            joinColumns = @JoinColumn(name = "id_tour"),
            inverseJoinColumns = @JoinColumn(name = "id_feature"))
    private Set<Feature> features = new HashSet<>();

    @JsonIgnore
    @OneToMany(mappedBy = "tour")
    private Set<Image> images = new HashSet<>();


}
