import React from "react";

export default function ProjectCard({ project }) {
  return (
    <article className="bg-surface p-6 rounded-2xl border border-white/6 hover:scale-[1.02] transition">
      <h3 className="text-xl font-semibold">{project.title}</h3>
      <p className="mt-2 text-sm text-white/70">{project.description}</p>
      <div className="mt-4 flex gap-2 flex-wrap">
        {project.tech.map(t => (
          <span key={t} className="text-xs px-2 py-1 border border-white/8 rounded-md">{t}</span>
        ))}
      </div>
      <div className="mt-4">
        <a href={project.url} className="text-sm inline-block text-primary font-medium">View project →</a>
      </div>
    </article>
  );
}
