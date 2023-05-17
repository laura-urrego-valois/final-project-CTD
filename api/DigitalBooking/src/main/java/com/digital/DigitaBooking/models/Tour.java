package com.digital.DigitaBooking.models;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "tour")
public class Tour {
    @Id
    @Column(name="id_tour")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

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
    @JoinColumn(name="id")
    private Category tourCategory;

}
