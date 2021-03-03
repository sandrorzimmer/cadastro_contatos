# Agenda de Contatos
## Simples projeto criado para testar o uso de arquivo JSON para armazenamento de dados.

### Tabela de Conteúdo
1. [Principais características](#principais-caracteristicas)
2. [O que o programa não faz](### O que o programa não faz)

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
* Inserir novo contato
  * Usuário digita os dados no formulário da tela lista_contatos.html
  * Dados são enviados via Ajax para cadastro.php
  * Cadastro.php converte dados em JSON e grava no arquivo _php/lista_contatos.json
  * Mensagem de alerta indica na tela se o contato foi adicionado corretamente ou não

![Cadastro de contato](/Imagens/tela_cadastro_contato.png)

* Consultar lista de contatos completa
  * Usuário pode consultar lista completa de contatos apenas clicando no botão Buscar
  * Lista de contatos é carregada em tela, com mensagem de alerta indicando sucesso

![Consulta de contatos](/Imagens/tela_consulta_contatos.png)

* Consultar contato por nome
  * Usuário digita o nome ou parte do nome no campo input e cllica Buscar
  * Programa busca todos os contatos contendo a string digitada, com mensagem de alerta indicando sucesso

