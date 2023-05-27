package com.digital.DigitaBooking.repositories;

import com.digital.DigitaBooking.models.entitys.UserRole;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IUserRoleRepository extends JpaRepository<UserRole, Long> {
}
