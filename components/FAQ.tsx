"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { FAQS } from "@/lib/constants";

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>(FAQS[0]?.id ?? null);

  return (
    <section className="mx-auto max-w-6xl px-5 py-16 sm:py-24">
      <div className="max-w-md">
        <h2 className="font-display text-4xl tracking-wide text-stone-50 sm:text-5xl">
          Preguntas frecuentes
        </h2>
      </div>

      <div className="mt-10 divide-y divide-ink-800 rounded-lg border border-ink-800 bg-ink-900">
        {FAQS.map((faq) => {
          const isOpen = openId === faq.id;
          return (
            <div key={faq.id}>
              <button
                type="button"
                onClick={() => setOpenId(isOpen ? null : faq.id)}
                aria-expanded={isOpen}
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
              >
                <span className="font-medium text-stone-100">
                  {faq.question}
                </span>
                <Plus
                  className={`h-5 w-5 shrink-0 text-gold-400 transition-transform duration-200 ${
                    isOpen ? "rotate-45" : ""
                  }`}
                  strokeWidth={2}
                />
              </button>
              <div
                className={`grid transition-all duration-200 ease-in-out ${
                  isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="px-6 pb-5 text-sm leading-relaxed text-stone-400">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
