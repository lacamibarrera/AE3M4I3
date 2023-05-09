export class TipoProveedor extends Proveedor {
    constructor(nombre, email, telefono, pais) {
      super(nombre, email, telefono);
      this.pais = pais;
      this.internacional = (pais !== 'Chile');
    }
  
    getInfoProveedor() {
      return `${super.getInfoProveedor()}, Tipo Proveedor: ${this.internacional}, País: ${this.pais}`;
    }
  }