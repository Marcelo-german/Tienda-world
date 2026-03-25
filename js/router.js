/*
========================================
ROUTER
========================================
*/

function navegar(ruta) {
  if (ruta === "home") {
    renderHome();
  }

  if (ruta === "productos") {
    renderProductos();
  }

  if (ruta === "carrito") {
    renderCarrito();
  }
}
