# Banco de dados

A migration inicial cria os domínios mínimos solicitados, índices por `organization_id`, RLS e restrições de idempotência. `profiles` referencia `auth.users`; `organization_members` é a fonte de vínculo e papel.

Aplicação local:

```bash
supabase start
supabase db reset
```

O seed conta a história da clínica Vértice Estética Integrada. Usuários dependem de identidades criadas pelo Supabase Auth e por isso não são inseridos diretamente em `auth.users` pelo seed da aplicação.

Pendências: triggers de `updated_at`, auditoria automática, RPCs de RBAC, política granular por ação e migrations de rollback operacional.
