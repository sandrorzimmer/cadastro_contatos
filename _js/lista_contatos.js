function buscaContatos() {

    //Busca o arquivo JSON contendo a lista de contatos
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var lista_contatos = JSON.parse(xhttp.response);

            $("#alerta_sucesso").html("Lista recebida!");
            $("#alerta_sucesso").show().delay(2000).fadeOut();

            //Chama função para filtrar por nome
            filtraContatos(lista_contatos);
        };
    };

    xhttp.open("GET", "_php/lista_contatos.json", true);
    xhttp.send();

    return;
}

function filtraContatos(lista) {

    var palavra_chave = $("#palavra_chave").val(); //nome do contato
    var lista_filtrada = [];
    
    //Faz a varredura de todos os contatos, procurando por nomes que contenham a palavra-chave
    //criando um novo array
    $.each(lista, function(index) {
        if (((lista[index]["nome"]).toLowerCase()).includes((palavra_chave.toLowerCase()))) {
            lista_filtrada.push(lista[index]);
        };
    });

    //Chama função para mostrar os contatos filtrados em tela
    mostraContatos(lista_filtrada);

    return;
}

function mostraContatos(lista_recebida) {

    let lista = lista_recebida; //lista de contatos filtrada por nome

    //Ordena a lista pela chave 'nome'
    lista.sort(function compara(a,b){
        if (a.nome < b.nome) return -1;
        if (a.nome > b.nome) return 1;
        return 0;
    });
    
    //Limpa a listagem em tela
    $('#listagem_contatos').empty();

    //Monta a lista de registros no HTML
    $.each(lista, function(index) {

        let contato_item;

        contato_item = '<a href="#" class="list-group-item list-group-item-action mb-2">';
        contato_item += '<div class="d-flex w-100 justify-content-between">';
        contato_item += '<h5 class="mb-1">';
        contato_item += lista[index]['nome'];
        contato_item += '</h5>';
        contato_item += '<small>';
        contato_item += lista[index]['tipo'];
        contato_item += '</small>';
        contato_item += '</div>';
        contato_item += '<p class="mb-1">';
        contato_item += lista[index]['email'];
        contato_item += '</p>';
        contato_item += '<p class="mb-1">';
        contato_item += lista[index]['telefone'];
        contato_item += '</p>';
        contato_item += '<p class="mb-1">';
        contato_item += lista[index]['observacao'];
        contato_item += '</p>';
        contato_item += '</a>';

        $('#listagem_contatos').append(contato_item);
    });

    return;
}

function mostraAlerta(tipo,mensagem) {
    
}