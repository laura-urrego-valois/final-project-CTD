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

    @Column(columnDefinition = "VARCHAR(1000)")
    @NotNull
    private String tourImageURL;

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
    @JoinColumn(name = "category", referencedColumnName = "idCategory")
    private Category category;

}
