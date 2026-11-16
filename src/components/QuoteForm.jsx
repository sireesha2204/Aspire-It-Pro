import { useState } from "react";

const field = "w-full rounded-2xl border border-[rgba(59,95,173,.2)] bg-white/90 px-4 py-3.5 text-sm outline-none transition focus:border-[var(--blue-d)] focus:ring-4 focus:ring-[rgba(59,95,173,.15)]";

// Name / Email / Message / Send, as on the live site. Plug your backend into `send`.
export default function QuoteForm({ idp = "q", label = "Send" }) {
  const [v, setV] = useState({ name: "", email: "", message: "" });
  const [err, setErr] = useState({});
  const [state, setState] = useState("idle");
  const set = (k) => (e) => setV({ ...v, [k]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    const er = {};
    if (!v.name.trim()) er.name = "Enter your name.";
    if (!/^\S+@\S+\.\S+$/.test(v.email)) er.email = "Enter a valid email address.";
    if (v.message.trim().length < 5) er.message = "Enter a short message.";
    setErr(er);
    if (Object.keys(er).length) return;
    setState("sending");
    // TODO: send to your API / EmailJS / form service here
    setTimeout(() => setState("sent"), 1200);
  };
  const Err = ({ k }) => err[k] ? <p className="mt-1.5 text-xs font-semibold" style={{ color: "var(--red)" }} role="alert">{err[k]}</p> : null;

  if (state === "sent")
    return (
      <div className="svc-swap grid min-h-[16rem] place-items-center text-center">
        <div>
          <svg viewBox="0 0 64 64" className="mx-auto h-20 w-20" aria-hidden="true"><circle cx="32" cy="32" r="28" fill="none" stroke="#3bd6a0" strokeWidth="4" className="draw-c" /><path d="M20 33l8 8 16-18" fill="none" stroke="#3bd6a0" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" className="draw-c" /></svg>
          <h3 className="mt-4 text-xl font-extrabold">Thank you, {v.name.split(" ")[0]}!</h3>
          <button onClick={() => { setV({ name: "", email: "", message: "" }); setState("idle"); }} className="mt-4 text-sm font-bold" style={{ color: "var(--blue-d)" }}>Send another</button>
        </div>
      </div>
    );

  return (
    <form onSubmit={submit} noValidate className="space-y-4">
      <div><label className="mb-1.5 block text-sm font-semibold" htmlFor={`${idp}-n`}>Name</label><input id={`${idp}-n`} className={field} value={v.name} onChange={set("name")} autoComplete="name" /><Err k="name" /></div>
      <div><label className="mb-1.5 block text-sm font-semibold" htmlFor={`${idp}-e`}>Email</label><input id={`${idp}-e`} type="email" className={field} value={v.email} onChange={set("email")} autoComplete="email" /><Err k="email" /></div>
      <div><label className="mb-1.5 block text-sm font-semibold" htmlFor={`${idp}-m`}>Message</label><textarea id={`${idp}-m`} rows="4" className={field} value={v.message} onChange={set("message")} /><Err k="message" /></div>
      <button type="submit" disabled={state === "sending"} className="btn-red inline-flex items-center gap-2 rounded-full px-8 py-3.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 disabled:opacity-70">
        {state === "sending" && <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white"></span>}
        {state === "sending" ? "Sending" : label}
      </button>
    </form>
  );
}
