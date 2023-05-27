package com.digital.DigitaBooking.services;

import com.digital.DigitaBooking.models.CategoryDTO;

import java.util.Set;

public interface ICategoryService {

    void saveCategory(CategoryDTO categoryDTO);

    CategoryDTO getCategory(Integer id);

    Set<CategoryDTO> getCategories();

}

