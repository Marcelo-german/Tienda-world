function renderHeader() {
  const header = document.getElementById("header");

  header.innerHTML = `
    <header class="header">
      <h1>Tienda World T</h1>
      <p>Moda urbana premium</p>

      <nav>
        <button onclick="navegar('home')">Inicio</button>
        <button onclick="navegar('productos')">Productos</button>
        <button onclick="navegar('carrito')">Carrito</button>
      </nav>
    </header>
  `;
}
