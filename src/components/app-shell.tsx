"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Activity, BarChart3, Bell, Bot, BriefcaseBusiness, CalendarDays, ChevronDown, CircleDollarSign, ContactRound, FileText, Gauge, Inbox, LayoutDashboard, Megaphone, Menu, Plus, Search, Settings, Users, Workflow, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { demoOrganization } from "@/data/demo";
import { toast } from "sonner";

const navigation = [
  ["Visão geral", "/app/overview", LayoutDashboard], ["Caixa de entrada", "/app/inbox", Inbox], ["CRM", "/app/crm", ContactRound], ["Vendas", "/app/sales", BriefcaseBusiness], ["Agenda", "/app/calendar", CalendarDays], ["Financeiro", "/app/finance", CircleDollarSign], ["Marketing", "/app/marketing", Megaphone], ["Automações", "/app/automations", Workflow], ["Agentes", "/app/agents", Bot], ["Conhecimento", "/app/knowledge", FileText], ["Relatórios", "/app/reports", BarChart3], ["Integrações", "/app/integrations", Activity], ["Equipe", "/app/team", Users], ["Configurações", "/app/settings", Settings],
] as const;

export function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(false);
  const [mobile, setMobile] = useState(false);
  const [palette, setPalette] = useState(false);
  useEffect(() => {
    const handler = (event: KeyboardEvent) => { if ((event.metaKey || event.ctrlKey) && event.key === "k") { event.preventDefault(); setPalette(true); } };
    window.addEventListener("keydown", handler); return () => window.removeEventListener("keydown", handler);
  }, []);

  return <div className="min-h-screen bg-[var(--background)]">
    {mobile && <button aria-label="Fechar menu" onClick={() => setMobile(false)} className="fixed inset-0 z-30 bg-black/35 lg:hidden" />}
    <aside className={cn("fixed inset-y-0 left-0 z-40 flex flex-col border-r bg-[var(--surface)] transition-all", collapsed ? "w-[76px]" : "w-[248px]", mobile ? "translate-x-0" : "-translate-x-full lg:translate-x-0")}>
      <div className="flex h-16 items-center gap-3 border-b px-5">
        <div className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-[#165dff] text-sm font-black text-white">L</div>
        {!collapsed && <div><p className="text-sm font-bold leading-tight">Lyriq</p><p className="text-[11px] text-[var(--muted)]">Business OS</p></div>}
        <button onClick={() => setMobile(false)} className="ml-auto lg:hidden"><X size={18}/></button>
      </div>
      <nav aria-label="Principal" className="flex-1 space-y-1 overflow-y-auto p-3">
        {navigation.map(([label, href, Icon]) => <Link key={href} href={href} onClick={() => setMobile(false)} title={collapsed ? label : undefined} className={cn("flex h-10 items-center gap-3 rounded-lg px-3 text-sm font-medium text-[var(--muted)] transition hover:bg-[var(--surface-2)] hover:text-[var(--foreground)]", pathname === href && "bg-[var(--primary-soft)] text-[var(--primary)]")}><Icon size={18}/>{!collapsed && <span>{label}</span>}</Link>)}
      </nav>
      <div className="border-t p-3">
        <Link href="/app/billing" className="mb-2 block rounded-lg bg-[var(--surface-2)] p-3">
          {!collapsed ? <><div className="flex items-center justify-between text-xs font-semibold"><span>Uso do plano</span><span>68%</span></div><div className="my-2 h-1.5 overflow-hidden rounded bg-[var(--border)]"><div className="h-full w-[68%] bg-[var(--primary)]"/></div><p className="text-[11px] text-[var(--muted)]">2.041 de 3.000 mensagens</p></> : <Gauge size={18}/>} 
        </Link>
        <button className="hidden h-9 w-full items-center justify-center rounded-lg hover:bg-[var(--surface-2)] lg:flex" onClick={() => setCollapsed(!collapsed)} aria-label="Recolher menu"><Menu size={18}/></button>
      </div>
    </aside>
    <div className={cn("transition-all", collapsed ? "lg:pl-[76px]" : "lg:pl-[248px]")}>
      <header className="sticky top-0 z-20 flex h-16 items-center gap-3 border-b bg-[color:var(--surface)]/95 px-4 backdrop-blur md:px-6">
        <button className="lg:hidden" onClick={() => setMobile(true)} aria-label="Abrir menu"><Menu size={20}/></button>
        <button className="flex min-w-0 items-center gap-2 text-left text-sm font-semibold"><span className="truncate">{demoOrganization.name}</span><ChevronDown size={14}/></button>
        <button onClick={() => setPalette(true)} className="ml-auto hidden h-9 w-full max-w-sm items-center gap-2 rounded-lg border bg-[var(--background)] px-3 text-sm text-[var(--muted)] md:flex"><Search size={16}/><span>Pesquisar em tudo...</span><kbd className="ml-auto rounded border px-1.5 py-0.5 text-[10px]">⌘K</kbd></button>
        <button className="btn-primary !min-h-9 !px-3" onClick={() => toast.success("Ação rápida pronta", { description:"Escolha o tipo de registro na próxima etapa." })}><Plus size={16}/><span className="hidden sm:inline">Criar</span></button>
        <button className="relative rounded-lg p-2 hover:bg-[var(--surface-2)]" onClick={() => toast("3 notificações pendentes")} aria-label="Notificações"><Bell size={18}/><span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-[#165dff]"/></button>
        <div className="grid h-9 w-9 place-items-center rounded-full bg-[#111318] text-xs font-bold text-white">AW</div>
      </header>
      <main className="mx-auto max-w-[1600px] p-4 md:p-6 lg:p-8">{children}</main>
    </div>
    {palette && <div className="fixed inset-0 z-50 flex justify-center bg-black/45 px-4 pt-[12vh]" onMouseDown={() => setPalette(false)}><div className="card h-fit w-full max-w-xl overflow-hidden" onMouseDown={e => e.stopPropagation()}><div className="flex items-center gap-3 border-b p-4"><Search size={18}/><input autoFocus className="w-full bg-transparent outline-none" placeholder="Contatos, oportunidades, tarefas, campanhas..."/><button onClick={() => setPalette(false)}><X size={18}/></button></div><div className="p-3"><p className="label px-2 py-2">Acessos rápidos</p>{navigation.slice(0,7).map(([label,href,Icon]) => <Link onClick={() => setPalette(false)} key={href} href={href} className="flex items-center gap-3 rounded-lg p-3 text-sm hover:bg-[var(--surface-2)]"><Icon size={17}/>{label}</Link>)}</div></div></div>}
  </div>;
}
