import { Instagram, Scissors } from "lucide-react";
import { BUSINESS, getWhatsAppLink } from "@/lib/constants";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-ink-800/80 bg-ink-950/70 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
        <a href="#top" className="flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-full border border-gold-400/60 text-gold-400">
            <Scissors className="h-4 w-4" strokeWidth={2.25} />
          </span>
          <span className="font-display text-2xl leading-none tracking-wide text-stone-100">
            Gomez Barber
          </span>
        </a>

        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href={BUSINESS.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Abrir Instagram de Gomez Barber"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-ink-700 text-stone-300 transition-colors hover:border-gold-400/60 hover:text-gold-400"
          >
            <Instagram className="h-4 w-4" strokeWidth={2} />
          </a>
          <a
            href={getWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-gold-400 px-4 py-2.5 text-sm font-semibold text-ink-950 transition-transform active:scale-95 sm:px-5"
          >
            Pedir turno
          </a>
        </div>
      </div>
    </header>
  );
}
