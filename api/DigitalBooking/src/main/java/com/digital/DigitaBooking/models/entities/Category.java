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
public class Category {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column
    @NotNull
    private String categoryName;

    @Column(columnDefinition = "VARCHAR(1000)")
    @NotNull
    private String categoryDescription;

    @OneToOne
    @JoinColumn(name="id_image_category", referencedColumnName = "id")
    private ImageCategory imageCategory;


    @JsonIgnore
    @OneToMany(mappedBy = "category", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    private Set<Tour> tours = new HashSet<>();

}
