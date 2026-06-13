import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Award, ShieldCheck, Target } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { Section, Eyebrow } from "@/components/site/Section";
import { CountUp } from "@/components/site/CountUp";
import whyImg from "@/assets/why-choose.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Kenny Builders" },
      {
        name: "description",
        content:
          "Twelve years of construction excellence. Meet the team building Nigeria's future.",
      },
      { property: "og:title", content: "About Kenny Builders" },
      {
        property: "og:description",
        content: "Our story, mission, and the team behind every build.",
      },
    ],
  }),
  component: AboutPage,
});

const team = [
  { name: "Kehinde Olutayo", role: "Founder & Principal Engineer" },
  { name: "Adaramoye Mathew", role: "Director of Operations" },
  { name: "David James", role: "Head of Civil Engineering" },
  { name: "Adesola Emmanuel", role: "Head of Architecture" },
];

const stats = [
  { value: 70, suffix: "+", label: "Projects Completed" },
  { value: 12, suffix: "+", label: "Years of Experience" },
  { value: 20, suffix: "+", label: "Skilled Workers" },
  { value: 98, suffix: "%", label: "Client Satisfaction" },
];

function AboutPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="About Us"
        title="A Decade of Building With Discipline"
        subtitle="From a single-site contractor to a multidisciplinary construction firm, Kenny Builders has always operated on one principle: the work speaks first."
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <Eyebrow>Our Story</Eyebrow>
            <h2 className="mt-4 text-4xl uppercase text-navy-deep sm:text-5xl">
              From the foundation up.
            </h2>
            <div className="mt-6 space-y-4 text-base text-muted-foreground">
              <p>
                Founded in 2013 by Kenneth Olawale, Kenny Builders started with a single residential
                build in Lagos. Three principles drove it then and drive it now: deliver on
                schedule, deliver on budget, and never compromise on the build.
              </p>
              <p>
                Today, we operate across residential, commercial, contracting and civil
                infrastructure — but the same senior-led discipline runs every site.
              </p>
            </div>
          </div>
          <img
            src={whyImg}
            alt="Our team on site"
            className="h-full max-h-[460px] w-full object-cover"
            width={1280}
            height={1280}
            loading="lazy"
          />
        </div>
      </Section>

      <section className="bg-surface">
        <div className="mx-auto grid max-w-7xl gap-6 px-5 py-20 sm:grid-cols-2 lg:px-8">
          {[
            {
              Icon: Target,
              title: "Our Mission",
              body: "To deliver construction projects that meet the highest standards of safety, quality, and craftsmanship — on every site, on every shift.",
            },
            {
              Icon: Award,
              title: "Our Vision",
              body: "To be West Africa's most trusted construction partner — known for integrity, engineering rigor, and projects that stand for generations.",
            },
          ].map((c) => (
            <div key={c.title} className="border-t-2 border-accent bg-white p-8">
              <c.Icon className="h-8 w-8 text-navy" />
              <h3 className="mt-4 text-2xl uppercase text-navy-deep">{c.title}</h3>
              <p className="mt-3 text-base text-muted-foreground">{c.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-navy">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-y-10 px-5 py-14 lg:grid-cols-4 lg:gap-0 lg:px-8">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`px-4 text-white ${i !== 0 ? "lg:border-l lg:border-white/15" : ""}`}
            >
              <div className="font-display text-5xl text-accent sm:text-6xl">
                <CountUp to={s.value} suffix={s.suffix} />
              </div>
              <div className="mt-2 text-xs font-bold uppercase tracking-widest text-white/70">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      <Section>
        <Eyebrow>Meet The Team</Eyebrow>
        <h2 className="mt-4 max-w-2xl text-4xl uppercase text-navy-deep sm:text-5xl">
          Senior leadership on every project.
        </h2>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((m, i) => (
            <motion.div
              key={m.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="border border-border bg-white"
            >
              <div className="aspect-[4/5] bg-gradient-to-br from-navy to-navy-deep flex items-end justify-center">
                <div className="grid h-24 w-24 -mb-12 place-items-center bg-accent text-3xl font-display text-navy-deep">
                  {m.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
              </div>
              <div className="p-6 pt-16 text-center">
                <h3 className="text-lg uppercase text-navy-deep">{m.name}</h3>
                <p className="mt-1 text-xs font-bold uppercase tracking-widest text-navy-mid">
                  {m.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      <section className="border-t border-border bg-surface">
        <div className="mx-auto max-w-7xl px-5 py-14 lg:px-8">
          <p className="label-eyebrow text-muted-foreground text-center">
            Certifications & Memberships
          </p>
          <div className="mt-6 grid grid-cols-2 gap-6 sm:grid-cols-4">
            {["COREN", "NIOB", "ISO 9001", "ISO 45001"].map((c) => (
              <div
                key={c}
                className="grid h-20 place-items-center border border-border bg-white font-display text-xl text-navy"
              >
                <span className="flex items-center gap-2">
                  <ShieldCheck className="h-5 w-5 text-accent" /> {c}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy">
        <div className="mx-auto flex max-w-7xl flex-col items-start gap-6 px-5 py-16 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <h2 className="text-3xl uppercase text-white sm:text-4xl">
            Let's build something that lasts.
          </h2>
          <Link
            to="/contact"
            className="flex items-center gap-2 bg-accent px-7 py-4 text-xs font-bold uppercase tracking-widest text-navy-deep"
          >
            Start a Project <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}
