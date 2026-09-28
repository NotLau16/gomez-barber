import { Scissors, Sparkles, Users, ShieldCheck } from "lucide-react";

interface GalleryTile {
  id: string;
  label: string;
  icon: typeof Scissors;
  span: string;
  /* Reemplazar por: style={{ backgroundImage: "url(/gallery/foto-1.jpg)" }}
     y quitar el className de fondo sólido cuando haya fotos reales en /public/gallery */
}

const TILES: GalleryTile[] = [
  { id: "g1", label: "Fades", icon: Scissors, span: "sm:col-span-2 sm:row-span-2" },
  { id: "g2", label: "Detalle de barba", icon: Sparkles, span: "" },
  { id: "g3", label: "El local", icon: Users, span: "" },
  { id: "g4", label: "Diseños a navaja", icon: ShieldCheck, span: "sm:col-span-2" },
];

export default function GalleryShowcase() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-16 sm:py-24">
      <div className="max-w-md">
        <h2 className="font-display text-4xl tracking-wide text-stone-50 sm:text-5xl">
          Trabajos recientes
        </h2>
        <p className="mt-3 text-stone-400">
          Un vistazo a los cortes y al espacio. Seguinos en Instagram para ver
          las últimas fotos del día a día.
        </p>
      </div>

      <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
        {TILES.map(({ id, label, icon: Icon, span }) => (
          <div
            key={id}
            className={`gallery-tile flex aspect-square flex-col items-center justify-center gap-2 rounded-lg border border-ink-800 bg-ink-900 ${span}`}
          >
            <Icon className="h-7 w-7 text-gold-400" strokeWidth={1.5} />
            <span className="text-xs text-stone-500">{label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
