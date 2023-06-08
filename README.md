# course-backend

## Prerequisitos
- docker & docker compose

## Desenvolvimento

### Primeira inicialização

```sh
# Inicializa o banco 
docker compose up -d

# Instala os pacotes
yarn

# Aplicar a primeira migration
yarn dev:migrate

# Rodar o primeiro seed
yarn dev:seed

```

### Depois

```sh
# Verificar se o banco está rodando 
docker compose up -d

# http://localhost:3000/ 
yarn dev
```

## Testes

### Primeira inicialização

```sh
# Inicialisar os containers
docker compose up -d

# Instala os pacotes
yarn

# Aplicar a primeira migration
yarn test:migrate

# Rodar o primeiro seed
yarn test:seed
```

### Depois

```sh
# Rodar os testes
yarn test

# OU Rodar os testes
yarn test:e2e
```

## Documentação dos endpoints

Depois da aplicação iniciada, basta acessar:

```
http://localhost:3000/api-docs 
```
