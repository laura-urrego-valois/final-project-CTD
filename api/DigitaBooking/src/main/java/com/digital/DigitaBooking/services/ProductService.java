package com.digital.DigitaBooking.services;

import com.digital.DigitaBooking.models.Product;
import com.digital.DigitaBooking.repositories.IProductRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.yaml.snakeyaml.events.Event;

import java.util.ArrayList;
import java.util.Optional;

@Service
public class ProductService {
    @Autowired
    IProductRepository productRepository;

    public ArrayList<Product> getProducts(){
        return (ArrayList<Product>) productRepository.findAll();
    }

    public Product saveProduct(Product product){
        return productRepository.save(product);
    }

    public Optional<Product> getById(Long id){
        return productRepository.findById(id);
    }


}
