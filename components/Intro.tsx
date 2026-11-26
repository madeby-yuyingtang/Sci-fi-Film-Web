"use client";

import Reveal from "./Reveal";
import Trailer from "./Trailer";

export default function Intro() {
  return (
    <section id="brief" className="section relative z-10 mx-auto max-w-[var(--maxw)] px-[var(--gutter)]">
      <div className="border-t border-[var(--line)] pt-3" />

      <div className="mt-12">
        <Reveal>
          <p className="code">SCIENCE · ART · AI</p>
          <h2 className="mt-6 font-display text-[clamp(2rem,4.2vw,3.6rem)] font-semibold leading-[1.08] tracking-[-0.025em]">
            FUTURE CIVILIZATION
          </h2>
          <p className="mt-7 font-display text-[clamp(1.3rem,2.5vw,2rem)] leading-tight text-[var(--amber)]">
            Bridging Academia and Creative Industries
          </p>
          <p className="mt-7 max-w-[90ch] text-[clamp(1rem,1.5vw,1.2rem)] leading-relaxed text-[var(--muted)]">
            A global, research-led interdisciplinary initiative where scientific
            discovery, artistic imagination, and artificial intelligence converge
            to advance human–AI co-creation, creative innovation, and
            interdisciplinary collaboration.
          </p>
        </Reveal>

        <div className="mt-10 border-t border-[var(--line)] pt-9 sm:mt-12 sm:pt-12">
          <Reveal>
            <h3 className="font-display text-2xl font-semibold sm:text-3xl">What We Do</h3>
          </Reveal>
          <ol className="mt-6">
            {[
              {
                title: "Connect Global Expertise",
                description: "Bring together scientists, artists, filmmakers, AI and HCI researchers, and creative industry professionals, fostering collaboration across disciplines, sectors, and cultures.",
              },
              {
                title: "Catalyze Creative Innovation",
                description: "Curate annual flagship co-creation programs at the intersection of science, art, AI, and emerging media, transforming visionary ideas into original creative works.",
              },
              {
                title: "Showcase Creative Excellence",
                description: "Present exceptional interdisciplinary works on the international stage through curated exhibitions, film screenings, and cultural showcases.",
              },
              {
                title: "Bridge Academia and Industry",
                description: "Convene distinguished voices from academia and the creative industries through international symposia, expert-led workshops, thematic meet-ups, specialized courses, university lectures, and research exchanges.",
              },
              {
                title: "Nurture Talent & Incubate Innovation",
                description: "Empower promising creators and projects through expert mentorship, strategic industry connections, and opportunities for creative development, production, distribution, and commercialization.",
              },
            ].map((item, index) => (
              <li key={item.title} className="border-b border-[var(--line)]">
                <Reveal className="grid grid-cols-[2rem_1fr] gap-3 py-7 sm:grid-cols-[3rem_1fr] sm:gap-5 sm:py-9">
                  <span className="pt-1 font-mono text-lg text-[var(--amber)]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h4 className="font-display text-xl font-medium leading-snug sm:text-2xl">{item.title}</h4>
                    <p className="mt-3 max-w-[90ch] leading-relaxed text-[var(--muted)]">{item.description}</p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>

        <Reveal className="mt-9 flex flex-wrap gap-4 sm:mt-12">
          <button type="button" aria-disabled="true" className="inline-flex min-h-12 items-center justify-center rounded-md border border-[var(--amber)] bg-[var(--amber)] px-6 py-4 font-mono text-sm font-medium text-[var(--bg)] cursor-default focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--amber)]">
            JOIN OUR COMMUNITY
          </button>
          <a href="#programs" className="inline-flex min-h-12 items-center justify-center rounded-md border border-[var(--amber)] px-6 py-4 font-mono text-sm font-medium text-[var(--amber)] transition-colors hover:bg-[var(--panel-2)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--amber)]">
            EXPLORE OUR PROGRAMS
          </a>
        </Reveal>
      </div>

      <Reveal delay={120} className="mt-16 lg:mt-24">
        <article id="programs" className="frame scroll-mt-24 overflow-hidden bg-[var(--panel)]">
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

            <Trailer />
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
