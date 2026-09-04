# Lyriq Business OS

Fundação funcional do SaaS multiempresa da Lyriq. Centraliza atendimento, CRM, vendas, agenda, financeiro gerencial, marketing, automações, conhecimento e agentes de IA.

## Execução local

```bash
npm install
cp .env.example .env.local
npm run dev
```

Sem credenciais, a interface opera em modo demonstrativo. Com Supabase configurado, aplique `supabase/migrations` e `supabase/seed.sql`.

## Qualidade

```bash
npm run lint
npm run typecheck
npm test
npm run build
npm run test:e2e
```

Rotas principais: `/login`, `/onboarding`, `/app/overview`, `/app/inbox`, `/app/crm`, `/app/calendar`, `/app/agents`, `/app/integrations` e demais módulos da sidebar.
