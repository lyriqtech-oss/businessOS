insert into public.plans(key,name,monthly_price_cents,limits) values
('start','Start',49700,'{"users":2,"numbers":1,"agents":1,"agent_messages":1200,"marketing_messages":50,"automations":3}'),
('business','Business',99700,'{"users":5,"numbers":1,"agents":3,"agent_messages":3000,"marketing_messages":200,"automations":10}'),
('growth','Growth',199700,'{"users":15,"numbers":2,"agents":8,"agent_messages":9000,"marketing_messages":500,"automations":30}'),
('scale','Scale',null,'{"custom":true,"sla":true,"multi_unit":true}');
insert into public.organizations(id,name,slug,segment,settings) values('b1000000-0000-4000-8000-000000000001','Vértice Estética Integrada','vertice-estetica','Clínica e estética','{"locale":"pt-BR","timezone":"America/Sao_Paulo","campaign_approval":true}');
insert into public.products(id,organization_id,name,description,price_cents) values('b2000000-0000-4000-8000-000000000001','b1000000-0000-4000-8000-000000000001','Clube Vértice','Programa anual de benefícios e acompanhamento',590000);
insert into public.services(id,organization_id,name,duration_minutes,price_cents) values
('b3000000-0000-4000-8000-000000000001','b1000000-0000-4000-8000-000000000001','Protocolo Lumina',90,720000),
('b3000000-0000-4000-8000-000000000002','b1000000-0000-4000-8000-000000000001','Contour 8',60,385000);
insert into public.contacts(id,organization_id,full_name,email,phone,company_name,source) values
('b4000000-0000-4000-8000-000000000001','b1000000-0000-4000-8000-000000000001','Marina Costa','marina@atelieaurora.com.br','+5551991244732','Ateliê Aurora','Instagram'),
('b4000000-0000-4000-8000-000000000002','b1000000-0000-4000-8000-000000000001','Bianca Freire','bianca.freire@email.com','+5551998702194','Particular','WhatsApp'),
('b4000000-0000-4000-8000-000000000003','b1000000-0000-4000-8000-000000000001','Ricardo Tavares','ricardo@nexoarquitetura.com.br','+5551988826011','Nexo Arquitetura','Indicação');
