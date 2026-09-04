"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { ArrowRight, LockKeyhole } from "lucide-react";

export default function LoginPage() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  return <main className="grid min-h-screen bg-[var(--surface)] lg:grid-cols-[1fr_1.05fr]">
    <section className="flex flex-col p-6 md:p-12">
      <div className="flex items-center gap-3"><div className="grid h-9 w-9 place-items-center rounded-lg bg-[#165dff] font-black text-white">L</div><div><p className="font-bold">Lyriq</p><p className="text-xs text-[var(--muted)]">Business OS</p></div></div>
      <div className="m-auto w-full max-w-md py-12">
        <p className="label text-[var(--primary)]">ACESSO SEGURO</p><h1 className="mt-3 text-3xl font-bold tracking-tight">Sua operação começa aqui.</h1><p className="mt-2 text-sm leading-6 text-[var(--muted)]">Entre no ambiente da sua empresa ou acesse a organização demonstrativa.</p>
        <form onSubmit={(event) => { event.preventDefault(); setLoading(true); router.push("/app/overview"); }} className="mt-8 space-y-4">
          <label className="block"><span className="mb-2 block text-sm font-semibold">E-mail</span><input className="input" type="email" defaultValue="augusto@lyriq.com.br" required /></label>
          <label className="block"><span className="mb-2 block text-sm font-semibold">Senha</span><input className="input" type="password" defaultValue="demonstracao" required minLength={8} /></label>
          <div className="flex items-center justify-between text-sm"><label className="flex items-center gap-2"><input type="checkbox" /> Manter conectado</label><button type="button" className="text-[var(--primary)]">Recuperar senha</button></div>
          <button disabled={loading} className="btn-primary w-full">{loading ? "Entrando..." : "Entrar na demonstração"}<ArrowRight size={16} /></button>
        </form>
        <div className="mt-6 flex items-center gap-2 rounded-lg bg-[var(--surface-2)] p-3 text-xs text-[var(--muted)]"><LockKeyhole size={16} /> Modo demo. O Supabase Auth assume este fluxo quando as variáveis forem configuradas.</div>
        <p className="mt-6 text-center text-sm text-[var(--muted)]">Primeiro acesso? <Link href="/onboarding" className="font-semibold text-[var(--primary)]">Configurar empresa</Link></p>
      </div>
    </section>
    <aside className="hidden overflow-hidden bg-[#10141d] p-12 text-white lg:flex lg:flex-col"><div className="m-auto max-w-xl"><p className="text-sm font-semibold text-blue-400">O SISTEMA OPERACIONAL DO SEU NEGÓCIO</p><h2 className="mt-5 text-5xl font-semibold leading-[1.08] tracking-[-.04em]">Toda a sua empresa.<br />Operada por agentes.</h2><p className="mt-6 max-w-lg text-lg leading-8 text-slate-400">Atendimento, vendas, agenda, financeiro e marketing conectados por uma camada operacional inteligente.</p><div className="mt-14 grid grid-cols-3 gap-3"><Metric value="31,8%" label="conversão" /><Metric value="3m 42s" label="resposta média" /><Metric value="R$ 84 mil" label="receita no mês" /></div></div><p className="text-xs text-slate-500">Lyriq Business OS · Alpha operacional</p></aside>
  </main>;
}

function Metric({ value, label }: { value: string; label: string }) { return <div className="border-t border-slate-700 pt-4"><p className="text-xl font-bold">{value}</p><p className="mt-1 text-xs text-slate-500">{label}</p></div>; }
