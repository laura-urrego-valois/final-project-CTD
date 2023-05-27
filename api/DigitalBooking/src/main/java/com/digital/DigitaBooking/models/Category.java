package com.digital.DigitaBooking.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import lombok.Data;

import java.util.HashSet;
import java.util.Set;

@Data
@Entity
@Table(name = "Category")
public class Category {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @NotNull
    private Integer idCategory;

    @Column
    @NotNull
    private String categoryName;

    @Column(columnDefinition = "VARCHAR(1000)")
    @NotNull
    private String categoryDescription;

    @Column(columnDefinition = "VARCHAR(1000)")
    @NotNull
    private String categoryImageURL;

    @JsonIgnore
    @OneToMany(mappedBy = "category")
    private Set<Tour> tours = new HashSet<>();

}
