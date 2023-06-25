
<h1 align="center">Mini Messenger API</h1>

<br>

## :yarn: Sobre ##

Este projeto contempla a API para um mini chat, com comunicação via web socket.
A API atualmente contém as seguintes rotas:

```bash
# autentica o usuário por meio de login social na API do Github, que gera um jsonwebtoken, cujo é enviado como resposta
 GET /authenticate

# Abaixo são listadas as rotas autenticadas, que obrigatoriamnente necessitam do header "Authorization"

# rota para criação de novas menssagens no chat. 
POST /messages
#payload
{
  "text": "string",
  "user_id": "string"
}

# retorna as três últimas mensagens do usuário
GET /messages/last3

# retorna o id do usuário
GET /profile

```


## :minidisc: Requerimentos ##

Antes de iniciar :checkered_flag:, você precisa ter o [Git](https://git-scm.com) e [Node](https://nodejs.org/en/) versão LTS instalados no seu ambiente de desenvolvimento.
Para utilização da API recomenda-se a utilização das ferramentas [Docker](https://www.docker.comm) e [docker compose](https://docs.docker.com/compose/).
O passo-a-passo a seguir considerará que você está utilizando as ferramentas acima recomendadas.
Outra alternativa recomendada é a utilização da ferramenta _Dev Containers_ do Vscode, por meio da opção "docker compose"

## :checkered_flag: Iniciando ##

```bash
# Clone este projeto
$ git clone https://github.com/ManuCoutinho/mini-messenger

# Acesse a pasta da API
$ cd sever

# Inicie o projeto com docker compose
# Este comando irá baixar as imagens do node, postgres e pgadmin4, instalar as dependencias necessárias e iniciar o Prisma com a tabela Mensseger
$ docker compose up

# Neste ponto o servidor de desenvolvimento estará rodando em <http://localhost:4800>

# Acesse o projeto atravé de um terminal secundário e execute:
$ docker compose exec server bash

# Após iniciar o bash do container, realize a migration do seu banco de dados
$ npx prisma migrate dev

# Prontinho, seu front-end pode ser conectado
```

&#xa0;

<a href="#top"> :arrow_up: </a>
