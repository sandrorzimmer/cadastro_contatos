function enviaRegistroContato () {

    $("#alerta").hide();

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

        console.log(data);
        
        //If insert return is success
        if (sucesso) {
            $("#alerta").html(mensagem);                       
            $("#alerta").show().delay(2000).fadeOut();

        //If insert return is fail
        } else {
            $("#alerta").html(mensagem);
            $("#alerta").show().delay(2000).fadeOut();                        
        }                
    }
    
    //Function insertInfo failed
    function fail() {
        $("#alerta").html("Falhou ao adicionar contato.");
        $("#alerta").show().delay(2000).fadeOut();
    }
}