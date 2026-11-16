import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.webp";
import Reveal from "../hooks/Reveal";
import { FOOTER as F, SERVICES, PHONE, EMAIL } from "../data/content";
import { Heading } from "./ui";

const SOCIAL = [
  ["LinkedIn", "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 110-4.125 2.062 2.062 0 010 4.125zM7.119 20.452H3.555V9h3.564v11.452z"],
  ["X", "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"],
  ["Facebook", "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"],
];

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
  const sub = (e) => {
    e.preventDefault();
    if (!/^\S+@\S+\.\S+$/.test(email)) return setS("error");
    setS("ok"); // TODO: connect to your newsletter service
  };

  return (
    <footer className="relative overflow-hidden bg-[#0b1a3a] text-white">
      <div className="svc-grid absolute inset-0 opacity-60" aria-hidden="true"></div>
      <div className="footer-beam" aria-hidden="true"></div>
      <div className="cta-orb cta-orb-a" aria-hidden="true"></div>
      <div className="cta-orb cta-orb-b" aria-hidden="true"></div>

      <div className="relative mx-auto max-w-6xl px-5 pb-10 pt-16 sm:px-6 sm:pt-24">
        <div className="mx-auto max-w-3xl text-center">
          <Heading className="text-2xl font-extrabold leading-tight sm:text-4xl">{F.headline}</Heading>
          <Reveal delay={200}><Link to="/contact" className="btn-red btn-shine relative mt-8 inline-block overflow-hidden rounded-full px-8 py-3.5 text-sm font-semibold text-white transition hover:-translate-y-0.5">{F.button}</Link></Reveal>
        </div>

        <div className="mt-16 grid gap-12 border-t border-white/10 pt-12 sm:grid-cols-2 lg:grid-cols-12">
          <div className="sm:col-span-2 lg:col-span-4">
            <Link to="/" className="inline-block rounded-2xl bg-white px-4 py-2.5" aria-label="Aspire IT Pro home"><img src={logo} alt="Aspire IT Pro" className="h-7 w-auto" /></Link>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-[#9fb4e6]">{F.about}</p>
            <span className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-xs font-semibold text-emerald-300">
              <span className="relative flex h-2 w-2"><span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-70"></span><span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400"></span></span>
              Available for new projects
            </span>
            <div className="mt-6 flex gap-3">
              {SOCIAL.map(([n, d]) => (
                <a key={n} href="#" aria-label={n} className="grid h-10 w-10 place-items-center rounded-full border border-white/15 bg-white/5 transition hover:-translate-y-1 hover:border-transparent hover:bg-[var(--red)]">
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor"><path d={d} /></svg>
                </a>
              ))}
            </div>
          </div>

          <nav className="lg:col-span-2" aria-label="Company">
            <h3 className="text-sm font-extrabold">Company</h3>
            <ul className="mt-5 space-y-3 text-sm text-[#9fb4e6]">
              {[["Home", "/"], ["About Us", "/about-us"], ["Contact Us", "/contact"], ["Portfolio", "/#portfolio"], ["Blog", "/#blog"]].map(([l, h]) => <li key={l}><Link to={h} className="foot-link">{l}</Link></li>)}
            </ul>
          </nav>

          <nav className="lg:col-span-3" aria-label="Services">
            <h3 className="text-sm font-extrabold">Services</h3>
            <ul className="mt-5 space-y-3 text-sm text-[#9fb4e6]">
              {SERVICES.map((v) => <li key={v.id}><Link to="/#services" className="foot-link">{v.name}</Link></li>)}
            </ul>
          </nav>

          <div className="lg:col-span-3">
            <h3 className="text-sm font-extrabold">{F.community}</h3>
            <p className="mt-5 text-sm text-[#9fb4e6]">{F.note}</p>
            {s === "ok" ? (
              <p className="svc-swap mt-4 text-sm font-bold text-emerald-300" role="status">{F.ok}</p>
            ) : (
              <form onSubmit={sub} noValidate className="mt-4 flex gap-2">
                <label htmlFor="nl" className="sr-only">Email</label>
                <input id="nl" type="email" value={email} onChange={(e) => { setEmail(e.target.value); setS("idle"); }} placeholder="Email"
                  className="min-w-0 flex-1 rounded-full border border-white/15 bg-white/10 px-4 py-3 text-sm text-white outline-none placeholder:text-[#7d92c4] focus:border-white/50" />
                <button className="btn-red rounded-full px-5 py-3 text-sm font-semibold text-white">Subscribe</button>
              </form>
            )}
            {s === "error" && <p className="mt-2 text-xs font-semibold text-[#ff7d98]" role="alert">{F.fail}</p>}
            <ul className="mt-6 space-y-2.5 text-sm">
              <li><a href={`tel:${PHONE}`} className="foot-link text-[#9fb4e6]">{PHONE}</a></li>
              <li><a href={`mailto:${EMAIL}`} className="foot-link break-all text-[#9fb4e6]">{EMAIL}</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="wordmark relative select-none text-center font-extrabold leading-none" aria-hidden="true">ASPIRE IT PRO</div>

      <div className="relative border-t border-white/10 px-5 py-6 sm:px-6">
        <div className="mx-auto grid max-w-6xl items-center gap-4 text-center text-xs text-[#9fb4e6] lg:grid-cols-3">
          <span className="lg:justify-self-start">{F.copy}</span>

            <nav aria-label="Footer" className="flex flex-wrap justify-center gap-x-6 gap-y-2">
              <Link to="/about-us" className="foot-link">About Us</Link>
              <Link to="/#blog" className="foot-link">Blog</Link>
              <Link to="/contact" className="foot-link">Contact Us</Link>
              <a href="#" className="foot-link">Privacy Policy</a>
            </nav>

            <a href={F.creditUrl} target="_blank" rel="noreferrer"
               className="foot-link font-semibold lg:justify-self-end">{F.credit}</a>
          </div>
      </div>
    </footer>
  );
}
