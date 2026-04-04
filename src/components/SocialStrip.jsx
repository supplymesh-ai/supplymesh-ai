import React from "react";
import { Linkedin, Facebook, Instagram } from "lucide-react";

function XIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      {...props}
    >
      <path d="M18.244 2H21l-6.552 7.49L22.5 22h-6.31l-4.94-6.458L5.6 22H2.84l7.01-8.012L1.5 2h6.47l4.465 5.89L18.244 2Zm-1.107 18h1.75L6.92 3.895H5.04L17.137 20Z" />
    </svg>
  );
}

export default function SocialStrip() {
  const socials = [
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/company/supplymesh-ai/",
      icon: Linkedin
    },
    {
      label: "Facebook",
      href: "https://www.facebook.com/profile.php?id=61578407800290",
      icon: Facebook
    },
    {
      label: "Instagram",
      href: "https://www.instagram.com/supplymesh.ai/",
      icon: Instagram
    },
    {
      label: "X / Twitter",
      href: "https://x.com/",
      icon: XIcon
    }
  ];

  return (
    <section className="border-t border-white/10 bg-slate-950/50">
      <div className="mx-auto max-w-7xl px-5 py-8 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-4">
          {socials.map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-300 transition hover:bg-white/10 hover:text-white"
              >
                <Icon className="h-4 w-4" />
                {item.label}
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}