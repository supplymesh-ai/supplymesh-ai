import React, { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import SectionTitle from "../components/SectionTitle";

export default function Apply() {
  const [searchParams] = useSearchParams();
  const roleFromQuery = useMemo(() => searchParams.get("role") || "", [searchParams]);

  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSent(false);

    const formData = new FormData(e.target);

    const payload = {
      fullName: formData.get("fullName"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      roleApplied: formData.get("roleApplied"),
      currentStatus: formData.get("currentStatus"),
      currentCity: formData.get("currentCity"),
      presentAddress: formData.get("presentAddress"),
      permanentAddress: formData.get("permanentAddress"),
      dob: formData.get("dob"),
      idType: formData.get("idType"),
      idAvailable: formData.get("idAvailable"),
      resumeLink: formData.get("resumeLink"),
      referralName: formData.get("referralName"),
      universityName: formData.get("universityName"),
      degree: formData.get("degree"),
      course: formData.get("course"),
      graduationYear: formData.get("graduationYear"),
      linkedin: formData.get("linkedin"),
      github: formData.get("github"),
      kaggle: formData.get("kaggle"),
      otherLink: formData.get("otherLink"),
      availability: formData.get("availability"),
      workMode: formData.get("workMode"),
      whyJoin: formData.get("whyJoin"),
      startupFit: formData.get("startupFit")
    };

    try {
      await fetch("https://script.google.com/macros/s/AKfycbwI8LVeZzM17ua5B3Vq2B9Zbb5KAwTMfG3S9yg_AyarRpupgfshH7t0bMAr3Ft__Qx9gA/exec", {
        method: "POST",
        headers: {
          "Content-Type": "text/plain;charset=utf-8"
        },
        body: JSON.stringify(payload)
      });

      setSent(true);
      e.target.reset();
    } catch (error) {
      alert("Failed to submit application. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="mx-auto max-w-5xl px-5 py-16 lg:px-8">
      <SectionTitle
        eyebrow="Apply"
        title="Join SupplyMesh-AI"
        subtitle="Fill out the form below to apply for a role or internship."
      />

      <form onSubmit={onSubmit} className="rounded-3xl border border-white/10 bg-white/5 p-6">
        <div className="grid gap-4 md:grid-cols-2">
          <input name="fullName" placeholder="Full name" required className="rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-white" />
          <input name="email" type="email" placeholder="Email" required className="rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-white" />
          <input name="phone" placeholder="Phone number" required className="rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-white" />
          <input
            name="roleApplied"
            defaultValue={roleFromQuery}
            placeholder="Role applied for"
            required
            className="rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-white"
          />
          <input name="currentStatus" placeholder="Current status (student / working / freelancer)" className="rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-white" />
          <input name="currentCity" placeholder="Current city" className="rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-white" />
        </div>

        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <textarea name="presentAddress" placeholder="Present address" className="min-h-[110px] rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-white" />
          <textarea name="permanentAddress" placeholder="Permanent address" className="min-h-[110px] rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-white" />
        </div>

        <div className="mt-4 grid gap-4 md:grid-cols-3">
          <input name="dob" type="date" className="rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-white" />
          <select name="idAvailable" className="rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-white">
            <option value="">Do you have an ID?</option>
            <option>Aadhaar</option>
            <option>Passport</option>
            <option>Driving License</option>
            <option>PAN Card</option>
            <option>Other</option>
          </select>
          <input name="idType" placeholder="ID details / type (optional)" className="rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-white" />
        </div>

        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <input name="resumeLink" placeholder="Resume link (Google Drive / PDF URL)" className="rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-white" />
          <input name="referralName" placeholder="Referral name (if any)" className="rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-white" />
        </div>

        <div className="mt-8">
          <h3 className="text-xl font-semibold text-white">Education</h3>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <input name="universityName" placeholder="University / college name" className="rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-white" />
            <input name="degree" placeholder="Degree" className="rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-white" />
            <input name="course" placeholder="Course / branch" className="rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-white" />
            <input name="graduationYear" placeholder="Graduation year" className="rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-white" />
          </div>
        </div>

        <div className="mt-8">
          <h3 className="text-xl font-semibold text-white">Profile links</h3>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <input name="linkedin" placeholder="LinkedIn URL" className="rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-white" />
            <input name="github" placeholder="GitHub URL" className="rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-white" />
            <input name="kaggle" placeholder="Kaggle URL" className="rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-white" />
            <input name="otherLink" placeholder="Portfolio / other link" className="rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-white" />
          </div>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <input name="availability" placeholder="Availability / joining timeline" className="rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-white" />
          <select name="workMode" className="rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-white">
            <option value="">Preferred work mode</option>
            <option>Remote</option>
            <option>Hybrid</option>
            <option>Onsite</option>
            <option>Flexible</option>
          </select>
        </div>

        <textarea
          name="whyJoin"
          placeholder="Why do you want to join SupplyMesh-AI?"
          required
          className="mt-4 min-h-[140px] w-full rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-white"
        />

        <textarea
          name="startupFit"
          placeholder="Why do you think you are a good fit for an early-stage startup?"
          className="mt-4 min-h-[140px] w-full rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-white"
        />

        <label className="mt-4 flex items-start gap-3 text-sm text-slate-300">
          <input type="checkbox" required className="mt-1" />
          I confirm that the information submitted is correct to the best of my knowledge.
        </label>

        <div className="mt-6">
          <button
            type="submit"
            disabled={loading}
            className="rounded-2xl bg-brandGreen px-5 py-3 font-semibold text-slate-950 disabled:opacity-60"
          >
            {loading ? "Submitting..." : "Submit Application"}
          </button>
        </div>

        {sent && (
          <div className="mt-4 rounded-2xl border border-brandGreen/30 bg-brandGreen/10 px-4 py-3 text-sm text-green-200">
            Application submitted successfully.
          </div>
        )}
      </form>
    </main>
  );
}