/*
========================================
HEADER
========================================
*/

function renderHeader() {
  const header = document.getElementById("header");

  header.innerHTML = `
    <header>
      <h1>Tienda World T</h1>
      <nav>
        <button onclick="navegar('home')">Inicio</button>
        <button onclick="navegar('productos')">Productos</button>
        <button onclick="navegar('carrito')">Carrito</button>
      </nav>
    </header>
  `;
}
