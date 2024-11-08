document.getElementById("LinhaDestino").addEventListener("change", function () {
    const linhaInicio = document.getElementById("LinhaInicio").value;
    const linhaDestino = document.getElementById("LinhaDestino").value;
    const resposta = document.getElementById("resposta");
    const tempoEstimado = document.getElementById("tempoEstimado");
    const totalBaldeacoes = document.getElementById("totalBaldeacoes");

    let passos = "";
    let tempo = "";
    let baldeacoes = 0;

    // Azul para Verde
    if (linhaInicio === "azul" && linhaDestino === "verde") {
        passos = "1. Pegue a Linha 1 (Azul) e vá até a estação Paraíso ou Ana Rosa.\n" +
                 "2. Faça a baldeação para a Linha 2 (Verde).\n" +
                 "3. Continue até a estação de destino.";
        tempo = "15 minutos";
        baldeacoes = 1;
    
    // Azul para Vermelha
    } else if (linhaInicio === "azul" && linhaDestino === "vermelha") {
        passos = "1. Pegue a Linha 1 (Azul) e vá até a estação Sé.\n" +
                 "2. Faça a baldeação para a Linha 3 (Vermelha).\n" +
                 "3. Continue até a estação de destino.";
        tempo = "12 minutos";
        baldeacoes = 1;

    // Azul para Amarela
    } else if (linhaInicio === "azul" && linhaDestino === "amarela") {
        passos = "1. Pegue a Linha 1 (Azul) e vá até a estação Luz.\n" +
                 "2. Faça a baldeação para a Linha 4 (Amarela).\n" +
                 "3. Continue até a estação de destino.";
        tempo = "10 minutos";
        baldeacoes = 1;

    // Verde para Azul
    } else if (linhaInicio === "verde" && linhaDestino === "azul") {
        passos = "1. Pegue a Linha 2 (Verde) e vá até a estação Paraíso ou Ana Rosa.\n" +
                 "2. Faça a baldeação para a Linha 1 (Azul).\n" +
                 "3. Continue até a estação de destino.";
        tempo = "15 minutos";
        baldeacoes = 1;

    // Verde para Vermelha
    } else if (linhaInicio === "verde" && linhaDestino === "vermelha") {
        passos = "1. Pegue a Linha 2 (Verde) e vá até a estação Consolação.\n" +
                 "2. Faça a baldeação para a Linha 3 (Vermelha) na estação Paulista.\n" +
                 "3. Continue até a estação de destino.";
        tempo = "15 minutos";
        baldeacoes = 1;

    // Verde para Amarela
    } else if (linhaInicio === "verde" && linhaDestino === "amarela") {
        passos = "1. Pegue a Linha 2 (Verde) e vá até a estação Consolação.\n" +
                 "2. Faça a baldeação para a Linha 4 (Amarela) na estação Paulista.\n" +
                 "3. Continue até a estação de destino.";
        tempo = "12 minutos";
        baldeacoes = 1;

    // Amarela para Azul
    } else if (linhaInicio === "amarela" && linhaDestino === "azul") {
        passos = "1. Pegue a Linha 4 (Amarela) e vá até a estação Luz.\n" +
                 "2. Faça a baldeação para a Linha 1 (Azul).\n" +
                 "3. Continue até a estação de destino.";
        tempo = "10 minutos";
        baldeacoes = 1;

    // Amarela para Verde
    } else if (linhaInicio === "amarela" && linhaDestino === "verde") {
        passos = "1. Pegue a Linha 4 (Amarela) e vá até a estação Paulista.\n" +
                 "2. Faça a baldeação para a Linha 2 (Verde) na estação Consolação.\n" +
                 "3. Continue até a estação de destino.";
        tempo = "12 minutos";
        baldeacoes = 1;

    // Amarela para Vermelha
    } else if (linhaInicio === "amarela" && linhaDestino === "vermelha") {
        passos = "1. Pegue a Linha 4 (Amarela) e vá até a estação República.\n" +
                 "2. Faça a baldeação para a Linha 3 (Vermelha).\n" +
                 "3. Continue até a estação de destino.";
        tempo = "8 minutos";
        baldeacoes = 1;

    // Vermelha para Azul
    } else if (linhaInicio === "vermelha" && linhaDestino === "azul") {
        passos = "1. Pegue a Linha 3 (Vermelha) e vá até a estação Sé.\n" +
                 "2. Faça a baldeação para a Linha 1 (Azul).\n" +
                 "3. Continue até a estação de destino.";
        tempo = "12 minutos";
        baldeacoes = 1;

    // Vermelha para Verde
    } else if (linhaInicio === "vermelha" && linhaDestino === "verde") {
        passos = "1. Pegue a Linha 3 (Vermelha) e vá até a estação Paulista.\n" +
                 "2. Faça a baldeação para a Linha 2 (Verde) na estação Consolação.\n" +
                 "3. Continue até a estação de destino.";
        tempo = "15 minutos";
        baldeacoes = 1;

    // Vermelha para Amarela
    } else if (linhaInicio === "vermelha" && linhaDestino === "amarela") {
        passos = "1. Pegue a Linha 3 (Vermelha) e vá até a estação República.\n" +
                 "2. Faça a baldeação para a Linha 4 (Amarela).\n" +
                 "3. Continue até a estação de destino.";
        tempo = "8 minutos";
        baldeacoes = 1;

    } else {
        passos = "Por favor, selecione uma linha de início e destino válidas.";
        tempo = "--";
        baldeacoes = 0;
    }

    resposta.value = passos;
    tempoEstimado.value = tempo;
    totalBaldeacoes.value = baldeacoes;
});
