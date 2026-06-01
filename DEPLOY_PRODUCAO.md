# Colocar o RATEIO RH EKKO no ar

Este guia e para publicar o sistema para o RH usar pela internet.

## Importante

Para uso real do RH, precisa ter banco PostgreSQL. Sem banco, cada navegador salva parte dos dados localmente e isso nao serve para equipe.

## Recomendacao

- Site: Vercel
- Banco PostgreSQL: Supabase ou Railway

## 1. Criar banco PostgreSQL

Crie um projeto no Supabase ou Railway e copie a connection string PostgreSQL.

Ela vai parecer com:

```text
postgresql://usuario:senha@host:5432/banco?sslmode=require
```

Guarde esse valor para a variavel `DATABASE_URL`.

## 2. Criar segredo JWT

Crie um texto longo e dificil, por exemplo com 40+ caracteres.

Exemplo:

```text
ekko-rateio-producao-trocar-por-chave-grande
```

Use isso em `JWT_SECRET`.

## 3. Criar senha admin

No computador, rode:

```powershell
npm.cmd run auth:hash
```

Digite a senha real que o administrador vai usar.

Copie a linha gerada:

```text
ADMIN_PASSWORD_HASH="..."
```

## 4. Configurar variaveis na Vercel

Na Vercel, em Project Settings > Environment Variables, criar:

```text
DATABASE_URL
JWT_SECRET
ADMIN_PASSWORD_HASH
```

Nao use a senha local `Ekko@2026` em producao.

## 5. Subir o banco

Antes de liberar para o RH, rode contra o banco de producao:

```powershell
npm.cmd run prisma:push
```

Ou, no ambiente com `DATABASE_URL` configurada:

```powershell
npx.cmd prisma db push
```

## 6. Publicar na Vercel

Suba o repositorio para GitHub e importe na Vercel.

Build command:

```text
npm run vercel-build
```

O arquivo `vercel.json` ja esta configurado.

## 7. Testes obrigatorios depois de publicar

Depois que abrir o link da Vercel:

1. Entrar com o login real.
2. Criar uma competencia nova.
3. Adicionar um funcionario manualmente.
4. Conferir se `Calculos`, `FGTS` e `Rateio DCTFWeb` recalcularam.
5. Recarregar a pagina.
6. Entrar de novo.
7. Confirmar se os dados continuaram salvos.
8. Abrir em outro computador e confirmar se os dados aparecem.

## O que ja esta preparado

- Login via API JWT com cookie seguro.
- Configuracao Vercel.
- Prisma/PostgreSQL.
- Snapshot mensal em banco para competencias.
- Motor de calculo testado contra a planilha original.
- Importacao Excel opcional.
- Cadastro manual direto pelo site.
- Exportacao CSV, JSON e HTML.

## O que ainda deve ser feito antes de uso definitivo

- Criar usuarios reais de RH, Financeiro e Visualizacao no banco.
- Implementar tela de administracao de usuarios.
- Ativar backup automatico no Supabase/Railway.
- Fazer um teste paralelo com a planilha em pelo menos 2 ou 3 meses.
- Definir quem pode fechar/reabrir competencia.
