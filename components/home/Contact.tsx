"use client";

import { useState } from "react";
import { ArrowTopRightOnSquareIcon, PaperAirplaneIcon } from "@heroicons/react/24/outline";
import { withBasePath } from "@/lib/base-path";
import { useContentStore } from "@/lib/content-store";
import { composeEmail, mailtoHref, whatsappHref } from "@/lib/email";
import { useModals } from "@/lib/modal-context";

export default function Contact() {
  const { content: c } = useContentStore();
  const { openBooking } = useModals();

  const [form, setForm] = useState({
    name: "",
    email: "",
    service: "App Development",
    message: "",
  });

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const subject = `New Project Inquiry: ${form.service} — ${form.name || "Client"}`;
    const body = `Hi Enoch,\n\nName: ${form.name}\nEmail: ${form.email}\nService Requested: ${form.service}\n\nMessage / Requirements:\n${form.message}\n`;
    composeEmail(c.email, subject, body);
  }

  return (
    <section id="contact" className="py-20 pb-15">
      <div className="mx-auto max-w-180 text-center">
        <div className="mb-4 font-mono text-xs tracking-widest text-mut uppercase">Get In Touch</div>
        <h2 className="mb-4 font-serif text-[clamp(36px,5vw,60px)] leading-tight font-normal text-wrap-pretty italic">
          Let&rsquo;s build something great together.
        </h2>
        <p className="mx-auto mb-10 max-w-140 text-[15px] leading-relaxed text-mut">
          Have a project in mind, need technical advice, or looking for 1-on-1 tutoring? Fill out the quick form below or reach out directly.
        </p>
      </div>

      <div className="mx-auto max-w-160 rounded-md border border-line bg-bg2 p-6 sm:p-8">
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <label className="flex flex-col gap-1.5 text-left font-mono text-xs text-mut uppercase">
              Your Name
              <input
                type="text"
                required
                placeholder="e.g. Alex Johnson"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full rounded-md border border-line bg-bg px-3.5 py-2.5 font-sans text-sm text-fg placeholder:text-mut/50 focus:border-acc focus:outline-none"
              />
            </label>
            <label className="flex flex-col gap-1.5 text-left font-mono text-xs text-mut uppercase">
              Your Email
              <input
                type="email"
                required
                placeholder="alex@company.com"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full rounded-md border border-line bg-bg px-3.5 py-2.5 font-sans text-sm text-fg placeholder:text-mut/50 focus:border-acc focus:outline-none"
              />
            </label>
          </div>

          <label className="flex flex-col gap-1.5 text-left font-mono text-xs text-mut uppercase">
            Service Required
            <select
              value={form.service}
              onChange={(e) => setForm({ ...form, service: e.target.value })}
              className="w-full rounded-md border border-line bg-bg px-3.5 py-2.5 font-sans text-sm text-fg focus:border-acc focus:outline-none"
            >
              <option value="App Development">App Development (Web & Mobile)</option>
              <option value="Tutoring">1-on-1 Programming Tutoring</option>
              <option value="Consultation">Technical Architecture & Advice</option>
              <option value="Other">Other Inquiry</option>
            </select>
          </label>

          <label className="flex flex-col gap-1.5 text-left font-mono text-xs text-mut uppercase">
            Project Overview / Message
            <textarea
              required
              rows={4}
              placeholder="Tell me a bit about what you want to build, your timeline, or any specific questions..."
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full rounded-md border border-line bg-bg px-3.5 py-2.5 font-sans text-sm text-fg placeholder:text-mut/50 focus:border-acc focus:outline-none"
            />
          </label>

          <button
            type="submit"
            className="mt-2 inline-flex items-center justify-center gap-2 rounded-md bg-acc py-3.5 font-mono text-xs font-semibold tracking-wider text-bg uppercase transition-all hover:opacity-90"
          >
            <PaperAirplaneIcon className="h-4 w-4" /> Send Direct Inquiry
          </button>
        </form>

        <div className="mt-8 border-t border-line pt-6 text-center">
          <div className="mb-3 font-mono text-[11px] text-mut uppercase">Or connect directly via</div>
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href={whatsappHref(c.whatsapp)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-md border border-line bg-bg px-4 py-2 font-mono text-xs text-fg transition-colors hover:border-acc hover:text-acc"
            >
              WhatsApp <ArrowTopRightOnSquareIcon className="h-3.5 w-3.5" />
            </a>
            <button
              onClick={() => openBooking("Meeting")}
              className="inline-flex items-center gap-1.5 rounded-md border border-line bg-bg px-4 py-2 font-mono text-xs text-fg transition-colors hover:border-acc hover:text-acc"
            >
              Book a Call (Calendly/Zoom)
            </button>
            <a
              href={mailtoHref(c.email)}
              onClick={(e) => {
                e.preventDefault();
                composeEmail(c.email);
              }}
              className="inline-flex items-center gap-1.5 rounded-md border border-line bg-bg px-4 py-2 font-mono text-xs text-fg transition-colors hover:border-acc hover:text-acc"
            >
              Direct Email
            </a>
          </div>
        </div>
      </div>

      <div className="mt-12 flex justify-center gap-7 font-mono text-[13px] text-mut">
        <a
          href={c.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 hover:text-acc"
        >
          github <ArrowTopRightOnSquareIcon className="h-3.5 w-3.5" />
        </a>
        <a
          href={c.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 hover:text-acc"
        >
          linkedin <ArrowTopRightOnSquareIcon className="h-3.5 w-3.5" />
        </a>
        <a
          href={withBasePath("/Hall-Enoch-Asanda-Resume.pdf")}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 hover:text-acc"
        >
          resume <ArrowTopRightOnSquareIcon className="h-3.5 w-3.5" />
        </a>
      </div>
    </section>
  );
}
