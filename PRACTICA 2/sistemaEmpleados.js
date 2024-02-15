class Empleado {
    constructor(id, nombre, fechaIngreso, salario) {
      this.id = id;
      this.nombre = nombre;
      this.fechaIngreso = fechaIngreso;
      this.salario = salario;
    }
  
    calcularTiempoServicio() {
      const fechaActual = new Date();
      const fechaYear = fechaActual.getFullYear();
      const fechaSplit = this.fechaIngreso.split("-");
      return fechaYear - fechaSplit[2];
    }
  
    getSalario() {
      return this.salario;
    }
  
    setNombre(nombre) {
      this.nombre = nombre;
    }
  
    setSalario(salario) {
      this.salario = salario;
    }
  
    calcularBonificacion() {
      const tiempoServicio = this.calcularTiempoServicio();
      let bonificacion = 0;
      switch (tiempoServicio) {
        case 1:
          bonificacion = this.salario * 0.05;
          break;
        case 2:
          bonificacion = this.salario * 0.1;
          break;
        case 3:
          bonificacion = this.salario * 0.15;
          break;
        default:
          bonificacion = this.salario * 0.2;
      }
      console.log(`La bonificación para ${this.nombre} es de: $${bonificacion}`);
    }
  }
  
  class Departamento {
    constructor(nombre) {
      this.nombre = nombre;
      this.empleados = [];
      this.gerente = null;
    }
  
    agregarEmpleado(empleado) {
      if (this.empleados.indexOf(empleado) === -1) {
        this.empleados.push(empleado);
        console.log(`Empleado ${empleado.nombre} agregado correctamente al departamento ${this.nombre}`);
      } else {
        console.log(`El empleado ${empleado.nombre} ya existe en el departamento ${this.nombre}`);
      }
    }
  
    eliminarEmpleado(empleado) {
      const indiceEmpleado = this.empleados.indexOf(empleado);
      if (indiceEmpleado !== -1) {
        this.empleados.splice(indiceEmpleado, 1);
        console.log(`Empleado ${empleado.nombre} eliminado correctamente del departamento ${this.nombre}`);
      } else {
        console.log(`El empleado ${empleado.nombre} no existe en el departamento ${this.nombre}`);
      }
    }
  
    calcularGastoTotalSalarios() {
      let gastoTotal = 0;
      this.empleados.forEach((empleado) => {
        gastoTotal += empleado.salario;
      });
      console.log(`Gasto total en salarios del departamento ${this.nombre}: $${gastoTotal}`);
    }
  
    asignarGerente(gerente) {
      this.gerente = gerente;
      console.log(`Gerente ${gerente.nombre} asignado correctamente al departamento ${this.nombre}`);
    }
  }
  

  const empleado1 = new Empleado(1, "Juan Pérez", "01-01-2020", 1000);
  const empleado2 = new Empleado(2, "María García", "01-01-2021", 1200);
  const empleado3 = new Empleado(3, "Pedro López", "01-01-2022", 1500);
  
  const departamento1 = new Departamento("Ventas");
  const departamento2 = new Departamento("Recursos Humanos");
  const departamento3 = new Departamento("Marketing");
  
  
  // Empleado 1
  console.log(`Tiempo de servicio de ${empleado1.nombre}: ${empleado1.calcularTiempoServicio()} años`);
  empleado1.setNombre("Ana Fernández");
  console.log(`Nuevo nombre de empleado 1: ${empleado1.nombre}`);
  empleado1.setSalario(1300);
  console.log(`Nuevo salario de empleado 1: $${empleado1.getSalario()}`);
  empleado1.calcularBonificacion();
  

  console.log(`Tiempo de servicio de ${empleado2.nombre}: ${empleado2.calcularTiempoServicio()} años`);
  empleado2.calcularBonificacion();
  
  console.log(`Tiempo de servicio de ${empleado3.nombre}: ${empleado3.calcularTiempoServicio()} años`);
