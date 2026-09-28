import { Star } from "lucide-react";
import { TESTIMONIALS } from "@/lib/constants";

function StarRow({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} de 5 estrellas`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${
            i < rating ? "fill-gold-400 text-gold-400" : "text-ink-700"
          }`}
          strokeWidth={1.5}
        />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-16 sm:py-24">
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
        <div className="max-w-md">
          <h2 className="font-display text-4xl tracking-wide text-stone-50 sm:text-5xl">
            Lo que dicen los clientes
          </h2>
        </div>
        <a
          href="https://search.google.com/local/writereview?placeid=GomezBarberCordoba"
          target="_blank"
          rel="noopener noreferrer"
          className="w-fit shrink-0 rounded-full border border-ink-700 px-4 py-2.5 text-sm font-medium text-stone-300 transition-colors active:border-gold-400/60 active:text-gold-400"
        >
          Dejar una reseña en Google
        </a>
      </div>

      <div className="mt-10 grid gap-4 sm:grid-cols-2">
        {TESTIMONIALS.map((t) => (
          <figure
            key={t.id}
            className="flex flex-col gap-3 rounded-lg border border-ink-800 bg-ink-900 p-6"
          >
            <StarRow rating={t.rating} />
            <blockquote className="text-sm leading-relaxed text-stone-300">
              “{t.quote}”
            </blockquote>
            <figcaption className="mt-1 flex flex-col text-sm">
              <span className="font-medium text-stone-300">{t.name}</span>
              <span className="text-stone-500">{t.neighborhood}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
