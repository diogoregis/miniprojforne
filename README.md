# AlugaAp - BIOPARK



> Esse projeto foi feito para o desafio tech da BIO PARK; Tipo de prazo: CORRIDO(rsrs); O projeto tende a melhorias, algumas delas descritas no final desse README, afim de entregar no tempo estipulado essas e possivelmente outros foram cortadas, mas podem ser adicionadas de maneira posterior, afim de melhorar o projeto no futuro, mesmo que não participando do desafio. Escolhi inicialmente trabalhar de maneira mais objetiva, afim de ter um projeto que cumpra o escopo.

Nesse projeto será possivel ver:

* Persistência de dados em banco relacional;
* Padrão de projeto;
* Manipulação de dados requisitados ao banco de dados, sem os persistir;
* Entrega e recebimento JSON;
* Pagina WEB exibindo dados do BACK;
* JS consumindo dados da API BACK;
* Boas praticas JAVA e SPRING.

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
* Testado em ambiente Linux Mint 21.1, com openJDK 19 e postgreSQL 14 instalado;
* Em ambos os ambientes foram utilizados os POSTMAN e INSOMNIA.

## COMO TESTAR ESSE PROJETO

### 	GIT CLONE

Escolha uma pasta no seu computador, e realize o git clone:

```
git clone https://github.com/diogoregis/alugaapbiopark.git
```



* Abra o IntelliJ IDEA, vá até FILE > OPEN
* Escolha a pasta do clone
* A IDE vai reconhecer o arquivo pom e vai index e baixar as dependência, aguarde concluir
* Rode o projeto no Run
* Abra seu navegador e acesso endereço localhost:9009

```
http://localhost:9009/
```

Uma maneira alternativa é entrar na pasta do projeto, RESOURCES > TEMPLATE e abrir o arquivo index.html



## API

### ENDPOINTS

#### PARTE 1:

| /api/v1/edificios    |
| -------------------- |
| /api/v1/locadores    |
| /api/v1/locatarios   |
| /api/v1/apartamentos |
| /api/v1/alugueis     |
| /api/v1/usuarios     |

- GET´s

  - Ao realizar um GET sem informar parâmetro, a resposta será uma lista com todos os registros da entidade correspondente.

  - Ao realizar um GET passando um parâmetro, a resposta será o registro especifico para aquele valor.

  - É aceito como parâmetro o ID, do registro, composto apenas por numero.

  - Exemplo de GET com parâmetro, um ID para o endpoint /api/v1/locadores:

    - ```
      localhost:9009/api/v1/locadores/1
      ```

    -  /api/v1/locadores/{id} no lugar do {id} informa o numero ID correspondente.

- POST

  - Ao realizar um POST, deve informar os dados no BODY, seguindo o esquema chave valor preenchendo no formato JSON

  - Não é necessário informar o campo ID, esse será gerado automaticamente

  - Veja em ESQUEMA o modelo de como preencher o BODY para realizar o POST

  - Exemplo de BODY, para POST  no endpoint /api/v1/edificios:

    - ```
      {
      	"descricaoEdificio": "Empresarial Toledo Center"
      }
      ```

- PUT

  - Deve ser preenchido de maneira semelhante ao POST, porém informando o campo ID

  - Informe as novas informações e essas serão refletidas no ID que você informou

  - Exemplo de BODY, para PUT  no endpoint /api/v1/edificios:

    - ```
      {
          "id": 1, 
      	"descricaoEdificio": "Avestt Center"
      }
      ```

- DELETE

  - Informe como parâmetro o ID do objeto que deseja fazer o DELETE

  - Exemplo, para DELETE  no endpoint /api/v1/edificios:

    - ```
      localhost:9009/api/v1/edificios/1
      ```



#### ESQUEMA / MODELO PREENCHIMENTO BODY

* POST para localhost:9009/api/v1/edificios

  * ```
    {
    	"descricaoEdificio": "Nome do EDIFICIO"
    }
    ```

* POST para localhost:9009/api/v1/locadores

  * ```
    {
        "nomeLocador": "Nome do LOCADOR"
    }
    ```

* POST para localhost:9009/api/v1/locatarios

  * ```
    {
    	"nomeLocatario": "Nome do LOCATARIO"
    }
    ```

