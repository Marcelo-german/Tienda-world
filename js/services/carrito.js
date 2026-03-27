let carrito = [];

function guardarCarrito() {
  localStorage.setItem("carrito", JSON.stringify(carrito));
}

function cargarCarrito() {
  const data = localStorage.getItem("carrito");
  if (data) carrito = JSON.parse(data);
}

function agregarAlCarrito(id) {
  const producto = productos.find((p) => p.id === id);
  if (!producto) return;

  const existe = carrito.find((item) => item.id === id);

  if (existe) {
    existe.cantidad++;
  } else {
    carrito.push({ ...producto, cantidad: 1 });
  }

  guardarCarrito();
}

function sumarCantidad(id) {
  const item = carrito.find((el) => el.id === id);
  if (!item) return;

  item.cantidad++;
  guardarCarrito();
  renderCarrito();
}

function restarCantidad(id) {
  const item = carrito.find((el) => el.id === id);
  if (!item) return;

  if (item.cantidad > 1) {
    item.cantidad--;
  } else {
    carrito = carrito.filter((el) => el.id !== id);
  }

  guardarCarrito();
  renderCarrito();
}

function eliminarItem(id) {
  carrito = carrito.filter((el) => el.id !== id);
  guardarCarrito();
  renderCarrito();
}

function vaciarCarrito() {
  carrito = [];
  guardarCarrito();
  renderCarrito();
}

cargarCarrito();
