function renderHome() {
  const contenedor = document.getElementById("contenido");

  contenedor.innerHTML = `
    <section class="promo-banner">
      <div id="promo-banner"></div>
      <div class="dots" id="dots"></div>
    </section>

    <section class="hero">
      <h2>Bienvenido a la nueva experiencia</h2>
      <p>Descubrí tu estilo con nuestra colección</p>
      <button onclick="navegar('productos')">
        Explorar tienda
      </button>
    </section>
  `;

  iniciarPromos();
}
