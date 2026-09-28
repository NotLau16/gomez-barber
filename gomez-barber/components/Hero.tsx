import { MapPin, MessageCircle, Scissors } from "lucide-react";
import { BUSINESS, getWhatsAppLink } from "@/lib/constants";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div
        className="barber-stripes absolute -right-24 -top-24 h-72 w-72 rotate-12 rounded-full opacity-[0.16] blur-sm sm:h-96 sm:w-96"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-6xl px-5 pb-14 pt-10 sm:pb-20 sm:pt-16">
        <div className="inline-flex items-center gap-2 rounded-full border border-ink-700 bg-ink-900/60 px-3.5 py-1.5 text-sm text-stone-300">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
          Abierto en B° Güemes
        </div>

        <h1 className="mt-6 max-w-xl font-display text-6xl leading-[0.95] tracking-wide text-stone-50 sm:text-7xl">
          Tu corte, a tu manera, en el corazón de Güemes
        </h1>

        <p className="mt-5 max-w-md text-lg text-stone-400">
          {BUSINESS.slogan}
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a
            href={getWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 rounded-xl bg-emerald-500 px-6 py-4 text-base font-semibold text-ink-950 shadow-lg shadow-emerald-500/10 transition-transform active:scale-[0.97]"
          >
            <MessageCircle className="h-5 w-5" strokeWidth={2.25} />
            Pedir turno por WhatsApp
          </a>
          <a
            href="#servicios"
            className="flex items-center justify-center gap-2 rounded-xl border border-ink-700 bg-ink-900 px-6 py-4 text-base font-semibold text-stone-200 transition-colors active:bg-ink-800"
          >
            <Scissors className="h-5 w-5" strokeWidth={2} />
            Ver servicios y ubicación
          </a>
        </div>

        <a
          href={BUSINESS.mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 flex w-fit items-center gap-2 text-sm text-stone-500 transition-colors hover:text-gold-400"
        >
          <MapPin className="h-4 w-4" strokeWidth={2} />
          {BUSINESS.fullAddress}
        </a>
      </div>
    </section>
  );
}
