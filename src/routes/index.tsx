import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  Home,
  Building2,
  Wrench,
  Construction,
  ArrowRight,
  Check,
  Star,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useState, useEffect } from "react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { CountUp } from "@/components/site/CountUp";
import { Section, Eyebrow } from "@/components/site/Section";
import heroImg from "@/assets/hero-construction.jpg";
import whyImg from "@/assets/why-choose.jpg";
import residentialImg from "@/assets/project-residential.jpg";
import commercialImg from "@/assets/project-commercial.jpg";
import infraImg from "@/assets/project-infrastructure.jpg";
import contractingImg from "@/assets/project-contracting.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Kenny Builders — We Build What Lasts" },
      {
        name: "description",
        content:
          "Full-service construction company delivering residential, commercial, contracting and civil infrastructure projects across Nigeria.",
      },
      { property: "og:title", content: "Kenny Builders — We Build What Lasts" },
      {
        property: "og:description",
        content: "Precision, quality, integrity. 150+ projects completed, 12+ years of experience.",
      },
    ],
  }),
  component: HomePage,
});

const services = [
  {
    Icon: Home,
    title: "Residential Building & Renovation",
    desc: "Custom homes, estates and renovations crafted with timeless quality.",
  },
  {
    Icon: Building2,
    title: "Commercial Construction",
    desc: "Offices, retail, hospitality — built to drive business performance.",
  },
  {
    Icon: Wrench,
    title: "General Contracting",
    desc: "End-to-end project management with a single point of accountability.",
  },
  {
    Icon: Construction,
    title: "Civil Engineering & Infrastructure",
    desc: "Roads, bridges and public infrastructure built to outlast generations.",
  },
];

const stats = [
  { value: 70, suffix: "+", label: "Projects Completed" },
  { value: 12, suffix: "+", label: "Years of Experience" },
  { value: 20, suffix: "+", label: "Skilled Workers" },
  { value: 98, suffix: "%", label: "Client Satisfaction" },
];

const projects = [
  { img: residentialImg, name: "Lekki Pearl Estate", tag: "Residential", location: "Lagos, NG" },
  { img: commercialImg, name: "Marina Corporate Tower", tag: "Commercial", location: "Lagos, NG" },
  { img: infraImg, name: "Third Mainland Expansion", tag: "Infrastructure", location: "Lagos, NG" },
  { img: contractingImg, name: "Apapa Logistics Hub", tag: "Contracting", location: "Lagos, NG" },
  { img: residentialImg, name: "Maitama Villas", tag: "Residential", location: "Abuja, NG" },
];

const testimonials = [
  {
    quote:
      "Kenny Builders delivered our headquarters two weeks ahead of schedule with zero compromise on quality. They set a new standard.",
    name: "Adeoye Abraham",
    role: "CEO, Adeoye Holdings",
    stars: 5,
  },
  {
    quote:
      "Transparent, communicative, and meticulous. Our family home turned out beyond what we imagined.",
    name: "Tunde Adebare",
    role: "Private Client",
    stars: 5,
  },
  {
    quote:
      "From planning to handover, the team operated like clockwork. The civil works are flawless.",
    name: "Engr. Mark Adesanya",
    role: "State Infrastructure Board",
    stars: 5,
  },
];

function HomePage() {
  return (
    <SiteLayout>
      <Hero />
      <StatsStrip />
      <Services />
      <WhyChoose />
      <FeaturedProjects />
      <Process />
      <Testimonials />
      <CTABanner />
    </SiteLayout>
  );
}

function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-navy-deep">
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.6, ease: "easeOut" }}
        className="absolute inset-0"
      >
        <img
          src={heroImg}
          alt="Construction site at dusk"
          className="h-full w-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-deep via-navy-deep/85 to-navy/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-transparent to-transparent" />
      </motion.div>

      <div className="relative mx-auto flex min-h-[88vh] max-w-7xl flex-col justify-center px-5 py-28 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
        >
          <Eyebrow light>Building Nigeria's Future</Eyebrow>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.8 }}
          className="mt-6 max-w-4xl text-5xl uppercase text-white sm:text-6xl lg:text-7xl xl:text-[5.5rem]"
        >
          We Build What <span className="text-accent">Lasts</span> — From Foundation to Finish
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.7 }}
          className="mt-6 max-w-2xl text-base text-white/80 sm:text-lg"
        >
          Kenny Builders delivers residential, commercial, and infrastructure projects with
          precision, quality, and integrity.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.75, duration: 0.7 }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <Link
            to="/contact"
            className="group flex items-center gap-2 bg-accent px-7 py-4 text-xs font-bold uppercase tracking-widest text-navy-deep transition-transform hover:translate-y-[-2px]"
          >
            Request a Quote{" "}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            to="/projects"
            className="group flex items-center gap-2 border-2 border-white/70 px-7 py-4 text-xs font-bold uppercase tracking-widest text-white transition-colors hover:border-accent hover:text-accent"
          >
            View Our Projects{" "}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-1.5 yellow-stripe" />
    </section>
  );
}

