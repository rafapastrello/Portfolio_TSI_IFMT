// Função de validação de CPF
function validarCPF(cpf) {
    cpf = cpf.replace(/[^\d]+/g, '');
    if (cpf.length !== 11 || /^(\d)\1+$/.test(cpf)) return false;

    let soma = 0;
    for (let i = 0; i < 9; i++) soma += parseInt(cpf.charAt(i)) * (10 - i);
    let resto = 11 - (soma % 11);
    if (resto === 10 || resto === 11) resto = 0;
    if (resto !== parseInt(cpf.charAt(9))) return false;

    soma = 0;
    for (let i = 0; i < 10; i++) soma += parseInt(cpf.charAt(i)) * (11 - i);
    resto = 11 - (soma % 11);
    if (resto === 10 || resto === 11) resto = 0;
    return resto === parseInt(cpf.charAt(10));
}

// Função para aplicar máscara de CPF (000.000.000-00)
function mascaraCPF(input) {
    let value = input.value.replace(/\D/g, ''); // Remove tudo que não é número
    value = value.substring(0, 11); // Limita a 11 dígitos
    input.value = value.replace(/(\d{3})(\d)/, '$1.$2')
                       .replace(/(\d{3})(\d)/, '$1.$2')
                       .replace(/(\d{3})(\d{1,2})$/, '$1-$2');
}

// Função para aplicar máscara de telefone ((00) 90000-0000)
function mascaraTelefone(input) {
    let value = input.value.replace(/\D/g, ''); // Remove tudo que não é número
    value = value.substring(0, 11); // Limita a 11 dígitos
    if (value.length >= 2) {
        value = value.replace(/^(\d{2})(\d)/, '($1) $2');
    }
    if (value.length >= 7) {
        value = value.replace(/(\d{4})(\d{1,4})$/, '$1-$2');
    }
    input.value = value;
}

// Função para mostrar erro visual em um campo
function mostrarErro(campoId, mensagem) {
    const input = document.getElementById(campoId);
    const erro = document.getElementById('erro-' + campoId);
    
    if (input) {
        input.classList.remove('border-gray-200', 'focus:ring-blue-500');
        input.classList.add('border-red-500', 'focus:ring-red-500');
    }
    
    if (erro) {
        erro.textContent = mensagem;
        erro.classList.remove('hidden');
    }
}

// Função para limpar erro visual de um campo
function limparErro(campoId) {
    const input = document.getElementById(campoId);
    const erro = document.getElementById('erro-' + campoId);
    
    if (input) {
        input.classList.remove('border-red-500', 'focus:ring-red-500');
        input.classList.add('border-gray-200', 'focus:ring-blue-500');
    }
    
    if (erro) {
        erro.textContent = '';
        erro.classList.add('hidden');
    }
}

// Função para limpar todos os erros
function limparTodosErros() {
    const campos = ['nome', 'email', 'cpf', 'datanascimento', 'telefone'];
    campos.forEach(campo => {
        limparErro(campo);
    });
    
    // Limpar erro de sexo (que não tem input específico)
    const erroSexo = document.getElementById('erro-sexo');
    if (erroSexo) {
        erroSexo.classList.add('hidden');
    }
}

// Função principal de validação dos campos do formulário
function validaCampos() {
    // Limpar todos os erros anteriores
    limparTodosErros();
    
    let temErro = false;
    
    // Obter os valores dos campos
    let nome = document.getElementById('nome').value.trim();
    let email = document.getElementById('email').value.trim();
    let cpf = document.getElementById('cpf').value.trim();
    let datanascimento = document.getElementById('datanascimento').value;
    let telefone = document.getElementById('telefone').value.trim();
    
    // Validar Nome: deve ter tamanho maior que 2 e menor ou igual a 100 caracteres
    if (nome.length <= 2 || nome.length > 100) {
        mostrarErro('nome', 'Nome deve ter mais de 2 caracteres e no máximo 100 caracteres!');
        temErro = true;
    }
    
    // Validar E-mail: deve ter tamanho maior que 10 e menor ou igual a 100 caracteres
    if (email.length <= 10 || email.length > 100) {
        mostrarErro('email', 'E-mail deve ter mais de 10 caracteres e no máximo 100 caracteres!');
        temErro = true;
    }
    
    // Validar CPF: deve ter exatamente 11 dígitos e passar na validação de dígito verificador
    let cpfNumeros = cpf.replace(/\D/g, ''); // Remove máscara
    if (cpfNumeros.length !== 11) {
        mostrarErro('cpf', 'CPF deve ter 11 dígitos!');
        temErro = true;
    } else if (!validarCPF(cpfNumeros)) {
        mostrarErro('cpf', 'CPF inválido!');
        temErro = true;
    }
    
    // Validar Data de Nascimento: não pode ser no futuro
    if (datanascimento) {
        const dataNasc = new Date(datanascimento);
        const dataAtual = new Date();
        
        // Verificar se a data é no futuro
        if (dataNasc > dataAtual) {
            mostrarErro('datanascimento', 'Data de nascimento não pode ser no futuro!');
            temErro = true;
        }
        
        // Verificar idade mínima razoável (0 anos) e máxima (150 anos)
        const anoNasc = dataNasc.getFullYear();
        const anoAtual = dataAtual.getFullYear();
        if (anoNasc < 1900 || anoNasc > anoAtual) {
            mostrarErro('datanascimento', 'Data de nascimento inválida!');
            temErro = true;
        }
    }
    
    // Validar Sexo: ao menos um dos radiobuttons deve estar selecionado
    let sexoSelecionado = document.querySelector('input[name="sexo"]:checked');
    if (!sexoSelecionado) {
        const erroSexo = document.getElementById('erro-sexo');
        if (erroSexo) {
            erroSexo.textContent = 'Selecione uma opção de sexo!';
            erroSexo.classList.remove('hidden');
        }
        temErro = true;
    }
    
    // Validar Telefone: deve conter exatamente 11 dígitos
    let telefoneNumeros = telefone.replace(/\D/g, ''); // Remove máscara
    if (telefoneNumeros.length !== 11) {
        mostrarErro('telefone', 'Telefone deve ter 11 dígitos!');
        temErro = true;
    }
    
    // Se houver erros, impedir o envio
    if (temErro) {
        return false;
    }
    
    // Se todas as validações passaram
    return true;
}

// Limpar erros quando o usuário começar a digitar
document.addEventListener('DOMContentLoaded', function() {
    const campos = ['nome', 'email', 'cpf', 'datanascimento', 'telefone'];
    
    campos.forEach(campoId => {
        const input = document.getElementById(campoId);
        if (input) {
            input.addEventListener('input', function() {
                limparErro(campoId);
            });
        }
    });
    
    // Limpar erro de sexo quando um radio for selecionado
    const radiosSexo = document.querySelectorAll('input[name="sexo"]');
    radiosSexo.forEach(radio => {
        radio.addEventListener('change', function() {
            const erroSexo = document.getElementById('erro-sexo');
            if (erroSexo) {
                erroSexo.classList.add('hidden');
            }
        });
    });
});