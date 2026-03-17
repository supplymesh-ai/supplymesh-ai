import React, { useState } from "react";
import { ArrowRight, Mail, Linkedin } from "lucide-react";
import SectionTitle from "../components/SectionTitle";

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSent(false);

    const formData = new FormData(e.target);
    const payload = {
      name: formData.get("name"),
      email: formData.get("email"),
      organization: formData.get("organization"),
      message: formData.get("message")
    };

    try {
      await fetch("https://script.google.com/macros/s/AKfycbzAOyQCjnLf-ocC6TX3zJajB82ZNpL3Y68igvbExTmTmtm_7QQiibwas3P3Ss4MXsjeiw/exec", {
        method: "POST",
        headers: {
          "Content-Type": "text/plain;charset=utf-8"
        },
        body: JSON.stringify(payload)
      });

      setSent(true);
      e.target.reset();
    } catch (error) {
      alert("Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
      <SectionTitle
        eyebrow="Contact"
        title="Talk to us about pilots, partnerships, and deployments."
        subtitle="Use the form below for inquiries, collaborations, or product conversations."
      />

      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <form onSubmit={onSubmit} className="rounded-3xl border border-white/10 bg-white/5 p-6">
          <div className="grid gap-4 md:grid-cols-2">
            <input
              name="name"
              className="rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-white outline-none placeholder:text-slate-500"
              placeholder="Your name"
              required
            />
            <input
              name="email"
              type="email"
              className="rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-white outline-none placeholder:text-slate-500"
              placeholder="Your email"
              required
            />
          </div>

          <input
            name="organization"
            className="mt-4 w-full rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-white outline-none placeholder:text-slate-500"
            placeholder="Organization"
          />

          <textarea
            name="message"
            className="mt-4 min-h-[140px] w-full rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-white outline-none placeholder:text-slate-500"
            placeholder="Tell us about your use case, pilot interest, or partnership idea"
            required
          />

          <div className="mt-4 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <p className="text-sm text-slate-400">Your response will be securely recorded for follow-up.</p>
            <button
              type="submit"
              disabled={loading}
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-brandGreen px-5 py-3 font-semibold text-slate-950 transition hover:translate-y-[-1px] disabled:opacity-60"
            >
              {loading ? "Sending..." : "Send inquiry"}
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>

          {sent && (
            <div className="mt-4 rounded-2xl border border-brandGreen/30 bg-brandGreen/10 px-4 py-3 text-sm text-green-200">
              Thank you. Your message has been submitted successfully.
            </div>
          )}
        </form>

        <div className="rounded-3xl border border-white/10 bg-slate-950/60 p-6">
          <div className="text-lg font-semibold text-white">Direct contact</div>
          <div className="mt-5 space-y-4 text-slate-300">
            <a
              href="mailto:supplymesh.ai@gmail.com"
              className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 hover:bg-white/10"
            >
              <Mail className="h-4 w-4 text-brandGreen" />
              supplymesh.ai@gmail.com
            </a>

            <a
              href="https://www.linkedin.com/company/supplymesh-ai/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 hover:bg-white/10"
            >
              <Linkedin className="h-4 w-4 text-brandCyan" />
              LinkedIn profile / company page
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}