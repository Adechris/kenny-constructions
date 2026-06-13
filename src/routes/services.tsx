import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Home, Building2, Wrench, Construction, Check, ArrowRight } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import residentialImg from "@/assets/project-residential.jpg";
import commercialImg from "@/assets/project-commercial.jpg";
import infraImg from "@/assets/project-infrastructure.jpg";
import contractingImg from "@/assets/project-contracting.jpg";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Kenny Builders" },
      { name: "description", content: "Residential, commercial, contracting and civil engineering services across Nigeria." },
      { property: "og:title", content: "Kenny Builders Services" },
      { property: "og:description", content: "Four disciplines. One uncompromising standard." },
    ],
  }),
  component: ServicesPage,
});

const services = [
  {
    Icon: Home,
    title: "Residential Building & Renovation",
    img: residentialImg,
    desc: "From custom family homes to multi-unit estates, we deliver living spaces designed for life — and built to outlast trends.",
    features: ["New build single & multi-family homes", "Full-scope renovations", "Estate & terrace development", "Interior fit-out coordination"],
  },
  {
    Icon: Building2,
    title: "Commercial Construction",
    img: commercialImg,
    desc: "Offices, retail, hospitality and mixed-use developments built to drive measurable business performance.",
    features: ["Office towers & headquarters", "Retail & hospitality interiors", "Mixed-use developments", "MEP coordination & commissioning"],
  },
  {
    Icon: Wrench,
    title: "General Contracting",
    img: contractingImg,
    desc: "A single, accountable partner running every trade. Predictable timelines, transparent cost control, zero hand-off gaps.",
    features: ["End-to-end project management", "Trade coordination & scheduling", "Procurement & cost control", "Quality assurance & site safety"],
  },
  {
    Icon: Construction,
    title: "Civil Engineering & Infrastructure",
    img: infraImg,
    desc: "Roads, bridges, drainage and public infrastructure engineered for decades of service in demanding conditions.",
    features: ["Highways & access roads", "Bridges & overpasses", "Drainage & flood control", "Site grading & earthworks"],
  },
];

function ServicesPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Our Services"
        title="Four Disciplines. One Standard."
        subtitle="Whatever the scale or sector, the same senior-led discipline runs every Kenny Builders project."
      />

      {services.map((s, i) => (
        <section key={s.title} className={i % 2 === 1 ? "bg-surface" : ""}>
          <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-24">
            <div className={`grid gap-12 lg:grid-cols-2 lg:gap-16 ${i % 2 === 1 ? "lg:[&>div:first-child]:order-2" : ""}`}>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <img src={s.img} alt={s.title} className="h-full max-h-[480px] w-full object-cover" width={1280} height={960} loading="lazy" />
              </motion.div>
              <div>
                <div className="flex items-center gap-3">
                  <span className="grid h-12 w-12 place-items-center bg-navy text-accent">
                    <s.Icon className="h-6 w-6" />
                  </span>
                  <span className="label-eyebrow text-navy-mid">Service 0{i + 1}</span>
                </div>
                <h2 className="mt-5 text-4xl uppercase text-navy-deep sm:text-5xl">{s.title}</h2>
                <p className="mt-5 text-base text-muted-foreground">{s.desc}</p>
                <ul className="mt-8 space-y-3">
                  {s.features.map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center bg-accent">
                        <Check className="h-4 w-4 text-navy-deep" strokeWidth={3} />
                      </span>
                      <span className="font-semibold text-navy-deep">{f}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/contact" className="mt-8 inline-flex items-center gap-2 bg-navy px-6 py-3.5 text-xs font-bold uppercase tracking-widest text-white transition-colors hover:bg-accent hover:text-navy-deep">
                  Request This Service <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      ))}
    </SiteLayout>
  );
}
