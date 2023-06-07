package com.digital.DigitaBooking.services;

import com.digital.DigitaBooking.models.dtos.CategoryDTO;

import java.util.Set;

public interface ICategoryService {

    void saveCategory(CategoryDTO categoryDTO);

    CategoryDTO getCategory(Integer id);

    void updateCategory(Integer id, CategoryDTO categoryDTO);

    void deleteCategory(Integer id);

    Set<CategoryDTO> getCategories();

}

