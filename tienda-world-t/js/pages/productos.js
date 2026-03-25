function renderProductos() {
  const contenedor = document.getElementById("contenido");

  let html = `
    <section class="productos-header">
      <h2>Todos los productos</h2>

      <div class="filtros">
        <button onclick="filtrar('todos')">Todos</button>
        <button onclick="filtrar('zapatillas')">Zapatillas</button>
        <button onclick="filtrar('remeras')">Remeras</button>
        <button onclick="filtrar('buzos')">Buzos</button>
        <button onclick="filtrar('camperas')">Camperas</button>
        <button onclick="filtrar('pantalones')">Pantalones</button>
        <button onclick="filtrar('camisas')">Camisas</button>
      </div>
    </section>

    <section class="grid" id="grid-productos">
  `;

  for (let producto of productos) {
    html += crearCard(producto);
  }

  html += `</section>`;

  contenedor.innerHTML = html;

  AOS.init({
    once: true,
    duration: 800,
  });
}

/* 🔥 FUNCIÓN GLOBAL (IMPORTANTE) */
function filtrar(categoria) {
  const grid = document.getElementById("grid-productos");

  grid.innerHTML = "";

  let lista;

  if (categoria === "todos") {
    lista = productos;
  } else {
    lista = productos.filter((p) => p.categoria === categoria);
  }

  for (let producto of lista) {
    grid.innerHTML += crearCard(producto);
  }

  /* 🔥 botón activo */
  const botones = document.querySelectorAll(".filtros button");
  botones.forEach((btn) => btn.classList.remove("activo"));

  const botonActivo = document.querySelector(
    `.filtros button[onclick="filtrar('${categoria}')"]`,
  );

  if (botonActivo) botonActivo.classList.add("activo");
}
