import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Reveal from "../hooks/Reveal";
import { PROCESS as P } from "../data/content";
import { Heading } from "./ui";

export default function Process() {
  const listRef = useRef(null);
  const [p, setP] = useState(0);

  useEffect(() => {
    const on = () => {
      const el = listRef.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      setP(Math.min(Math.max((window.innerHeight * 0.65 - r.top) / r.height, 0), 1));
    };
    on();
    window.addEventListener("scroll", on, { passive: true });
    window.addEventListener("resize", on);
    return () => { window.removeEventListener("scroll", on); window.removeEventListener("resize", on); };
  }, []);

  return (
    <section id="process" className="relative py-20 sm:py-32">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 sm:px-6 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-28">
            <Heading className="text-3xl font-extrabold leading-tight tracking-tight sm:text-5xl">{P.title}</Heading>
            <Reveal delay={150}>
              <Link to="/#services" className="btn-primary mt-8 inline-block rounded-full px-7 py-3.5 text-sm font-semibold text-white transition hover:-translate-y-0.5">{P.button}</Link>
            </Reveal>
          </div>
        </div>

        <div className="relative lg:col-span-7" ref={listRef}>
          <div className="absolute bottom-4 left-[21px] top-4 w-0.5 rounded bg-[rgba(59,95,173,.15)] sm:left-[27px]" aria-hidden="true">
            <div className="w-full rounded bg-gradient-to-b from-[var(--blue)] to-[var(--red)]" style={{ height: `${p * 100}%` }}></div>
          </div>
          <ul className="space-y-6">
            {P.items.map(([t, d, icon], i) => {
              const lit = p > (i + 0.3) / P.items.length - 0.05;
              return (
                <li key={t} className="relative flex gap-4 sm:gap-6">
                  <span className={`relative z-10 grid h-11 w-11 shrink-0 place-items-center rounded-2xl transition-all duration-500 sm:h-14 sm:w-14 ${lit ? "btn-primary scale-100 text-white" : "glass scale-90 text-[color:var(--blue)]"}`}>
                    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d={icon} /></svg>
                  </span>
                  <div className={`glass elev min-w-0 flex-1 rounded-2xl p-5 transition-all duration-500 sm:p-6 ${lit ? "opacity-100" : "opacity-60"}`}>
                    <h3 className="text-lg font-extrabold">{t}</h3>
                    <p className="mt-2 text-[15px] leading-relaxed" style={{ color: "var(--muted)" }}>{d}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
