package com.digital.DigitaBooking.services;


import com.digital.DigitaBooking.models.dtos.CountryDTO;

import java.util.Set;

public interface ICountryService {

    void saveCountry(CountryDTO countryDTO);

    CountryDTO getCountry(Integer id);

    void updateCountry(Integer id, CountryDTO countryDTO);

    void deleteCountry(Integer id);

    Set<CountryDTO> getCountries();
}
