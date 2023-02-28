<?php
    //Recupera os dados do formulario
    $nome = $_POST['Nome'];
    $telefone = $_POST['Telefone'];
    $email = $_POST['Email'];
    $mensagem = $_POST['Mensagem'];
    

    // Validação de segurança básica
    if(empty($nome) || empty($email) || empty($mensagem) || empty($telefone)) {
        die("Por favor preencher todos os campos");
    }

    //Filtra os dados para evitar ataques de injeção de código
    $nome = filter_var($nome, FILTER_SANITIZE_STRING);
    $telefone = filter_var($telefone, FILTER_SANITIZE_STRING);
    $email = filter_var($email, FILTER_SANITIZE_EMAIL);
    $mensagem = filter_var($mensagem, FILTER_SANITIZE_STRING);

    //Validando o endereço de email
    if(!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        die("Endereço Invalido");
    }

    // Corpo da mensagem
    $corpo = "Nome: $nome\n";
    $corpo .= "Telefone: $telefone\n";
    $corpo .= "Email: $email\n";
    $corpo .= "Mensagem: $mensagem\n";

    //Evnvia o E-mail
    $enviado = mail("edlujr@gmail.com", "Contato via formulário da página", $corpo);

    //Verifica se E-mail foi enviado
    if($enviado) {
        echo "E-mail enviado com sucesso";
    } else {
        echo "Erro ao enviar a e-mail";
    }
?>
