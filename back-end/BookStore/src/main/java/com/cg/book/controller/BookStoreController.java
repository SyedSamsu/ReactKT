package com.cg.book.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cg.book.entities.Book;
import com.cg.book.repository.BookRepo;

@RestController
@RequestMapping("/v1/bookstore")
@CrossOrigin(origins = "*")
public class BookStoreController {
	
	@Autowired
	private BookRepo bookRepo;
	
	@PostMapping("/addbook")
	public ResponseEntity<String> addBook(@RequestBody Book book) {
		bookRepo.save(book);
		return new ResponseEntity<>("Added Successfully", HttpStatus.OK);
	}
	
	@GetMapping("/getbook/{bookId}")
	public ResponseEntity<Book> getBook(@PathVariable long bookId){
		Book book = bookRepo.findById(bookId).orElse(null);
		return new ResponseEntity<>(book, HttpStatus.OK);
	}

	@GetMapping("/getAllBook")
	public ResponseEntity<List<Book>> getAllBook(){
		List<Book> allBook = bookRepo.findAll();
		return new ResponseEntity<List<Book>>(allBook, HttpStatus.OK);
	}
	
	@PutMapping("/editbook")
	public ResponseEntity<Book> editBook(@RequestBody Book book){
		Book newBook = bookRepo.save(book);
		return new ResponseEntity<Book>(newBook,HttpStatus.OK);
	}

	@DeleteMapping("/deletebook/{bookId}")
	public ResponseEntity<String> deleteBook(@PathVariable long bookId){
		bookRepo.deleteById(bookId);
		return new ResponseEntity<>("Deleted Successfully", HttpStatus.OK);
	}
}
