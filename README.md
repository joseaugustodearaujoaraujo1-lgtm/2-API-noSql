# 📝 API de cadastros com MongoDB (2)

> Segunda etapa da série NoSQL: API **Express + Prisma + MongoDB** com cadastro de registros (nome e descrição) e front-end **Next.js** com páginas de listagem e log.

![Express](https://img.shields.io/badge/Express-000000?style=flat-square&logo=express&logoColor=white)
![Prisma](https://img.shields.io/badge/Prisma-2D3748?style=flat-square&logo=prisma&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=flat-square&logo=mongodb&logoColor=white)
![Next.js](https://img.shields.io/badge/Next.js-000000?style=flat-square&logo=nextdotjs&logoColor=white)

## Estrutura

- **`BackEnd/`**: API (arquivo principal `srever.js`), Prisma e `.env.example` com o formato do `DATABASE_URL`.
- **`FrontEnd/`**: Next.js com as páginas `banco` e `log`.

Modelo `User`: `id`, `nome`, `descricao`.

## Rotas da API

| Método | Rota | Função |
|---|---|---|
| `POST` | `/v1/cadastros` | cria registro |
| `GET` | `/v1/users` | lista registros |
| `PATCH` | `/v1/users/:email` | atualiza |
| `DELETE` | `/v1/users/:email` | remove |

## Como rodar

```bash
git clone https://github.com/joseaugustodearaujoaraujo1-lgtm/2-API-noSql.git
cd 2-API-noSql/BackEnd
npm install
cp .env.example .env     # coloque a sua DATABASE_URL do MongoDB
npx prisma generate
node srever.js

# em outro terminal
cd ../FrontEnd
npm install
npm run dev
```

## Observações

- Projeto de estudo. As rotas com `:email` e o modelo (`nome`, `descricao`) ainda não estão alinhados; é um ponto de revisão.
- Sem autenticação e sem testes.

Veja também: [1-API-noSql](https://github.com/joseaugustodearaujoaraujo1-lgtm/1-API-noSql) e [Crud1-noSql](https://github.com/joseaugustodearaujoaraujo1-lgtm/Crud1-noSql).
