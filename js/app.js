function init() {
  renderApp();
}
init();

function renderApp() {
  const app = document.getElementById("app");

  app.innerHTML = `
    <div id="header"></div>
    <main id="contenido"></main>
    <div id="footer"></div>
  `;

  renderHeader();
  renderFooter();
  navegar("home");
}
