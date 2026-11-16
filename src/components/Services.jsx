import { useEffect, useState } from "react";
import ServiceVisual from "./ServiceVisuals";
import useInView from "../hooks/useInView";
import { SERVICES, SERVICES_INTRO as I } from "../data/content";
import { SmartImg, Heading, Eyebrow } from "./ui";

const INTERVAL = 6000;
const dot = (<span className="absolute inset-0 grid place-items-center"><span className="h-2.5 w-2.5 rounded-full" style={{ background: "var(--blue)" }}></span></span>);

export default function Services() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [ref, inView] = useInView({ threshold: 0.25 });
  const s = SERVICES[active];

  useEffect(() => {
    if (!inView || paused) return;
    const t = setTimeout(() => setActive((a) => (a + 1) % SERVICES.length), INTERVAL);
    return () => clearTimeout(t);
  }, [active, inView, paused]);

  return (
    <section id="services" className="relative isolate overflow-hidden py-20 sm:py-32" ref={ref}>
      <div className="mesh-soft absolute inset-0 -z-10"></div>
      <div className="aurora -z-10" aria-hidden="true"></div>
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <div className="max-w-2xl">
          <Eyebrow>{I.eyebrow}</Eyebrow>
          <Heading className="mt-3 text-3xl font-extrabold leading-tight tracking-tight sm:text-5xl">{I.title}</Heading>
          <p className="mt-5 text-[15px] leading-relaxed" style={{ color: "var(--muted)" }}>{I.text}</p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-12" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
          <ul className="grid grid-cols-1 gap-1 sm:grid-cols-2 lg:col-span-5 lg:grid-cols-1" role="tablist" aria-label="Services">
            {SERVICES.map((v, i) => {
              const on = i === active;
              return (
                <li key={v.id}>
                  <button role="tab" aria-selected={on} onClick={() => setActive(i)}
                    className={`svc-row group relative flex w-full items-center gap-3.5 rounded-2xl px-4 py-3.5 text-left transition ${on ? "glass elev" : "hover:bg-white/60"}`}>
                    <SmartImg src={v.icon} contain className={`h-8 w-8 shrink-0 transition ${on ? "scale-110" : "opacity-70 grayscale-[.3]"}`} fallback={dot} />
                    <span className={`text-[15px] font-bold transition ${on ? "" : "text-[color:var(--muted)] group-hover:text-[color:var(--ink)]"}`}>{v.name}</span>
                    {on && (
                      <span className="absolute inset-x-4 bottom-1.5 h-0.5 overflow-hidden rounded-full bg-[rgba(59,95,173,.15)]">
                        <span key={`${active}-${paused}`} className="svc-progress block h-full origin-left" style={{ animationDuration: `${INTERVAL}ms`, animationPlayState: paused ? "paused" : "running" }}></span>
                      </span>
                    )}
                  </button>
                </li>
              );
            })}
          </ul>

          <div className="lg:col-span-7">
            <div className="svc-panel relative overflow-hidden rounded-[28px] p-6 text-white sm:p-8 lg:sticky lg:top-24" role="tabpanel">
              <div className="svc-grid absolute inset-0" aria-hidden="true"></div>
              <div className="relative h-52 sm:h-64"><ServiceVisual id={s.id} /></div>
              <div key={s.id} className="svc-swap relative mt-6">
                <div className="flex items-center gap-3">
                  <SmartImg src={s.icon} contain className="h-11 w-11 shrink-0 rounded-xl bg-white/90 p-1.5" fallback={null} />
                  <h3 className="text-2xl font-extrabold">{s.name}</h3>
                </div>
                <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-[#b9c8ee]">{s.text}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
