import React from "react";

const sections = [
  {
    title: "1. Introduction",
    text: `SupplyMesh-AI Solutions Private Limited (“SupplyMesh-AI”, “we”, “our”, or “us”) respects your privacy and is committed to protecting the information you share with us. This Privacy Policy explains how we collect, use, store, and safeguard information when you interact with our website, contact forms, partnership inquiries, pilot requests, product pages, and related digital services.`
  },
  {
    title: "2. Information We May Collect",
    text: `We may collect information that you voluntarily provide to us, including your name, email address, phone number, organization name, designation, business inquiry details, and any other information you choose to share when contacting us. We may also collect limited technical information such as browser type, device information, pages visited, and basic usage analytics to improve website performance and user experience.`
  },
  {
    title: "3. How We Use Information",
    text: `We use collected information to respond to inquiries, evaluate partnership or pilot opportunities, provide requested information, improve our website and platform communication, maintain security, and better understand how visitors interact with our content. We may also use information to communicate important updates related to our products, services, initiatives, or collaboration opportunities where appropriate.`
  },
  {
    title: "4. Legal Basis and Responsible Use",
    text: `We aim to collect only the information reasonably necessary for legitimate business, communication, operational, or legal purposes. We do not use your data in a way that is inconsistent with the purpose for which it was provided.`
  },
  {
    title: "5. Sharing of Information",
    text: `We do not sell or rent personal information. We may share information only where necessary for legitimate operational purposes, compliance requirements, professional advisory support, website infrastructure, or where disclosure is required by law, regulation, or lawful request from competent authorities.`
  },
  {
    title: "6. Data Storage and Security",
    text: `We take reasonable administrative, technical, and organizational measures to protect the information we receive against unauthorized access, misuse, alteration, or disclosure. However, no method of internet transmission or electronic storage is completely secure, and we cannot guarantee absolute security.`
  },
  {
    title: "7. Third-Party Links and Services",
    text: `Our website may contain links to third-party platforms, services, tools, or social media pages. We are not responsible for the content, privacy practices, or policies of those third-party websites or services. We encourage users to review the applicable privacy policies of any external platform they visit.`
  },
  {
    title: "8. Cookies and Basic Analytics",
    text: `We may use limited cookies, traffic measurement tools, or analytics technologies to understand site performance, improve navigation, and enhance user experience. These tools generally help us understand broad patterns such as page visits, traffic sources, and on-site behavior rather than identifying users personally unless explicitly provided by the user.`
  },
  {
    title: "9. Data Retention",
    text: `We retain information only for as long as reasonably necessary to fulfill the purpose for which it was collected, support legitimate business needs, maintain records, resolve disputes, comply with legal obligations, or enforce our agreements.`
  },
  {
    title: "10. Your Choices",
    text: `You may choose not to provide certain personal information, though doing so may limit our ability to respond to your inquiry or provide requested information. If you have shared information with us and would like it corrected or removed where appropriate, you may contact us using the details below.`
  },
  {
    title: "11. Changes to This Policy",
    text: `We may update this Privacy Policy from time to time to reflect changes in our website, legal requirements, operational practices, or product direction. Any updated version will be posted on this page with the revised effective date. Continued use of the website after changes are posted indicates acceptance of the updated policy.`
  },
  {
    title: "12. Contact Us",
    text: `If you have any questions regarding this Privacy Policy or how information is handled, you may contact us at supplymesh.ai@gmail.com.`
  }
];

export default function PrivacyPolicy() {
  return (
    <main className="mx-auto w-full max-w-5xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
      <section className="rounded-[32px] border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl sm:p-8 lg:p-10">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-slate-300 sm:text-sm">
          <span className="h-2 w-2 rounded-full bg-brandGreen" />
          Legal
        </div>

        <h1 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
          Privacy Policy
        </h1>

        <p className="mt-4 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
          This Privacy Policy describes how SupplyMesh-AI handles information
          collected through its website, communications, and related digital
          touchpoints.
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