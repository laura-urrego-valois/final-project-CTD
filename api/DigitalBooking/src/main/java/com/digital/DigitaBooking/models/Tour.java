package com.digital.DigitaBooking.models;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "tour")
public class Tour {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id_tour;

    @Column(name="imageurl")
    private String tourImageURL;

    @Column(name="name")
    private String tourName;

    @Column(name="description")
    private  String tourDescription;

    @Column(name="classification")
    private String tourClassification;

    @Column(name="capacity")
    private Integer tourCapacity;

    @Column(name="availability")
    private Boolean tourAvailability;

    @Column(name="price")
    private Double tourPrice;

    @Column(name="score")
    private Integer tourScore;

    @ManyToOne
    @JoinColumn(name="id_category")
    private Category tourCategory;

}
