"use client";

import { useState } from "react";

export default function Trailer() {
  const [playing, setPlaying] = useState(false);

  return (
    <div className="mt-10 aspect-video w-full overflow-hidden border border-[var(--line)] bg-black">
      {playing ? (
        <iframe
          src="https://drive.google.com/file/d/1qGtTk4pQVEJorDjlt6ME3BRao3KrE0UV/preview?autoplay=1"
          title="AI FILMMATES · JUPITER 2050 — Official Trailer"
          className="h-full w-full border-0"
          allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <button
          type="button"
          onClick={() => setPlaying(true)}
          aria-label="Play AI FILMMATES · JUPITER 2050 trailer"
          className="group relative block h-full w-full cursor-pointer focus-visible:outline-2 focus-visible:-outline-offset-4 focus-visible:outline-[var(--amber)]"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="images/jupiter-2050-trailer-poster-v2.png"
            alt="Jupiter’s horizon — AI FILMMATES · JUPITER 2050 trailer cover"
            className="h-full w-full object-contain"
          />
          <span className="absolute inset-0 flex items-center justify-center">
            <span className="flex h-16 w-16 items-center justify-center rounded-full border border-[var(--amber)] bg-black/60 text-[var(--amber)] transition-transform group-hover:scale-110 sm:h-20 sm:w-20">
              <svg aria-hidden="true" width="28" height="28" viewBox="0 0 28 28" fill="currentColor">
                <path d="M9 5v18l15-9z" />
              </svg>
            </span>
          </span>
          <span className="absolute bottom-4 right-4 rounded bg-black/70 px-3 py-2 font-mono text-xs tracking-widest text-[var(--fg)]">PLAY TRAILER</span>
        </button>
      )}
    </div>
  );
}
