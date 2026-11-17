import { useEffect, useRef, useState } from "react";
import { TOAST_EVT } from "../lib/toast";

function Item({ t, close }) {
  const [out, setOut] = useState(false);
  const timer = useRef(null);
  const left = useRef(6500);
  const start = useRef(0);
  const dismiss = () => { setOut(true); setTimeout(() => close(t.id), 300); };
  const run = () => { start.current = Date.now(); timer.current = setTimeout(dismiss, left.current); };
  const pause = () => { clearTimeout(timer.current); left.current = Math.max(1200, left.current - (Date.now() - start.current)); };
  useEffect(() => { run(); return () => clearTimeout(timer.current); }, []);
  const ok = t.type === "success";
  return (
    <div className={`toast ${ok ? "ok" : "er"}${out ? " out" : ""}`} role={ok ? "status" : "alert"}
      onMouseEnter={pause} onMouseLeave={run} onFocus={pause} onBlur={run}>
      <span className="t-ic" aria-hidden="true">
        <svg viewBox="0 0 24 24">{ok ? <path d="M5 12.5l4.5 4.5L19 7.5" /> : <path d="M12 7v6M12 17h.01" />}</svg>
      </span>
      <div className="t-tx"><strong>{t.title}</strong><p>{t.msg}</p></div>
      <button type="button" className="t-x" aria-label="Dismiss notification" onClick={dismiss}>
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18" /></svg>
      </button>
      <i className="t-bar" aria-hidden="true" />
    </div>
  );
}

export default function Toaster() {
  const [items, setItems] = useState([]);
  const id = useRef(0);
  useEffect(() => {
    const h = (e) => { const n = ++id.current; setItems((a) => [...a.slice(-2), { id: n, ...e.detail }]); };
    window.addEventListener(TOAST_EVT, h);
    return () => window.removeEventListener(TOAST_EVT, h);
  }, []);
  return <div className="toasts" aria-live="polite">{items.map((t) => <Item key={t.id} t={t} close={(n) => setItems((a) => a.filter((x) => x.id !== n))} />)}</div>;
}
