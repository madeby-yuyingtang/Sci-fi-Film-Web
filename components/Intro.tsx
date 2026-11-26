"use client";

import Reveal from "./Reveal";

export default function Intro() {
  return (
    <section id="brief" className="section relative z-10 mx-auto max-w-[var(--maxw)] px-[var(--gutter)]">
      <div className="border-t border-[var(--line)] pt-3" />

      <Reveal className="mt-12">
        <h2 className="h-sec">SCIENCE · ART · AI</h2>
      </Reveal>

      <Reveal delay={120} className="mt-16 lg:mt-24">
        <article className="frame overflow-hidden bg-[var(--panel)]">
          <div className="border-b border-[var(--line)] px-5 py-4 sm:px-7 lg:px-9">
            <p className="code">2026–2027 · ANNUAL FLAGSHIP PROJECT</p>
          </div>

          <div className="px-5 py-8 sm:px-7 sm:py-10 lg:px-9 lg:py-12">
            <h3 className="font-display text-[clamp(2rem,4.2vw,3.6rem)] font-semibold leading-[1.08] tracking-[-0.025em] text-[var(--fg)]">
              AI FILMMATES · JUPITER 2050
            </h3>
            <p className="mt-5 font-display text-[clamp(1rem,1.6vw,1.35rem)] text-[var(--amber)]">
              Human–AI Sci-Fi Filmmaking · Global Co-Creation
            </p>
            <p className="lede mt-6 max-w-[80ch]">
              Bringing together science, cinema, and artificial intelligence, our
              2026–2027 flagship project invites creators worldwide to envision
              possible futures through human–AI co-creation.
            </p>

            <div className="mt-10 border-l border-[var(--amber)] pl-5">
              <h4 className="code">THE CREATIVE BRIEF</h4>
              <p className="mt-4 italic text-[var(--fg)]">Jupiter System, 2050</p>
              <p className="mt-4 max-w-[80ch] leading-relaxed text-[var(--muted)]">
                Humanity is exploring Jupiter and its icy moons. During a new
                mission to the Jovian system, researchers detect an anomalous
                signal...What unfolds next is yet to be imagined.
              </p>
            </div>

            <div className="mt-10 aspect-video w-full overflow-hidden border border-[var(--line)] bg-black">
              <iframe
                src="https://drive.google.com/file/d/1qGtTk4pQVEJorDjlt6ME3BRao3KrE0UV/preview"
                title="AI FILMMATES · JUPITER 2050 — Official Trailer"
                className="h-full w-full border-0"
                allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </article>
      </Reveal>

      <Reveal delay={160} className="relative left-1/2 mt-20 w-screen -translate-x-1/2">
        <div className="relative h-[clamp(240px,40vh,480px)] overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="images/hero_window.jpg"
            alt="A figure gazes at Jupiter through a spaceship window"
            className="absolute inset-0 h-full w-full object-cover"
            style={{
              objectPosition: "center 34%",
              filter: "brightness(0.58) saturate(0.7) sepia(0.3) contrast(1.03)",
              WebkitMaskImage: "linear-gradient(to bottom, transparent, #000 16%, #000 82%, transparent)",
              maskImage: "linear-gradient(to bottom, transparent, #000 16%, #000 82%, transparent)",
            }}
          />
        </div>
      </Reveal>
    </section>
  );
}
