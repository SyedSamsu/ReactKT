package com.cg.book.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cg.book.entities.Book;

public interface BookRepo extends JpaRepository<Book, Long> {

}
