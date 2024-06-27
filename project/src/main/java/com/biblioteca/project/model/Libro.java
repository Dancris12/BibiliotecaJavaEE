package com.biblioteca.project.model;

import java.io.Serializable;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.persistence.UniqueConstraint;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.PositiveOrZero;
import jakarta.validation.constraints.Size;
import lombok.Data;

@Data
@Entity
@Table(name = "libro", uniqueConstraints = @UniqueConstraint(columnNames = {"titulo_libro"}))
public class Libro implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id_libro;

    @NotBlank(message = "El título del libro es obligatorio")
    @Size(max = 250, message = "El título del libro no puede exceder los 250 caracteres")
    // Solo acepta Letras, dígitos, espacios y comas
    @Pattern(regexp = "^[a-zA-Z0-9\\s,]+$", message = "El título del libro solo puede contener letras, dígitos y espacios")
    private String titulo_libro;

    @NotBlank(message = "El nombre del autor es obligatorio")
    @Size(max = 250, message = "El nombre del autor no puede exceder los 250 caracteres")
    // Solo acepta Letras, dígitos, espacios y comas
    @Pattern(regexp = "^[a-zA-Z0-9\\s,]+$", message = "El nombre del autor solo puede contener letras, dígitos, espacios")
    private String autor;

    @PositiveOrZero(message = "La cantidad debe ser un número positivo o cero")
    private Integer cantidad;
}
