package com.cognizant.springlearnapp;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class SpringLearnAppApplication {

    private static final Logger LOGGER =
            LoggerFactory.getLogger(SpringLearnAppApplication.class);

    public static void main(String[] args) {

        LOGGER.info("START");

        SpringApplication.run(SpringLearnAppApplication.class, args);

        LOGGER.info("END");
    }
}