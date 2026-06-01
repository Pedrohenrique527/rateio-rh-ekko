# RATEIO RH EKKO REVESTIMENTOS

Sistema web para substituir a planilha de folha, encargos, FGTS, DCTFWeb e rateio financeiro por competencia.

## Prioridade técnica

O motor financeiro fica em `lib/calculations`. A interface, APIs e exportações devem consumir esse mesmo motor para evitar divergência entre telas, relatorios e fechamento.

Regras extraídas da planilha `RATEIRO ENGARGOS EKKO revestimento 062025.xlsx`:

- FGTS: `BASEFGTS * 8%`, preservando 4 casas nos calculos internos.
- INSS patronal: `INSS * 20%`.
- GILRAT ajustado: `INSS * 1,5%`.
- Terceiros: `INSS * 5,8%`.
- Aba `Plan7`: Colégio tem ajuste de `-325,00` em desconto INSS.
- Aba `Plan7`: RPA Colégio, Sócios e RPA RT entram como linhas manuais de conferência DCTFWeb.
- Aba `FGTS`: total por unidade = FGTS + empréstimo consignado.

## Rodar localmente

```bash
npm install
npm run dev
```

Configure:

```env
DATABASE_URL="postgresql://..."
JWT_SECRET="troque-esta-chave"
ADMIN_PASSWORD_HASH="hash-bcrypt"
```

Para gerar o hash da senha admin:

```bash
npm run auth:hash
```

## Testes de precisão

```bash
npm test
```

O teste `tests/workbook-reconciliation.test.ts` lê o arquivo original no caminho:

```text
C:\Users\Ekko\Downloads\RATEIRO ENGARGOS EKKO revestimento 062025.xlsx
```

Também é possível apontar outro arquivo:

```bash
ORIGINAL_XLSX_PATH="C:\caminho\arquivo.xlsx" npm test
```

## Estrutura

- `app`: Next.js App Router e APIs.
- `components`: interface operacional.
- `lib/calculations`: motor de calculo auditável.
- `lib/imports`: importação Excel/CSV.
- `lib/auth`: sessão JWT.
- `lib/audit`: trilha de auditoria.
- `prisma/schema.prisma`: modelo PostgreSQL.
- `tests`: reconciliação automática contra a planilha.
