# Cervejeira API

A Cervejeira API é um microserviço para gerenciar estilos de cerveja e recomendar o estilo mais adequado com base na temperatura fornecida.

## Funcionalidades

- Listar estilos de cerveja
- Cadastrar novos estilos de cerveja
- Atualizar informações de um estilo de cerveja existente
- Excluir um estilo de cerveja
- Encontrar o estilo de cerveja mais adequado para uma determinada temperatura e obter uma playlist relacionada a esse estilo

## Tecnologias utilizadas

- Node.js
- TypeScript
- Express.js
- MongoDB
- Spotify API
- Zod

## Pré-requisitos

Certifique-se de ter as seguintes ferramentas instaladas em seu sistema:

- Node.js (versão nodejs16.x)
- Usuario capaz de fazer deploy na aws segue links de ajuda:
  [Create an AWS account](https://sst.dev/chapters/create-an-aws-account.html)
  [Create an IAM user](https://sst.dev/chapters/create-an-iam-user.html)
  [Configure the AWS CLI](https://sst.dev/chapters/configure-the-aws-cli.html)

## Instalação

1. Clone este repositório:

```bash
git clone git@github.com:brlga002/karhub.git
```

2. Acesse o diretório do projeto:

```bash
cd karhub
```

3. Instale as dependências do projeto:

```bash
npm install
```

4. Configure as variáveis de ambiente:

Crie um arquivo `.env` na raiz do projeto e defina as seguintes variáveis de ambiente:

```
MONGO_URI=mongodb+srv://gabriellima1000:LhnnnvTRhbgSzm0n@cluster0.zafg75x.mongodb.net/KarhubService
JWT_APPLICATION_KEY="X400ftawaOPXDhF6FvLbHTVUy"
SPOTIFY_CLIENT_ID='ac95e78b2253443e9e2a75cbc97a88a2'
SPOTIFY_CLIENT_SECRET='cf64c8fce8f049f389040648ee8f2698'
```

5. Inicie o servidor:

```bash
npm run dev
```

O servidor estará em execução no ambiente aws mas é acessivel em localmente, verifique o console para obter a url local.

Uma versão da API esta em produção: [Url servidor Produção](https://420hawsrej.execute-api.us-east-1.amazonaws.com)

## Uso

A API oferece documentação com Swagger

No console aparecera uma url o link do SwaggerUrl ex:

```bash
SwaggerUrl: https://d55gp2ajpl0ne.cloudfront.net
```

Alguns comandos ulteis:

1. gere uma nova documentação da sua api com base nos arquivos de schema:

```bash
npm run openapi
```

2. gere uma nova documentação com a opção watch para ficar ouvido as alterações no arquivos de schema:

```bash
npm run openapi:watch
```

3. Suba o swagger em servidor local na porta 9090

```bash
npm run openapi-server
```

## Testes

Para rodar os testes unitário

```bash
npm run test
```

Para verificar erros de typescript

```bash
npm run typecheck
```

## Deploy

O Deploy e feito na aws de forma automatizada toda vez que há alteração nas branchs do github atravez do [Seed](https://console.seed.run).

- A branch master e publicada para produção.
- A branch develop para ambiente de homologação.
- O Deploy automatico exije que todos os testes passem.

É possivel fazer o deploy diretamente para a aws com o comando:

```bash
npm run deploy
```

## Licença

Este projeto está licenciado sob a [MIT License](https://opensource.org/licenses/MIT).
