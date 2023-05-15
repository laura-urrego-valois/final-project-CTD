package com.digital.DigitaBooking.models;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "Product")
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column
    private String productName;
    @Column
    private  String productDescription;
    @Column
    private String productImageURL;
    @Column
    private Double productQuality;
    @Column
    private Double productPrice;
    @Column
    private String productCategory;
    @Column
    private Integer productCapacity;
    @Column
    private Boolean productAvailable;


}
