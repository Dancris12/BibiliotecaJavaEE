package com.biblioteca.project.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.biblioteca.project.model.Libro;
import com.biblioteca.project.repository.LibroRepository;

@RestController
@RequestMapping("/api/libros")
@CrossOrigin(origins = "*")
public class LibroController {

    @Autowired
    private LibroRepository libroRepository;

    @GetMapping
    public List<Libro> getAllLibros() {
        return libroRepository.findAll();
    }

    @PostMapping
    public Libro createLibro(@RequestBody Libro libro) {
        return libroRepository.save(libro);
    }

    @GetMapping("/{id}")
    public Libro getLibroById(@PathVariable Integer id) {
        return libroRepository.findById(id).orElseThrow();
    }

    @PutMapping("/{id}")
    public Libro updateLibro(@PathVariable Integer id, @RequestBody Libro libroDetails) {
        Libro libro = libroRepository.findById(id).orElseThrow();
        libro.setTitulo_libro(libroDetails.getTitulo_libro());
        libro.setAutor(libroDetails.getAutor());
        libro.setCantidad(libroDetails.getCantidad());
        return libroRepository.save(libro);
    }

    @DeleteMapping("/{id}")
    public void deleteLibro(@PathVariable Integer id) {
        Libro libro = libroRepository.findById(id).orElseThrow();
        libroRepository.delete(libro);
    }

}