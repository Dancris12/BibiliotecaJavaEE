package com.biblioteca.project.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.biblioteca.project.model.Libro;

public interface LibroRepository extends JpaRepository<Libro, Long> {
}
