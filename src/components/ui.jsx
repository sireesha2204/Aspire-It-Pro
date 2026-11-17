import { useEffect, useRef, useState } from "react";

// Shows `fallback` artwork underneath and fades the real photo in over it.
// Images unveil with a wipe when scrolled into view, then drift slowly (Ken Burns).
export function SmartImg({ src, alt = "", className = "", fallback = null, contain = false, hideFallback = false }) {
  const [state, setState] = useState(src ? "loading" : "bad");
  const ref = useRef(null);
  const [seen, setSeen] = useState(false);
  useEffect(() => {
    const io = new IntersectionObserver(([e]) => e.isIntersecting && (setSeen(true), io.disconnect()), { threshold: 0.15 });
    io.observe(ref.current);
    return () => io.disconnect();
  }, []);
  return (
    <div ref={ref} className={`sw relative overflow-hidden ${className}`}>
      <div className={`imgwrap absolute inset-0 ${seen ? "in" : ""}`}>
        {(!hideFallback || state !== "ok") && fallback}
        {state !== "bad" && (
          <img src={src} alt={alt} loading="lazy" referrerPolicy="no-referrer" onLoad={() => setState("ok")} onError={() => setState("bad")}
            className={`absolute inset-0 h-full w-full transition-opacity duration-700 ${contain ? "object-contain" : "object-cover kb"} ${state === "ok" ? "opacity-100" : "opacity-0"}`} />
        )}
      </div>
    </div>
  );
}

// Heading whose words slide up one by one when scrolled into view.
export function Heading({ as: Tag = "h2", children, className = "", accent = "" }) {
  const ref = useRef(null);
  const [on, setOn] = useState(false);
  useEffect(() => {
    const io = new IntersectionObserver(([e]) => e.isIntersecting && (setOn(true), io.disconnect()), { threshold: 0.3 });
    io.observe(ref.current);
    return () => io.disconnect();
  }, []);
  const words = (t, cls = "") => t.split(" ").filter(Boolean).map((w, i) => (
    <span key={w + i} className="hw"><span className={cls} style={{ transitionDelay: `${i * 70}ms` }}>{w}&nbsp;</span></span>
  ));
  return (
    <Tag ref={ref} className={`${on ? "in" : ""} ${className}`} aria-label={`${children} ${accent}`}>
      <span aria-hidden="true">{words(children)}{accent && words(accent, "grad-text")}</span>
    </Tag>
  );
}

// 3D tilt + glare following the cursor.
export function Tilt({ children, className = "", max = 8 }) {
  const ref = useRef(null);
  const move = (e) => {
    const el = ref.current, r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width, y = (e.clientY - r.top) / r.height;
    el.style.transform = `perspective(900px) rotateY(${(x - 0.5) * max * 2}deg) rotateX(${(0.5 - y) * max * 2}deg) translateY(-6px)`;
    el.style.setProperty("--gx", `${x * 100}%`); el.style.setProperty("--gy", `${y * 100}%`);
  };
  const reset = () => { ref.current.style.transform = ""; };
  return <div ref={ref} onMouseMove={move} onMouseLeave={reset} className={`tilt-card ${className}`}>{children}</div>;
}

export const Eyebrow = ({ children }) => (
  <p className="inline-flex items-center gap-2 text-sm font-bold" style={{ color: "var(--red)" }}>
    <span className="h-0.5 w-6 rounded bg-[var(--red)]"></span>{children}
  </p>
);
