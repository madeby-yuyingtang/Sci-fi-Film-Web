export default function Footer() {
  return (
    <footer className="relative z-10 mx-auto max-w-[var(--maxw)] px-[var(--gutter)] pb-16 pt-4">
      <div className="flex flex-col gap-8 border-t border-[var(--line)] pt-8">
        <div>
          <p className="font-display text-lg font-semibold">
            FUTURE CIVILIZATION
          </p>
          <p className="mt-2 font-mono text-[0.72rem] uppercase tracking-[0.22em] text-[var(--amber)]">
            A global community of creators exploring Science × Art × AI
          </p>
        </div>
      </div>
      <p className="mt-8 font-mono text-[0.62rem] uppercase tracking-[0.18em] text-[var(--faint)]">
        Science · Art · AI
      </p>
    </footer>
  );
}
