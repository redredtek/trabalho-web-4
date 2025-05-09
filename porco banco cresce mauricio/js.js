let total = parseFloat(localStorage.getItem("total")) || 0;
let moedas = JSON.parse(localStorage.getItem("moedas")) || {
  "0.1": 0,
  "0.25": 0,
  "0.5": 0,
  "1": 0
};

atualizarTela();

function adicionar(valor) {
  total += valor;
  moedas[valor.toString()]++;
  salvar();
  atualizarTela();
}

function esvaziar() {
  total = 0;
  moedas = {"0.1": 0, "0.25": 0, "0.5": 0, "1": 0};
  localStorage.clear();
  atualizarTela();
}

function atualizarTela() {
  document.getElementById("total").textContent = total.toFixed(2);
  const lista = Object.entries(moedas)
    .map(([moeda, qtd]) => `Moedas de R$${moeda.replace('.', ',')}: ${qtd}`)
    .join("<br>");
  document.getElementById("quantidadeMoedas").innerHTML = lista;

  
  const img = document.getElementById("imagemCofre");
  const escala = 1 + total / 20;
  img.style.transform = `scale(${Math.min(escala, 400)})`;
}

function salvar() {
  localStorage.setItem("total", total.toString());
  localStorage.setItem("moedas", JSON.stringify(moedas));
}
