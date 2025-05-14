📌 Sobre o Projeto
Este repositório contém um projeto de teclado interativo, utilizando:
HTML, CSS e JavaScript

 Como Adicionar Novos Sons
Coloque o novo arquivo de áudio (.mp3 ou .wav) na pasta sounds/.
No arquivo main.js, adicione uma nova entrada no array de sons ou crie um novo botão:
javascript
Copiar
Editar
const sons = {
  "som1": "sounds/som1.mp3",
  "som2": "sounds/som2.mp3",
  // adicione aqui
};
Crie o botão correspondente no index.html ou dinamicamente com JavaScript.

1- Reprodução de Sons ao Clicar nos Botões
Cada botão no layout representa uma tecla de som (como pom, clap, tim, etc.).
Quando o usuário clica com o mouse em um desses botões, o som correspondente é reproduzido instantaneamente.
Como funciona:
O HTML define os botões com classes específicas (ex: .tecla_pom).
O JavaScript (main.js) escuta o evento click nesses elementos e executa o play() do áudio correspondente.

2- Reprodução de Sons pelo Teclado Físico (Teclas do PC)
Além dos cliques com o mouse, o projeto também permite que o som seja tocado ao pressionar teclas específicas no teclado físico, correspondentes aos botões do site.
Como funciona:
O JavaScript mapeia os botões para suas teclas correspondentes e escuta o evento keydown.
Quando o usuário pressiona uma tecla associada (por exemplo, a tecla Q para o som pom), o som é reproduzido automaticamente.

Sugestões Criativas
Você pode substituir os sons musicais por:
Efeitos engraçados (risadas, peidos, sustos)
Falas de personagens ou dublagens
Frases gravadas por você ou amigos
Sons de animais, memes, entre outros

Melhorias de Design
Tema escuro/claro com botão de alternância
– Permitir ao usuário trocar entre modos de cor e salvar a preferência.
Animações nos botões
– Adicionar efeitos visuais quando os botões forem pressionados (ex: brilho, escala, sombra).
Layout responsivo
– Adaptar o teclado para telas menores (celular/tablet), usando media queries.
Ícones ou imagens nos botões
– Substituir textos por ícones que representem o tipo de som (ex: bateria, risada, etc.).

 Melhorias com Storage
Salvar sons favoritos (localStorage)
– Permitir que o usuário marque sons favoritos e os recupere depois, mesmo ao recarregar a página.
Histórico de sons tocados
– Armazenar localmente os últimos sons tocados, exibindo uma lista para replay.
Customização de teclas
– Deixar o usuário escolher qual som será associado a cada botão, e salvar as escolhas no localStorage.
Volume individual por botão
– Permitir controle de volume por tecla e salvar os níveis personalizados.



🎤 Dica: Sites como https://freesound.org ou https://mixkit.co oferecem sons gratuitos.
📦 teclado
── 📁 sounds
── 📄 index.html
── 📄 style.css
── 📄 main.js
── 📄 README.md
🏆 Autor
👤 Arthur de Brito
📧 arthurdebritodasilvacorinho@gmail.com
🔗 GitHub

