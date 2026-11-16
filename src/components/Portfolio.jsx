import { useState } from "react";
import Reveal from "../hooks/Reveal";
import { PORTFOLIO as P } from "../data/content";
import { Heading, Eyebrow, SmartImg, Tilt } from "./ui";
import { Cover } from "./Art";

export default function Portfolio() {
  const [f, setF] = useState(null); // null = show all; click a filter again to clear it
  const list = P.items.filter((p) => !f || p.c === f);

  return (
    <section id="portfolio" className="relative isolate overflow-hidden py-20 sm:py-32">
      <div className="mesh-soft absolute inset-0 -z-10"></div>
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <div className="max-w-xl">
            <Eyebrow>{P.eyebrow}</Eyebrow>
            <Heading className="mt-3 text-3xl font-extrabold leading-tight tracking-tight sm:text-5xl">{P.title}</Heading>
            <Reveal><p className="mt-5 text-[15px] leading-relaxed" style={{ color: "var(--muted)" }}>{P.text[0]}<br className="hidden sm:block" /> {P.text[1]}</p></Reveal>
          </div>
          <div className="flex flex-wrap gap-2" role="group" aria-label="Filter projects">
            {P.filters.map((x) => (
              <button key={x} aria-pressed={f === x} onClick={() => setF(f === x ? null : x)}
                className={`rounded-full px-5 py-2.5 text-sm font-semibold transition ${f === x ? "btn-primary text-white" : "glass text-[color:var(--muted)] hover:text-[color:var(--blue-d)]"}`}>{x}</button>
            ))}
          </div>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {list.map((p, i) => (
            <div key={p.t} className="pop-in" style={{ animationDelay: `${i * 70}ms` }}>
              <Tilt className="h-full">
                <article className="pf-card group relative h-full overflow-hidden rounded-3xl bg-white">
                  <div className="h-44 overflow-hidden"><SmartImg src={p.img} alt={p.t} className="h-full w-full transition duration-700 group-hover:scale-110" fallback={<Cover kind={p.k} a={p.a} />} /></div>
                  <div className="relative p-5">
                    <span className="text-xs font-bold" style={{ color: "var(--blue)" }}>{p.c}</span>
                    <h3 className="mt-1 text-[17px] font-extrabold">{p.t}</h3>
                    <p className="mt-2 text-sm leading-relaxed" style={{ color: "var(--muted)" }}>{p.d}</p>
                  </div>
                  <span className="glare" aria-hidden="true"></span>
                </article>
              </Tilt>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a href="#portfolio" className="btn-primary inline-block rounded-full px-8 py-3.5 text-sm font-semibold text-white transition hover:-translate-y-0.5">{P.button}</a>
        </div>
      </div>
    </section>
  );
}
