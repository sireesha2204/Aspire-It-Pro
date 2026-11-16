import { useState } from "react";
import Reveal from "../hooks/Reveal";
import { BLOG as B } from "../data/content";
import { Heading, Eyebrow, SmartImg, Tilt, Decor } from "./ui";
import { Cover } from "./Art";

const PAGE = 3;

export default function Blog() {
  const [tab, setTab] = useState(B.tabs[0]);
  const [shown, setShown] = useState(PAGE);
  const all = B.posts.filter((p) => tab === B.tabs[0] || p.c === tab);
  const list = all.slice(0, shown);
  const more = all.length > shown;
  const pick = (x) => { setTab(x); setShown(PAGE); };

  return (
    <section id="blog" className="relative isolate overflow-hidden py-20 sm:py-32">
      <div className="mesh-soft absolute inset-0 -z-10"></div><div className="aurora -z-10" aria-hidden="true"></div><Decor />
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <div className="max-w-2xl">
          <Eyebrow>{B.eyebrow}</Eyebrow>
          <Heading className="mt-3 text-3xl font-extrabold leading-tight tracking-tight sm:text-5xl">{B.title}</Heading>
          <Reveal><p className="mt-5 text-[15px] leading-relaxed" style={{ color: "var(--muted)" }}>{B.text}</p></Reveal>
        </div>

        <div className="-mx-5 mt-10 flex gap-2 overflow-x-auto px-5 pb-2 sm:mx-0 sm:flex-wrap sm:overflow-visible sm:px-0" role="tablist" aria-label="Filter posts">
          {B.tabs.map((x) => (
            <button key={x} role="tab" aria-selected={tab === x} onClick={() => pick(x)}
              className={`shrink-0 rounded-full px-4 py-2 text-sm font-semibold transition ${tab === x ? "btn-primary text-white" : "glass text-[color:var(--muted)] hover:text-[color:var(--blue-d)]"}`}>{x}</button>
          ))}
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {list.map((p, i) => (
            <div key={p.t} className="pop-in" style={{ animationDelay: `${(i % PAGE) * 90}ms` }}>
              <Tilt className="h-full" max={5}>
                <article className="pf-card group relative h-full overflow-hidden rounded-3xl bg-white">
                  <div className="relative h-48 overflow-hidden">
                    <SmartImg src={p.img} alt={p.t} className="h-full w-full transition duration-700 group-hover:scale-110" fallback={<><Cover kind={p.k || "grid"} a={p.a} /><div className="blog-art absolute inset-0" aria-hidden="true"></div></>} />
                  </div>
                  <div className="relative p-6">
                    <time className="text-xs font-semibold" style={{ color: "var(--muted)" }}>{p.date}</time>
                    <h3 className="mt-2 text-lg font-extrabold leading-snug"><a href="#blog" className="hover:text-[color:var(--blue-d)]">{p.t}</a></h3>
                    <p className="mt-3 text-sm leading-relaxed" style={{ color: "var(--muted)" }}>{p.x}</p>
                    <a href="#blog" className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold" style={{ color: "var(--blue-d)" }}>Read More <span className="transition group-hover:translate-x-1" aria-hidden="true">→</span></a>
                  </div>
                  <span className="glare" aria-hidden="true"></span>
                </article>
              </Tilt>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          {more
            ? <button onClick={() => setShown(shown + PAGE)} className="btn-primary btn-shine relative overflow-hidden rounded-full px-9 py-3.5 text-sm font-semibold text-white transition hover:-translate-y-0.5">Load More</button>
            : <p className="svc-swap text-sm font-semibold" style={{ color: "var(--muted)" }}>End of Content.</p>}
        </div>
      </div>
    </section>
  );
}
