// --- CONTROLE DE ACESSIBILIDADE DE TELA --- 

// Função para aumentar e diminuir o tamanho geral dos textos do site
function alterarFonte(direcao) {
const elementoHtml = document.documentElement;
// Pega o tamanho atual da fonte da página em pixels
const tamanhoAtual = parseFloat(window.getComputedStyle(elementoHtml).fontSize); 

// Define limites de segurança para não quebrar a tela
const novoTamanho = tamanhoAtual + direcao;
if (novoTamanho >= 16 && novoTamanho <= 30) {
elementoHtml.style.fontSize = novoTamanho + 'px';
}
} 

// Função para ativar/desativar modo de contraste escuro
function alternarContraste() {
document.body.classList.toggle('modo-alto-contraste');
} 

// --- FUNCIONALIDADES DO DIA A DIA --- 

// 1. Função: Adicionar Lembrete de Remédio
function adicionarRemedio() {
const inputNome = document.getElementById('nome-remedio');
const inputHora = document.getElementById('hora-remedio');
const lista = document.getElementById('lista-remedios'); 

if (inputNome.value.trim() === '' || inputHora.value === '') {
alert('Por favor, digite o nome do remédio e o horário corretamente.');
return;
}

// Criar o item da lista de forma visualmente limpa
const li = document.createElement('li');
li.innerHTML = `

`;

lista.appendChild(li);

// Limpar os campos para a próxima digitação
inputNome.value = '';
inputHora.value = '';

} 

// 2. Função: Adicionar Item na Lista de Compras
function adicionarItemCompra() {
const inputItem = document.getElementById('item-compra');
const lista = document.getElementById('lista-compras'); 

if (inputItem.value.trim() === '') {
alert('Por favor, digite o nome do produto.');
return;
}

const li = document.createElement('li');
li.innerHTML = `

`;

lista.appendChild(li);
inputItem.value = ''; // Limpa o campo

} 

// 3. Função auxiliar para apagar itens das listas
function removerItem(botao) {
const itemLista = botao.parentElement;
itemLista.remove();
}