import { Link } from "react-router-dom";
import Reveal from "../hooks/Reveal";
import { CTA } from "../data/content";
import { Heading } from "./ui";

export default function Cta() {
  return (
    <section className="px-4 pb-12 pt-4 sm:px-6">
      <Reveal className="svc-panel relative mx-auto max-w-6xl overflow-hidden rounded-[28px] px-6 py-14 text-center text-white sm:rounded-[32px] sm:px-16 sm:py-20">
        <div className="svc-grid absolute inset-0" aria-hidden="true"></div>
        <div className="cta-orb cta-orb-a" aria-hidden="true"></div>
        <div className="cta-orb cta-orb-b" aria-hidden="true"></div>
        <div className="relative mx-auto max-w-2xl">
          <Heading className="text-3xl font-extrabold leading-tight sm:text-5xl">{CTA.title}</Heading>
          <p className="mt-5 text-[15px] leading-relaxed text-[#b9c8ee]">{CTA.text}</p>
          <Link to="/contact" className="btn-red btn-shine relative mt-8 inline-block overflow-hidden rounded-full px-8 py-3.5 text-sm font-semibold text-white transition hover:-translate-y-0.5">{CTA.button}</Link>
        </div>
      </Reveal>
    </section>
  );
}
