package com.digital.DigitaBooking.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Data;

import java.util.List;

@Data
@Entity
@Table(name="Category")
public class Category {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id_category;

    @Column(name="name")
    private String categoryName;

    @Column(name="description")
    private String categoryDescription;

    @Column(name="image_url")
    private String categoryImageURL;

    @JsonIgnore
    @OneToMany(mappedBy="id_tour")
    private List<Tour> tours;

}
