# ProyectoFinaljavaEE


//Se accede a la base de datos biblioteca
USE biblioteca;

//Se crea la tabla libros
CREATE TABLE IF NOT EXISTS libros (
    id INT AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(255) NOT NULL,
    autor VARCHAR(255) NOT NULL,
    anio INT,
    genero VARCHAR(100)
);

//Se inserta registro de prueba
INSERT INTO libros (titulo,autor,anio,genero) values('Don quijote de la mancha','Miguel de cervantes',2006,'cuentos');


echo "# ProyectoFinaljavaEE" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M gh_pages
git remote add origin https://github.com/Dancris12/BibiliotecaJavaEE.git
git push -u origin gh_pages
