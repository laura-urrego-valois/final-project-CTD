package com.digital.DigitaBooking.controllers;

import com.digital.DigitaBooking.models.Product;
import com.digital.DigitaBooking.services.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.Optional;

@RestController
@RequestMapping("/product")
public class ProductController {

    @Autowired
    private ProductService productService;

    @GetMapping
    public ArrayList<Product> getProducts(){
        return this.productService.getProducts();
    }

    @PostMapping
    public Product saveProduct(@RequestBody Product product){
        return  this.productService.saveProduct(product);
    }

    @GetMapping(path = "/{id}")
    public Optional<Product> getProductById(@PathVariable Long id){
        return this.productService.getById(id);
    }

}
