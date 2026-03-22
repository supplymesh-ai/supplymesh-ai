import React from "react";

const logos = [
  { name: "AWS Startups", src: `${import.meta.env.BASE_URL}logos/aws-startups.png` },
  { name: "MeitY", src: `${import.meta.env.BASE_URL}logos/meity.png` },
  { name: "IndiaAI Mission", src: `${import.meta.env.BASE_URL}logos/indiaai.png` },
  { name: "AIKosh", src: `${import.meta.env.BASE_URL}logos/aikosh.png` },
  { name: "CSIC", src: `${import.meta.env.BASE_URL}logos/csic.png` },
  { name: "DPIIT", src: `${import.meta.env.BASE_URL}logos/dpiit.png` },
  { name: "Viksit Bharat 2047", src: `${import.meta.env.BASE_URL}logos/viksit-bharat.png` },
  { name: "DST", src: `${import.meta.env.BASE_URL}logos/dst.png` },
  { name: "Make in India", src: `${import.meta.env.BASE_URL}logos/make-in-india.png` }
];

export default function TopTape() {
  const repeated = [...logos, ...logos];

  return (
    <div className="overflow-hidden border-b border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-4">
        <div className="py-2 text-center text-[11px] font-medium uppercase tracking-[0.18em] text-slate-500">
          Aligned with innovation and startup ecosystem priorities
        </div>
      </div>

      <div className="marquee flex min-w-max items-center gap-12 py-3">
        {repeated.map((logo, idx) => (
          <div
            key={`${logo.name}-${idx}`}
            className="flex h-10 items-center justify-center opacity-70 grayscale transition duration-300 hover:opacity-100 hover:grayscale-0"
          >
            <img
              src={logo.src}
              alt={logo.name}
              className="h-7 w-auto object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
}