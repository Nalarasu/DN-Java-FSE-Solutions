package com.cognizant.countrycoderestservice.service;

import java.util.Arrays;
import java.util.List;

import org.springframework.stereotype.Service;

import com.cognizant.countrycoderestservice.Country;

@Service
public class CountryService {

    private List<Country> countryList = Arrays.asList(
            new Country("IN", "India"),
            new Country("US", "United States"),
            new Country("DE", "Germany"),
            new Country("JP", "Japan"));

    public Country getCountry(String code) {

        for (Country country : countryList) {
            if (country.getCode().equalsIgnoreCase(code)) {
                return country;
            }
        }

        return null;
    }
}