* POST para localhost:9009/api/v1/apartamentos

  * ```
    {
    	"edificio": {"id": 3 },
    	"locador": {"id": 1 }
    }
    ```

  * Em ID informe o código referente ao EDIFICIO e LOCADOR que vai pertencer o APARTAMENTO.

* POST para localhost:9009/api/v1/alugueis

  * ```
    {
    	"apartamento": {"id": 7 },
    	"locatario": {"id": 3 },
    	"valorAluguel": 1500.00
    }
    ```

  * Em ID informe o código correspondente ao APARTAMENTO que deseja alugar, e o LOCATARIO que vai alugar o APARTAMENTO;

  * No valor do campo "valorAluguel"  informe o preço pago pelo aluguel.



Existe alguns recursos, como no DELETE do ALUGUEL, foram tomados alguns cuidados, como não excluir o registro, sendo assim, quando você faz o DELETE de um ALUGUEL, o mesmo o mesmo é marcado como não mais ativo e o APARTAMENTO é devolvido para a condição de DISPONIVEL para ALUGUEL, tornando possível outro LOCATARIO locar o APARTAMENTO, sem excluir o registro, e mantendo um histórico persistido no banco de dados.



#### PARTE 2:

| ENDPOINTS                             |
| ------------------------------------- |
| /api/v1/dashboard                     |
| /api/v1/dashboard/ocupados            |
| /api/v1/dashboard/ocupados/locatario  |
| /api/v1/dashboard/contratos           |
| /api/v1/dashboard/contratos/edificio  |
| /api/v1/dashboard/contratos/locatario |

####	Como utilizar:

| ACESSO                                | GET                                                          | PARAMETRO {ID}                                               |
| ------------------------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| /api/v1/dashboard                     | Retorna todos apartamentos disponíveis para aluguel.         | Ao informar o ID do edifício como parâmetro, retorna todos apartamentos disponíveis para aluguel no edifício especificado no paramento. |
| /api/v1/dashboard/ocupados            | Retorna todos apartamentos já ocupados, não disponíveis para aluguel. | Ao informar o ID do edifício como parâmetro, retorna todos apartamentos já ocupados, não disponíveis para aluguel no edifício especificado no paramento. |
| /api/v1/dashboard/contratos           | Retorna a quantidade total de Contratos ativos, e o valor total dos alugueis que esses contratos representam (em R$). | N/A                                                          |
| /api/v1/dashboard/ocupados/locatario  | Retorna todos locatários, com quantidade de contratos e valor total pago por eles no aluguel (em R$) | Ao informar o ID do locatário como parâmetro, será retornado a quantidade de contratos e valor total pago no aluguel (em R$) |
| /api/v1/dashboard/contratos/edificio  | N/A                                                          | Ao informar o ID referente ao edifício, será retornado todos os contratos ativos para o edifício especifico |
| /api/v1/dashboard/contratos/locatario | N/A                                                          | Ao informar o ID referente ao locatário, será retornado todos os contratos ativos para o locatário especifico |

* Estes por sua vez só aceitam requisição GET
* Utilize o prefixo localhost:9009

#### Exemplo

* Retorno do GET para: /api/v1/dashboard/contratos

  * ```
    {
        "quantidadeTotalContratos": 3,
        "valorTotalContratos": 4500.0
    }
    ```



## ACESSANDO NO NAVEGADOR

Acesse no seu navegador:

```
localhost:9009
```

De maneira alternativa procure e abra o arquivo: index.html, dentro da pasta do projeto.



Será possível por meio da pagina:

* Listar todos Locatários
* Listar todos edifícios
* Listar todos alugueis
* Alugar um apartamento para um locatário.



## ESCOPO

* API
* Cadastrar Edifícios / Apartamentos / Locatários / Aluguel
* Visualizar apartamentos disponíveis / disponível por edifício
* Alugar apartamento para locatário
* Visualizar locatário do apartamento
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
* Mais campos para entidade Locatário (endereço faturamento, cpf/cnpj, referencia, fiador ...)
* Adicionar validadores para evitar incremento null em campos
* Relatórios (por período, por quebra, ticket médio do aluguel, ocupação por período)
* Diagramação, responsividade e design do front na mostra dos dados
* Consumir API viacep para facilidade preenchimento de endereço
* Tratamento e criação de Exception´s personalizadas.
