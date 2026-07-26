"use client";

import dynamic from "next/dynamic";
import { useModals } from "@/lib/modal-context";

// Deferred: the modal bundles only load once a visitor actually triggers one,
// instead of shipping with every page's initial JS.
const BookingModal = dynamic(() => import("./BookingModal"));
const StartProjectModal = dynamic(() => import("./StartProjectModal"));

export default function ModalHost() {
  const { bookingContext, startProjectOpen } = useModals();

  return (
    <>
      {bookingContext && <BookingModal />}
      {startProjectOpen && <StartProjectModal />}
    </>
  );
}
