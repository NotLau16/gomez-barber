import { Clock, MessageCircle } from "lucide-react";
import { SERVICES, getWhatsAppLink } from "@/lib/constants";

export default function Services() {
  return (
    <section id="servicios" className="mx-auto max-w-6xl px-5 py-16 sm:py-24">
      <div className="max-w-md">
        <h2 className="font-display text-4xl tracking-wide text-stone-50 sm:text-5xl">
          Servicios
        </h2>
        <p className="mt-3 text-stone-400">
          Cada corte se ajusta a tu forma de cabeza y a lo que pedís. Elegí un
          servicio y coordinamos por WhatsApp.
        </p>
      </div>

      <div className="mt-10 grid gap-4 sm:grid-cols-2">
        {SERVICES.map((service) => (
          <article
            key={service.id}
            className={`relative flex flex-col gap-3 rounded-lg border border-ink-800 bg-ink-900 p-6 pl-7 ${
              service.featured ? "sm:col-span-2" : ""
            }`}
          >
            <span
              className={`absolute inset-y-0 left-0 w-1.5 rounded-l-lg ${
                service.featured ? "bg-gold-400" : "bg-ink-700"
              }`}
              aria-hidden="true"
            />

            <div className="flex items-start justify-between gap-3">
              <h3 className="font-display text-2xl tracking-wide text-stone-100">
                {service.title}
              </h3>
              {service.featured && (
                <span className="shrink-0 rounded-full bg-gold-400/15 px-3 py-1 text-xs font-semibold text-gold-400">
                  Más pedido
                </span>
              )}
            </div>

            <p className="text-sm leading-relaxed text-stone-400">
              {service.description}
            </p>

            <div className="mt-1 flex items-center justify-between gap-3 pt-2">
              <span className="flex items-center gap-1.5 text-sm text-stone-500">
                <Clock className="h-4 w-4" strokeWidth={2} />
                {service.duration}
              </span>

              <a
                href={getWhatsAppLink(
                  `Hola Benja! Quiero pedir un turno para ${service.title}`,
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 rounded-full border border-ink-700 px-4 py-2 text-sm font-medium text-stone-200 transition-colors active:border-gold-400/60 active:text-gold-400"
              >
                <MessageCircle className="h-4 w-4" strokeWidth={2} />
                Pedir turno
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
