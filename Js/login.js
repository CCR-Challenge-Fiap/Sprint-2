function Logar() {
    // Obtendo os valores dos campos
    const email = document.getElementById('iptEmail').value.trim();
    const senha = document.getElementById('iptSenha').value.trim();

    // Limpando mensagens de erro anteriores
    const campos = document.querySelectorAll('input');
    campos.forEach(campo => campo.classList.remove('erro'));

    // Validação
    let valid = true;

    // Validação do Email
    if (email === "") {
        exibirErro('iptEmail', "O email não pode estar vazio.");
        valid = false;
    } else if (!validarEmail(email)) {
        exibirErro('iptEmail', "Formato de email inválido.");
        valid = false;
    }

    // Validação da Senha
    if (senha === "") {
        exibirErro('iptSenha', "A senha não pode estar vazia.");
        valid = false;
    }

    // Simulação do login (aqui você pode incluir a lógica real)
    if (valid) {
        alert("Login realizado com sucesso!");
        // Redireciona para a página index.html
        window.location.href = "index.html";
    }
}

// Função para exibir erro e estilizar o campo incorreto
function exibirErro(campoId, mensagem) {
    const campo = document.getElementById(campoId);
    campo.classList.add('erro');
    campo.placeholder = mensagem;
}

// Função para validar o formato de email
function validarEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}
