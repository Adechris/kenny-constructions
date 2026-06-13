import { Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { Menu, X, HardHat } from "lucide-react";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/projects", label: "Projects" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 bg-white transition-shadow ${scrolled ? "shadow-[0_1px_0_var(--border),0_8px_24px_-12px_rgba(11,37,69,0.12)]" : "border-b border-border"}`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <Link to="/" className="flex items-center gap-2">
          <span className="grid h-9 w-9 place-items-center bg-navy">
            <HardHat className="h-5 w-5 text-accent" strokeWidth={2.5} />
          </span>
          <span className="font-display text-xl tracking-tight text-navy">
            KENNY<span className="text-accent">.</span>BUILDERS
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-sm font-semibold uppercase tracking-wider text-navy/80 transition-colors hover:text-navy"
              activeProps={{ className: "text-navy border-b-2 border-accent pb-1" }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <Link
          to="/contact"
          className="hidden bg-navy px-5 py-3 text-xs font-bold uppercase tracking-wider text-white transition-colors hover:bg-accent hover:text-navy-deep lg:inline-block"
        >
          Get a Free Quote
        </Link>

        <button
          aria-label="Menu"
          onClick={() => setOpen((v) => !v)}
          className="grid h-10 w-10 place-items-center bg-navy text-white lg:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-white lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col px-5 py-4">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="border-b border-border py-3 text-sm font-bold uppercase tracking-wider text-navy"
              >
                {l.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-4 bg-accent px-5 py-3 text-center text-xs font-bold uppercase tracking-wider text-navy-deep"
            >
              Get a Free Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
