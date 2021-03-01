function enviaRegistroContato () {

    //Busca os dados digitados no formulário
    let nome = $("#nome").val();
    let email = $("#email").val();
    let telefone = $("#telefone").val();
    let tipo = $("#tipo").val();
    let observacao = $("#observacao").val();

    //Envia os dados para _php/cadastro.php
    $.ajax({
        type:"GET",
        data:{  nome: nome,
                email: email,
                telefone: telefone,
                tipo: tipo,
                observacao: observacao,
            },
        url:"_php/cadastro.php",
        async:true
    }).then(success, fail);
    
    //Caso a função de envio de dados tenha êxito
    function success(data) {
        let dados = JSON.parse(data);
        let sucesso = dados["sucesso"];
        let mensagem = dados["mensagem"];
        
        //Caso o retorno da inserção do novo contato seja sucesso
        if (sucesso) {
            //Mostra mensagem de sucesso na tela
            $("#alerta_sucesso").html(mensagem);                       
            $("#alerta_sucesso").show().delay(2000).fadeOut();

            //Limpa os campos do formulário
            $("input").val("");
            $("textarea").val("");

            //Coloca o foco no campo nome para inserção de novo contato
            $("#nome").focus();

        //Caso o retorno da inserção do novo contato seja falha
        } else {
            //Mostra mensagem de erro na tela
            $("#alerta_erro").html(mensagem);
            $("#alerta_erro").show().delay(2000).fadeOut();

            //Coloca o foco no campo nome
            $("#nome").focus();
        }

        return;
    }

    return;
    
    //Caso a função de envio de dados tenha falhado
    function fail() {
        $("#alerta_erro").html("Falhou ao adicionar contato.");
        $("#alerta_erro").show().delay(2000).fadeOut();
        $("#nome").focus();
    }
    
    return;
}