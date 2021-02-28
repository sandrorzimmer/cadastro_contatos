function buscaContatos() {

    //
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var lista_contatos = JSON.parse(xhttp.response);

            $("#alerta_sucesso").html("Lista recebida!");
            $("#alerta_sucesso").show().delay(2000).fadeOut();

            filtraContatos(lista_contatos);
        };
    };

    xhttp.open("GET", "_php/lista_contatos.json", true);
    xhttp.send();
    }

function filtraContatos(lista) {
    var palavra_chave = $("#palavra_chave").val();
    var lista_filtrada = [];
    
    $.each(lista, function(index) {
        if (((lista[index]["nome"]).toLowerCase()).includes((palavra_chave.toLowerCase()))) {
            lista_filtrada.push(lista[index]);
        };
    });

    mostraContatos(lista_filtrada);
}

function mostraContatos(lista_recebida) {

    let lista = lista_recebida;

    //Ordena a lista pela chave 'nome'
    lista.sort(function compara(a,b){
        if (a.nome < b.nome) return -1;
        if (a.nome > b.nome) return 1;
        return 0;
    });
    
    $('#listagem_contatos').empty();

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
}