const promos = [
  {
    imagen: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b",
    texto: "Nueva colección urbana",
  },
  {
    imagen: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d",
    texto: "Estilo que marca tendencia",
  },
  {
    imagen: "https://images.unsplash.com/photo-1519741497674-611481863552",
    texto: "Descuentos exclusivos",
  },
];

function iniciarPromos() {
  const banner = document.getElementById("promo-banner");
  const dotsContainer = document.getElementById("dots");

  let index = 0;

  function renderSlide() {
    banner.innerHTML = `
      <div class="slide active">
        <img src="${promos[index].imagen}">
        <div class="overlay">
          <div class="promo-text">
            <h2>${promos[index].texto}</h2>
          </div>
        </div>
      </div>
    `;
  }

  function renderDots() {
    dotsContainer.innerHTML = "";

    promos.forEach((_, i) => {
      dotsContainer.innerHTML += `
        <span class="dot ${i === index ? "active" : ""}" onclick="irSlide(${i})"></span>
      `;
    });
  }

  window.irSlide = function (i) {
    index = i;
    renderSlide();
    renderDots();
  };

  function autoSlide() {
    index = (index + 1) % promos.length;
    renderSlide();
    renderDots();
  }

  renderSlide();
  renderDots();

  setInterval(autoSlide, 4000);
}
