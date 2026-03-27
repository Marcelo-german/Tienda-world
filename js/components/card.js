function crearCard(producto) {
  return `
    <div class="card" data-aos="fade-up">

      <div class="card-img">
        <img src="${producto.imagen}" alt="${producto.nombre}">
      </div>

      <div class="card-body">
        <h3>${producto.nombre}</h3>

        <p class="precio">
          $${producto.precio.toLocaleString()}
        </p>

        <button onclick="agregarAlCarrito(${producto.id})">
          Agregar al carrito
        </button>
      </div>

    </div>
  `;
}
