package com.digital.DigitaBooking.services;

import com.digital.DigitaBooking.models.Category;
import com.digital.DigitaBooking.repositories.ICategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Optional;

@Service
public class CategoryService {

    @Autowired
    ICategoryRepository categoryRepository;

    public ArrayList<Category> getCategory(){
        return (ArrayList<Category>) categoryRepository.findAll();
    }

    public Category saveCategory(Category category){
        return categoryRepository.save(category);
    }

    public Optional<Category> getById(Integer id){
        return categoryRepository.findById(id);
    }
}
