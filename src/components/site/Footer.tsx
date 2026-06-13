import { Link } from "@tanstack/react-router";
import { HardHat, Facebook, Instagram, Linkedin, Twitter, MapPin, Phone, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-navy-deep text-white">
      <div className="h-2 yellow-stripe" />
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 lg:grid-cols-4 lg:px-8">
        <div>
          <div className="flex items-center gap-2">
            <span className="grid h-9 w-9 place-items-center bg-accent">
              <HardHat className="h-5 w-5 text-navy-deep" strokeWidth={2.5} />
            </span>
            <span className="font-display text-xl">
              KENNY<span className="text-accent">.</span>BUILDERS
            </span>
          </div>
          <p className="mt-4 text-sm text-white/70">Building Excellence, One Project at a Time.</p>
        </div>

        <div>
          <h4 className="label-eyebrow text-accent">Quick Links</h4>
          <ul className="mt-4 space-y-2 text-sm text-white/80">
            <li>
              <Link to="/" className="hover:text-accent">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-accent">
                About
              </Link>
            </li>
            <li>
              <Link to="/projects" className="hover:text-accent">
                Projects
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-accent">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="label-eyebrow text-accent">Services</h4>
          <ul className="mt-4 space-y-2 text-sm text-white/80">
            <li>Residential Building</li>
            <li>Commercial Construction</li>
            <li>General Contracting</li>
            <li>Civil Infrastructure</li>
          </ul>
        </div>

        <div>
          <h4 className="label-eyebrow text-accent">Contact</h4>
          <ul className="mt-4 space-y-3 text-sm text-white/80">
            <li className="flex gap-2">
              <MapPin className="h-4 w-4 shrink-0 text-accent" />
              24 Funsho Owoyemi Street, Abule Egba, Lagos
            </li>
            <li className="flex gap-2">
              <Phone className="h-4 w-4 shrink-0 text-accent" />
              +234 810 310 4179
            </li>
            <li className="flex gap-2">
              <Mail className="h-4 w-4 shrink-0 text-accent" />
              hello@kennybuilders.ng
            </li>
          </ul>
          <div className="mt-5 flex gap-3">
            {[Facebook, Instagram, Linkedin, Twitter].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="social"
                className="grid h-9 w-9 place-items-center border border-white/20 transition-colors hover:border-accent hover:text-accent"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-2 px-5 py-5 text-xs text-white/60 sm:flex-row sm:items-center lg:px-8">
          <span>© 2026 Kenny Builders. All rights reserved.</span>
          <span>Licensed · Insured · CAC RC 1342901</span>
        </div>
      </div>
    </footer>
  );
}
