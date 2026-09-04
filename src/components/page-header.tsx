export function PageHeader({ eyebrow, title, description, action }: { eyebrow?: string; title: string; description: string; action?: React.ReactNode }) {
  return <div className="mb-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-end"><div>{eyebrow && <p className="label mb-2 text-[var(--primary)]">{eyebrow}</p>}<h1 className="text-2xl font-bold tracking-tight md:text-[28px]">{title}</h1><p className="mt-1 max-w-3xl text-sm text-[var(--muted)]">{description}</p></div>{action}</div>;
}
