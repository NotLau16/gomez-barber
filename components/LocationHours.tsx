import { Clock, MapPin, Navigation } from "lucide-react";
import { BUSINESS, SCHEDULE } from "@/lib/constants";

export default function LocationHours() {
  return (
    <section id="ubicacion" className="mx-auto max-w-6xl px-5 py-16 sm:py-24">
      <div className="max-w-md">
        <h2 className="font-display text-4xl tracking-wide text-stone-50 sm:text-5xl">
          Dónde encontrarnos
        </h2>
      </div>

      <div className="mt-10 grid gap-4 lg:grid-cols-5">
        <div className="overflow-hidden rounded-lg border border-ink-800 lg:col-span-3">
          <iframe
            title="Ubicación de Gomez Barber en el mapa"
            src={BUSINESS.mapsEmbedUrl}
            className="h-64 w-full grayscale sm:h-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        <div className="flex flex-col gap-4 lg:col-span-2">
          <div className="rounded-lg border border-ink-800 bg-ink-900 p-6">
            <div className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-gold-400" strokeWidth={2} />
              <div>
                <p className="font-medium text-stone-100">{BUSINESS.address}</p>
                <p className="text-sm text-stone-500">{BUSINESS.city}</p>
              </div>
            </div>
            <p className="mt-3 text-sm text-stone-500">
              Zona con estacionamiento en calle. Los fines de semana conviene
              llegar unos minutos antes para encontrar lugar cerca.
            </p>
            <a
              href={BUSINESS.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 flex items-center justify-center gap-2 rounded-xl bg-gold-400 px-5 py-3.5 text-sm font-semibold text-ink-950 transition-transform active:scale-[0.97]"
            >
              <Navigation className="h-4 w-4" strokeWidth={2.25} />
              Cómo llegar
            </a>
          </div>

          <div className="rounded-lg border border-ink-800 bg-ink-900 p-6">
            <div className="flex items-center gap-2 text-stone-100">
              <Clock className="h-5 w-5 text-gold-400" strokeWidth={2} />
              <h3 className="font-medium">Horarios de atención</h3>
            </div>
            <ul className="mt-3 divide-y divide-ink-800">
              {SCHEDULE.map((slot) => (
                <li
                  key={slot.days}
                  className="flex items-center justify-between py-2.5 text-sm"
                >
                  <span className="text-stone-400">{slot.days}</span>
                  <span
                    className={
                      slot.closed ? "text-stone-600" : "font-medium text-stone-200"
                    }
                  >
                    {slot.hours}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
