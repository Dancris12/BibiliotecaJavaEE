document.addEventListener('DOMContentLoaded', fetchLibros);

async function fetchLibros() {
    try {
        const response = await fetch('/api/libros');
        if (!response.ok) {
            throw new Error('No se pudo obtener la lista de libros.');
        }
        const libros = await response.json();
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
            <td>${libro.titulo_libro}</td>
            <td>${libro.autor}</td>
            <td>${libro.cantidad}</td>
            <td>
                <button class="btn btn-warning" onclick="showUpdateModal(${libro.id}, '${libro.titulo_libro}', '${libro.autor}', ${libro.cantidad}')">Actualizar</button>
                <button class="btn btn-danger" onclick="deleteLibro(${libro.id})">Borrar</button>
            </td>
        `;
        tbody.appendChild(row);
    });
}
