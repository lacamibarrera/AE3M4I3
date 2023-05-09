export class Proveedor {
    constructor(nombre, email, telefono) {
      this.nombre = nombre;
      this.email = email;
      this.telefono = telefono;
    }
  
    getInfoProveedor() {
      return `Nombre Proveedor: ${this.nombre}, Email : ${this.email}, Teléfono: ${this.telefono}`;
    }
  }