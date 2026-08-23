"use client";

import { ChatBubbleLeftRightIcon, RocketLaunchIcon, ShieldCheckIcon } from "@heroicons/react/24/outline";

const STEPS = [
  {
    num: "01",
    icon: ChatBubbleLeftRightIcon,
    title: "1. Free Discovery & Assessment",
    desc: "We discuss your project requirements, target platform (Web/Mobile), and timeline on a quick 15-minute call or email thread.",
  },
  {
    num: "02",
    icon: ShieldCheckIcon,
    title: "2. Fixed Quote & Roadmap",
    desc: "You receive a clear, milestone-based proposal with transparent pricing, architecture plan, and zero hidden costs.",
  },
  {
    num: "03",
    icon: RocketLaunchIcon,
    title: "3. Build, Test & Launch",
    desc: "Weekly progress updates, live demo links, and full end-to-end deployment to Vercel, VPS, Google Play, or Apple App Store.",
  },
];

export default function Process() {
  return (
    <section className="py-12 pb-10">
      <div className="mb-9 flex items-baseline justify-between border-b border-fg pb-3.5">
        <h2 className="font-mono text-xs font-medium tracking-widest uppercase">How I Work</h2>
        <span className="font-mono text-xs text-mut">From concept to production</span>
      </div>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
        {STEPS.map((step) => (
          <div
            key={step.num}
            className="flex flex-col gap-3 rounded-md border border-line bg-bg2 p-6 transition-all hover:border-acc/60"
          >
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs text-acc">{step.num}</span>
              <step.icon className="h-5 w-5 text-mut" />
            </div>
            <h3 className="font-serif text-xl font-normal">{step.title}</h3>
            <p className="text-xs leading-relaxed text-mut">{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
