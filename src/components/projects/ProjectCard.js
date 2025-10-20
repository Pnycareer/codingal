'use client';

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: "easeOut" },
  },
};

const ProjectVideoModal = ({ isOpen, onClose, projectTitle, videoUrl }) => {
  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  useEffect(() => {
    if (!isOpen) {
      return undefined;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow || "auto";
    };
  }, [isOpen]);

  if (!isOpen || !videoUrl) {
    return null;
  }

  const dialogLabel = projectTitle
    ? `Video project: ${projectTitle}`
    : "Video project";

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 transition-opacity"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={dialogLabel}
    >
      <div
        className="relative w-full max-w-4xl rounded-xl bg-white shadow-2xl"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="relative aspect-video overflow-hidden rounded-xl">
          <iframe
            className="h-full w-full"
            src={videoUrl}
            title={
              projectTitle ? `Project video for ${projectTitle}` : "Project video"
            }
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            loading="lazy"
          />
        </div>
        <button
          type="button"
          onClick={onClose}
          className="absolute -top-3 -right-3 flex h-8 w-8 items-center justify-center rounded-full bg-white text-sm font-semibold text-zinc-800 shadow-xl hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500"
          aria-label="Close video player"
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
    </div>
  );
};

const ProjectCard = ({ project }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = useCallback(() => setIsModalOpen(true), []);
  const closeModal = useCallback(() => setIsModalOpen(false), []);

  if (!project) {
    return null;
  }

  const {
    backgroundImage,
    projectTitle,
    projectType,
    studentName,
    studentPic,
    youtubeId,
  } = project;

  const safeTitle = projectTitle || "Student project";
  const videoUrl = youtubeId
    ? `https://www.youtube.com/embed/${youtubeId}?autoplay=1`
    : undefined;

  return (
    <>
      <motion.div variants={cardVariants} className="h-full">
        <Card className="flex bg-white h-full py-0 flex-col overflow-hidden rounded-xl border border-zinc-200  shadow-lg transition-all hover:shadow-xl">
          <div className="relative aspect-[16/9] w-full bg-gray-200">
            <Image
              src={backgroundImage}
              alt={`${studentName}'s project background`}
              fill
              className="object-cover"
              unoptimized
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            <div className="absolute left-4 -bottom-10 h-20 w-20 overflow-hidden rounded-full ring-4 ring-white shadow-md">
              <Image
                src={studentPic}
                alt={`${studentName}'s profile photo`}
                fill
                className="object-cover"
                unoptimized
              />
            </div>
          </div>
          <CardContent className="flex flex-col px-4 pb-4 pt-12 text-zinc-900">
            <div className="flex items-start justify-between">
              <h3 className="text-lg font-bold text-zinc-900">{studentName}</h3>
            </div>
            <div className="mt-1">
              {projectType && (
                <p className="text-sm font-medium text-zinc-600">{projectType}</p>
              )}
              <h4 className="mt-1 text-xl font-extrabold">{safeTitle}</h4>
            </div>
            <div className="mt-4">
              <Button
                type="button"
                onClick={openModal}
                className="h-10 w-full rounded-lg bg-red-500 px-4 text-base font-semibold text-white hover:bg-red-600 disabled:cursor-not-allowed disabled:bg-red-300"
                disabled={!videoUrl}
                aria-haspopup="dialog"
                aria-expanded={isModalOpen}
              >
                {videoUrl ? "View project" : "Video unavailable"}
              </Button>
            </div>
          </CardContent>
        </Card>
      </motion.div>
      <ProjectVideoModal
        isOpen={isModalOpen}
        onClose={closeModal}
        projectTitle={safeTitle}
        videoUrl={videoUrl}
      />
    </>
  );
};

export default ProjectCard;
