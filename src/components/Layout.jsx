import { useCallback, useEffect, useRef, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer, { BackToTop } from "./Footer";
import QuoteModal from "./QuoteModal";

function ScrollManager() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const t = setTimeout(() => document.getElementById(hash.slice(1))?.scrollIntoView({ behavior: "smooth" }), 80);
      return () => clearTimeout(t);
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);
  return null;
}

function ScrollBar() {
  const [p, setP] = useState(0);
  useEffect(() => {
    const on = () => { const m = document.documentElement.scrollHeight - window.innerHeight; const v = m > 0 ? window.scrollY / m : 0; setP(v); document.documentElement.style.setProperty("--sp", v.toFixed(4)); };
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  return <div className="scroll-bar" style={{ transform: `scaleX(${p})` }} aria-hidden="true"></div>;
}

function CursorGlow() {
  const r = useRef(null);
  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let x = 0, y = 0, cx = 0, cy = 0, raf, last = null;
    const mv = (e) => {
      x = e.clientX; y = e.clientY;
      const b = e.target.closest?.(".btn-shine");   // magnetic buttons
      if (last && last !== b) last.style.transform = "";
      if (b) { const q = b.getBoundingClientRect(); b.style.transform = `translate(${(x - q.left - q.width / 2) * 0.2}px, ${(y - q.top - q.height / 2) * 0.3}px)`; }
      last = b || null;
    };
    const loop = () => { cx += (x - cx) * 0.12; cy += (y - cy) * 0.12; if (r.current) r.current.style.transform = `translate(${cx - 200}px, ${cy - 200}px)`; raf = requestAnimationFrame(loop); };
    window.addEventListener("mousemove", mv);
    raf = requestAnimationFrame(loop);
    return () => { window.removeEventListener("mousemove", mv); cancelAnimationFrame(raf); };
  }, []);
  return <div ref={r} className="cursor-glow" aria-hidden="true"></div>;
}

export default function Layout() {
  const { pathname } = useLocation();
  const [quote, setQuote] = useState(false);
  const close = useCallback(() => setQuote(false), []);
  return (
    <>
      <ScrollManager />
      <div className="scroll-bg" aria-hidden="true"></div>
      <CursorGlow />
      <ScrollBar />
      <Navbar onQuote={() => setQuote(true)} />
      <main key={pathname} className="page-in"><Outlet /></main>
      <Footer />
      <BackToTop />
      <QuoteModal open={quote} onClose={close} />
    </>
  );
}
