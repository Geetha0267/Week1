package com.library.repository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service

public class BookService {
	@Autowired
    private BookRepository bookRepository;

    public void displayBooks() {
        System.out.println("📖 BookService: Calling repository...");
        bookRepository.getBookDetails();
    }

}
