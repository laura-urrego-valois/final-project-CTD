package com.digital.DigitaBooking.repositories;

import com.digital.DigitaBooking.models.entities.Tour;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ITourRepository extends JpaRepository<Tour, Long> {

    List<Tour> findAllByCategoryId(Integer categoryId);
}
