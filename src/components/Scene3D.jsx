import { useEffect, useRef, useState } from "react";
import { HERO_CARDS } from "../data/content";
import { SmartImg } from "./ui";
import { Avatar } from "./Art";

const TILT = 6;

/* ---------- typed code (loops) ---------- */
const CODE = [
  [["k", "const"], " ", ["f", "business"], " = ", ["k", "await"], " aspire.", ["f", "build"], "({"],
  ["  ", ["f", "software"], ": ", ["s", '"custom"'], ","],
  ["  ", ["f", "ai"], ": ", ["s", "true"], ","],
  ["  ", ["f", "cloud"], ": ", ["s", '"scalable"'], ","],
  ["  ", ["f", "security"], ": ", ["s", '"end-to-end"']],
  ["});"],
  [""],
  ["business.", ["f", "grow"], "();"],
];

// flatten into [{ch, cls}] with "\n" between lines
const CHARS = CODE.flatMap((line, i) => {
  const out = [];
  line.forEach((seg) => {
    const [cls, text] = typeof seg === "string" ? ["", seg] : seg;
    [...text].forEach((ch) => out.push({ ch, cls }));
  });
  if (i < CODE.length - 1) out.push({ ch: "\n", cls: "" });
  return out;
});

function useTyped(total) {
  const reduce =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const [n, setN] = useState(reduce ? total : 0);
  useEffect(() => {
    if (reduce) return;
    let t;
    const tick = (count) => {
      setN(count);
      if (count < total) t = setTimeout(() => tick(count + 1), 38);
      else t = setTimeout(() => tick(0), 4200); // pause, then retype
    };
    t = setTimeout(() => tick(1), 700);
    return () => clearTimeout(t);
  }, [total, reduce]);
  return n;
}

/* ---------- count-up numbers ---------- */
function CountUp({ to, decimals = 0, prefix = "", suffix = "" }) {
  const [v, setV] = useState(0);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setV(to);
      return;
    }
    let raf;
    const start = performance.now() + 900;
    const step = (now) => {
      const p = Math.min(Math.max((now - start) / 1800, 0), 1);
      setV(to * (1 - Math.pow(1 - p, 3)));
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [to]);
  return (
    <>
      {prefix}
      {v.toFixed(decimals)}
      {suffix}
    </>
  );
}


export default function Scene3D() {
  const tiltRef = useRef(null);
  const typed = useTyped(CHARS.length);

  useEffect(() => {
    const el = tiltRef.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches)
      return;
    const onMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      el.style.transform = `rotateY(${x * TILT}deg) rotateX(${-y * TILT}deg)`;
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  // render typed chars, grouping runs of the same class
  const runs = [];
  CHARS.slice(0, typed).forEach(({ ch, cls }) => {
    const last = runs[runs.length - 1];
    if (last && last.cls === cls) last.text += ch;
    else runs.push({ cls, text: ch });
  });

  return (
    <div className="scene">
      <div className="glow-pulse" aria-hidden="true"></div>
      <div className="tilt" ref={tiltRef}>
        <div className="world">
          <div className="win">
            <div className="bar">
              <i style={{ background: "#ee3159" }}></i>
              <i style={{ background: "#f5b83d" }}></i>
              <i style={{ background: "#3bd6a0" }}></i>
              <span className="ml-auto flex items-center gap-1.5 text-[10px] font-semibold text-emerald-300/90">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400"></span>
                build passing
              </span>
            </div>
            <div className="scanline" aria-hidden="true"></div>
            <pre>
              {runs.map((r, i) => (
                <span key={i} className={r.cls}>
                  {r.text}
                </span>
              ))}
              <span className="caret"></span>
            </pre>
          </div>

          {/* code brackets */}
          <div
            className="p3 float"
            style={{ left: "0", top: "-6%", width: "15%", transform: "translateZ(150px)" }}
          >
            <svg viewBox="0 0 160 150" style={{ overflow: "visible", filter: "drop-shadow(0 18px 14px rgba(238,49,89,.35))" }}>
              <polyline points="100,16 36,75 100,134" fill="none" stroke="#ee3159" strokeWidth="36" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <div
            className="p3 float"
            style={{ right: "0", bottom: "-2%", width: "15%", transform: "translateZ(130px)", animationDelay: "-2s" }}
          >
            <svg viewBox="0 0 160 150" style={{ overflow: "visible", filter: "drop-shadow(0 18px 14px rgba(31,92,166,.4))" }}>
              <polyline points="60,16 124,75 60,134" fill="none" stroke="#3b5fad" strokeWidth="36" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>

          {/* testimonial cards (from the live site) */}
          {HERO_CARDS.map((c, i) => (
            <div key={c.n} className="p3 float glass hidden w-[34%] max-w-[230px] items-center gap-3 rounded-2xl p-3 sm:flex"
              style={{ ...(i ? { right: "12%", bottom: "-9%" } : { left: "22%", top: "-11%" }), transform: `translateZ(${i ? 170 : 190}px)`, animationDelay: i ? "-2s" : "-4s" }}>
              <SmartImg src={c.img} className="h-10 w-10 shrink-0 rounded-full" fallback={<Avatar i={i + 1} />} />
              <div className="min-w-0">
                <div className="truncate text-xs font-extrabold">{c.n}</div>
                <div className="line-clamp-2 text-[10px] leading-snug" style={{ color: "var(--muted)" }}>{c.t}</div>
              </div>
            </div>
          ))}

          {/* stat cards */}
          <div
            className="p3 float glass rounded-2xl px-4 py-3 sm:px-6 sm:py-4"
            style={{ left: "-1%", bottom: "12%", transform: "translateZ(120px)" }}
          >
            <div className="text-2xl font-extrabold sm:text-3xl" style={{ color: "var(--blue-d)" }}>
              <CountUp to={6} prefix="$" suffix="M+" />
            </div>
            <div className="text-[11px] sm:text-xs" style={{ color: "var(--muted)" }}>
              Software Development Services
            </div>
          </div>
          <div
            className="p3 float glass rounded-2xl px-4 py-3 sm:px-6 sm:py-4"
            style={{ right: "-1%", top: "6%", transform: "translateZ(110px)", animationDelay: "-3s" }}
          >
            <div className="text-2xl font-extrabold sm:text-3xl" style={{ color: "var(--red)" }}>
              <CountUp to={28.5} decimals={1} suffix="%" />
            </div>
            <div className="mb-2 text-[11px] sm:text-xs" style={{ color: "var(--muted)" }}>
              Avg. increase rate monthly
            </div>
            <div className="bars">
              {[40, 55, 48, 70, 62, 90].map((h, i) => (
                <span key={i} style={{ height: `${h}%`, animationDelay: `${-0.4 * i}s` }}></span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
