# AlugaAp - BIOPARK

## UTILIZADO NO PROJETO

* Java 11
* Spring Boot 2.7.9
* PostgreSQL 12
* Maven 4.0.0
* IntelliJ IDEA 2022.2.1
* Lombok 1.18.26

## HOMOLOGAÇÃO

* Esse projeto foi testado, realizando o git clone e abrindo o projeto no IntelliJ IDEA;
* Testado em ambiente Windows 11 pro, com java 11 e postgre 12 instalado;
* Testado em ambiente Linux Mint 21.1, com openJDK 19 e postgreSQL 14 instalado.

## COMO TESTAR ESSE PROJETO

	### GIT CLONE

Escolha uma pasta no seu computador, e realize o git clone:
[CODIGO]

* Abra o IntelliJ IDEA, vá até FILE > OPEN
* Escolha a pasta do clone
* A IDE vai reconhecer o arquivo pom e vai index e baixar as dependencia, aguarde concluir
* Rode o projeto no Run
* Abra seu navegador e acesso endereço localhost:9009
[LINK CODIGO]

## ESCOPO

* API
* Cadastrar Edificios / Apartamentos / Locatarios / Aluguel
* Visualizar apartamentos disponiveis / disponivel por edificio
* Alugar apartamento para locatario
* Visualizar locatario do apartamento
* Front Web exibindo dados do back
* Front com form para novos cadastros
* Front com manipulação dos dados requisitados ao back

## FORA DO ESCOPO

* Camada de segurança
* Front desktop / mobile

## SUGESTÕES DE MELHORIA

* Implementar camada de segurança
* JWT
* Mais campos para entidade Apartamento (metros quadrados, bloco, numero, andar ...)
* Mais campos para entidade Aluguel (corretora, desconto, convenio, vencimento, forma ...)
* Mais campos para entidade Locatario (endereço faturamento, cpf/cnpj, refencia, fiador ...)
* Adcionar validadores para evitar incremento null em campos
* Relatorios (por periodo, por quebra, ticket medio do aluguel, ocupaçao por periodo)
* Diagramação, responsividade e design do front na mostra dos dados
