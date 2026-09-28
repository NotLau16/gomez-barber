import { Instagram, Scissors } from "lucide-react";
import { BUSINESS } from "@/lib/constants";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-ink-800">
      <div className="mx-auto max-w-6xl px-5 py-12">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <div className="flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-full border border-gold-400/60 text-gold-400">
                <Scissors className="h-3.5 w-3.5" strokeWidth={2.25} />
              </span>
              <span className="font-display text-xl tracking-wide text-stone-100">
                Gomez Barber
              </span>
            </div>
            <p className="mt-3 max-w-xs text-sm text-stone-500">
              {BUSINESS.fullAddress}
            </p>
          </div>

          <div className="flex flex-col gap-3 text-sm">
            <a
              href={BUSINESS.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-stone-400 transition-colors hover:text-gold-400"
            >
              <Instagram className="h-4 w-4" strokeWidth={2} />
              {BUSINESS.instagramHandle}
            </a>
            <a
              href={BUSINESS.barberInstagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-stone-400 transition-colors hover:text-gold-400"
            >
              <Instagram className="h-4 w-4" strokeWidth={2} />
              {BUSINESS.barberInstagramHandle}
            </a>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-ink-800 pt-6 text-xs text-stone-600 sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} Gomez Barber. Todos los derechos reservados.</p>
          <p>Sitio desarrollado con Claude</p>
        </div>
      </div>
    </footer>
  );
}
