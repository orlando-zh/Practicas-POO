class Producto{
    constructor(nombre, precio, cantidad){
        this.nombre=nombre
        this.precio=precio
        this.cantidad= cantidad
    }

    get Nombre(){
        return this.nombre
    }
    set Nombre(nombre){
        return this.nombre=nombre;
    }    

    get Precio(){
        return this.nombre
    }
    set Precio(precio){
        return this.precio=precio;
    }  

    get Cantidad(){
        return this.cantidad
    }
    set Cantidad(cantidad){
        return this.cantidad=cantidad;
    }  
}

class Electronico extends Producto{
    constructor(nombre, precio, cantidad, tipo){
        super(nombre, precio, cantidad)
        this.tipo=tipo
    }
    get Tipo(){
        return this.tipo
    }
    set Tipo(tipo){
        return this.tipo=tipo;
    }  
}
const classelectro =new Electronico('laptop', 'smartphone', 'accesorio', 'tv')
let tableNombre= document.getElementById("productoNombre1")