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
        const volumeTotal = volumes.reduce((acc, volume) => acc + volume, 0);
        const cubagem = volumeTotal * fatorCubagem;
        document.getElementById('resultado').innerText = `Cubagem Total: ${cubagem.toFixed(2)} kg`;
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