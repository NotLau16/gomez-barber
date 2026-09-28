import { MessageCircle } from "lucide-react";
import { getWhatsAppLink } from "@/lib/constants";

export default function FloatingWhatsApp() {
  return (
    <a
      href={getWhatsAppLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Pedir turno por WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500 text-ink-950 shadow-lg shadow-emerald-500/20 transition-transform active:scale-90 sm:bottom-7 sm:right-7"
    >
      <span className="absolute inset-0 rounded-full bg-emerald-500 motion-safe:animate-pulse-ring" aria-hidden="true" />
      <MessageCircle className="relative h-6 w-6" strokeWidth={2.25} />
    </a>
  );
}
