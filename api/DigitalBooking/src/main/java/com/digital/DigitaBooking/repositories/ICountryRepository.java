package com.digital.DigitaBooking.repositories;

import com.digital.DigitaBooking.models.entities.Country;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ICountryRepository extends JpaRepository<Country, Integer> {
}
