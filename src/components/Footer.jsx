import { sendMail } from "../lib/toast";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.webp";
import Reveal from "../hooks/Reveal";
import { FOOTER as F, SERVICES } from "../data/content";
import { Heading } from "./ui";

export function BackToTop() {
  const [p, setP] = useState(0);
  useEffect(() => {
    const on = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setP(max > 0 ? window.scrollY / max : 0);
    };
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  const show = p > 0.04;
  const C = 2 * Math.PI * 20;
  return (
    <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} aria-label="Back to top"
      className={`glass fixed bottom-5 right-4 z-40 grid h-12 w-12 place-items-center rounded-full transition-all duration-300 sm:right-6 ${show ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"}`}>
      <svg viewBox="0 0 48 48" className="absolute inset-0 -rotate-90" aria-hidden="true">
        <circle cx="24" cy="24" r="20" fill="none" stroke="rgba(59,95,173,.15)" strokeWidth="3" />
        <circle cx="24" cy="24" r="20" fill="none" stroke="var(--red)" strokeWidth="3" strokeLinecap="round" strokeDasharray={C} strokeDashoffset={C * (1 - p)} />
      </svg>
      <svg viewBox="0 0 24 24" className="relative h-4 w-4" fill="none" stroke="var(--blue-d)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 19V5M5 12l7-7 7 7" /></svg>
    </button>
  );
}

export default function Footer() {
  const [email, setEmail] = useState("");
  const [s, setS] = useState("idle");
  const [hp, setHp] = useState(""); // hidden spam-trap field
  const sub = async (e) => {
    e.preventDefault();
    if (s === "sending") return;
    if (!/^\S+@\S+\.\S+$/.test(email)) return setS("error");
    setS("sending");
    const ok = await sendMail("subscribe", { email: email.trim(), website: hp });
    setS(ok ? "ok" : "idle");
  };
  const rows = [SERVICES.slice(0, 6), SERVICES.slice(6)]; // line 1 ends at DevOps Services

  return (
    <footer className="relative overflow-hidden bg-[#0b1a3a] text-white">
      <div className="svc-grid absolute inset-0 opacity-60" aria-hidden="true"></div>
      <div className="footer-beam" aria-hidden="true"></div>
      <div className="cta-orb cta-orb-a" aria-hidden="true"></div>
      <div className="cta-orb cta-orb-b" aria-hidden="true"></div>

      <div className="relative mx-auto max-w-6xl px-5 pt-16 sm:px-6 sm:pt-24">
        {/* 1. Empowering card (left) with its button */}
        <div className="grid items-center gap-10 lg:grid-cols-[1.35fr_1fr]">
          <Reveal className="rv-l">
            <div className="glow-border relative rounded-[28px] bg-white/5 p-7 text-left backdrop-blur sm:p-10">
              <Heading className="text-2xl font-extrabold leading-tight sm:text-4xl">{F.headline}</Heading>
              <Link to="/contact" className="btn-red btn-shine relative mt-8 inline-block overflow-hidden rounded-full px-8 py-3.5 text-sm font-semibold text-white transition hover:-translate-y-0.5">{F.button}</Link>
            </div>
          </Reveal>
          <div className="foot-orbit relative mx-auto hidden aspect-square w-full max-w-[16rem] lg:block" aria-hidden="true">
            {[100, 72, 46].map((p, i) => (
              <span key={p} className="foot-ring" style={{ inset: `${(100 - p) / 2}%`, animationDuration: `${16 + i * 8}s`, animationDirection: i % 2 ? "reverse" : "normal" }}><i></i></span>
            ))}
            <span className="foot-core"></span>
          </div>
        </div>

        {/* 2. Services: first line up to DevOps Services, the rest on the next line */}
        <nav className="mt-14 space-y-4 border-t border-white/10 pt-10" aria-label="Services">
          {rows.map((row, r) => (
            <ul key={r} className="flex flex-wrap gap-x-8 gap-y-3 text-sm text-[#b9c8ee]">
              {row.map((v) => <li key={v.id} className="relative"><Link to="/#services" className="foot-link foot-svc">{v.name}</Link></li>)}
            </ul>
          ))}
        </nav>

        {/* 3. Join Our Community (below services, above the company name) */}
        <div className="mt-12 flex flex-col gap-6 border-t border-white/10 pt-10 md:flex-row md:items-end md:justify-between">
          <div>
            <h3 className="text-lg font-extrabold">{F.community}</h3>
            <p className="mt-2 text-sm text-[#9fb4e6]">{F.note}</p>
          </div>
          <div className="w-full md:max-w-md">
            {s === "ok" ? (
              <p className="svc-swap text-sm font-bold text-emerald-300" role="status">{F.ok}</p>
            ) : (
              <form onSubmit={sub} noValidate className="flex gap-2">
                <label htmlFor="nl" className="sr-only">Email</label>
                <input id="nl" type="email" value={email} onChange={(e) => { setEmail(e.target.value); setS("idle"); }} placeholder="Email"
                  className="min-w-0 flex-1 rounded-full border border-white/15 bg-white/10 px-5 py-3 text-sm text-white outline-none placeholder:text-[#7d92c4] focus:border-white/50" />
                <input className="hp" type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" value={hp} onChange={(e) => setHp(e.target.value)} />
                <button disabled={s === "sending"} className="btn-red rounded-full px-6 py-3 text-sm font-semibold text-white disabled:opacity-70">{s === "sending" ? "Sending" : "Subscribe"}</button>
              </form>
            )}
            {s === "error" && <p className="mt-2 text-xs font-semibold text-[#ff7d98]" role="alert">{F.fail}</p>}
          </div>
        </div>

        {/* 4. Company name + remaining original footer information */}
        <div className="mt-12 flex flex-col gap-5 border-t border-white/10 pt-10 md:flex-row md:items-center md:gap-8">
          <Link to="/" className="inline-block shrink-0 self-start rounded-2xl bg-white px-4 py-2.5" aria-label="Aspire IT Pro home"><img src={logo} alt="Aspire IT Pro" className="h-8 w-auto" /></Link>
          <p className="max-w-2xl text-sm leading-relaxed text-[#9fb4e6]">{F.about}</p>
        </div>
      </div>

      <div className="wordmark relative mt-10 select-none text-center font-extrabold leading-none" aria-hidden="true">ASPIRE IT PRO</div>

      <div className="relative border-t border-white/10 px-5 py-6 sm:px-6">
        <div className="mx-auto grid max-w-6xl items-center gap-4 text-center text-xs text-[#9fb4e6] lg:grid-cols-3">
          <a href={F.creditUrl} target="_blank" rel="noreferrer" className="foot-link font-semibold lg:justify-self-start">{F.credit}</a>
          <span>{F.copy}</span>
          <nav aria-label="Footer" className="flex flex-wrap justify-center gap-x-6 gap-y-2 lg:justify-self-end">
            <Link to="/about-us" className="foot-link">About Us</Link>
            <Link to="/Blog" className="foot-link">Blog</Link>
            <Link to="/contact" className="foot-link">Contact Us</Link>
            <a href="#" className="foot-link">Privacy Policy</a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
