package com.digital.DigitaBooking.models.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import lombok.Builder;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import java.util.HashSet;
import java.util.Set;

@Setter
@Getter
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
    @ManyToMany(fetch = FetchType.LAZY, cascade = CascadeType.MERGE)
    @JoinTable(name = "tour_feature",
            joinColumns = @JoinColumn(name = "id_tour"),
            inverseJoinColumns =
            @JoinColumn(name = "id_feature")
    )
    private Set<Feature> features = new HashSet<>();

    @JsonIgnore
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "category", referencedColumnName = "id")
    private Category category;

    @JsonIgnore
    @OneToMany(mappedBy = "tour", fetch = FetchType.LAZY)
    private Set<Image> images = new HashSet<>();

    @JsonIgnore
    @ManyToOne
    @JoinColumn(name = "country", referencedColumnName = "id")
    private Country country;

    @JsonIgnore
    @OneToMany(mappedBy = "tour", fetch = FetchType.LAZY)
    private Set<Reservation> reservations = new HashSet<>();

    @JsonIgnore
    @OneToMany(mappedBy = "tour", fetch = FetchType.LAZY)
    private Set<Favorite> favorites = new HashSet<>();

    public void addFeature(Feature feature) {
        this.features.add(feature);
        feature.getTours().add(this);
    }

    public void removeFeature(long featureId) {
        Feature feature = this.features.stream().filter(t -> t.getId() == featureId).findFirst().orElse(null);
        if (feature != null) {
            this.features.remove(feature);
            feature.getTours().remove(this);
        }
    }

}
