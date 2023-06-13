package com.digital.DigitaBooking.repositories;

import com.digital.DigitaBooking.models.entities.Tour;
import org.springframework.cglib.core.Local;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

@Repository
public interface ITourRepository extends JpaRepository<Tour, Long> {

    List<Tour> findAllByCategoryId(Integer categoryId);

    @Query(value = "SELECT t FROM Tour t WHERE t.country.id = ?1")
    List<Tour> findAllToursByCountry(Integer id);
    // @Query Indica que se trata de una consulta personalizada escrita en JPQL (Java Persistence Query Language).
    // "SELECT t FROM tour t" especifica que se seleccionarán entidades de la clase Tour y se asigna el alias t
    // para referirse a cada objeto Tour.
    // Cuando usamos la expresión t.country.id estamos accediendo al identificador del país que está asociado
    // al objeto Tour.
    // En la consulta, el ?1 es un marcador de posición para un parámetro. Los marcadores de posición se
    // utilizan para indicar que se espera recibir un valor para ese parámetro en el momento de ejecutar la
    // consulta.

    @Query(value = "SELECT t.* FROM tour t LEFT JOIN reservation ON tour.id = reservation.id_tour WHERE ((reservation.initial_date not between ?1 and ?2)" +
            "OR (reservation.initial_date is null)) AND ((reservation.final_date NOT BETWEEN ?1 AND ?2) OR (reservation.final_date is null)) AND tour.country LIKE ?3" +
            "GROUP BY tour.id", nativeQuery = true)
    Optional<List<Tour>> findTourByDate(LocalDate initialDate, LocalDate finalDate, Integer id);
    // En esta consulta se busca tours según ciertas condiciones de fechas y país utilizando SQL nativo.
    // Se seleccionan todas las columnas de la tabla "tour" mediante la cláusula SELECT t.*.
    // Se realiza un LEFT JOIN entre las tablas "tour" y "reservation" utilizando la cláusula
    // ON tour.id = reservation.id_tour. Esto combina los datos de ambas tablas en la consulta.
    // La cláusula WHERE establece las condiciones de búsqueda:
    //--> ((reservation.initial_date not between ?1 and ?2) OR (reservation.initial_date is null)) verifica si la
    // fecha inicial de la reserva no está entre el rango de fechas especificado (initialDate y finalDate). Si
    // la fecha inicial es nula, también se considera que cumple con la condición.

}
