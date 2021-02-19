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
    $contato_json = json_encode($contato);

    //Cria arquivo JSON
    $lista_contatos = fopen("lista_contatos.txt", "w") or die ("Incapaz de abrir arquivo.");
    fwrite($lista_contatos,$contato_json);
    fclose($lista_contatos);

?>
