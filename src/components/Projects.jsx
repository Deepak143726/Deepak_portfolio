import React from "react";
import projects from "../data/projects";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section id="projects" className="mt-12">
      <h2 className="text-2xl font-bold">Selected Projects</h2>
      <p className="mt-10 text-white/70">Things I’ve worked on recently.</p>
      <div className="grid md:grid-cols-2 gap-6 mt-6">
        {projects.map(p => (
          <ProjectCard project={p} key={p.id} />
        ))}
      </div>
    </section>
  );
}
