import { useEffect, useState } from "react";
import Reveal from "../hooks/Reveal";
import { TESTIMONIALS as T } from "../data/content";
import { Heading, Eyebrow, SmartImg, Stars, Decor } from "./ui";
import { Avatar, LogoMark } from "./Art";

export default function Testimonials({ eyebrow = T.eyebrow, title = T.title, items = T.items, logos = T.logos }) {
  const [i, setI] = useState(0);
  const [pause, setPause] = useState(false);
  useEffect(() => {
    if (pause) return;
    const t = setTimeout(() => setI((x) => (x + 1) % items.length), 7000);
    return () => clearTimeout(t);
  }, [i, pause, items.length]);
  const cur = items[i];

  return (
    <section id="testimonials" className="relative isolate overflow-hidden py-20 sm:py-32">
      <div className="band absolute inset-0 -z-10"></div><div className="aurora -z-10" aria-hidden="true"></div><Decor alt />
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <div className="max-w-xl">
          {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
          <Heading className="mt-3 text-3xl font-extrabold leading-tight tracking-tight sm:text-5xl">{title}</Heading>
        </div>

        <Reveal className="mt-12">
          <div className="grid items-stretch gap-6 lg:grid-cols-12" onMouseEnter={() => setPause(true)} onMouseLeave={() => setPause(false)}>
            <div className="svc-panel relative overflow-hidden rounded-[28px] p-6 text-white sm:p-12 lg:col-span-8">
              <div className="svc-grid absolute inset-0" aria-hidden="true"></div>
              <svg viewBox="0 0 48 36" className="relative h-9 w-9 sm:h-10 sm:w-10" fill="#ee3159" aria-hidden="true"><path d="M0 36V18C0 8 5 2 16 0l2 5c-6 2-8 5-8 9h8v22H0zm28 0V18C28 8 33 2 44 0l2 5c-6 2-8 5-8 9h8v22H28z" /></svg>
              <div key={i} className="svc-swap relative">
                <p className="mt-5 text-base font-medium leading-relaxed sm:text-lg">{cur.q}</p>
                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <SmartImg src={cur.img} alt={cur.n} className="h-14 w-14 shrink-0 rounded-full ring-4 ring-white/25" fallback={<Avatar i={i} />} />
                  <div><div className="font-extrabold">{cur.n}</div><div className="text-sm text-[#b9c8ee]">{cur.r}</div></div>
                  <div className="sm:ml-auto"><Stars /></div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-4 gap-3 lg:col-span-4 lg:grid-cols-1" role="tablist" aria-label="Choose testimonial">
              {items.map((x, k) => (
                <button key={x.n} role="tab" aria-selected={k === i} onClick={() => setI(k)}
                  className={`relative flex items-center justify-center gap-3 overflow-hidden rounded-2xl px-3 py-3 text-left transition lg:justify-start lg:px-4 ${k === i ? "glass elev" : "hover:bg-white/60"}`}>
                  <SmartImg src={x.img} className="h-11 w-11 shrink-0 rounded-full" fallback={<Avatar i={k} />} />
                  <span className="hidden min-w-0 lg:block"><span className="block truncate text-sm font-extrabold">{x.n}</span><span className="block truncate text-xs" style={{ color: "var(--muted)" }}>{x.r}</span></span>
                  {k === i && <span key={`${i}${pause}`} className="svc-progress absolute inset-x-0 bottom-0 h-0.5 origin-left" style={{ animationDuration: "7000ms", animationPlayState: pause ? "paused" : "running" }}></span>}
                </button>
              ))}
            </div>
          </div>
        </Reveal>
      </div>

      {logos && (
        <div className="mt-16 overflow-hidden" aria-label="Our clients">
          <div className="marquee marquee-pause flex w-max gap-5">
            {[...logos, ...logos].map((src, k) => (
              <div key={k} className="logo-card glass elev relative h-16 w-40 shrink-0 rounded-2xl p-3">
                <SmartImg src={src} contain hideFallback className="h-full w-full" fallback={<LogoMark i={k} />} />
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
