package com.digital.DigitaBooking.controllers;

import com.digital.DigitaBooking.exceptions.BadRequestException;
import com.digital.DigitaBooking.models.dtos.CountryDTO;
import com.digital.DigitaBooking.services.impl.CountryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/countries")
public class CountryController {

    @Autowired
    private CountryService countryService;

    @PostMapping
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<?> saveCountry(@RequestBody CountryDTO countryDTO) {
        countryService.saveCountry(countryDTO);
        return ResponseEntity.ok(HttpStatus.OK);
    }


    @GetMapping(path = "/{id}")
    public ResponseEntity<CountryDTO> getCountry(@PathVariable Integer id) throws BadRequestException {
        CountryDTO countryDTO = countryService.getCountry(id);

        if (countryDTO == null) {
            return ResponseEntity.badRequest().body(null);
        }

        return ResponseEntity.ok(countryDTO);
    }

    @GetMapping
    public Collection<CountryDTO> getCountries() {

        return countryService.getCountries();
    }

    @PutMapping(path = "/{id}")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<?> updateCountry(@PathVariable Integer id, @RequestBody CountryDTO countryDTO) {
        countryService.updateCountry(id, countryDTO);
        return ResponseEntity.ok(HttpStatus.OK);
    }

    @DeleteMapping(path = "/{id}")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<?> deleteCountry(@PathVariable Integer id) {
        countryService.deleteCountry(id);
        return ResponseEntity.ok(HttpStatus.OK);
    }
}
