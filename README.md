# API REST de Produtos

**Aluno:** Emanuel Rodrigues Brandão
**Matrícula:** 202501007929
API REST para gerenciamento de produtos, desenvolvida com Node.js e Express.

## Como executar

1. Clone o repositório
2. `npm install`
3. `npm run dev`
4. Acesse `http://localhost:3000`

## Endpoints

| Verbo | Path | Descrição | Status |
|-------|------|-----------|--------|
| GET | /api/v1/produtos | Lista todos os produtos | 200 |
| GET | /api/v1/produtos/:id | Busca produto por ID | 200 / 404 |
| POST | /api/v1/produtos | Cria novo produto | 201 / 400 |
| PUT | /api/v1/produtos/:id | Atualiza produto | 200 / 404 |
| DELETE | /api/v1/produtos/:id | Remove produto | 204 / 404 |
