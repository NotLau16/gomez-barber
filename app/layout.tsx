import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Gomez Barber | Cortes & Estilo en B° Güemes, Córdoba",
  description:
    "Barbería en Barrio Güemes, Córdoba Capital. Fade urbano, perfilado de barba y combos a medida. Pedí tu turno por WhatsApp en Fructuoso Rivera 475.",
};

export const viewport: Viewport = {
  themeColor: "#09090b",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-AR">
      <body className="font-sans antialiased bg-ink-950 text-stone-200">
        {children}
      </body>
    </html>
  );
}