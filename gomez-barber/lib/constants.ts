export interface Service {
  id: string;
  title: string;
  description: string;
  duration: string;
  featured?: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  neighborhood: string;
  quote: string;
  rating: number;
}

export interface DaySchedule {
  days: string;
  hours: string;
  closed?: boolean;
}

export interface Faq {
  id: string;
  question: string;
  answer: string;
}

export const BUSINESS = {
  name: "Gomez Barber",
  barberHandle: "Benja",
  address: "Fructuoso Rivera 475, B° Güemes",
  city: "Córdoba Capital",
  fullAddress: "Fructuoso Rivera 475, Barrio Güemes, Córdoba Capital",
  mapsQuery: "Fructuoso+Rivera+475+Barrio+Güemes+Córdoba+Capital",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Fructuoso+Rivera+475+Barrio+Güemes+C%C3%B3rdoba+Capital",
  mapsEmbedUrl:
    "https://maps.google.com/maps?q=Fructuoso%20Rivera%20475%2C%20B%C3%B0%20G%C3%BCemes%2C%20C%C3%B3rdoba&t=&z=16&ie=UTF8&iwloc=&output=embed",
  phoneDisplay: "3518 10-3005",
  whatsappNumber: "5493518103005",
  instagramHandle: "@gomezbarber77",
  instagramUrl: "https://instagram.com/gomezbarber77",
  barberInstagramHandle: "@benja.gomezz10",
  barberInstagramUrl: "https://instagram.com/benja.gomezz10",
  slogan:
    "Cortes y servicios personalizados. El mejor servicio y estilo en el corazón de Güemes.",
  defaultWhatsappMessage:
    "Hola Benja! Quiero pedir un turno en Gomez Barber",
} as const;

export function getWhatsAppLink(customMessage?: string): string {
  const message = customMessage ?? BUSINESS.defaultWhatsappMessage;
  return `https://wa.me/${BUSINESS.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const SERVICES: Service[] = [
  {
    id: "fade-urbano",
    title: "Fade Urbano",
    description:
      "Degradé preciso ajustado a la forma de tu cabeza, terminado a navaja para un acabado limpio.",
    duration: "40 min",
  },
  {
    id: "perfilado-barba",
    title: "Perfilado de Barba",
    description:
      "Diseño y prolijo de barba con toalla tibia, aceite y navaja para definir el contorno.",
    duration: "30 min",
  },
  {
    id: "combo-corte-barba",
    title: "Combo Corte + Barba",
    description:
      "El servicio completo: corte a elección más perfilado de barba en una sola sesión.",
    duration: "60 min",
    featured: true,
  },
  {
    id: "diseno-lineas",
    title: "Diseño / Líneas",
    description:
      "Líneas y diseños personalizados a navaja para sumarle un detalle único al corte.",
    duration: "15 min",
  },
  {
    id: "limpieza-cejas",
    title: "Limpieza Facial / Cejas",
    description:
      "Prolijo de cejas y limpieza facial exprés para terminar de completar tu look.",
    duration: "20 min",
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    name: "Nicolás Peralta",
    neighborhood: "B° Güemes",
    quote:
      "Voy hace más de un año y siempre salgo con el corte que pedí, ni un milímetro de más. Benja escucha lo que le pedís antes de tocar la máquina.",
    rating: 5,
  },
  {
    id: "t2",
    name: "Franco Ledesma",
    neighborhood: "Nueva Córdoba",
    quote:
      "Lo que más rescato es la puntualidad: pido el turno por WhatsApp y me atienden a la hora pactada, sin vueltas.",
    rating: 5,
  },
  {
    id: "t3",
    name: "Tomás Aguirre",
    neighborhood: "B° Güemes",
    quote:
      "El perfilado de barba con toalla tibia es otro nivel. Detalle en las líneas y buena onda para charlar mientras te atienden.",
    rating: 5,
  },
  {
    id: "t4",
    name: "Ezequiel Molina",
    neighborhood: "Alberdi",
    quote:
      "Probé varias barberías del centro y esta es la que quedó fija en mi rutina. El combo corte más barba rinde toda la semana.",
    rating: 5,
  },
];

export const SCHEDULE: DaySchedule[] = [
  { days: "Martes a Viernes", hours: "10:00 - 20:00" },
  { days: "Sábados", hours: "10:00 - 19:00" },
  { days: "Domingos y Lunes", hours: "Cerrado", closed: true },
];

export const FAQS: Faq[] = [
  {
    id: "f1",
    question: "¿Cómo pido un turno?",
    answer:
      "El medio más rápido es WhatsApp: tocás el botón de turno, se arma el mensaje solo y coordinamos día y horario. También podés escribir por Instagram a @gomezbarber77.",
  },
  {
    id: "f2",
    question: "¿Qué formas de pago aceptan?",
    answer:
      "Efectivo y transferencia bancaria. Avisanos por WhatsApp si vas a pagar con transferencia para tener los datos listos antes de que llegues.",
  },
  {
    id: "f3",
    question: "¿Hay tolerancia si llego tarde?",
    answer:
      "Manejamos una tolerancia de 10 minutos sobre el horario reservado. Pasado ese tiempo el turno puede reasignarse a otro cliente en espera, así que si sabés que vas a demorarte avisanos con tiempo.",
  },
  {
    id: "f4",
    question: "¿Puedo pedir un corte específico llevando una foto?",
    answer:
      "Sí, es lo recomendado. Podés mandar la referencia por WhatsApp antes del turno o mostrarla en el momento; así Benja ajusta el fade a la forma de tu cabeza.",
  },
  {
    id: "f5",
    question: "¿Atienden sin turno previo?",
    answer:
      "Se prioriza a quienes reservaron turno. Si te acercás sin reserva y hay lugar disponible te atendemos, pero para asegurarte el horario que necesitás lo mejor es coordinar antes por WhatsApp.",
  },
];
