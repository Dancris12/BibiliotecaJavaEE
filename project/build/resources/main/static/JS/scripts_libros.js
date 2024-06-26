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
            <td>${libro.id_libro}</td>
            <td>${libro.titulo_libro}</td>
            <td>${libro.autor}</td>
            <td>${libro.cantidad}</td>
            <td>
                <button class="btn btn-warning" onclick="showUpdateModal(${libro.id_libro}, '${libro.titulo_libro}', '${libro.autor}', ${libro.cantidad})">Actualizar</button>
                <button class="btn btn-danger" onclick="deleteLibro(${libro.id_libro})">Borrar</button>
            </td>
        `;
        tbody.appendChild(row);
    });
}

async function searchLibro() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    try {
        const response = await fetch('/api/libros');

        if(!response.ok) {
            throw new Error('No se pudo obtener la lista de libros.');
        }
        const libros = await response.json();
        const filteredLibros = libros.filter(libro => libro.titulo_libro.toLowerCase().includes(searchTerm));
        displayLibros(filteredLibros);
    } catch (error) {
        console.error('Error al buscar los libros: ', erorr);
    }
}

function showAddModal(){
    var inputTitulo = document.getElementById('addTituloLibro');
    var inputAuto = document.getElementById('addAutor');
    var inputCantidad = document.getElementById('addCantidad');

    inputTitulo.value = '';
    inputAuto.value = '';
    inputCantidad = '0';

    document.getElementById('addModal').style.display = 'block';
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}

document.getElementById('addForm').addEventListener('submit', async function(event) {
    event.preventDefault();

    const titulo_libro = document.getElementById('addTituloLibro').value;
    const autor = document.getElementById('addAutor').value;
    const cantidad = document.getElementById('addCantidad').value;

    if (cantidad < 1) {
        alert('No se permiten números menores a 1 para la este registro.');
        return;
    }

    try {
        const response = await fetch('/api/libros', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ titulo_libro, autor, cantidad })
        });
        if (!response.ok) {
            throw new Error('No se pudo agregar el libro.');
        }
        closeModal('addModal');
        fetchLibros();
    } catch (error) {
        console.error('Error al agregar el libro:', error);
    }
});

function showUpdateModal(id_libro, titulo_libro, autor, cantidad) {
    document.getElementById("updateIdLibro").value = id_libro;
    document.getElementById("updateTituloLibro").value = titulo_libro;
    document.getElementById("updateAutor").value = autor;
    document.getElementById("updateCantidad").value = cantidad;
    document.getElementById('updateModal').style.display = 'block';
}

document.getElementById('updateForm').addEventListener('submit', async function(event) {
    event.preventDefault();

    const id_libro = document.getElementById('updateIdLibro').value;
    const titulo_libro = document.getElementById('updateTituloLibro').value;
    const autor = document.getElementById('updateAutor').value;
    const cantidad = document.getElementById('updateCantidad').value;

    try {
        const response = await fetch(`/api/libros/${id_libro}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ titulo_libro, autor, cantidad })
        });
        if (!response.ok) {
            throw new Error('No se pudo actualizar el libro.');
        }
        closeModal('updateModal');
        fetchLibros();
    } catch (error) {
        console.error('Error al actualizar el libro:', error);
    }
});

async function deleteLibro(id_libro){
    try {
        const response = await fetch(`/api/libros/${id_libro}`, {
            method: 'DELETE'
        });
        if(!response.ok){
            throw new Error('No se pudo borrar el libro.');
        }
        fetchLibros();
    } catch (error) {
        console.error('Error al borrar el libro: ', error);
    }
}
