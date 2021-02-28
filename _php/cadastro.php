<?php

    $return = [];

    //Testa se existem dados de formulário
    if ((isset($_GET["nome"])) &&
    (($_GET["nome"]) <> "")) {

        //Arquivo lista de contatos
        $url = "lista_contatos.json";
        $lista_json = null;
        $lista = [];

        //Testa se existe arquivo com lista de contatos
        if (file_exists($url)) {

            //Busca registros do arquivo JSON
            $lista_json = file_get_contents($url);
            $lista = json_decode($lista_json, true);
        }
        
        //Busca dados do formulário
        $nome = $_GET["nome"];
        $email = $_GET["email"];
        $telefone = $_GET["telefone"];
        $tipo = $_GET["tipo"];
        $observacao = $_GET["observacao"];

        //Cria array com dados do formulário
        $contato = [
        "nome" => $nome,
        "email" => $email,
        "telefone" => $telefone,
        "tipo" => $tipo,
        "observacao" => $observacao ];

        $lista[] = $contato;

        //Transforma o array em JSON
        //JSON_UNESCAPED_UNICODE --> permitir acentos
        //PHP_EOL --> indica fim de uma linha entre um registro e outro
        $lista_json_nova = json_encode($lista,JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT) . PHP_EOL;

        //Grava contato em arquivo JSON
        //Se o arquivo não existe, é criado. Se já existe, adiciona registro no final do arquivo.
        file_put_contents($url, $lista_json_nova);

        $return["sucesso"] = true;
        $return["mensagem"] = "Novo contato adicionado com sucesso.";
    } else {
        $return["sucesso"] = false;
        $return["mensagem"] = "Contato não adicionado.";
    }

    //header('Cache-Control: no-cache, must-revalidate');
    //header('Content-Type: application/json');
    echo json_encode($return,JSON_UNESCAPED_UNICODE);
?>
