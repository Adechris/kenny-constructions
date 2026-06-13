export function PageHero({ eyebrow, title, subtitle }: { eyebrow: string; title: string; subtitle?: string }) {
  return (
    <section className="relative overflow-hidden bg-navy-deep text-white">
      <div className="absolute inset-0 opacity-30" style={{
        backgroundImage: "radial-gradient(circle at 20% 20%, #1B4D8E 0%, transparent 50%), radial-gradient(circle at 80% 80%, #1B4D8E 0%, transparent 50%)"
      }} />
      <div className="absolute -bottom-px left-0 right-0 h-1.5 yellow-stripe opacity-90" />
      <div className="relative mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32">
        <div className="flex items-center gap-3">
          <span className="h-px w-10 bg-accent" />
          <span className="label-eyebrow text-accent">{eyebrow}</span>
        </div>
        <h1 className="mt-4 max-w-3xl text-5xl uppercase sm:text-6xl lg:text-7xl">{title}</h1>
        {subtitle && <p className="mt-5 max-w-2xl text-base text-white/75 lg:text-lg">{subtitle}</p>}
      </div>
    </section>
  );
}
