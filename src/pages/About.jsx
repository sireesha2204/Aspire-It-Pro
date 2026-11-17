import { Link } from "react-router-dom";
import ParticleNetwork from "../components/ParticleNetwork";
import Reveal from "../hooks/Reveal";
import CountUp from "../hooks/CountUp";
import { ABOUT as A } from "../data/content";
import { Heading, Eyebrow, SmartImg, Tilt } from "../components/ui";
import { DevScene, RoadArt, MissionArt } from "../components/Art";

export default function About() {
  const J = A.journey, M = A.mission;
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
              {A.stats.map((s, i) => (
                <div key={s.l} className="stat-card glass elev relative overflow-hidden rounded-2xl p-3 sm:p-5">
                  <div className="text-[11px] font-bold sm:text-sm" style={{ color: "var(--muted)" }}>{s.l}</div>
                  <div className="grad-text mt-2 text-2xl font-extrabold sm:text-4xl"><CountUp to={s.to} suffix={s.s} /></div>
                  <span className="stat-bar" style={{ animationDelay: `${i * 0.35}s` }}></span>
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
                <li key={n} className="relative pl-12 md:pl-0">
                  <span className="node absolute left-[13px] top-[14px] z-10 md:left-1/2 md:-translate-x-1/2" aria-hidden="true"></span>

                  {/* number + heading right beside the red spot */}
                  <div className="mb-3 flex items-baseline gap-3 md:hidden">
                    <span className="num-big">{n}</span>
                    <span className="text-xl font-extrabold" style={{ color: "var(--red)" }}>{tag}</span>
                  </div>
                  <Reveal delay={150} className={`absolute top-0 hidden items-baseline gap-3 md:flex ${i % 2 ? "right-1/2 mr-8 flex-row-reverse" : "left-1/2 ml-8"}`}>
                    <span className="num-big">{n}</span>
                    <span className="text-2xl font-extrabold" style={{ color: "var(--red)" }}>{tag}</span>
                  </Reveal>

                  <Reveal className={`${i % 2 ? "rv-r" : "rv-l"} md:w-[calc(50%-3rem)] ${i % 2 ? "md:ml-auto" : ""}`}>
                    <Tilt max={4}>
                      <div className="pf-card group relative overflow-hidden rounded-3xl bg-white">
                        <SmartImg src={img} alt={t} className="h-44 w-full transition duration-700 group-hover:scale-105" fallback={<RoadArt n={i} />} />
                        <div className="relative p-6">
                          <h3 className="text-xl font-extrabold">{t}</h3>
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
          </div>
        </div>
      </section>

    </>
  );
}
