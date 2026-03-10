"use client";

import { useState } from "react";

type Props = {
  nav: { methodology: string; services: string; insights: string; company: string };
  ctaLabel: string;
};

export function MobileNav({ nav, ctaLabel }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden flex items-center">
      <button
        aria-label="Toggle menu"
        className="p-2 text-slate-600 hover:text-primary transition-colors"
        onClick={() => setOpen((v) => !v)}
        type="button"
      >
        <span className="material-symbols-outlined text-2xl">
          {open ? "close" : "menu"}
        </span>
      </button>

      {open && (
        <div className="absolute top-20 left-0 right-0 bg-white border-b border-slate-200 shadow-lg z-40">
          <nav className="flex flex-col px-6 py-4 space-y-4">
            <a
              className="text-slate-600 hover:text-primary transition-colors font-medium"
              href="#methodology"
              onClick={() => setOpen(false)}
            >
              {nav.methodology}
            </a>
            <a
              className="text-slate-600 hover:text-primary transition-colors font-medium"
              href="#services"
              onClick={() => setOpen(false)}
            >
              {nav.services}
            </a>
            <a
              className="text-slate-600 hover:text-primary transition-colors font-medium"
              href="#insights"
              onClick={() => setOpen(false)}
            >
              {nav.insights}
            </a>
            <a
              className="text-slate-600 hover:text-primary transition-colors font-medium"
              href="#company"
              onClick={() => setOpen(false)}
            >
              {nav.company}
            </a>

            <a
              className="bg-primary hover:bg-primary/90 text-white px-5 py-2.5 rounded-lg font-medium text-sm transition-colors text-center"
              href="#services"
              onClick={() => setOpen(false)}
            >
              {ctaLabel}
            </a>
          </nav>
        </div>
      )}
    </div>
  );
}
