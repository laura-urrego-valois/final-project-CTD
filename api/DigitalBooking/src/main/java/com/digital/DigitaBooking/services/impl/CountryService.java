package com.digital.DigitaBooking.services.impl;

import com.digital.DigitaBooking.models.dtos.CountryDTO;
import com.digital.DigitaBooking.models.entities.Country;
import com.digital.DigitaBooking.repositories.ICountryRepository;
import com.digital.DigitaBooking.services.ICountryService;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.List;
import java.util.Optional;
import java.util.Set;

@Service
public class CountryService implements ICountryService {

    @Autowired
    private ICountryRepository countryRepository;

    @Autowired
    ObjectMapper mapper;

    @Override
    public void saveCountry(CountryDTO countryDTO) {

        Country country = mapper.convertValue(countryDTO, Country.class);
        countryRepository.save(country);
    }

    @Override
    public CountryDTO getCountry(Integer id) {
        Optional<Country> country = countryRepository.findById(id);
        CountryDTO countryDTO = null;
        if (country.isPresent())
            countryDTO = mapper.convertValue(country, CountryDTO.class);

        return countryDTO;
    }

    @Override
    public void updateCountry(Integer id, CountryDTO countryDTO) {
        Optional<Country> optionalCountry = countryRepository.findById(id).map(country -> {
            country.setCountryName(countryDTO.getCountryName());
            return countryRepository.save(country);
        });
    }

    @Override
    public void deleteCountry(Integer id) {

        countryRepository.deleteById(id);
    }

    @Override
    public Set<CountryDTO> getCountries() {
        List<Country> countries = countryRepository.findAll();
        Set<CountryDTO> countriesDTO = new HashSet<>();
        for (Country country :
                countries) {
            countriesDTO.add(mapper.convertValue(country, CountryDTO.class));

        }
        return countriesDTO;
    }
}