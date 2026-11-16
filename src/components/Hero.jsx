import { Link } from "react-router-dom";
import Scene3D from "./Scene3D";

export default function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden pb-20 pt-24 sm:pb-24 sm:pt-28">
      <div className="mesh absolute inset-0 -z-10"></div>
      <div className="dots absolute inset-0 -z-10"></div>

      <div className="relative z-10 mx-auto max-w-4xl px-6 pt-10 text-center sm:pt-16">
        <span
          className="fade-up glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-bold"
          style={{ color: "var(--blue-d)" }}
        >
          <span
            className="h-2 w-2 animate-pulse rounded-full"
            style={{ background: "var(--red)" }}
          ></span>{" "}
          Your Partner in Digital Transformation
        </span>
        <h1
          className="fade-up mt-6 text-3xl font-extrabold leading-[1.15] tracking-tight sm:text-4xl lg:text-5xl"
          style={{ animationDelay: ".2s" }}
        >
          Leading the Way for{" "}
          <span className="grad-text">
            Modern Businesses Software Solutions
          </span>
          <span className="animate-pulse" style={{ color: "var(--red)" }}>
            {" "}
            |
          </span>
        </h1>
        <p
          className="fade-up mx-auto mt-6 max-w-2xl text-sm leading-relaxed sm:text-[15px]"
          style={{ color: "var(--muted)", animationDelay: ".3s" }}
        >
          We specialize in delivering cutting-edge technology solutions that
          drive growth, efficiency, and innovation. Whether you’re a startup or
          an enterprise, our expertise in software development, AI, and cloud
          solutions ensures your business stays ahead in today’s fast-paced
          digital world. Let’s redefine what’s possible together.
        </p>
        <div className="fade-up mt-8" style={{ animationDelay: ".4s" }}>
          <Link
            to="/about-us"
            className="btn-primary inline-block rounded-full px-8 py-3.5 text-sm font-semibold text-white transition hover:-translate-y-0.5"
          >
            Explore More →
          </Link>
        </div>
      </div>

      <div className="relative z-10 px-4">
        <Scene3D />
      </div>
    </section>
  );
}
