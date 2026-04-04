import React from "react";

const sections = [
  {
    title: "1. Acceptance of Terms",
    text: `By accessing or using the SupplyMesh-AI website, you agree to be bound by these Terms of Use. If you do not agree with these terms, you should not use the website.`
  },
  {
    title: "2. About the Website",
    text: `This website is provided by SupplyMesh-AI Solutions Private Limited for informational, communication, brand, and business engagement purposes. It may include information regarding our startup, product concepts, platform direction, use cases, projects, research positioning, collaboration opportunities, and related initiatives.`
  },
  {
    title: "3. Use of Website Content",
    text: `All text, graphics, logos, icons, visual design, product descriptions, dashboards, interface concepts, layouts, technical narratives, and other materials appearing on this website are provided for general informational use unless otherwise specified. You may view the website for lawful personal, educational, business, or evaluative purposes, but you may not misuse, reproduce, republish, distribute, or exploit the content in a misleading or unauthorized manner.`
  },
  {
    title: "4. Intellectual Property",
    text: `Unless otherwise stated, the website and its contents, including branding, design elements, concepts, interface previews, and original written material, are the intellectual property of SupplyMesh-AI Solutions Private Limited. Unauthorized use, duplication, or representation of website materials may violate applicable intellectual property and related laws.`
  },
  {
    title: "5. Acceptable Use",
    text: `You agree not to use the website in any way that is unlawful, harmful, fraudulent, disruptive, abusive, or intended to interfere with the proper functioning of the website or associated services. You must not attempt to gain unauthorized access to any system, network, data, or infrastructure connected with the website.`
  },
  {
    title: "6. Accuracy of Information",
    text: `We aim to present website content accurately and in good faith. However, some information may represent evolving startup plans, product directions, pilot concepts, prototypes, research ambitions, or forward-looking statements. We do not guarantee that all content will always remain complete, current, or free from error.`
  },
  {
    title: "7. No Professional or Commercial Commitment",
    text: `Information presented on the website does not by itself create any binding commercial, advisory, technical, legal, or investment relationship unless separately agreed in writing. Product descriptions, features, architecture representations, and project direction may change over time as the company evolves.`
  },
  {
    title: "8. Third-Party Services and Links",
    text: `This website may reference or link to third-party tools, services, or external websites for convenience or informational purposes. SupplyMesh-AI is not responsible for the content, availability, or practices of third-party services and does not automatically endorse every linked platform.`
  },
  {
    title: "9. Limitation of Liability",
    text: `To the maximum extent permitted by applicable law, SupplyMesh-AI shall not be liable for any direct, indirect, incidental, consequential, or special losses arising out of or related to the use of, inability to use, or reliance upon this website or its content.`
  },
  {
    title: "10. Modifications",
    text: `We may update, revise, suspend, or remove any part of the website or these Terms of Use at any time without prior notice. Continued use of the website after any changes are posted indicates acceptance of the revised terms.`
  },
  {
    title: "11. Governing Principles",
    text: `These Terms of Use are intended to be interpreted in accordance with applicable laws and general principles governing digital use, communication, and website access.`
  },
  {
    title: "12. Contact Information",
    text: `For questions regarding these Terms of Use, you may contact us at supplymesh.ai@gmail.com.`
  }
];

export default function TermsOfUse() {
  return (
    <main className="mx-auto w-full max-w-5xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
      <section className="rounded-[32px] border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl sm:p-8 lg:p-10">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-slate-300 sm:text-sm">
          <span className="h-2 w-2 rounded-full bg-brandGreen" />
          Legal
        </div>

        <h1 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
          Terms of Use
        </h1>

        <p className="mt-4 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
          These Terms of Use govern access to and use of the SupplyMesh-AI
          website and related digital content.
        </p>

        <div className="mt-3 text-sm text-slate-500">
          Effective date: 2026
        </div>

        <div className="mt-10 space-y-8">
          {sections.map((section) => (
            <section
              key={section.title}
              className="rounded-3xl border border-white/10 bg-white/[0.03] p-5 sm:p-6"
            >
              <h2 className="text-xl font-semibold text-white sm:text-2xl">
                {section.title}
              </h2>
              <p className="mt-3 text-sm leading-7 text-slate-300 sm:text-base sm:leading-8">
                {section.text}
              </p>
            </section>
          ))}
        </div>
      </section>
    </main>
  );
}