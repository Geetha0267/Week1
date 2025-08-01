package com.cognizant.model;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class SpringConfig {

    @Bean
    public Country country() {
        Country country = new Country();
        country.setName("India");
        country.setCode("IN");
        return country;
    }
}
