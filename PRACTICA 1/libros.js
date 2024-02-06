class Libro {
    constructor(titulo, autor) {
        this.titulo = titulo;
        this.autor = autor;
        this.disponible = true;
    }

    prestar() {
        if (this.disponible) {
            this.disponible = false;
            return true;
        } else {
            return false;
        }
    }

    devolver() {
        if (!this.disponible) {
            this.disponible = true;
            return true;
        } else {
            return false;
        }
    }
}

class Socio {
    constructor(nombre, identificacion) {
        this.nombre = nombre;
        this.identificacion = identificacion;
        this.librosPrestados = [];
    }

    prestarLibro(libro) {
        if (libro.prestar()) {
            this.librosPrestados.push(libro);
            return true;
        } else {
            return false;
        }
    }

    devolverLibro(libro) {
        if (libro.devolver()) {
            const index = this.librosPrestados.indexOf(libro);
            if (index !== -1) {
                this.librosPrestados.splice(index, 1);
            }
            return true;
        } else {
            return false;
        }
    }

    mostrarLibrosPrestados() {
        if (this.librosPrestados.length > 0) {
            console.log(`Libros prestados por ${this.nombre} ${this.identificacion}:`);
            this.librosPrestados.forEach((libro) => {
                console.log(`- ${libro.titulo} (${libro.autor})`);
            });
        } else {
            console.log(`${this.nombre} no tiene libros prestados.`);
        }
    }
}

// Crear libros
const libro1 = new Libro('Cien años de soledad', 'Gabriel García Márquez');
const libro2 = new Libro('El señor de los anillos', 'J.R.R. Tolkien');

// Crear socios
const socio1 = new Socio('Juan Pérez', '123456');
const socio2 = new Socio('María Gómez', '789012');

// Prestar un libro
socio1.prestarLibro(libro1);

// Mostrar libros prestados por socio1
socio1.mostrarLibrosPrestados();