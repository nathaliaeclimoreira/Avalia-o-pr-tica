// --- SISTEMA DE ACESSIBILIDADE DE TELA ---

function alterarFonte(direcao) {
    const html = document.documentElement;
    const tamanhoAtual = parseFloat(window.getComputedStyle(html).fontSize);
    const novoTamanho = tamanhoAtual + direcao;
    
    if (novoTamanho >= 16 && novoTamanho <= 40) {
        html.style.fontSize = novoTamanho + 'px';
    }
}

function alternarContraste() {
    document.body.classList.toggle('modo-alto-contraste');
}

// --- INSTRUÇÕES INTERATIVAS DO WHATSAPP ---

function mostrarAjudaWhatsapp(tipo) {
    const caixa = document.getElementById('caixa-explicacao-wa');
    const titulo = document.getElementById('titulo-ajuda-wa');
    const texto = document.getElementById('texto-ajuda-wa');
    
    caixa.style.display = "block";

    if (tipo === 'mensagem') {
        titulo.innerText = "💬 Como enviar Mensagem Escrita:";
        texto.innerText = "1º Entre na conversa da pessoa que você quer conversar.\n\n2º Toque uma vez no espaço em branco na parte de baixo da tela, onde está escrito 'Mensagem'.\n\n3º O teclado de letras aparecerá. Digite a sua mensagem pausadamente.\n\n4º Ao terminar de escrever, aperte o botão redondo verde que tem uma setinha branca dentro para enviar.";
    } 
    else if (tipo === 'audio') {
        titulo.innerText = "🎙️ Como enviar Áudio Falado:";
        texto.innerText = "1º Encontre o botão verde redondo com a figura de um Microfone, no canto direito de baixo.\n\n2º Aperte este microfone com o dedo e mantenha pressionado sem soltar enquanto fala o seu recado.\n\n3º Só tire o seu dedo da tela quando terminar de falar tudo. O áudio será enviado sozinho instantaneamente.";
    } 
    else if (tipo === 'foto') {
        titulo.innerText = "📸 Como tirar e enviar uma Foto:";
        texto.innerText = "1º Na barra onde você escreve as mensagens, toque no desenho de uma Câmera fotográfica.\n\n2º Segure o celular firme e mire na direção do que deseja fotografar.\n\n3º Toque no botão redondo branco grande localizado no centro da parte de baixo.\n\n4º Se você gostar do resultado da imagem, basta tocar no botão verde com a setinha para mandar.";
    }
}

function fecharAjudaWhatsapp() {
    document.getElementById('caixa-explicacao-wa').style.display = "none";
}

// --- SISTEMA DE ALARMES E LISTAS ---

function adicionarRemedio() {
    const nome = document.getElementById('nome-remedio');
    const hora = document.getElementById('hora-remedio');
    const lista = document.getElementById('lista-remedios');

    if (nome.value.trim() === '' || hora.value === '') {
        alert('Por favor, digite o nome do remédio e defina um horário válido.');
        return;
    }

    const li = document.createElement('li');
    li.innerHTML = `<span>⏰ Horário: ${hora.value} - ${nome.value}</span> <button class="btn-remover" onclick="this.parentElement.remove()">Apagar</button>`;
    lista.appendChild(li);

    nome.value = '';
    hora.value = '';
}

function adicionarItemCompra() {
    const item = document.getElementById('item-compra');
    const lista = document.getElementById('lista-compras');

    if (item.value.trim() === '') {
        alert('Por favor, digite o nome do item de mercado.');
        return;
    }

    const li = document.createElement('li');
    li.innerHTML = `<span>🛒 ${item.value}</span> <button class="btn-remover" onclick="this.parentElement.remove()">Apagar</button>`;
    lista.appendChild(li);

    item.value = '';
}
