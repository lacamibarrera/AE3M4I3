import { Proveedor, TipoProveedor } from './proveedor.js';

const proveedor1 = new Proveedor('Cami', 'camibarrera@gmail.com', '999999999');
console.log(proveedor1.getInfoProveedor());


const impuestoTotal = calculaImpuestoTotal(articuloInstance);
  document.body.insertAdjacentHTML('beforeend', `<p>El Impuesto de este artículo es: ${impuestoTotal}</p>`);


// el problema no establecia impuesto asi que establecimos que era el 19% (iva de Chile)
function calculaImpuestoTotal(articulo) {
  return articulo.precioUnitario * 0.19;
}
