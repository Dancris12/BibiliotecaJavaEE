package com.biblioteca.project.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.PositiveOrZero;
import lombok.Data;

@Data
@Entity
@Table(name = "libro")
public class Libro {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id_libro;

    @NotBlank
    @Pattern(regexp = "^[\\p{L}0-9\\s]+$", message = "El título del libro contiene caracteres no permitidos")
    //Solo acepta Letras, digitos y espacios
    private String titulo_libro;

    @NotBlank
    @Pattern(regexp = "^[\\p{L}\\s]+$", message = "El nombre del autor contiene caracteres no permitidos")
    //Solo acepta Letras, digitos y espacios
    private String autor;

    @PositiveOrZero(message = "La cantidad debe ser un número positivo o cero")
    private Integer cantidad;
}