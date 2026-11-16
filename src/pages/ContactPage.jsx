import { Link } from "react-router-dom";
import Reveal from "../hooks/Reveal";
import QuoteForm from "../components/QuoteForm";
import { ContactLinks } from "../components/Contact";
import { CONTACT as C, PHONE, EMAIL } from "../data/content";
import { Heading, Eyebrow, Tilt } from "../components/ui";
import { ContactArt, MapArt } from "../components/Art";

export default function ContactPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden pb-16 pt-32 sm:pb-24 sm:pt-44">
        <div className="mesh absolute inset-0 -z-10"></div>
        <div className="aurora -z-10" aria-hidden="true"></div>
        <div className="mx-auto grid max-w-6xl gap-12 px-5 sm:px-6 lg:grid-cols-2">
          <div>
            <Eyebrow>{C.eyebrow}</Eyebrow>
            <Heading as="h1" className="mt-3 text-3xl font-extrabold leading-tight tracking-tight sm:text-5xl">{C.title}</Heading>
            <p className="fade-up mt-5 text-[15px] leading-relaxed" style={{ color: "var(--muted)" }}>{C.text[0]}<br />{C.text[1]}</p>
            <div className="glass elev mt-8 rounded-[28px] p-6 sm:p-8"><QuoteForm idp="page" label={C.send} /></div>
          </div>
          <div className="space-y-6">
            <div className="mx-auto hidden max-w-sm lg:block"><ContactArt /></div>
            <ContactLinks />
            <div className="glass elev flex items-center gap-4 rounded-2xl p-4">
              <span className="btn-primary grid h-12 w-12 shrink-0 place-items-center rounded-xl text-white"><svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 21s7-6 7-11a7 7 0 10-14 0c0 5 7 11 7 11zM12 12a2 2 0 100-4 2 2 0 000 4z" /></svg></span>
              <span className="text-[15px] font-bold">{C.address}</span>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-20 sm:pb-28">
        <div className="mx-auto grid max-w-6xl gap-5 px-5 sm:px-6 md:grid-cols-3">
          {C.features.map((f, i) => (
            <Reveal key={f.t} delay={i * 120}>
              <Tilt className="h-full">
                <div className="pf-card relative h-full rounded-3xl bg-white p-7">
                  <span className={`${i === 1 ? "btn-red" : "btn-primary"} grid h-14 w-14 place-items-center rounded-2xl text-white`}>
                    <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d={f.p} /></svg>
                  </span>
                  <h3 className="mt-5 text-xl font-extrabold">{f.t}</h3>
                  <p className="mt-2 text-sm leading-relaxed" style={{ color: "var(--muted)" }}>{f.d}</p>
                  <span className="glare" aria-hidden="true"></span>
                </div>
              </Tilt>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="relative isolate overflow-hidden py-20 sm:py-28">
        <div className="mesh-soft absolute inset-0 -z-10"></div>
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 sm:px-6 lg:grid-cols-2">
          <div>
            <Heading className="text-3xl font-extrabold tracking-tight sm:text-5xl">{C.info.title}</Heading>
            <Reveal>
              <p className="mt-5 text-[15px] leading-relaxed" style={{ color: "var(--muted)" }}>{C.info.text}</p>
              <address className="glass elev mt-6 rounded-2xl p-5 text-[15px] font-semibold not-italic leading-relaxed">
                {C.info.lines.map((l) => <span key={l} className="block">{l}</span>)}
              </address>
            </Reveal>
          </div>
          <Reveal delay={120}>
            <div className="svc-panel relative h-64 overflow-hidden rounded-[28px] sm:h-80"><MapArt /></div>
          </Reveal>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 sm:py-24">
        <Reveal className="svc-panel relative mx-auto max-w-6xl overflow-hidden rounded-[28px] px-6 py-14 text-center text-white sm:px-16 sm:py-16">
          <div className="svc-grid absolute inset-0" aria-hidden="true"></div>
          <div className="cta-orb cta-orb-a" aria-hidden="true"></div>
          <div className="relative mx-auto max-w-2xl">
            <svg viewBox="0 0 48 56" className="float-s mx-auto h-14 w-12" aria-hidden="true"><path d="M24 2l20 8v16c0 14-9 24-20 28C13 50 4 40 4 26V10z" fill="#ee3159" /><path d="M14 28l7 7 13-15" fill="none" stroke="#fff" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" /></svg>
            <p className="mt-5 text-lg font-semibold text-[#b9c8ee]">{C.guarantee.a}</p>
            <Heading className="mt-2 text-3xl font-extrabold sm:text-5xl">{C.guarantee.b}</Heading>
            <Link to="/contact" className="btn-red btn-shine relative mt-8 inline-block overflow-hidden rounded-full px-8 py-3.5 text-sm font-semibold text-white transition hover:-translate-y-0.5">{C.guarantee.btn}</Link>
            <p className="mt-5 text-xs text-[#9fb4e6]">{C.guarantee.note}</p>
          </div>
        </Reveal>
      </section>
    </>
  );
}
