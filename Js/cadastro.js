function Cadastrar() {
    // Obtendo os valores dos campos
    const nome = document.getElementById('iptNome').value.trim();
    const email = document.getElementById('iptEmail').value.trim();
    const senha = document.getElementById('iptSenha').value.trim();
    const confirmarSenha = document.getElementById('iptConfirmar').value.trim();
    const checkbox = document.getElementById('iptCheckbox').checked;

    // Limpando mensagens de erro anteriores
    const campos = document.querySelectorAll('input');
    campos.forEach(campo => campo.classList.remove('erro'));

    // Validação
    let valid = true;

    // Validação do Nome
    if (nome === "") {
        exibirErro('iptNome', "O nome não pode estar vazio.");
        valid = false;
    }

    // Validação do Email
    if (email === "") {
        exibirErro('iptEmail', "O email não pode estar vazio.");
        valid = false;
    } else if (!validarEmail(email)) {
        exibirErro('iptEmail', "Formato de email inválido.");
        valid = false;
    }

    // Validação da Senha
    if (senha.length < 6) {
        exibirErro('iptSenha', "A senha deve ter pelo menos 6 caracteres.");
        valid = false;
    }

    // Validação da Confirmação de Senha
    if (confirmarSenha !== senha) {
        exibirErro('iptConfirmar', "As senhas não coincidem.");
        valid = false;
    }

    // Checkbox de Informações por WhatsApp (não obrigatório, mas podemos exibir uma mensagem)
    if (!checkbox) {
        alert("Você não aceitou receber informações por WhatsApp.");
    }

    // Se todas as validações passarem
    if (valid) {
        alert("Cadastro realizado com sucesso!");
        // Aqui você pode enviar os dados para o servidor ou realizar outras ações.
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
