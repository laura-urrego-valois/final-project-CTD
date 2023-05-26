package com.digital.DigitaBooking.repositories;

import com.digital.DigitaBooking.models.Tour;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ITourRepository extends JpaRepository<Tour, Long> {

}
