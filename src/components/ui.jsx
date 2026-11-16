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

export const Stars = () => (
  <div className="flex gap-0.5" aria-label="5 out of 5 stars">
    {[0, 1, 2, 3, 4].map((s) => (
      <svg key={s} viewBox="0 0 24 24" className="star h-5 w-5" style={{ animationDelay: `${s * 90}ms` }} fill="#f5b83d" aria-hidden="true"><path d="M12 2l3 7 7 .6-5.3 4.7 1.7 7.2L12 17.8 5.6 21.5l1.7-7.2L2 9.6 9 9z" /></svg>
    ))}
  </div>
);

export const Eyebrow = ({ children }) => (
  <p className="inline-flex items-center gap-2 text-sm font-bold" style={{ color: "var(--red)" }}>
    <span className="h-0.5 w-6 rounded bg-[var(--red)]"></span>{children}
  </p>
);

// Animated wave that separates sections with a colour wash.
export function Wave({ flip = false }) {
  return (
    <div className={`wave ${flip ? "rotate-180" : ""}`} aria-hidden="true">
      <svg viewBox="0 0 2880 90" preserveAspectRatio="none">
        <defs><linearGradient id="wv" x1="0" x2="1"><stop offset="0" stopColor="#3b5fad" stopOpacity=".22" /><stop offset=".5" stopColor="#ee3159" stopOpacity=".18" /><stop offset="1" stopColor="#1f5ca6" stopOpacity=".22" /></linearGradient></defs>
        <path d="M0 45Q180 0 360 45T720 45T1080 45T1440 45T1800 45T2160 45T2520 45T2880 45V90H0Z" fill="url(#wv)" />
      </svg>
    </div>
  );
}

// Floating colour shapes that drift with scroll (parallax) and bob on their own.
export function Decor({ alt = false }) {
  const L = (a, b) => (alt ? b : a);
  return (
    <div className="decor" aria-hidden="true">
      <span className="d" style={{ left: L("5%", "90%"), top: "10%", "--k": "-110px" }}><i className="d-ring"></i></span>
      <span className="d" style={{ left: L("92%", "6%"), top: "26%", "--k": "-60px" }}><i className="d-plus">+</i></span>
      <span className="d" style={{ left: L("12%", "84%"), top: "70%", "--k": "-140px" }}><i className="d-dot"></i></span>
      <span className="d" style={{ left: L("86%", "14%"), top: "78%", "--k": "-90px" }}><i className="d-tri"></i></span>
      <span className="d" style={{ left: L("48%", "52%"), top: "4%", "--k": "-50px" }}><i className="d-dots"></i></span>
    </div>
  );
}
