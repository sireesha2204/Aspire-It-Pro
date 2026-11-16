import Reveal from "../hooks/Reveal";
import { HOME_CONTACT as C, PHONE, EMAIL } from "../data/content";
import { Heading, Eyebrow, Decor } from "./ui";
import ParticleNetwork from "./ParticleNetwork";
import QuoteForm from "./QuoteForm";

export const ContactLinks = () => (
  <div className="space-y-4">
    {[
      { t: PHONE, h: `tel:${PHONE}`, c: "btn-primary", p: "M5 4h4l2 5-2.500 1.500a11 11 0 005 5L15 13l5 2v4a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2z" },
      { t: EMAIL, h: `mailto:${EMAIL}`, c: "btn-red", p: "M3 6h18v12H3zM3 7l9 7 9-7" },
    ].map((x) => (
      <a key={x.t} href={x.h} className="glass elev group flex items-center gap-4 rounded-2xl p-4 transition hover:-translate-y-1">
        <span className={`${x.c} grid h-12 w-12 shrink-0 place-items-center rounded-xl text-white transition group-hover:rotate-6`}>
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d={x.p} /></svg>
        </span>
        <span className="break-all text-lg font-extrabold">{x.t}</span>
      </a>
    ))}
  </div>
);

export default function Contact() {
  return (
    <section id="contact" className="relative isolate overflow-hidden py-20 sm:py-32">
      <div className="mesh-soft absolute inset-0 -z-10"></div>
      <div className="absolute inset-0 -z-10 opacity-70"><ParticleNetwork /></div>
      <Decor />
      <div className="mx-auto grid max-w-6xl items-start gap-12 px-5 sm:px-6 lg:grid-cols-2">
        <div>
          <Eyebrow>{C.eyebrow}</Eyebrow>
          <Heading className="mt-3 text-3xl font-extrabold leading-tight tracking-tight sm:text-5xl">{C.title}</Heading>
          <Reveal><p className="mb-8 mt-5 text-[15px] leading-relaxed" style={{ color: "var(--muted)" }}>{C.text}</p><ContactLinks /></Reveal>
        </div>
        <Reveal delay={150}>
          <div className="form-card relative rounded-[28px] p-6 sm:p-8">
            <h3 className="mb-5 text-xl font-extrabold">Get a Quote Right Now</h3>
            <QuoteForm idp="home" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
