import { createFileRoute } from "@tanstack/react-router";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import { MapPin, Phone, Mail, Clock, MessageCircle, Send, Check } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Kenny Builders" },
      {
        name: "description",
        content: "Get a free quote. Call, email, or send us your project brief.",
      },
      { property: "og:title", content: "Contact Kenny Builders" },
      {
        property: "og:description",
        content: "Let's build together. Get a free consultation today.",
      },
    ],
  }),
  component: ContactPage,
});

const schema = z.object({
  name: z.string().min(2, "Enter your name"),
  email: z.string().email("Valid email required"),
  phone: z.string().min(7, "Enter your phone"),
  projectType: z.string().min(1, "Choose a project type"),
  message: z.string().min(10, "Tell us a bit more"),
});
type FormData = z.infer<typeof schema>;

function ContactPage() {
  const [sent, setSent] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (_data: FormData) => {
    await new Promise((r) => setTimeout(r, 700));
    setSent(true);
    reset();
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <SiteLayout>
      <PageHero
        eyebrow="Get In Touch"
        title="Let's Build Together"
        subtitle="Tell us about your project. We'll respond within one business day with next steps."
      />

      <section>
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-20 lg:grid-cols-5 lg:gap-12 lg:px-8">
          <div className="lg:col-span-3">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="border border-border bg-white p-6 sm:p-10"
            >
              <h2 className="text-3xl uppercase text-navy-deep">Project Brief</h2>
              <div className="mt-8 grid gap-5 sm:grid-cols-2">
                <Field label="Full Name" error={errors.name?.message}>
                  <input {...register("name")} className="input" placeholder="Jane Doe" />
                </Field>
                <Field label="Email" error={errors.email?.message}>
                  <input {...register("email")} className="input" placeholder="jane@company.com" />
                </Field>
                <Field label="Phone" error={errors.phone?.message}>
                  <input {...register("phone")} className="input" placeholder="+234 803 000 0000" />
                </Field>
                <Field label="Project Type" error={errors.projectType?.message}>
                  <select {...register("projectType")} className="input">
                    <option value="">Select…</option>
                    <option>Residential</option>
                    <option>Commercial</option>
                    <option>General Contracting</option>
                    <option>Civil Infrastructure</option>
                  </select>
                </Field>
              </div>
              <div className="mt-5">
                <Field label="Message" error={errors.message?.message}>
                  <textarea
                    rows={5}
                    {...register("message")}
                    className="input resize-none"
                    placeholder="Tell us about scope, location, timeline…"
                  />
                </Field>
              </div>

              <button
                type="submit"
                disabled={isSubmitting || sent}
                className="mt-8 flex w-full items-center justify-center gap-2 bg-accent px-7 py-4 text-xs font-bold uppercase tracking-widest text-navy-deep transition-colors hover:bg-navy hover:text-white disabled:opacity-70 sm:w-auto"
              >
                {sent ? (
                  <>
                    <Check className="h-4 w-4" /> Message Sent
                  </>
                ) : (
                  <>
                    {isSubmitting ? "Sending…" : "Send Message"} <Send className="h-4 w-4" />
                  </>
                )}
              </button>

              <style>{`
                .input { width: 100%; padding: 0.85rem 1rem; border: 1px solid var(--border); background: #fff; font-size: 0.95rem; color: var(--foreground); }
                .input:focus { outline: 2px solid var(--accent); outline-offset: 0; border-color: var(--navy); }
              `}</style>
            </form>
          </div>

          <aside className="space-y-4 lg:col-span-2">
            {[
              {
                Icon: MapPin,
                title: "Office",
                body: " 24 Funsho Owoyemi Street, Abule Egba, Lagos ",
              },
              { Icon: Phone, title: "Phone", body: "+234 810 310 4179" },
              { Icon: Mail, title: "Email", body: "hello@kennybuilders.ng" },
              { Icon: Clock, title: "Hours", body: "Mon–Fri · 8:00 — 18:00 WAT" },
            ].map((c) => (
              <div
                key={c.title}
                className="border-l-4 border-accent bg-white p-5 shadow-[0_2px_0_var(--border)]"
              >
                <div className="flex items-start gap-4">
                  <span className="grid h-10 w-10 shrink-0 place-items-center bg-navy text-accent">
                    <c.Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <div className="label-eyebrow text-navy-mid">{c.title}</div>
                    <div className="mt-1 text-base font-semibold text-navy-deep">{c.body}</div>
                  </div>
                </div>
              </div>
            ))}

            <a
              href="https://wa.me/2348103104179"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-between gap-3 bg-navy-deep p-5 text-white transition-colors hover:bg-navy"
            >
              <span className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center bg-accent text-navy-deep">
                  <MessageCircle className="h-5 w-5" />
                </span>
                <span>
                  <div className="label-eyebrow text-accent">WhatsApp</div>
                  <div className="mt-1 text-base font-semibold">Chat with our team</div>
                </span>
              </span>
            </a>
          </aside>
        </div>
      </section>

      <section className="border-t border-border">
        <iframe
          title="Office location"
          src="https://www.google.com/maps?q=Victoria+Island+Lagos&output=embed"
          className="h-[420px] w-full grayscale"
          loading="lazy"
        />
      </section>
    </SiteLayout>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="label-eyebrow text-navy-mid">{label}</span>
      <div className="mt-2">{children}</div>
      {error && (
        <span className="mt-1.5 block text-xs font-semibold text-destructive">{error}</span>
      )}
    </label>
  );
}
