import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import SectionTitle from "../components/SectionTitle";
import { faqs } from "../data/faq";

function FAQItem({ item, isOpen, onToggle }) {
  return (
    <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm">
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
      >
        <h3 className="text-base font-semibold text-white md:text-lg">
          {item.q}
        </h3>

        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-300">
          {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
        </div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
          >
            <div className="border-t border-white/10 px-6 pb-5 pt-4 text-slate-300">
              {item.a}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <main className="mx-auto max-w-5xl px-5 py-16 lg:px-8">
      <section className="rounded-[36px] border border-white/10 bg-gradient-to-r from-brandGreen/10 via-brandCyan/10 to-brandBlue/10 p-8 text-center md:p-12">
        <SectionTitle
          eyebrow="FAQ"
          title="Frequently asked questions"
          subtitle="Everything you may want to know about SupplyMesh-AI, our platform direction, and how we think about deployment."
          center
        />
      </section>

      <section className="mt-10">
        <div className="grid gap-4">
          {faqs.map((item, index) => (
            <FAQItem
              key={item.q}
              item={item}
              isOpen={openIndex === index}
              onToggle={() =>
                setOpenIndex(openIndex === index ? null : index)
              }
            />
          ))}
        </div>
      </section>

      <section className="mt-12 rounded-[32px] border border-white/10 bg-white/5 p-8 text-center">
        <h3 className="text-2xl font-semibold text-white">
          Still have a question?
        </h3>
        <p className="mx-auto mt-4 max-w-2xl text-slate-300">
          Reach out to us for product discussions, pilot conversations, partnership
          opportunities, or startup collaboration.
        </p>
        <a
          href="mailto:supplymesh.ai@gmail.com"
          className="mt-6 inline-flex rounded-2xl bg-brandGreen px-5 py-3 font-semibold text-slate-950"
        >
          Contact us
        </a>
      </section>
    </main>
  );
}