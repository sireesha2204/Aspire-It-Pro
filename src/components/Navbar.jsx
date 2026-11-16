import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import logo from "../assets/logo.webp";

const LINKS = [["Home", "/"], ["About Us", "/about-us"], ["Contact", "/contact"]];

export default function Navbar({ onQuote }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 12);
    const esc = (e) => e.key === "Escape" && setOpen(false);
    on();
    window.addEventListener("scroll", on, { passive: true });
    window.addEventListener("keydown", esc);
    return () => { window.removeEventListener("scroll", on); window.removeEventListener("keydown", esc); };
  }, []);

  const cls = ({ isActive }) =>
    `nav-link relative py-1 transition ${isActive ? "is-active text-[color:var(--blue-d)]" : "hover:text-[color:var(--blue-d)]"}`;

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-4 sm:pt-5">
      <div className={`glass mx-auto flex max-w-5xl items-center justify-between rounded-full py-2 pl-4 pr-2 transition-shadow duration-300 sm:py-2.5 sm:pl-5 sm:pr-2.5 ${scrolled ? "shadow-[0_18px_40px_-14px_rgba(31,92,166,.55)]" : ""}`}>
        <Link to="/" aria-label="Aspire IT Pro home"><img src={logo} alt="Aspire IT Pro" className="h-6 w-auto sm:h-8" /></Link>

        <nav className="hidden items-center gap-8 text-sm font-semibold md:flex" style={{ color: "var(--muted)" }} aria-label="Main">
          {LINKS.map(([l, to]) => <NavLink key={to} to={to} end={to === "/"} className={cls}>{l}</NavLink>)}
        </nav>

        <div className="flex items-center gap-2">
          <button onClick={onQuote} className="btn-red btn-shine relative overflow-hidden rounded-full px-4 py-2 text-xs font-semibold text-white sm:px-5 sm:py-2.5 sm:text-sm">Get a Quote</button>
          <button onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="mobile-menu" aria-label="Toggle menu"
            className="grid h-10 w-10 place-items-center rounded-full md:hidden">
            <span className="relative block h-3.5 w-5">
              <span className={`absolute left-0 h-0.5 w-5 rounded bg-[color:var(--ink)] transition-all duration-300 ${open ? "top-1.5 rotate-45" : "top-0"}`}></span>
              <span className={`absolute left-0 top-1.5 h-0.5 w-5 rounded bg-[color:var(--ink)] transition-opacity duration-200 ${open ? "opacity-0" : ""}`}></span>
              <span className={`absolute left-0 h-0.5 w-5 rounded bg-[color:var(--ink)] transition-all duration-300 ${open ? "top-1.5 -rotate-45" : "top-3"}`}></span>
            </span>
          </button>
        </div>
      </div>

      {open && (
        <nav id="mobile-menu" className="glass svc-swap mx-auto mt-2 max-w-5xl rounded-3xl p-3 md:hidden" aria-label="Mobile">
          {LINKS.map(([l, to], i) => (
            <NavLink key={to} to={to} end={to === "/"} style={{ animationDelay: `${i * 60}ms` }}
              className={({ isActive }) => `pop-in block rounded-2xl px-5 py-3.5 text-[15px] font-bold transition ${isActive ? "bg-[rgba(59,95,173,.12)] text-[color:var(--blue-d)]" : "text-[color:var(--muted)] hover:bg-white/70"}`}>
              {l}
            </NavLink>
          ))}
        </nav>
      )}
    </header>
  );
}
