document.addEventListener('DOMContentLoaded', fetchLibros);

async function fetchLibros() {
    try {
        const response = await fetch('/api/libros');
        if (!response.ok) {
            throw new Error('No se pudo obtener la lista de libros.');
        }
        const libros = await response.json(); // Convertir la respuesta a JSON
        displayLibros(libros);
    } catch (error) {
        console.error('Error al obtener la lista de libros:', error);
    }
}

function displayLibros(libros) {
    const tbody = document.getElementById('libros-tbody');
    tbody.innerHTML = '';
    libros.forEach(libro => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${libro.id}</td>
            <td>${libro.titulo}</td>
            <td>${libro.autor}</td>
            <td>${libro.anio}</td>
            <td>${libro.genero}</td>
        `;
        tbody.appendChild(row);
    });
}