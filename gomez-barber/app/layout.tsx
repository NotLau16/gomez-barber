import type { Metadata, Viewport } from "next";
import { Bebas_Neue, Manrope } from "next/font/google";
import "./globals.css";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const siteUrl = "https://gomezbarber.com.ar";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Gomez Barber | Cortes & Estilo en B° Güemes, Córdoba",
  description:
    "Barbería en Barrio Güemes, Córdoba Capital. Fade urbano, perfilado de barba y combos a medida. Pedí tu turno por WhatsApp en Fructuoso Rivera 475.",
  keywords: [
    "barbería Córdoba",
    "barbería Güemes",
    "corte de pelo Córdoba",
    "fade Córdoba",
    "barba Córdoba",
    "Gomez Barber",
    "turno barbería Córdoba",
  ],
  authors: [{ name: "Gomez Barber" }],
  openGraph: {
    title: "Gomez Barber | Cortes & Estilo en B° Güemes, Córdoba",
    description:
      "Cortes y servicios personalizados en el corazón de Güemes. Pedí tu turno por WhatsApp y elegí tu estilo.",
    url: siteUrl,
    siteName: "Gomez Barber",
    locale: "es_AR",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Gomez Barber - Barbería en Barrio Güemes, Córdoba",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gomez Barber | Cortes & Estilo en B° Güemes, Córdoba",
    description:
      "Cortes y servicios personalizados en el corazón de Güemes, Córdoba. Pedí tu turno por WhatsApp.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
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
    <html lang="es-AR" className={`${bebasNeue.variable} ${manrope.variable}`}>
      <body className="font-body antialiased bg-ink-950 text-stone-200">
        {children}
      </body>
    </html>
  );
}
