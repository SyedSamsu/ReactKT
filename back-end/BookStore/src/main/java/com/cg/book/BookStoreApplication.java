package com.cg.book;

import javax.annotation.PostConstruct;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.cg.book.entities.Book;
import com.cg.book.repository.BookRepo;

import io.swagger.v3.oas.annotations.OpenAPIDefinition;

@SpringBootApplication
@OpenAPIDefinition
public class BookStoreApplication {
	
	@Autowired
	private BookRepo bookRepo;

	public static void main(String[] args) {
		SpringApplication.run(BookStoreApplication.class, args);
	}
	
	@PostConstruct
	protected void init() {
		System.out.println("Storing Some Data in db");
		Book book1 = new Book((long)11,"demo book 1","This is for demo",1);
		Book book2 = new Book((long)12,"demo book 2","This is for demo",2);
		Book book3 = new Book((long)13,"demo book 3","This is for demo",3);
		
		bookRepo.save(book1);
		bookRepo.save(book2);
		bookRepo.save(book3);
		System.out.println("Stored Successfully");
	}
}
