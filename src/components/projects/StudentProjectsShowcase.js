"use client";

import { projectsData } from "../data/ProjectData";
import ProjectCard from "./ProjectCard";

const StudentProjectsShowcase = () => {
  return (
    // Based on the image, the background is a very light pink/red.
    // We'll use a very light red tone to match.
    <section className="relative overflow-hidden bg-[#d2f0f8] py-16">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Heading */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-extrabold leading-tight text-zinc-900 md:text-4xl">
            See amazing projects{" "}
            <span className="underline decoration-4 decoration-amber-400">
              created by our students
            </span>
          </h2>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projectsData.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StudentProjectsShowcase;
