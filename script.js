const libros = [
    {
      titulo: "Cien años de soledad",
      autor: "Gabriel García Márquez",
      precio: 19.99,
      categoria: "Literatura"
    },
    {
      titulo: "El principito",
      autor: "Antoine de Saint-Exupéry",
      precio: 12.50,
      categoria: "Infantil"
    },
    {
      titulo: "1984",
      autor: "George Orwell",
      precio: 15.75,
      categoria: "Ciencia ficción"
    },
    {
      titulo: "Orgullo y prejuicio",
      autor: "Jane Austen",
      precio: 14.25,
      categoria: "Romance"
    },
    {
      titulo: "El código Da Vinci",
      autor: "Dan Brown",
      precio: 18.95,
      categoria: "Misterio"
    },
    {
      titulo: "Harry Potter y la piedra filosofal",
      autor: "J.K. Rowling",
      precio: 22.00,
      categoria: "Fantasía"
    },
    {
      titulo: "El señor de los anillos",
      autor: "J.R.R. Tolkien",
      precio: 25.50,
      categoria: "Fantasía"
    },
    {
      titulo: "Crónica de una muerte anunciada",
      autor: "Gabriel García Márquez",
      precio: 16.80,
      categoria: "Literatura"
    },
    {
      titulo: "El arte de la guerra",
      autor: "Sun Tzu",
      precio: 10.99,
      categoria: "Autoayuda"
    },
    {
      titulo: "Los juegos del hambre",
      autor: "Suzanne Collins",
      precio: 17.25,
      categoria: "Ciencia ficción"
    },
    {
      titulo: "El psicoanalista",
      autor: "John Katzenbach",
      precio: 20.40,
      categoria: "Thriller"
    },
    {
      titulo: "La sombra del viento",
      autor: "Carlos Ruiz Zafón",
      precio: 21.30,
      categoria: "Misterio"
    },
    {
      titulo: "El alquimista",
      autor: "Paulo Coelho",
      precio: 13.75,
      categoria: "Autoayuda"
    },
    {
      titulo: "It",
      autor: "Stephen King",
      precio: 23.60,
      categoria: "Terror"
    },
    {
      titulo: "El nombre del viento",
      autor: "Patrick Rothfuss",
      precio: 19.95,
      categoria: "Fantasía"
    }
  ];

  let padre = document.querySelector(".container");

/* 1.- Mostrar todos los libros en la pantalla.

  libros.forEach(libro => {
    let div = document.createElement("div");
    div.classList.add("libro");
    div.innerHTML = `<h2>${libro.titulo}</h2>
    <p>Autor: ${libro.autor}</p>
    <p>Precio: $${libro.precio}</p>
    <p>Categoría: ${libro.categoria}</p>`;
    padre.appendChild(div);
  });

  2.- Mostrar solo los libros de la categoría Fantasía en la pantalla.

 const LibrosFantasia = libros.filter(libro => libro.categoria === "Fantasía");
 LibrosFantasia.forEach(libro => {
    let div = document.createElement("div");
    div.classList.add("libro");
    div.innerHTML = `<h2>${libro.titulo}</h2>
    <p>Autor: ${libro.autor}</p>
    <p>Precio: $${libro.precio}</p>
    <p>Categoría: ${libro.categoria}</p>`;
    padre.appendChild(div);
  }); */

 /*  3.- Mapear solo titulos y precio de todos los libros y mostrarlos en la pantalla. */

 /*  libros.map(libro => {
    let div = document.createElement("div");
    div.classList.add("libro");
    div.innerHTML = `<h2>${libro.titulo}</h2>
    <p>Precio: $${libro.precio}</p>`;
    padre.appendChild(div);
  }); */

/* 4.- Mostrar el precio promedio de todos los libros. */

/* let promedio = libros.reduce((acumulador, libro) => acumulador + libro.precio, 0) / libros.length;
let div = document.createElement("div");
div.classList.add("libro");
div.innerHTML = `<h2>Precio promedio: $${promedio}</h2>`;
padre.appendChild(div); */