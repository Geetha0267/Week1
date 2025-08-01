package com.cognizant.spring_learn.controller;

import com.cognizant.model.Country;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.io.IOException;


import java.util.List;

@RestController
public class CountryController {

    @RequestMapping("/country")
    public Country getCountryIndia() throws IOException {
        ApplicationContext context = 
            new ClassPathXmlApplicationContext("country.xml");
        Country country = (Country) context.getBean("in");
        return country;
    }
}



