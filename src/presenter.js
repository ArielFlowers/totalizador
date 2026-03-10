import { calcularPrecioFinalCompleto } from "./precio.js";

document.getElementById("calcular").addEventListener("click", function () {

  const resultadoElemento = document.getElementById("resultado");

  const cantidad = parseInt(document.getElementById("cantidad").value);
  const precio = parseFloat(document.getElementById("precio").value);
  const estado = document.getElementById("estado").value;
  const categoria = document.getElementById("categoria").value;
  const peso = parseFloat(document.getElementById("peso").value) || 0;
  const tipoCliente = document.getElementById("tipoCliente").value;

  if (isNaN(cantidad) || cantidad <= 0) {
    resultadoElemento.innerText = "Por favor, ingrese una cantidad válida.";
    return;
  }

  if (isNaN(precio) || precio <= 0) {
    resultadoElemento.innerText = "Por favor, ingrese un precio válido.";
    return;
  }

  if (!estado) {
    resultadoElemento.innerText = "Por favor, seleccione un estado.";
    return;
  }

  const resultado = calcularPrecioFinalCompleto(
    cantidad,
    precio,
    estado,
    categoria,
    peso,
    tipoCliente
  );

  if (resultado.error) {
    resultadoElemento.innerText = resultado.error;
    return;
  }

  resultadoElemento.innerHTML = `
  Precio Neto: $${resultado.precioNeto.toFixed(2)} <br>
  Descuento: $${resultado.descuento.toFixed(2)} <br>
  Impuesto por estado: $${resultado.impuestoEstado.toFixed(2)} <br>
  Costo de envío: $${resultado.costoEnvio.toFixed(2)} <br>
  <strong>Precio total: $${resultado.precioTotal.toFixed(2)}</strong>
  `;

});