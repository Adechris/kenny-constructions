import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Calendar } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import residentialImg from "@/assets/project-residential.jpg";
import commercialImg from "@/assets/project-commercial.jpg";
import infraImg from "@/assets/project-infrastructure.jpg";
import contractingImg from "@/assets/project-contracting.jpg";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Kenny Builders" },
      {
        name: "description",
        content:
          "A selection of residential, commercial and infrastructure projects delivered by Kenny Builders.",
      },
      { property: "og:title", content: "Our Projects — Kenny Builders" },
      {
        property: "og:description",
        content: "Buildings, towers and infrastructure delivered across Nigeria.",
      },
    ],
  }),
  component: ProjectsPage,
});

const filters = ["All", "Residential", "Commercial", "Infrastructure"] as const;
type Filter = (typeof filters)[number];

const projects = [
  {
    name: "Lekki Pearl Estate",
    category: "Residential",
    location: "Lagos",
    year: 2024,
    img: residentialImg,
  },
  {
    name: "Marina Corporate Tower",
    category: "Commercial",
    location: "Lagos",
    year: 2024,
    img: commercialImg,
  },
  {
    name: "Third Mainland Expansion",
    category: "Infrastructure",
    location: "Lagos",
    year: 2023,
    img: infraImg,
  },
  {
    name: "Apapa Logistics Hub",
    category: "Commercial",
    location: "Lagos",
    year: 2023,
    img: contractingImg,
  },
  {
    name: "Maitama Villas",
    category: "Residential",
    location: "Abuja",
    year: 2023,
    img: residentialImg,
  },
  {
    name: "Kaduna Ring Road",
    category: "Infrastructure",
    location: "Kaduna",
    year: 2022,
    img: infraImg,
  },
  {
    name: "Ikeja City Plaza",
    category: "Commercial",
    location: "Lagos",
    year: 2022,
    img: commercialImg,
  },
  {
    name: "Banana Island Residences",
    category: "Residential",
    location: "Lagos",
    year: 2022,
    img: residentialImg,
  },
  {
    name: "Port Harcourt Industrial Park",
    category: "Commercial",
    location: "Port Harcourt",
    year: 2021,
    img: contractingImg,
  },
];

function ProjectsPage() {
  const [active, setActive] = useState<Filter>("All");
  const filtered = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <SiteLayout>
      <PageHero
        eyebrow="Our Portfolio"
        title="Projects That Shape Skylines"
        subtitle="A selection of recent and signature builds across Nigeria."
      />

      <section className="border-b border-border bg-white">
        <div className="mx-auto flex max-w-7xl flex-wrap gap-2 px-5 py-6 lg:px-8">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`px-5 py-2.5 text-xs font-bold uppercase tracking-widest transition-colors ${
                active === f
                  ? "bg-navy text-white"
                  : "bg-surface text-navy hover:bg-navy hover:text-white"
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((p, i) => (
              <motion.article
                key={p.name + i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="group overflow-hidden bg-white"
              >
                <div className="relative overflow-hidden bg-surface">
                  <img
                    src={p.img}
                    alt={p.name}
                    className="h-64 w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <span className="absolute left-4 top-4 bg-accent px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-navy-deep">
                    {p.category}
                  </span>
                </div>
                <div className="border-x border-b border-border p-6">
                  <h3 className="text-xl uppercase text-navy-deep">{p.name}</h3>
                  <div className="mt-3 flex items-center gap-5 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1.5">
                      <MapPin className="h-3.5 w-3.5 text-navy-mid" /> {p.location}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Calendar className="h-3.5 w-3.5 text-navy-mid" /> {p.year}
                    </span>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
