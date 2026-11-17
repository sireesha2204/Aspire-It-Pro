import config from "../config";

// ---- tiny toast bus: toast({ type: "success" | "error", title, msg }) ----
export const TOAST_EVT = "aspire-toast";
export const toast = (detail) => window.dispatchEvent(new CustomEvent(TOAST_EVT, { detail }));

export const MSG = {
  quote: {
    ok: ["Thank you for your interest!", "Your request has reached Aspire IT Pro. Our team will connect with you shortly."],
    bad: ["Message not sent", "Something went wrong on our side. Please try again in a moment."],
  },
  subscribe: {
    ok: ["Thank you for your interest!", "You are subscribed. Our team will connect with you shortly."],
    bad: ["Subscription failed", "We could not add you just now. Please try again in a moment."],
  },
};

// Sends a form to your Google Apps Script (alert mail goes to your inbox) and shows the toast.
// Resolves true on success, false on failure.
export async function sendMail(kind, data) {
  try {
    if (!config.mailScript) throw new Error("mailScript is empty - see GOOGLE_MAIL_SETUP.md");
    // text/plain avoids the CORS preflight that Apps Script cannot answer
    const r = await fetch(config.mailScript, {
      method: "POST",
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      body: JSON.stringify({ kind, ...data }),
    });
    const j = await r.json();
    if (!j.ok) throw new Error(j.error || "send");
    toast({ type: "success", title: MSG[kind].ok[0], msg: MSG[kind].ok[1] });
    return true;
  } catch (e) {
    console.error("[Aspire mail]", e);
    toast({ type: "error", title: MSG[kind].bad[0], msg: MSG[kind].bad[1] });
    return false;
  }
}
