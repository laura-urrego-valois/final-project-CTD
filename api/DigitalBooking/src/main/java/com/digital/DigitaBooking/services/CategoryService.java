package com.digital.DigitaBooking.services;

import com.digital.DigitaBooking.models.Category;
import com.digital.DigitaBooking.models.CategoryDTO;
import com.digital.DigitaBooking.repositories.ICategoryRepository;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class CategoryService implements ICategoryService {

    @Autowired
    private ICategoryRepository categoryRepository;

    @Autowired
    ObjectMapper mapper;

    @Override
    public void saveCategory(CategoryDTO categoryDTO) {
        Category category = mapper.convertValue(categoryDTO, Category.class);
        categoryRepository.save(category);
    }

    @Override
    public CategoryDTO getCategory(Integer id) {
        Optional<Category> category = categoryRepository.findById(id);
        CategoryDTO categoryDTO = null;
        if (category.isPresent())
            categoryDTO = mapper.convertValue(category, CategoryDTO.class);

        return categoryDTO;
    }

    @Override
    public Set<CategoryDTO> getCategories() {
        List<Category> categories = categoryRepository.findAll();
        Set<CategoryDTO> categoriesDTO = new HashSet<>();
        for (Category category :
                categories) {
            categoriesDTO.add(mapper.convertValue(category, CategoryDTO.class));

        }
        return categoriesDTO;
    }

}
