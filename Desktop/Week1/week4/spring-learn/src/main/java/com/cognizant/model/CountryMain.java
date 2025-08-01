package com.cognizant.model;

import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;

public class CountryMain {
    public static void main(String[] args) {
        ApplicationContext context = new AnnotationConfigApplicationContext(SpringConfig.class);
        Country country = context.getBean(Country.class);
        System.out.println("Country: " + country.getName() + ", Code: " + country.getCode());
    }
}
