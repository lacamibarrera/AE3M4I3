export class Articulo {
    constructor(articulo, cantidadArticulo, precio) {
      this.articulo =articulo ;
      this.cantidadArticulo = cantidadArticulo;
      this.precioUnitario = precioUnitario;
    }
  
    getinfoArticulo() {
      return `Nombre: ${this.articulo}, Cantidad: ${this.cantidadArticulo}, Precio Unitario: ${this.precioUnitario}`;
    }
  }


  // prueba para consola
  const articuloTest = new Articulo( "Agujas",20 , 15990);
console.log(articuloTest.getinfoArticulo());