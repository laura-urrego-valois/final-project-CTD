package com.digital.DigitaBooking.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import lombok.Data;

@Data
@Entity
@Table(name = "Tour")
public class Tour {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @NotNull
    private Long idTour;

    @Column(name = "imageUrl", columnDefinition = "VARCHAR(1000)")
    @NotNull
    private String tourImageURL;

    @Column(name = "name")
    @NotNull
    private String tourName;

    @Column(name = "description", columnDefinition = "VARCHAR(1000)")
    @NotNull
    private String tourDescription;

    @Column(name = "classification")
    @NotNull
    private String tourClassification;

    @Column(name = "capacity")
    @NotNull
    private Integer tourCapacity;

    @Column(name = "availability")
    @NotNull
    private Boolean tourAvailability;

    @Column(name = "price")
    @NotNull
    private Double tourPrice;

    @Column(name = "score")
    @NotNull
    private Integer tourScore;

    @JsonIgnore
    @ManyToOne
    @JoinColumn(name = "category", referencedColumnName = "idCategory")
    private Category category;

}
