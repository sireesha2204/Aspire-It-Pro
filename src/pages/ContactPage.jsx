import Reveal from "../hooks/Reveal";
import { CONTACT as C } from "../data/content";
import { Heading } from "../components/ui";
import { MapArt } from "../components/Art";

export default function ContactPage() {
  return (
    <section className="relative isolate overflow-hidden pb-20 pt-32 sm:pb-28 sm:pt-44">
      <div className="mesh absolute inset-0 -z-10"></div>
      <div className="aurora -z-10" aria-hidden="true"></div>
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 sm:px-6 lg:grid-cols-2">
        <div>
          <Heading as="h1" className="text-3xl font-extrabold tracking-tight sm:text-5xl">{C.info.title}</Heading>
          <Reveal>
            <p className="mt-5 text-[15px] leading-relaxed" style={{ color: "var(--muted)" }}>{C.info.text}</p>
            <address className="glass elev mt-6 rounded-2xl p-5 text-[15px] font-semibold not-italic leading-relaxed">
              {C.info.lines.map((l) => <span key={l} className="block">{l}</span>)}
            </address>
          </Reveal>
        </div>
        <Reveal delay={120}>
          <div className="svc-panel relative h-64 overflow-hidden rounded-[28px] sm:h-80"><MapArt /></div>
        </Reveal>
      </div>
    </section>
  );
}