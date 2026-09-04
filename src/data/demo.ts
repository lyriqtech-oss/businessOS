import type { Deal } from "@/domain/types";

export const demoOrganization = { id: "b1000000-0000-4000-8000-000000000001", name: "Vértice Estética Integrada", segment: "Clínica e estética", plan: "Business" };
export const metrics = [
  { label: "Receita no período", value: "R$ 84.720", change: "+12,4%", tone: "good" },
  { label: "Receita prevista", value: "R$ 126.400", change: "+8,1%", tone: "good" },
  { label: "Novas oportunidades", value: "93", change: "+18", tone: "good" },
  { label: "Conversão", value: "31,8%", change: "+3,2 p.p.", tone: "good" },
  { label: "Ticket médio", value: "R$ 1.940", change: "-2,1%", tone: "warn" },
  { label: "Tempo de resposta", value: "3min 42s", change: "-28%", tone: "good" },
];
export const revenue = [
  { month: "Abr", realized: 52000, forecast: 59000 }, { month: "Mai", realized: 61000, forecast: 67000 },
  { month: "Jun", realized: 58700, forecast: 72000 }, { month: "Jul", realized: 73500, forecast: 84000 },
  { month: "Ago", realized: 78100, forecast: 96000 }, { month: "Set", realized: 84720, forecast: 126400 },
];
export const deals: Deal[] = [
  { id:"d1", title:"Protocolo facial anual", contact:"Marina Costa", company:"Ateliê Aurora", owner:"Camila Nunes", value:7200, probability:75, stage:"Proposta", source:"Instagram", product:"Protocolo Lumina", expectedClose:"2026-09-09", lastInteraction:"Hoje, 14:32", nextAction:"Confirmar condições" },
  { id:"d2", title:"Pacote corporativo", contact:"Ricardo Tavares", company:"Nexo Arquitetura", owner:"Rafael Moura", value:12400, probability:50, stage:"Diagnóstico", source:"Indicação", product:"Bem-estar corporativo", expectedClose:"2026-09-18", lastInteraction:"Ontem, 17:10", nextAction:"Enviar proposta" },
  { id:"d3", title:"Tratamento corporal", contact:"Bianca Freire", company:"Particular", owner:"Camila Nunes", value:3850, probability:85, stage:"Negociação", source:"WhatsApp", product:"Contour 8", expectedClose:"2026-09-06", lastInteraction:"Hoje, 10:05", nextAction:"Aprovar desconto" },
  { id:"d4", title:"Renovação VIP", contact:"Helena Paiva", company:"Estúdio Paiva", owner:"Rafael Moura", value:5900, probability:30, stage:"Qualificação", source:"Automação", product:"Clube Vértice", expectedClose:"2026-09-21", lastInteraction:"Há 6 dias", nextAction:"Retomar contato" },
];
export const conversations = [
  { name:"Marina Costa", channel:"WhatsApp", preview:"Pode reservar terça às 16h?", time:"14:32", unread:2, intent:"Agendamento", sentiment:"Positivo", ai:true },
  { name:"Bianca Freire", channel:"Instagram", preview:"Queria entender as formas de pagamento", time:"13:08", unread:1, intent:"Compra", sentiment:"Neutro", ai:false },
  { name:"Eduardo Salles", channel:"E-mail", preview:"Enviei o comprovante em anexo.", time:"11:47", unread:0, intent:"Pagamento", sentiment:"Positivo", ai:true },
  { name:"Helena Paiva", channel:"WhatsApp", preview:"Vou pensar e retorno esta semana.", time:"Ontem", unread:0, intent:"Objeção", sentiment:"Neutro", ai:true },
];
export const appointments = [
  { time:"09:00", title:"Avaliação facial", client:"Aline Pires", professional:"Dra. Lívia", status:"Confirmado" },
  { time:"10:30", title:"Protocolo Lumina", client:"Marina Costa", professional:"Dra. Lívia", status:"Aguardando" },
  { time:"14:00", title:"Contour 8", client:"Bianca Freire", professional:"Carla Reis", status:"Confirmado" },
  { time:"16:30", title:"Retorno", client:"Fernanda Luz", professional:"Dra. Lívia", status:"Confirmado" },
];
export const integrations = ["WhatsApp Cloud API","Instagram","Google Calendar","Outlook","Gmail","Mercado Pago","Asaas","Stripe","Shopify","WooCommerce","Webhooks","API pública"];
export const team = [
  { name:"Augusto Weymar", role:"Proprietário", area:"Direção", status:"Ativo" },
  { name:"Camila Nunes", role:"Gestor", area:"Comercial", status:"Ativo" },
  { name:"Rafael Moura", role:"Vendedor", area:"Comercial", status:"Ativo" },
  { name:"Júlia Severo", role:"Atendente", area:"Relacionamento", status:"Ativo" },
  { name:"Larissa Fontes", role:"Financeiro", area:"Financeiro", status:"Convite pendente" },
];
export const agents = [
  { name:"Clara", role:"Agente comercial", model:"Econômico", status:"Ativo", actions:684, conversion:"18,6%", spend:"R$ 42,18" },
  { name:"Nina", role:"Agente de atendimento", model:"Econômico", status:"Ativo", actions:1221, conversion:"92% resolvido", spend:"R$ 31,04" },
  { name:"Otto", role:"Agente analista", model:"Avançado", status:"Pausado", actions:48, conversion:"12 relatórios", spend:"R$ 18,70" },
];
