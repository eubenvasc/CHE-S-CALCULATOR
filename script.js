let volumes = [];

function calcularVolume() {
    const altura = parseFloat(document.getElementById('altura').value);
    const largura = parseFloat(document.getElementById('largura').value);
    const profundidade = parseFloat(document.getElementById('profundidade').value);
    const quantidade = parseFloat(document.getElementById('quantidade').value);

    if (!isNaN(altura) && !isNaN(largura) && !isNaN(profundidade) && !isNaN(quantidade)) {
        const volume = altura * largura * profundidade * quantidade;
        volumes.push(volume);
        document.getElementById('resultado').innerText = `Volume: ${volume.toFixed(2)} m³`;
    } else {
        alert('Por favor, preencha todos os campos com valores válidos.');
    }
}

function limparCampos() {
    document.getElementById('altura').value = '';
    document.getElementById('largura').value = '';
    document.getElementById('profundidade').value = '';
    document.getElementById('quantidade').value = '';
    document.getElementById('resultado').innerText = '';
}

function exibirValoresItens() {
    const valoresItensDiv = document.getElementById('valores-itens');
    valoresItensDiv.innerHTML = '<strong>Valores dos Itens:</strong><br>';
    
    volumes.forEach((volume, index) => {
        valoresItensDiv.innerHTML += `Item ${index + 1}: ${volume.toFixed(2)} m³<br>`;
    });

    const volumeTotal = volumes.reduce((acc, volume) => acc + volume, 0);
    valoresItensDiv.innerHTML += `<strong>Volume Total: ${volumeTotal.toFixed(2)} m³</strong>`;
}
function calcularCubagem() {
    const fatorCubagem = parseFloat(document.getElementById('fatorCubagem').value);

    if (!isNaN(fatorCubagem)) {
        exibirValoresItens();

        const volumeTotal = volumes.reduce((acc, volume) => acc + volume, 0);
        const cubagem = volumeTotal * fatorCubagem;
        document.getElementById('resultado-final').innerHTML = `<strong>Cubagem Total: ${cubagem.toFixed(2)} kg</strong>`;
    } else {
        alert('Selecione um fator de cubagem válido.');
    }
}

function adicionarItem() {
    const altura = parseFloat(document.getElementById('altura').value);
    const largura = parseFloat(document.getElementById('largura').value);
    const profundidade = parseFloat(document.getElementById('profundidade').value);
    const quantidade = parseFloat(document.getElementById('quantidade').value);

    if (!isNaN(altura) && !isNaN(largura) && !isNaN(profundidade) && !isNaN(quantidade)) {
        const volume = altura * largura * profundidade * quantidade;
        volumes.push(volume);
        limparCampos();
        exibirVolumes();
    } else {
        alert('Por favor, preencha todos os campos com valores válidos.');
    }
}

function exibirVolumes() {
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = '<strong>Volumes Adicionados:</strong><br>';
    
    volumes.forEach((volume, index) => {
        resultadoDiv.innerHTML += `Item ${index + 1}: ${volume.toFixed(2)} m³<br>`;
    });
}
// ... (código anterior) ...

function calcularVolume() {
    const altura = parseFloat(document.getElementById('altura').value);
    const largura = parseFloat(document.getElementById('largura').value);
    const profundidade = parseFloat(document.getElementById('profundidade').value);
    const quantidade = parseFloat(document.getElementById('quantidade').value);

    if (!isNaN(altura) && !isNaN(largura) && !isNaN(profundidade) && !isNaN(quantidade)) {
        // Calcular o volume do item atual
        const volumeItem = altura * largura * profundidade * quantidade;

        // Armazenar o volume do item no array volumes
        volumes.push(volumeItem);

        // Exibir os volumes dos itens e o volume total no resultadoContainer
        exibirValoresItens();

        const volumeTotal = volumes.reduce((acc, volume) => acc + volume, 0);
        const resultadoContainer = document.getElementById('resultado-container');
        resultadoContainer.innerHTML = '<strong>Valores dos Itens:</strong><br>';
        
        volumes.forEach((volume, index) => {
            resultadoContainer.innerHTML += `Item ${index + 1}: ${volume.toFixed(2)} m³<br>`;
        });

        resultadoContainer.innerHTML += `<strong>Volume Total: ${volumeTotal.toFixed(2)} m³</strong>`;
    } else {
        alert('Preencha todos os campos com valores numéricos.');
    }
}

// ... (código posterior) ...

// Adicione uma variável global para rastrear a unidade
let unidade = 'm';

function alternarUnidade() {
    // Alterna entre 'm' e 'cm'
    unidade = (unidade === 'm') ? 'cm' : 'm';

    // Atualiza o texto no botão
    const botaoUnidade = document.querySelector('.input-group button');
    botaoUnidade.textContent = `Alternar para ${unidade === 'm' ? 'cm' : 'm'}`;
}

// ... (código anterior) ...

function calcularVolume() {
    const altura = parseFloat(document.getElementById('altura').value);
    const largura = parseFloat(document.getElementById('largura').value);
    const profundidade = parseFloat(document.getElementById('profundidade').value);
    const quantidade = parseFloat(document.getElementById('quantidade').value);

    // Converte para metros ou centímetros com base na unidade selecionada
    const alturaEmMetros = (unidade === 'm') ? altura : altura / 100;
    const larguraEmMetros = (unidade === 'm') ? largura : largura / 100;
    const profundidadeEmMetros = (unidade === 'm') ? profundidade : profundidade / 100;

    if (!isNaN(altura) && !isNaN(largura) && !isNaN(profundidade) && !isNaN(quantidade)) {
        // Calcular o volume do item atual
        const volumeItem = alturaEmMetros * larguraEmMetros * profundidadeEmMetros * quantidade;

        // Armazenar o volume do item no array volumes
        volumes.push(volumeItem);

        // Exibir os volumes dos itens e o volume total no resultadoContainer
        exibirValoresItens();

        const volumeTotal = volumes.reduce((acc, volume) => acc + volume, 0);
        const resultadoContainer = document.getElementById('resultado-container');
        resultadoContainer.innerHTML = '<strong>Valores dos Itens:</strong><br>';
        
        volumes.forEach((volume, index) => {
            resultadoContainer.innerHTML += `Item ${index + 1}: ${volume.toFixed(2)} m³<br>`;
        });

        resultadoContainer.innerHTML += `<strong>Volume Total: ${volumeTotal.toFixed(2)} m³</strong>`;
    } else {
        alert('Preencha todos os campos com valores numéricos.');
    }
}