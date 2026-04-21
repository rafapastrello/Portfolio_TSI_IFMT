<!DOCTYPE html>
<html lang="pt-BR">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dados Enviados - Rafaela Pastrello</title>
    <script src="https://cdn.tailwindcss.com"></script>
</head>

<body class="bg-gray-50 min-h-screen py-10 px-4">
    <div class="max-w-lg mx-auto">
        <div class="text-center mb-8">
            <h1 class="text-3xl font-semibold text-gray-800 mb-2">Dados Enviados com Sucesso!</h1>
            <p class="text-gray-500">Confirme suas informações abaixo</p>
        </div>

        <div class="bg-white rounded-lg shadow-sm border border-gray-100 p-6 space-y-4">
            <?php
            function formatTelefone($value)
            {
                $tel = preg_replace("/\D/", '', $value);

                if (strlen($tel) === 11) {
                    return preg_replace("/(\d{2})(\d{5})(\d{4})/", "(\$1) \$2-\$3", $tel);
                } else if (strlen($tel) === 10) {
                    return preg_replace("/(\d{2})(\d{4})(\d{4})/", "(\$1) \$2-\$3", $tel);
                }
            }

            $nome = $_POST['nome'];
            $cpf = $_POST['cpf'];
            $datanascimento = $_POST['datanascimento'];
            $sexo = $_POST['sexo'];
            $telefone = $_POST['telefone'];
            $email = $_POST['email'];

            // Remove máscara do CPF antes de formatar
            $cpfNumeros = preg_replace("/\D/", '', $cpf);
            $cpfFormatado = preg_replace("/(\d{3})(\d{3})(\d{3})(\d{2})/", "\$1.\$2.\$3-\$4", $cpfNumeros);
            
            // Remove máscara do telefone antes de formatar
            $telefoneFormatado = formatTelefone($telefone);

            $date = new DateTime($datanascimento);
            $interval = $date->diff(new DateTime(date('Y-m-d')));
            $idade = $interval->format('%Y anos');
            ?>

            <div class="flex justify-between border-b border-gray-100 pb-3">
                <span class="text-gray-500">Nome:</span>
                <span class="font-medium text-gray-800"><?= $nome ?></span>
            </div>

            <div class="flex justify-between border-b border-gray-100 pb-3">
                <span class="text-gray-500">CPF:</span>
                <span class="font-medium text-gray-800"><?= $cpfFormatado ?></span>
            </div>

            <div class="flex justify-between border-b border-gray-100 pb-3">
                <span class="text-gray-500">Data de Nascimento:</span>
                <span class="font-medium text-gray-800"><?= date('d/m/Y', strtotime($datanascimento)) ?></span>
            </div>

            <div class="flex justify-between border-b border-gray-100 pb-3">
                <span class="text-gray-500">Idade:</span>
                <span class="font-medium text-gray-800"><?= $idade ?></span>
            </div>

            <div class="flex justify-between border-b border-gray-100 pb-3">
                <span class="text-gray-500">Sexo:</span>
                <span class="font-medium text-gray-800"><?= $sexo ?></span>
            </div>

            <div class="flex justify-between border-b border-gray-100 pb-3">
                <span class="text-gray-500">Telefone:</span>
                <span class="font-medium text-gray-800"><?= $telefoneFormatado ?></span>
            </div>

            <div class="flex justify-between">
                <span class="text-gray-500">E-mail:</span>
                <span class="font-medium text-gray-800"><?= $email ?></span>
            </div>
        </div>

        <div class="text-center mt-6">
            <a href="index.html" class="inline-block bg-blue-600 text-white px-6 py-2.5 rounded-md hover:bg-blue-700 transition font-medium">Voltar ao Formulário</a>
        </div>
    </div>
</body>

</html>
