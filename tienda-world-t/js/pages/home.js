function renderHome() {
  const contenedor = document.getElementById("contenido");

  contenedor.innerHTML = `
    
    <!-- SLIDER -->
    <section class="promo-banner">
      <div id="promo-banner"></div>
      <div class="dots" id="dots"></div>
    </section>

    <!-- HERO -->
    <section class="hero">
      <h2>Bienvenido a la nueva experiencia</h2>
      <p>Descubrí tu estilo con nuestra colección</p>
      <button onclick="navegar('productos')">Explorar tienda</button>
    </section>
  `;

  iniciarPromos();
}

/* DATA PROMOS */
const promos = [
  {
    dia: "Lunes",
    texto: "30% OFF en efectivo 💵",
    imagen:
      "https://images.unsplash.com/photo-1520975916090-3105956dac38?auto=format&fit=crop&w=1600&q=80",
  },
  {
    dia: "Martes y Miércoles",
    texto: "20% OFF con banco",
    imagen:
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=1600&q=80",
  },
  {
    dia: "Jueves",
    texto: "Descuentos especiales 🏦",
    imagen:
      "https://images.unsplash.com/photo-1516826957135-700dedea698c?auto=format&fit=crop&w=1600&q=80",
  },
  {
    dia: "Fin de semana",
    texto: "40% OFF 📱",
    imagen:
      "https://images.unsplash.com/photo-1520975954732-35dd22299614?auto=format&fit=crop&w=1600&q=80",
  },
];

/* ESTADO */
let indexPromo = 0;
let intervaloPromo = null;

/* INICIAR */
function iniciarPromos() {
  if (intervaloPromo) clearInterval(intervaloPromo);

  mostrarPromo();

  intervaloPromo = setInterval(() => {
    siguientePromo();
  }, 4000);
}

/* RENDER */
function mostrarPromo() {
  const contenedor = document.getElementById("promo-banner");

  contenedor.innerHTML = promos
    .map(
      (promo, index) => `
    <div class="slide ${index === indexPromo ? "active" : ""}">
      <img src="${promo.imagen}">
      <div class="overlay">
        <div class="promo-text">
          <h2>${promo.dia}</h2>
          <p>${promo.texto}</p>
        </div>
      </div>
    </div>
  `,
    )
    .join("");

  renderDots();
}

/* DOTS */
function renderDots() {
  const contenedor = document.getElementById("dots");

  contenedor.innerHTML = promos
    .map(
      (_, index) => `
    <span 
      class="dot ${index === indexPromo ? "active" : ""}" 
      onclick="irAPromo(${index})">
    </span>
  `,
    )
    .join("");
}

function irAPromo(index) {
  indexPromo = index;
  mostrarPromo();
}

/* CONTROL */
function siguientePromo() {
  indexPromo++;
  if (indexPromo >= promos.length) indexPromo = 0;
  mostrarPromo();
}
