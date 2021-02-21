function enviaRegistroContato () {

    let nome = $("#nome").val();
    let email = $("#email").val();
    let telefone = $("#telefone").val();
    let tipo = $("#tipo").val();
    let observacao = $("#observacao").val();

    //Send INFO and TAGS to insert.php
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
    
    //Function insertInfo() successful
    function success(data) {
        let dados = JSON.parse(data);
        let sucesso = dados["sucesso"];
        let mensagem = dados["mensagem"];
        
        //If insert return is success
        if (sucesso) {
            $("#alerta_sucesso").html(mensagem);                       
            $("#alerta_sucesso").show().delay(2000).fadeOut();
            $("input").val("");
            $("textarea").val("");
            $("#nome").focus();

        //If insert return is fail
        } else {
            $("#alerta_erro").html(mensagem);
            $("#alerta_erro").show().delay(2000).fadeOut();
            $("#nome").focus();
        }                
    }
    
    //Function insertInfo failed
    function fail() {
        $("#alerta_erro").html("Falhou ao adicionar contato.");
        $("#alerta_erro").show().delay(2000).fadeOut();
        $("#nome").focus();
    }
}