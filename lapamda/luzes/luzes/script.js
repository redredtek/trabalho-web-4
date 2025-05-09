const lampada = document.getElementById('lampada');
const botao = document.getElementById('botao');
const contador = document.getElementById('contador');
const body = document.body;
let ligada = false;
let vezesAcesa = 0;

botao.addEventListener('click', () => {
    ligada = !ligada;

    // Atualiza a imagem e o texto do botão
    lampada.src = ligada ? 'ligada.png' : 'desligada.png';
    botao.textContent = ligada ? 'Desligar' : 'Ligar';

    // Incrementa o contador apenas quando a luz é ligada
    if (ligada) {
        vezesAcesa++;
        contador.textContent = `A luz foi acesa ${vezesAcesa} vezes.`;
    }

    // Alterna a classe do body para mudar o fundo
    body.classList.toggle('luz-ligada', ligada);
});