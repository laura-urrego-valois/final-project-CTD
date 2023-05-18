package com.digital.DigitaBooking.repositories;

import com.digital.DigitaBooking.models.Category;
import org.springframework.data.jpa.repository.JpaRepository;


public interface ICategoryRepository extends JpaRepository<Category,Integer> {
}
