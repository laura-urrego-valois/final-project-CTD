package com.digital.DigitaBooking.controllers;

import com.digital.DigitaBooking.models.Category;
import com.digital.DigitaBooking.services.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.Optional;

@RestController
@RequestMapping("/category")
public class CategoryController {
    @Autowired
    private CategoryService categoryService;

    @GetMapping
    public ArrayList<Category> getCategory(){
        return this.categoryService.getCategory();
    }

    @PostMapping
    public Category saveCategory(@RequestBody Category category){
        return  this.categoryService.saveCategory(category);
    }

    @GetMapping(path = "/{id}")
    public Optional<Category> getCategoryById(@PathVariable Integer id){
        return this.categoryService.getById(id);
    }
}