function StatsStrip() {
  return (
    <section className="bg-navy">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-y-10 px-5 py-14 lg:grid-cols-4 lg:gap-0 lg:px-8">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className={`px-4 text-white ${i !== 0 ? "lg:border-l lg:border-white/15" : ""}`}
          >
            <div className="font-display text-5xl text-accent sm:text-6xl">
              <CountUp to={s.value} suffix={s.suffix} />
            </div>
            <div className="mt-2 text-xs font-bold uppercase tracking-widest text-white/70">
              {s.label}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function Services() {
  return (
    <Section>
      <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
        <div>
          <Eyebrow>What We Do</Eyebrow>
          <h2 className="mt-4 max-w-2xl text-4xl uppercase text-navy-deep sm:text-5xl">
            Four disciplines. One uncompromising standard.
          </h2>
        </div>
        <Link
          to="/services"
          className="group flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-navy hover:text-navy-mid"
        >
          All Services{" "}
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="group relative border border-border bg-white p-7 transition-all hover:-translate-y-1 hover:shadow-[0_20px_40px_-20px_rgba(11,37,69,0.25)]"
          >
            <div className="absolute inset-x-0 top-0 h-1 bg-navy transition-colors group-hover:bg-accent" />
            <div className="grid h-12 w-12 place-items-center bg-surface text-navy">
              <s.Icon className="h-6 w-6" strokeWidth={2} />
            </div>
            <h3 className="mt-5 text-xl uppercase text-navy-deep">{s.title}</h3>
            <p className="mt-3 text-sm text-muted-foreground">{s.desc}</p>
            <Link
              to="/services"
              className="mt-5 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-navy-mid hover:text-accent"
            >
              Learn More <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

function WhyChoose() {
  const points = [
    "Licensed & Insured Professionals",
    "On-Time, On-Budget Delivery",
    "Quality Materials & Craftsmanship",
    "Transparent Communication Throughout",
  ];
  return (
    <section className="bg-surface">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-28">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <img
            src={whyImg}
            alt="Engineers reviewing blueprints"
            className="h-full max-h-[560px] w-full object-cover"
            width={1280}
            height={1280}
            loading="lazy"
          />
          <div className="absolute -bottom-6 -right-6 hidden bg-accent p-6 sm:block">
            <div className="font-display text-5xl text-navy-deep">
              12<span className="text-3xl">+</span>
            </div>
            <div className="text-xs font-bold uppercase tracking-widest text-navy-deep">
              Years Building
            </div>
          </div>
        </motion.div>

        <div>
          <Eyebrow>Why Kenny Builders</Eyebrow>
          <h2 className="mt-4 text-4xl uppercase text-navy-deep sm:text-5xl">
            Built on Trust, Delivered with Precision
          </h2>
          <p className="mt-5 text-base text-muted-foreground">
            From our first site visit to final handover, every project is run by senior
            professionals who treat your investment like their own.
          </p>
          <ul className="mt-8 space-y-4">
            {points.map((p, i) => (
              <motion.li
                key={p}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex items-start gap-3"
              >
                <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center bg-accent">
                  <Check className="h-4 w-4 text-navy-deep" strokeWidth={3} />
                </span>
                <span className="text-base font-semibold text-navy-deep">{p}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function FeaturedProjects() {
  const [emblaRef, embla] = useEmblaCarousel({ align: "start", loop: false });
  const prev = useCallback(() => embla?.scrollPrev(), [embla]);
  const next = useCallback(() => embla?.scrollNext(), [embla]);

  return (
    <Section>
      <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
        <div>
          <Eyebrow>Our Recent Work</Eyebrow>
          <h2 className="mt-4 max-w-2xl text-4xl uppercase text-navy-deep sm:text-5xl">
            Projects that shape skylines.
          </h2>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={prev}
            aria-label="Previous"
            className="grid h-11 w-11 place-items-center border border-navy text-navy hover:bg-navy hover:text-white"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={next}
            aria-label="Next"
            className="grid h-11 w-11 place-items-center border border-navy bg-navy text-white hover:bg-accent hover:text-navy-deep hover:border-accent"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>

      <div className="mt-12 overflow-hidden" ref={emblaRef}>
        <div className="flex gap-6">
          {projects.map((p) => (
            <div
              key={p.name}
              className="min-w-0 flex-[0_0_85%] sm:flex-[0_0_55%] lg:flex-[0_0_40%]"
            >
              <div className="group overflow-hidden">
                <div className="overflow-hidden bg-surface">
                  <img
                    src={p.img}
                    alt={p.name}
                    className="h-72 w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <span className="bg-accent px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-navy-deep">
                    {p.tag}
                  </span>
                  <span className="text-xs uppercase tracking-widest text-muted-foreground">
                    {p.location}
                  </span>
                </div>
                <h3 className="mt-3 text-xl uppercase text-navy-deep">{p.name}</h3>
                <Link
                  to="/projects"
                  className="mt-2 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-navy hover:text-accent"
                >
                  View Project <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-10">
        <Link
          to="/projects"
          className="group inline-flex items-center gap-2 border-b-2 border-navy pb-1 text-sm font-bold uppercase tracking-widest text-navy hover:text-accent hover:border-accent"
        >
          View All Projects{" "}
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </Section>
  );
}

function Process() {
  const steps = [
    {
      n: "01",
      title: "Consultation",
      desc: "We listen, scope your vision and define success criteria.",
    },
    {
      n: "02",
      title: "Planning & Design",
      desc: "Architects and engineers shape a buildable, on-budget plan.",
    },
    {
      n: "03",
      title: "Construction",
      desc: "Senior site teams execute with daily quality and safety checks.",
    },
    {
      n: "04",
      title: "Handover & Support",
      desc: "We commission, train your team and stand behind every build.",
    },
  ];
  return (
    <section className="bg-surface">
      <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
        <Eyebrow>How We Work</Eyebrow>
        <h2 className="mt-4 max-w-3xl text-4xl uppercase text-navy-deep sm:text-5xl">
          A disciplined process, from blueprint to keys.
        </h2>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative border-t-2 border-navy bg-white p-7"
            >
              <div className="font-display text-6xl text-accent">{s.n}</div>
              <h3 className="mt-4 text-lg uppercase text-navy-deep">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const [emblaRef, embla] = useEmblaCarousel({ loop: true });
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    if (!embla) return;
    const onSelect = () => setSelected(embla.selectedScrollSnap());
    embla.on("select", onSelect);
    onSelect();
    const id = setInterval(() => embla.scrollNext(), 6000);
    return () => {
      clearInterval(id);
      embla.off("select", onSelect);
    };
  }, [embla]);

  return (
    <section className="relative bg-navy-deep text-white">
      <div className="absolute -top-px left-0 right-0 h-1.5 yellow-stripe" />
      <div className="mx-auto max-w-5xl px-5 py-20 lg:px-8 lg:py-28">
        <Eyebrow light>What Our Clients Say</Eyebrow>
        <div className="mt-8 overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {testimonials.map((t, i) => (
              <div key={i} className="min-w-0 flex-[0_0_100%]">
                <div className="flex gap-1 text-accent">
                  {Array.from({ length: t.stars }).map((_, j) => (
                    <Star key={j} className="h-5 w-5 fill-current" />
                  ))}
                </div>
                <blockquote className="mt-6 font-display text-2xl italic leading-snug sm:text-3xl lg:text-4xl">
                  "{t.quote}"
                </blockquote>
                <div className="mt-8">
                  <div className="text-base font-bold uppercase tracking-wider">{t.name}</div>
                  <div className="text-sm text-white/60">{t.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-8 flex gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => embla?.scrollTo(i)}
              aria-label={`Slide ${i + 1}`}
              className={`h-1.5 transition-all ${selected === i ? "w-10 bg-accent" : "w-5 bg-white/20"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function CTABanner() {
  return (
    <section className="relative overflow-hidden bg-navy">
      <div
        className="absolute -right-20 top-0 bottom-0 w-72 yellow-stripe opacity-90"
        style={{ transform: "skewX(-12deg)" }}
      />
      <div className="relative mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-5 py-16 lg:flex-row lg:items-center lg:px-8 lg:py-20">
        <div>
          <h2 className="max-w-2xl text-4xl uppercase text-white sm:text-5xl">
            Ready to Start Your Project?
          </h2>
          <p className="mt-3 max-w-xl text-base text-white/75">
            Get a free consultation and quote from our team today.
          </p>
        </div>
        <Link
          to="/contact"
          className="group flex items-center gap-2 bg-accent px-8 py-4 text-xs font-bold uppercase tracking-widest text-navy-deep transition-transform hover:translate-y-[-2px]"
        >
          Get a Free Quote{" "}
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </section>
  );
}
