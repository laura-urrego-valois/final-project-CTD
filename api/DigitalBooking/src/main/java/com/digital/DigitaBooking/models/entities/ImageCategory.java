package com.digital.DigitaBooking.models.entities;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import lombok.Data;

@Data
@Entity
@Table
public class ImageCategory {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column
    @NotNull
    private String imageTitle;

    @Column(columnDefinition = "VARCHAR(1000)")
    @NotNull
    private String imageUrl;

    @OneToOne(mappedBy = "imageCategory", cascade = CascadeType.ALL)
    private Category category;

}
