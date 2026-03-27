function renderCarrito() {
  const contenedor = document.getElementById("contenido");

  let html = `<h2>Carrito</h2>`;

  if (carrito.length === 0) {
    html += `<p>El carrito está vacío</p>`;
  } else {
    carrito.forEach((item) => {
      html += `
        <div class="item-carrito">
          <p>${item.nombre}</p>

          <div>
            <button onclick="restarCantidad(${item.id})">-</button>
            <span>${item.cantidad}</span>
            <button onclick="sumarCantidad(${item.id})">+</button>
          </div>

          <p>$${item.precio * item.cantidad}</p>
          <button onclick="eliminarItem(${item.id})">❌</button>
        </div>
      `;
    });

    const total = carrito.reduce(
      (acc, item) => acc + item.precio * item.cantidad,
      0,
    );

    html += `<h3>Total: $${total}</h3>`;
    html += `<button onclick="vaciarCarrito()">Vaciar carrito</button>`;
  }

  contenedor.innerHTML = html;
}
