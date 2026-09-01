"use client";

import dynamic from "next/dynamic";
import { useModals } from "@/lib/modal-context";

const BookingModal = dynamic(() => import("./BookingModal"));
const StartProjectModal = dynamic(() => import("./StartProjectModal"));
const ProjectDetailModal = dynamic(() => import("./ProjectDetailModal"));
const PlaybookModal = dynamic(() => import("./PlaybookModal"));

export default function ModalHost() {
  const { bookingContext, startProjectOpen, selectedProject, playbookOpen } = useModals();

  return (
    <>
      {bookingContext && <BookingModal />}
      {startProjectOpen && <StartProjectModal />}
      {selectedProject && <ProjectDetailModal />}
      {playbookOpen && <PlaybookModal />}
    </>
  );
}
