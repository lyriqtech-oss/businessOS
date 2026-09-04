# Segurança

## Controles presentes

- Supabase Auth preparado para SSR.
- Isolamento multiempresa por RLS e função `is_org_member`.
- Matriz RBAC no domínio, a ser aplicada em todas as Server Actions.
- Idempotência prevista em mensagens e transações.
- Auditoria e aprovação humana modeladas.
- Segredos apenas em variáveis server-side.
- Admin Lyriq identificado fora do papel da organização.

## Antes de produção

- Ativar MFA para administradores e proteção contra senhas vazadas.
- Implementar rate limiting distribuído, CSRF onde aplicável e headers CSP.
- Validar assinatura e replay window de cada webhook.
- Usar vault/KMS para tokens OAuth, nunca JSON no banco.
- Sanitizar MIME, tamanho e conteúdo de uploads; antivírus assíncrono.
- Adicionar testes negativos de RLS entre duas organizações.
- Implementar política LGPD de exportação, retenção e exclusão.
- Configurar PITR, backups testados, alertas e resposta a incidentes.
- Tratar conteúdo recuperado por RAG como dado não confiável e exigir confirmação para ferramentas sensíveis.

O ambiente alpha não deve receber dados pessoais reais nem credenciais de produção.
