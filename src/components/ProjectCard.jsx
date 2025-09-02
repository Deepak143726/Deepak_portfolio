import React, { useState } from "react";

export default function ProjectCard({ project }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleInfo = () => {
    setIsOpen(!isOpen);
  };

  return (
    <article
      onClick={toggleInfo}
      className="bg-surface p-6 rounded-2xl border border-white/6 hover:scale-[1.02] transition cursor-pointer"
    >
      {/* Project image */}
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-[200px] rounded-lg mb-4"
      />

      <h3 className="text-xl font-semibold">{project.title}</h3>
     

      {/* Expandable info section */}
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-40 opacity-100 mt-4" : "max-h-0 opacity-0"
        }`}
      >
        
        <div className="flex gap-2 flex-wrap">
          {project.tech.map((t) => (
            
            <span
              key={t}
              className="text-xs px-2 py-1 border border-white/8 rounded-md"
            >
              {t}
            </span>
          ))}
        </div>
        <div className="mt-4">
           <p className="mt-2 text-sm text-white/70">{project.description}</p>
          
          <a
            href={project.url}
            className="text-sm inline-block text-primary font-medium"
            onClick={(e) => e.stopPropagation()} // Prevent card toggle when clicking link
          >
            View project →
          </a>
        </div>
      </div>
    </article>
  );
}
