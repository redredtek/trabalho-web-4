const teclas = document.querySelectorAll(".tecla");

function tocarNota(nota) {
  const audio = new Audio(`sons/${nota}.mp3`);
  audio.play();
}

function aplicarEfeito(tecla) {
  tecla.classList.add("pressionada");
  setTimeout(() => tecla.classList.remove("pressionada"), 150);
}

// Clique com o mouse
teclas.forEach(tecla => {
  tecla.addEventListener("click", () => {
    const nota = tecla.dataset.nota;
    tocarNota(nota);
    aplicarEfeito(tecla);
  });
});

// Teclado físico
document.addEventListener("keydown", (event) => {
  const teclaPressionada = event.key.toUpperCase();

  teclas.forEach(tecla => {
    if (tecla.dataset.tecla === teclaPressionada) {
      const nota = tecla.dataset.nota;
      tocarNota(nota);
      aplicarEfeito(tecla);
    }
  });
});
const mapaTeclas = {
  A: "do",
  S: "re",
  D: "mi",
  F: "fa",
  G: "sol",
  H: "la",
  J: "si"
};

function tocarNota(nota) {
  const audio = new Audio(`sons/${nota}.wav`);
  audio.play();
}

function aplicarEfeito(tecla) {
  tecla.classList.add("pressionada");
  setTimeout(() => tecla.classList.remove("pressionada"), 150);
}


document.querySelectorAll(".tecla").forEach(tecla => {
  tecla.addEventListener("click", () => {
    const nota = tecla.dataset.nota;
    tocarNota(nota);
    aplicarEfeito(tecla);
  });
});

document.addEventListener("keydown", e => {
  const tecla = e.key.toUpperCase();
  const nota = mapaTeclas[tecla];
  if (nota) {
    tocarNota(nota);
    const botao = document.querySelector(`.tecla[data-nota="${nota}"]`);
    if (botao) aplicarEfeito(botao);
  }
});


const sequenciaParabens = [
  "do", "do", "re", "do", "fa", "mi",
  "do", "do", "re", "do", "sol", "fa"
];

document.getElementById("musicaBtn").addEventListener("click", () => {
  let tempo = 0;
  sequenciaParabens.forEach((nota, i) => {
    setTimeout(() => {
      tocarNota(nota);
      const botao = document.querySelector(`.tecla[data-nota="${nota}"]`);
      if (botao) aplicarEfeito(botao);
    }, tempo);
    tempo += 500; 
  });
});
const botaoTema = document.getElementById("toggleTheme");

botaoTema.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");
  botaoTema.textContent = document.body.classList.contains("light-mode")
    ? "🌞 Tema Escuro"
    : "🌙 Tema Claro";
});
