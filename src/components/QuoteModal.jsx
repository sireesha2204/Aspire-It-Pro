import { useEffect } from "react";
import QuoteForm from "./QuoteForm";

export default function QuoteModal({ open, onClose }) {
  useEffect(() => {
    if (!open) return;
    const esc = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", esc);
    document.body.style.overflow = "hidden";
    return () => { document.removeEventListener("keydown", esc); document.body.style.overflow = ""; };
  }, [open, onClose]);
  if (!open) return null;
  return (
    <div className="modal-bg fixed inset-0 z-[60] grid place-items-center overflow-y-auto p-4" onMouseDown={(e) => e.target === e.currentTarget && onClose()}>
      <div role="dialog" aria-modal="true" aria-labelledby="quote-t" className="modal-card glass relative w-full max-w-md rounded-[28px] bg-white p-6 sm:p-8">
        <button onClick={onClose} aria-label="Close" className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full bg-[rgba(59,95,173,.1)] text-lg transition hover:rotate-90">×</button>
        <h2 id="quote-t" className="mb-5 pr-10 text-2xl font-extrabold">Get a Quote Right Now</h2>
        <QuoteForm idp="modal" />
      </div>
    </div>
  );
}
