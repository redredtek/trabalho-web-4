# 💰 Cofrinho Digital – Simulador de Economia

Projeto desenvolvido durante o curso de Programação Web I.

Treino de habilidades com manipulação da **DOM**, criação de **eventos**, uso de **variáveis** para controle de estado e **armazenamento local com localStorage**.

---

## ✅ Funcionalidades
- [x] Adicionar moedas de R$0,10, R$0,25, R$0,50 e R$1,00
- [x] Mostrar o total acumulado com formatação monetária
- [x] Esvaziar o cofre com um clique
- [x] Mostrar a quantidade de moedas inseridas por tipo
- [x] Salvar dados no `localStorage` (permanece após recarregar a página)
- [x] Crescimento visual do cofre conforme valor acumulado

---

## ⚙️ Lógica do Código

1. Cada clique em um botão chama a função `adicionar(valor)` com o valor da moeda.  
2. A função:
   - Soma o valor ao total  
   - Atualiza o contador de moedas específicas  
   - Salva tudo no `localStorage`  
   - Atualiza a tela com `toFixed(2)` para mostrar duas casas decimais  
3. O botão "Esvaziar Cofre" zera tudo e limpa o armazenamento local.  
4. A imagem do cofre aumenta de tamanho proporcionalmente ao valor economizado.

---

## 🚀 Como usar
1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/cofrinho-digital.git
