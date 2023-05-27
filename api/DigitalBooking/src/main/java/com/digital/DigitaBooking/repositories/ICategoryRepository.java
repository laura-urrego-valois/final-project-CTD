package com.digital.DigitaBooking.repositories;

import com.digital.DigitaBooking.models.entitys.Category;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ICategoryRepository extends JpaRepository<Category, Integer> {
}
