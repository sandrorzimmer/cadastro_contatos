# Agenda de Contatos
## Simples projeto criado para testar o uso de arquivo JSON para armazenamento de dados. A aplicação se destina ao aprendizado de programação e não tem objetivo de uso prático.

### Tabela de Conteúdo
1. [Principais características](#Principais-características)
2. [O que o programa não faz](#O-que-o-programa-não-faz)
3. [Como funciona](#Como-funciona)
    3.1 [Inserir novo contato](#Inserir-novo-contato)
    3.2 [Consultar lista de contatos completa](#Consultar-lista-de-contatos-completa)
    3.3 [Consultar contato por nome](#Consultar-contato-por-nome)

### Principais características
* Formulário de entrada de dados
  * Nome
  * Email
  * Telefone
  * Tipo de contato
  * Observação
* Tela de consulta de contatos
  * Lista completa
  * Consulta por nome

### O que o programa não faz
* Validação de dados digitados
* Editar contato
* Apagar contato
* Apagar a lista completa
* Todas as edições somente são possíveis alterando o arquivo JSON manualmente

### Como funciona
#### Inserir novo contato
  * Usuário digita os dados no formulário da tela lista_contatos.html
  * Dados são enviados via Ajax para cadastro.php
  * Cadastro.php converte dados em JSON e grava no arquivo _php/lista_contatos.json
  * Mensagem de alerta indica na tela se o contato foi adicionado corretamente ou não

![Cadastro de contato](/Imagens/tela_cadastro_contato.png)

#### Consultar lista de contatos completa
  * Usuário pode consultar lista completa de contatos apenas clicando no botão Buscar
  * Lista de contatos é carregada em tela, com mensagem de alerta indicando sucesso

![Consulta de contatos](/Imagens/tela_consulta_contatos.png)

#### Consultar contato por nome
  * Usuário digita o nome ou parte do nome no campo input e cllica Buscar
  * Programa busca todos os contatos contendo a string digitada, com mensagem de alerta indicando sucesso

### Bibliotecas e recursos utilizados
  * Bootstrap - recursos básicos do framework para tornar o desenvolvimento do frontend mais rápido
  * jQuery - utilizado pela maior agilidade no desenvolvimento do código no lado cliente
  * AJAX - envio de dados

### Aprendizado e problemas enfrentados
  * O uso de JSON para para armazenamento de dados simples permite a fácil implantação
  sem necessidade de banco de dados. Entretanto, para aplicações que envolvem maior complexidade, como
  a dependência de informações em outras tabelas, torna-se essencial o uso de banco de dados.
  * Uma dificuldade enfrentada foi o fato do browser, por vezes, utilizar o arquivo JSON em cache,
  o que fazia o aplicativo mostrar dados desatualizados. Por exemplo, se o arquivo JSON havia sido
  carregado para exibir a lista de contatos e outro contato fosse adicionado após isso, o aplicativo não mostrava o novo registro, pois utilizava o arquivo antigo em cache. Existem algumas formas para obrigar o browser a recarregar o arquivo sempre, porém não foi implementada nenhuma solução para isso.
