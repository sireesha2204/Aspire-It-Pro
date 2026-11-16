import { Link } from "react-router-dom";
import ParticleNetwork from "../components/ParticleNetwork";
import Testimonials from "../components/Testimonials";
import Reveal from "../hooks/Reveal";
import CountUp from "../hooks/CountUp";
import { ABOUT as A } from "../data/content";
import { Heading, Eyebrow, SmartImg, Tilt } from "../components/ui";
import { DevScene, RoadArt, Avatar, MissionArt } from "../components/Art";

export default function About() {
  const J = A.journey, T = A.team, M = A.mission;
  return (
    <>
      {/* hero */}
      <section className="relative isolate overflow-hidden pb-16 pt-32 sm:pb-24 sm:pt-44">
        <div className="mesh absolute inset-0 -z-10"></div>
        <div className="absolute inset-0 -z-10"><ParticleNetwork /></div>
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 sm:px-6 lg:grid-cols-2">
          <div>
            <span className="fade-up glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-bold" style={{ color: "var(--blue-d)" }}>
              <span className="h-2 w-2 animate-pulse rounded-full" style={{ background: "var(--red)" }}></span>{A.eyebrow}
            </span>
            <h1 className="fade-up mt-5 text-3xl font-extrabold leading-[1.15] tracking-tight sm:text-5xl" style={{ animationDelay: ".1s" }}>
              <span className="grad-text">{A.title}</span>
            </h1>
            <h2 className="fade-up mt-4 text-xl font-extrabold sm:text-2xl" style={{ animationDelay: ".2s" }}>{A.sub}</h2>
            <p className="fade-up mt-4 text-[15px] leading-relaxed" style={{ color: "var(--muted)", animationDelay: ".3s" }}>{A.text}</p>
            <div className="fade-up mt-8 grid grid-cols-3 gap-3 sm:gap-4" style={{ animationDelay: ".4s" }}>
              {A.stats.map((s) => (
                <div key={s.l} className="glass elev rounded-2xl p-3 text-center sm:p-5">
                  <div className="text-2xl font-extrabold sm:text-4xl" style={{ color: "var(--blue-d)" }}><CountUp to={s.to} suffix={s.s} /></div>
                  <div className="mt-1 text-[11px] font-semibold sm:text-sm" style={{ color: "var(--muted)" }}>{s.l}</div>
                </div>
              ))}
            </div>
            <Link to="/#services" className="fade-up btn-primary btn-shine relative mt-8 inline-block overflow-hidden rounded-full px-8 py-3.5 text-sm font-semibold text-white transition hover:-translate-y-0.5" style={{ animationDelay: ".5s" }}>{A.button}</Link>
          </div>
          <div className="relative mx-auto aspect-square w-full max-w-md">
            <div className="orbit-ring" aria-hidden="true"></div>
            <SmartImg src={A.img} alt="Technology partner" contain className="float-s h-full w-full" fallback={<div className="absolute inset-0"><DevScene /></div>} />
          </div>
        </div>
      </section>

      {/* journey */}
      <section className="relative isolate overflow-hidden py-20 sm:py-28">
        <div className="mesh-soft absolute inset-0 -z-10"></div>
        <div className="mx-auto max-w-5xl px-5 sm:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <Eyebrow>{J.eyebrow}</Eyebrow>
            <Heading className="mt-3 text-3xl font-extrabold tracking-tight sm:text-5xl">{J.title}</Heading>
            <Reveal><p className="mt-5 text-[15px] leading-relaxed" style={{ color: "var(--muted)" }}>{J.text}</p></Reveal>
          </div>
          <div className="relative mt-16">
            <div className="absolute bottom-0 left-5 top-0 w-0.5 bg-gradient-to-b from-[var(--blue)] via-[var(--red)] to-[var(--blue)] opacity-30 md:left-1/2" aria-hidden="true"></div>
            <ol className="space-y-10 md:space-y-16">
              {J.items.map(([n, tag, t, d, img], i) => (
                <li key={n} className="relative pl-14 md:pl-0">
                  <span className="btn-primary absolute left-0 top-2 z-10 grid h-10 w-10 place-items-center rounded-full text-xs font-extrabold text-white ring-8 ring-[var(--bg)] md:left-1/2 md:-translate-x-1/2">{n}</span>
                  <Reveal className={`${i % 2 ? "rv-r" : "rv-l"} md:w-[calc(50%-3rem)] ${i % 2 ? "md:ml-auto" : ""}`}>
                    <Tilt max={4}>
                      <div className="pf-card group relative overflow-hidden rounded-3xl bg-white">
                        <SmartImg src={img} alt={t} className="h-44 w-full transition duration-700 group-hover:scale-105" fallback={<RoadArt n={i} />} />
                        <div className="relative p-6">
                          <span className="rounded-full px-3 py-1 text-xs font-bold text-white" style={{ background: "var(--red)" }}>{tag}</span>
                          <h3 className="mt-4 text-xl font-extrabold">{t}</h3>
                          <p className="mt-2 text-sm leading-relaxed" style={{ color: "var(--muted)" }}>{d}</p>
                        </div>
                        <span className="glare" aria-hidden="true"></span>
                      </div>
                    </Tilt>
                  </Reveal>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* team */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-5 sm:px-6">
          <div className="max-w-2xl">
            <Eyebrow>{T.eyebrow}</Eyebrow>
            <Heading className="mt-3 text-3xl font-extrabold tracking-tight sm:text-5xl">{T.title}</Heading>
            <Reveal><p className="mt-5 text-[15px] leading-relaxed" style={{ color: "var(--muted)" }}>{T.text[0]}<br className="hidden sm:block" /> {T.text[1]}</p></Reveal>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-3">
            {T.members.map((m, i) => (
              <Reveal key={m.n} delay={(i % 3) * 100}>
                <Tilt className="h-full">
                  <article className="pf-card group relative h-full overflow-hidden rounded-3xl bg-white">
                    <div className="relative aspect-[4/4.2] overflow-hidden">
                      <SmartImg src={m.img} alt={m.n} className="h-full w-full transition duration-700 group-hover:scale-110" fallback={<Avatar i={i} />} />
                      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#0b1a3a]/60 to-transparent opacity-0 transition group-hover:opacity-100"></div>
                    </div>
                    <div className="p-4 sm:p-6">
                      <h3 className="text-base font-extrabold sm:text-lg">{m.n}</h3>
                      <div className="text-xs font-bold sm:text-sm" style={{ color: "var(--red)" }}>{m.r}</div>
                      <p className="mt-2 text-xs leading-relaxed sm:text-sm" style={{ color: "var(--muted)" }}>{m.d}</p>
                    </div>
                    <span className="glare" aria-hidden="true"></span>
                  </article>
                </Tilt>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* mission */}
      <section className="relative isolate overflow-hidden py-20 sm:py-28">
        <div className="mesh-soft absolute inset-0 -z-10"></div>
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 sm:px-6 lg:grid-cols-2">
          <Reveal className="rv-l mx-auto w-full max-w-md">
            <SmartImg src={M.img} alt="Our mission" contain className="float-s aspect-square w-full" fallback={<div className="absolute inset-0"><MissionArt /></div>} />
          </Reveal>
          <div>
            <Eyebrow>{M.eyebrow}</Eyebrow>
            <Heading className="mt-3 text-3xl font-extrabold tracking-tight sm:text-5xl">{M.title}</Heading>
            <p className="mt-5 text-[15px] leading-relaxed" style={{ color: "var(--muted)" }}>{M.text}</p>
            <ul className="mt-6 space-y-3">
              {M.points.map((p, i) => (
                <Reveal as="li" key={i} delay={i * 90} className="glass elev flex gap-3 rounded-2xl p-4">
                  <span className="btn-primary mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full text-white"><svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12l5 5 9-10" /></svg></span>
                  <span className="text-sm leading-relaxed">{p}</span>
                </Reveal>
              ))}
            </ul>
            <Link to="/contact" className="btn-red btn-shine relative mt-8 inline-block overflow-hidden rounded-full px-8 py-3.5 text-sm font-semibold text-white transition hover:-translate-y-0.5">{M.button}</Link>
          </div>
        </div>
      </section>

      <Testimonials eyebrow={null} title={A.customers.title} items={A.customers.items} logos={null} />
    </>
  );
}
