"use client";

import {
  ChatBubbleLeftRightIcon,
  RocketLaunchIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/outline";

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
    <section className="py-10 pb-10">
      <div className="mb-8 flex items-baseline justify-between border-b border-line pb-4">
        <h2 className="font-mono text-xs sm:text-sm font-semibold tracking-widest text-acc uppercase">
          How I Work
        </h2>
        <span className="font-mono text-xs sm:text-sm text-mut">
          From concept to production
        </span>
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
        {STEPS.map((step) => (
          <div
            key={step.num}
            className="flex flex-col justify-between gap-4 rounded-lg border border-line bg-bg2 p-6 sm:p-7 transition-all hover:border-acc/60"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-xs sm:text-sm font-bold text-acc">
                  {step.num}
                </span>
                <step.icon className="h-6 w-6 text-mut" />
              </div>
              <h3 className="font-serif text-xl sm:text-2xl font-normal text-fg mb-2">
                {step.title}
              </h3>
              <p className="text-sm sm:text-base leading-relaxed text-mut">
                {step.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
