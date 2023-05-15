package com.digital.DigitaBooking.repositories;

import com.digital.DigitaBooking.models.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IProductRepository extends JpaRepository<Product,Long> {


}
