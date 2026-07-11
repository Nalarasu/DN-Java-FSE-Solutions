package com.cognizant.springcorecountryapp;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

@SpringBootApplication
public class SpringCoreCountryAppApplication {

    private static final Logger LOGGER =
            LoggerFactory.getLogger(SpringCoreCountryAppApplication.class);

    public static void main(String[] args) {

        LOGGER.info("START");

        SpringApplication.run(
                SpringCoreCountryAppApplication.class,
                args);

        displayCountry();

        LOGGER.info("END");
    }

    private static void displayCountry() {

        ApplicationContext context =
                new ClassPathXmlApplicationContext("country.xml");

        Country country =
                context.getBean("country", Country.class);

        LOGGER.debug("Country : {}", country);
    }
}