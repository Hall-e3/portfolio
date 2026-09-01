"use client";

import dynamic from "next/dynamic";
import { useModals } from "@/lib/modal-context";

const BookingModal = dynamic(() => import("./BookingModal"));
const StartProjectModal = dynamic(() => import("./StartProjectModal"));
const ProjectDetailModal = dynamic(() => import("./ProjectDetailModal"));

export default function ModalHost() {
  const { bookingContext, startProjectOpen, selectedProject } = useModals();

  return (
    <>
      {bookingContext && <BookingModal />}
      {startProjectOpen && <StartProjectModal />}
      {selectedProject && <ProjectDetailModal />}
    </>
  );
}
