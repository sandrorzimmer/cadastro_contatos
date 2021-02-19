<?php
    //Testa se existem dados de formulário
    if ((isset($_GET["nome"])) &&
    (($_GET["nome"]) <> "")) {
        
        //Busca dados do formulário
        $nome = $_GET["nome"];
        $email = $_GET["email"];
        $telefone = $_GET["telefone"];
        $tipo_contato = $_GET["tipo_contato"];
        $observacao = $_GET["observacao"];
    }

    //Cria array com dados do formulário
    $contato = array (
        "nome" => $nome,
        "email" => $email,
        "telefone" => $telefone,
        "tipo_contato" => $tipo_contato,
        "observacao" => $observacao );

    //Transforma o array em JSON
    //JSON_UNESCAPED_UNICODE --> permitir acentos
    //PHP_EOL --> indica fim de uma linha entre um registro e outro
    $contato_json = json_encode($contato,JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT) . PHP_EOL;

    //Grava contato em arquivo JSON
    //Se o arquivo não existe, é criado. Se já existe, adiciona registro no final do arquivo.
    file_put_contents('lista_contatos.json', $contato_json, FILE_APPEND);
?>
