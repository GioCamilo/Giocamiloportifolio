<?php

if($_SERVER['REQUEST_METHOD'] == 'POST') { 

    //pegar as id's no html orcamentos
    $nome = htmlspecialchars($_POST['nome']);
    $email = htmlspecialchars($_POST['email']);
    $telefone = htmlspecialchars($_POST['telefone']);
    $mensagem = htmlspecialchars($_POST['mensagem']);

    //configurar o email 

    $to = "giocamilodev@gmail.com";
    $subject = "Nova Mensagem do formulário de contato";


    //construir o corpo do email 
    $corpo_email = "Nome: ". $nome . "\n";
    $corpo_email .= "Email: " . $email . "\n";
    $corpo_email .= "Telefone: " . $telefone . "\n";
    $corpo_email .= "Mensagem: " . $mensagem . "\n";


    $headers = "From: " . $email . "\r\n";

    //Tente enviar o Email 
    if (mail($to, $subject, $corpo_email, $headers)) {
        //Email enviado com sucesso
        echo json_encode(['status' => 'success', 'message' => 'Mensagem enviada com sucesso!']);
    } else {
        //Falha ao enviar o email 
        echo json_encode(['status' => 'error', 'message' => 'Erro ao enviar a mensagem. Tente novamente mais tarde.']);
    }
}

?>