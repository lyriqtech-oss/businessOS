# Integrações

Todos os conectores começam desconectados. A UI nunca afirma uma conexão sem teste válido.

Adapters planejados: WhatsApp Cloud API, Instagram Graph API, Google Calendar, Microsoft Graph, Gmail, Mercado Pago, Asaas, Stripe, Shopify, WooCommerce, webhooks e API pública.

O contrato `IntegrationProvider` cobre conexão, teste e desconexão. `MockIntegrationProvider` permite validar UX sem credenciais e retorna explicitamente `simulated: true`.

Providers reais devem implementar timeout, retry com backoff, circuit breaker, idempotência, validação de assinatura, rotação de segredo e logs sem conteúdo sensível. OAuth exige `state`, PKCE quando suportado e callback allowlist.
