'use client';

import React, { useState } from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Info } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const item = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

const ProjectCard = ({ project }) => {
  const [showModal, setShowModal] = useState(false);

  // Close modal when pressing ESC
  React.useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        setShowModal(false);
      }
    };
    if (showModal) {
        document.body.style.overflow = 'hidden';
        window.addEventListener('keydown', handleEscape);
    } else {
        document.body.style.overflow = 'auto';
    }
    return () => {
        window.removeEventListener('keydown', handleEscape);
        document.body.style.overflow = 'auto';
    };
  }, [showModal]);
  
  const videoUrl = project.youtubeId 
    ? `https://www.youtube.com/embed/${project.youtubeId}?autoplay=1` 
    : null;

  return (
    <>
      <motion.div variants={item} className="h-full">
        <Card className="flex h-full flex-col overflow-hidden rounded-xl py-0 border border-zinc-200 bg-white shadow-lg transition-all hover:shadow-xl">
          {/* Media Container with Background Image and Student Pic */}
          <div className="relative aspect-[16/9] w-full bg-gray-200">
            <Image
              src={project.backgroundImage}
              alt={`${project.studentName}'s project: ${project.projectTitle}`}
              fill
              className="object-cover"
              unoptimized
            />
            {/* Overlay Gradient (softens image) */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            
            {/* Student Profile Picture (Overlapping bottom) */}
            <div className="absolute left-4 -bottom-10 h-20 w-20 overflow-hidden rounded-full ring-4 ring-white shadow-md">
              <Image
                src={project.studentPic}
                alt={project.studentName}
                fill
                className="object-cover"
                unoptimized
              />
            </div>
          </div>

          {/* Content Area */}
          <CardContent className="flex flex-col pt-12 pb-4 px-4 text-zinc-900">
            {/* Name and Grade Row */}
            <div className="flex items-start justify-between">
              <h3 className="text-lg font-bold text-zinc-900">{project.studentName}</h3>
              <span className="text-sm font-semibold text-zinc-500">Grade {project.grade}</span>
            </div>

            {/* Project Details */}
            <div className="mt-1">
              <p className="text-sm font-medium text-zinc-600">{project.projectType}</p>
              <div className="flex items-center gap-1.5 mt-1">
                <h4 className="text-xl font-extrabold">{project.projectTitle}</h4>
                <Info className="h-4 w-4 text-zinc-400" />
              </div>
            </div>

            {/* CTA - View Project */}
            <div className="mt-4">
              <Button
                onClick={() => setShowModal(true)}
                className="h-10 w-full rounded-lg bg-red-500 px-4 text-base font-semibold text-white hover:bg-red-600"
              >
                View project
              </Button>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* YouTube Video Modal (Popup) */}
      {showModal && videoUrl && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 transition-opacity"
          onClick={() => setShowModal(false)}
        >
          <div 
            className="w-full max-w-4xl rounded-xl bg-white shadow-2xl"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
          >
            <div className="relative aspect-video">
              <iframe
                className="w-full h-full rounded-xl"
                src={videoUrl}
                title={`Project: ${project.projectTitle} video`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <button
              onClick={() => setShowModal(false)}
              className="absolute -top-3 -right-3 h-8 w-8 rounded-full bg-white text-zinc-800 shadow-xl hover:bg-gray-100"
              aria-label="Close video player"
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectCard;
