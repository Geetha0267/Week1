package com.library.repository;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.FileSystemXmlApplicationContext;

public class MainApp {
    public static void main(String[] args) {
        // Load Spring context from full path (works on Mac)
        ApplicationContext context = new FileSystemXmlApplicationContext(
            "/Users/apple/eclipse-workspace/LibraryManagement/src/main/resources/applicationContext.xml"
        );

        // Get BookService bean
        BookService bookService = (BookService) context.getBean("bookService");

        // Call method
        bookService.displayBooks();
    }
}
