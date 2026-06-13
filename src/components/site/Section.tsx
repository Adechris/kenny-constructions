import type { ReactNode } from "react";

export function Section({
  children,
  className = "",
  dark = false,
}: {
  children: ReactNode;
  className?: string;
  dark?: boolean;
}) {
  return (
    <section className={`${dark ? "bg-navy-deep text-white" : ""} ${className}`}>
      <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">{children}</div>
    </section>
  );
}

export function Eyebrow({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return (
    <div className="flex items-center gap-3">
      <span className="h-px w-8 bg-accent" />
      <span className={`label-eyebrow ${light ? "text-accent" : "text-navy-mid"}`}>{children}</span>
    </div>
  );
}
