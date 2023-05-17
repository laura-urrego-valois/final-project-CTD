package com.digital.DigitaBooking.models;

import jakarta.persistence.*;
import lombok.Data;

import java.util.List;

@Data
@Entity
@Table(name="category")
public class Category {
    @Id
    @Column(name="id_category")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name="name")
    private String categoryName;

    @Column(name="description")
    private String categoryDescription;

    @Column(name="image_url")
    private String categoryImageURL;

    @OneToMany(mappedBy="id")
    private List<Tour> tours;

}
