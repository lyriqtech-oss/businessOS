# CODEX HANDOFF

## Estado atual

Alpha navegável em Next.js 16/React 19 com UI responsiva em português, design system próprio, tema adaptável, organização demo e fundação multiempresa.

## Concluído

- Login demo e onboarding em nove etapas.
- Shell com sidebar móvel/recolhível, topbar, consumo e command palette.
- Dashboard com KPIs e gráficos coerentes.
- Inbox simulada com seleção, envio, identificação e pausa de IA.
- CRM em Kanban/tabela, agenda, vendas, financeiro, marketing e automações.
- Central de agentes com pausa; conhecimento, relatórios, integrações, equipe, configurações, billing e admin.
- Contratos de domínio, RBAC inicial, Supabase SSR e health endpoint.
- Migration multiempresa, RLS, índices, seed e testes essenciais.

## Parcial ou simulado

- Login usa acesso demo até Supabase ser configurado.
- Mutações da UI ficam em memória e feedback local.
- Providers externos são mocks explícitos e permanecem desconectados.
- Gráficos e indicadores usam o dataset demo.
- Admin possui rota de UI, mas a proteção final depende da sessão Supabase.

## Próxima ordem recomendada

1. Conectar Supabase e substituir demo login por Auth SSR.
2. Criar repository layer e Server Actions Zod para CRM/inbox.
3. Aplicar checagem granular de permissão em actions e políticas SQL.
4. Implementar um provider real por vez, começando WhatsApp e Stripe test.
5. Adicionar fila de jobs, outbox, observabilidade e testes RLS com duas organizações.
6. Validar acessibilidade e visual em navegadores reais.

## Variáveis

Consulte `.env.example`. Jamais expor service role, OpenAI, Stripe ou Meta no cliente.

## Riscos e débitos

- Migration ampla ainda precisa ser exercitada num projeto Supabase real.
- Falta rate limiter distribuído e cofre de segredos.
- RAG, Responses API, billing e webhooks possuem somente contratos/estrutura.
- Playwright requer instalação local do Chromium.
- Não há SLA, restore drill ou monitoramento de produção.

## Comandos

`npm run dev`, `npm run lint`, `npm run typecheck`, `npm test`, `npm run build`, `npm run test:e2e`.

## Produção ainda não atendida

Credenciais reais, testes de RLS, MFA, LGPD operacional, pagamentos homologados, webhooks assinados, filas duráveis, observabilidade, backup testado, pentest e deploy de staging.
