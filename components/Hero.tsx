"use client";

export default function Hero() {
  return (
    <section id="top" className="relative z-10 flex min-h-[100svh] flex-col justify-center px-[var(--gutter)] pb-8 pt-20 max-sm:pb-6 max-sm:pt-24">
      <div className="mx-auto w-full max-w-[var(--maxw)]">
        <div className="border-b border-[var(--line)] pb-3">
          <span
            className="code block whitespace-normal sm:whitespace-nowrap"
            style={{
              fontFamily: "var(--font-mono-stack)",
              fontSize: "clamp(0.76rem, 2.2vw, 2.04rem)",
              fontWeight: 500,
              letterSpacing: "0.12em",
              lineHeight: 1.15,
            }}
          >
            FUTURE CIVILIZATION
          </span>
        </div>

        <div className="mt-[clamp(2rem,5vh,4rem)]">
          <h1 className="font-display font-medium tracking-[-0.035em]">
            <span className="block text-[clamp(1.75rem,4.6vw,4rem)] leading-[1.14]">
              <span className="block">A global community</span>
              <span className="block">of creators exploring</span>
            </span>
            <span className="mt-3 block whitespace-nowrap text-[clamp(1.95rem,7.2vw,6.25rem)] leading-[1.08] tracking-[-0.045em] text-[var(--amber)] sm:mt-4">
              Science × Art × AI
            </span>
          </h1>
          <p className="mt-6 max-w-[46ch] font-sans text-[0.95rem] font-normal leading-relaxed text-[var(--muted)] sm:mt-8 sm:text-[1.1rem]">
            Imagining Future Worlds through Human–AI Co-Creation.
          </p>
        </div>

        <div className="mt-[clamp(2.25rem,5vh,3.5rem)]">
          <div className="flex items-end justify-between gap-4 border-t border-[var(--line)] pt-3">
            <span className="code max-w-[75%] leading-relaxed">Science · Cinema · Imagination · AI</span>
            <button
              onClick={() => document.getElementById("brief")?.scrollIntoView({ behavior: "smooth" })}
              className="flex items-center gap-2 font-mono text-[0.66rem] uppercase tracking-[0.16em] text-[var(--faint)] transition-colors hover:text-[var(--fg)]"
            >
              Enter
              <svg width="10" height="16" viewBox="0 0 10 16" fill="none" style={{ animation: "floatY 2.4s ease-in-out infinite" }}>
                <path d="M5 1v13M1 10l4 4 4-4" stroke="currentColor" strokeWidth="1.2" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
