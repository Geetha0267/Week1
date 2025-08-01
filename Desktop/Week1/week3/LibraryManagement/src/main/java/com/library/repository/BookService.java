package com.library.repository;

public class BookService {
	private BookRepository bookRepository;

    // Setter for Spring to inject dependency
    public void setBookRepository(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    public void displayBooks() {
        System.out.println("📖 BookService: Calling repository...");
        bookRepository.getBookDetails();
    }
}



