"use client";

import { useEffect, useState } from "react";
import Hero from "./Hero";

const fonts = [
  { name: "IBM Plex Sans · 当前首页", family: "var(--font-sans-stack)" },
  { name: "Archivo · 原版", family: "var(--font-display-stack)" },
  { name: "Archivo Expanded · 宽扁", family: "Archivo Preview Expanded", google: "Archivo:wdth,wght@125,700", source: "Archivo", stretch: "125%" },
  { name: "Michroma · 宽扁科技感", family: "Michroma", google: "Michroma", weight: 400 },
  { name: "Syncopate · 宽扁几何", family: "Syncopate", google: "Syncopate:wght@700" },
  { name: "Orbitron · 科幻", family: "Orbitron", google: "Orbitron:wght@700" },
  { name: "Space Grotesk · 现代科技", family: "Space Grotesk", google: "Space+Grotesk:wght@700" },
  { name: "Sora · 几何", family: "Sora", google: "Sora:wght@700" },
  { name: "Manrope · 简洁", family: "Manrope", google: "Manrope:wght@700" },
  { name: "Outfit · 圆润", family: "Outfit", google: "Outfit:wght@700" },
  { name: "Montserrat · 稳重", family: "Montserrat", google: "Montserrat:wght@700" },
  { name: "Rajdhani · 窄体科技", family: "Rajdhani", google: "Rajdhani:wght@700" },
];

export default function FontPreview() {
  const [selected, setSelected] = useState(0);
  const [loaded, setLoaded] = useState(0);
  const [status, setStatus] = useState("已加载");
  const font = fonts[selected];
  const active = fonts[loaded];

  useEffect(() => {
    let cancelled = false;
    if (!font.google) { setLoaded(selected); setStatus("已加载"); return; }
    setStatus("正在加载字体…");
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = `https://fonts.googleapis.com/css2?family=${font.google}&display=swap`;
    link.onload = async () => {
      try {
        await document.fonts.load(`${font.weight ?? 700} 48px "${font.source ?? font.family}"`);
        if (!cancelled) { setLoaded(selected); setStatus("已加载"); }
      } catch { if (!cancelled) setStatus("字体加载失败，请切换其他字体或重试"); }
    };
    link.onerror = () => { if (!cancelled) setStatus("字体加载失败，请检查网络"); };
    document.head.appendChild(link);
    return () => { cancelled = true; link.remove(); };
  }, [selected, font]);

  return (
    <main className="relative z-10">
      <Hero previewFont={active.source ?? active.family} previewWeight={active.weight} previewStretch={active.stretch} />
      <aside aria-label="字体预览控制台" className="fixed bottom-3 left-3 right-3 z-50 mx-auto max-w-[850px] rounded-xl border border-[var(--line-2)] bg-[#12100cf2] p-4 shadow-2xl backdrop-blur-xl sm:bottom-5 sm:p-5">
        <div className="flex flex-wrap items-center justify-between gap-2 text-sm">
          <label htmlFor="font-choice" className="font-semibold text-[var(--fg)]">字体试衣间</label>
          <a href="https://fonts.google.com/" target="_blank" rel="noopener noreferrer" className="text-[var(--amber)] underline underline-offset-4">浏览 Google Fonts 字体库 ↗</a>
        </div>
        <div className="mt-3 flex items-center gap-2">
          <button aria-label="上一款字体" onClick={() => setSelected((selected + fonts.length - 1) % fonts.length)} className="rounded border border-[var(--line-2)] px-3 py-2">←</button>
          <select id="font-choice" value={selected} onChange={e => setSelected(Number(e.target.value))} className="min-w-0 flex-1 rounded border border-[var(--line-2)] bg-[#211b12] px-3 py-2 text-[var(--fg)]">
            {fonts.map((f, i) => <option key={f.name} value={i}>{f.name}</option>)}
          </select>
          <button aria-label="下一款字体" onClick={() => setSelected((selected + 1) % fonts.length)} className="rounded border border-[var(--line-2)] px-3 py-2">→</button>
        </div>
        <p aria-live="polite" className="mt-2 text-xs leading-relaxed text-[var(--muted)]">{status} · 只预览字体，字号和间距沿用首页；字体宽度不同会自然改变换行。选好后把名称告诉我即可。</p>
      </aside>
    </main>
  );
}
