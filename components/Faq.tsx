"use client";

import { useState } from "react";
import { Plus } from "./icons";

type QA = { q: string; a: string };

export default function Faq({ items }: { items: QA[] }) {
  const [open, setOpen] = useState(0);

  return (
    <div className="space-y-4">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.q} className={`faq-item overflow-hidden rounded-base border bg-white transition-colors ${isOpen ? "open border-primary/40 shadow-soft" : "border-line"}`}>
            <button
              type="button"
              onClick={() => setOpen(isOpen ? -1 : i)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
            >
              <span className={`text-[15px] font-semibold md:text-base ${isOpen ? "text-primary" : "text-secondary"}`}>{item.q}</span>
              <span className={`faq-icon flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${isOpen ? "bg-primary text-white" : "bg-light text-primary"}`}>
                <Plus width={16} height={16} />
              </span>
            </button>
            <div className="faq-answer">
              <div className="min-h-0">
                <p className="px-6 pb-6 text-sm leading-relaxed">{item.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
