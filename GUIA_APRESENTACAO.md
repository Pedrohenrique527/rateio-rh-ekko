# Guia rapido para apresentar

## Abrir localmente

```powershell
cd C:\Users\Ekko\Documents\Codex\2026-05-29\files-mentioned-by-the-user-rateiro
npm.cmd run dev -- --hostname 0.0.0.0 --port 3000
```

Abra no Google Chrome:

```text
http://127.0.0.1:3000
```

## Login da apresentacao local

```text
E-mail: admin@ekko.local
Senha: Ekko@2026
```

## Roteiro para mostrar ao dono

1. Entrar no sistema.
2. Mostrar o seletor de competencias mensais.
3. Abrir `Funcionarios`.
4. Cadastrar um funcionario/lancamento direto pelo site.
5. Mostrar que `Calculos`, `FGTS` e `Rateio DCTFWeb` recalculam.
6. Abrir `Competencias`.
7. Mostrar checks de fechamento.
8. Exportar `HTML`, `CSV` ou `JSON`.

## Para ficar em producao

Antes de usar oficialmente:

1. Criar banco PostgreSQL no Supabase ou Railway.
2. Colocar `DATABASE_URL` real.
3. Trocar `JWT_SECRET`.
4. Gerar senha real com:

```powershell
npm.cmd run auth:hash
```

5. Colocar o hash em `ADMIN_PASSWORD_HASH`.
6. Rodar migracoes Prisma.
7. Publicar na Vercel.

Nunca use a senha local `Ekko@2026` em producao.
