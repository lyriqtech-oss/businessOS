# Arquitetura

Next.js App Router com Server Components por padrão e componentes cliente somente em interação e gráficos. A separação principal é:

- `domain`: contratos e regras sem dependência de UI.
- `infrastructure`: Supabase e providers externos.
- `components`: design system e composição visual.
- `app`: rotas, layouts e endpoints.
- `data`: somente seed demonstrativo tipado.
- `supabase`: migrations versionadas e dados demo.

O tenant é derivado da sessão e da associação em `organization_members`. O servidor jamais deve autorizar uma consulta usando somente `organization_id` enviado pelo navegador. RLS repete essa garantia no PostgreSQL.

Integrações implementam contratos de provider. O mock informa `simulated: true`; providers reais devem manter tokens em cofre server-side e armazenar apenas referência em `integrations.secret_ref`.
