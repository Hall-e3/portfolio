"use client";

import {
  ArrowRightIcon,
  CalendarDaysIcon,
  ComputerDesktopIcon,
  VideoCameraIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { bookingBlurb, bookingDetails } from "@/lib/booking";
import { useContentStore } from "@/lib/content-store";
import { buildMeetingRequestBody, composeEmail } from "@/lib/email";
import { useModals } from "@/lib/modal-context";
import Modal from "./Modal";

export default function BookingModal() {
  const { bookingContext, closeBooking } = useModals();
  const { content } = useContentStore();
  const open = !!bookingContext;
  const context = bookingContext ?? "Meeting";

  const options = [
    {
      key: "calendly",
      icon: CalendarDaysIcon,
      name: "Calendly",
      note: "Pick a slot from my live calendar",
      onPick: () => {
        window.open(content.booking, "_blank", "noopener,noreferrer");
        closeBooking();
      },
    },
    {
      key: "zoom",
      icon: VideoCameraIcon,
      name: "Zoom",
      note: "Request a Zoom call by email",
      onPick: () => {
        composeEmail(
          content.email,
          `${context} request (Zoom) — ${content.name}`,
          buildMeetingRequestBody(content.name, "Zoom"),
        );
        closeBooking();
      },
    },
    {
      key: "meet",
      icon: ComputerDesktopIcon,
      name: "Google Meet",
      note: "Request a Meet call by email",
      onPick: () => {
        composeEmail(
          content.email,
          `${context} request (Google Meet) — ${content.name}`,
          buildMeetingRequestBody(content.name, "Google Meet"),
        );
        closeBooking();
      },
    },
  ];

  return (
    <Modal open={open} onClose={closeBooking} ariaLabel={`Book ${context}`}>
      <div className="mb-3 flex items-start justify-between">
        <span className="font-mono text-xs sm:text-sm font-semibold tracking-wider text-acc uppercase">
          Book · {context}
        </span>
        <button
          onClick={closeBooking}
          aria-label="Close"
          className="flex h-7 w-7 items-center justify-center rounded-full border border-line bg-bg hover:border-acc hover:text-acc transition-colors text-mut cursor-pointer"
        >
          <XMarkIcon className="h-4 w-4" />
        </button>
      </div>
      <h3 className="mb-2 font-serif text-2xl sm:text-3xl leading-tight font-normal text-fg">
        How would you like to meet?
      </h3>
      <p className="mb-5 text-sm sm:text-base leading-relaxed text-mut">
        {bookingBlurb(context)}
      </p>
      <div className="mb-5 flex flex-col gap-2.5 rounded-lg border border-line bg-bg p-4.5">
        {bookingDetails(context).map((d) => (
          <div
            key={d.k}
            className="flex items-center gap-3 text-xs sm:text-sm leading-relaxed"
          >
            <span className="min-w-[96px] rounded-md bg-acc-soft px-2.5 py-1 text-center font-mono text-xs font-bold tracking-wider text-acc uppercase">
              {d.k}
            </span>
            <span className="text-mut">{d.v}</span>
          </div>
        ))}
      </div>
      <div className="flex flex-col gap-3">
        {options.map((opt) => (
          <button
            key={opt.key}
            onClick={opt.onPick}
            className="flex items-center gap-4 rounded-lg border border-line bg-bg p-4 text-left transition-colors hover:border-acc cursor-pointer"
          >
            <opt.icon className="h-6 w-6 shrink-0 text-acc" />
            <span className="flex flex-col gap-0.5">
              <span className="text-base font-semibold text-fg">
                {opt.name}
              </span>
              <span className="font-mono text-xs sm:text-sm text-mut">{opt.note}</span>
            </span>
            <ArrowRightIcon className="ml-auto h-4 w-4 text-acc" />
          </button>
        ))}
      </div>
    </Modal>
  );
}
