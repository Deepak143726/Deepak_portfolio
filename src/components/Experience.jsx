import React from 'react'

const experiences = [
  {
    role: "CAD Designer",
    company: "ABC Design Solutions",
    duration: "Jan 2023 – Present",
    description:
      "Lead CAD projects for automotive components, collaborating with engineers to deliver precise 3D models and technical drawings. Ensured compliance with ISO standards and optimized designs for manufacturing efficiency."
  },
  {
    role: "Junior CAD Engineer",
    company: "XYZ Engineering",
    duration: "Jun 2021 – Dec 2022",
    description:
      "Assisted in product design and drafting, supporting senior engineers with CATIA V5 modeling, 2D detailing, and assembly design. Participated in design reviews and implemented revisions for improved performance."
  }
];



function Experience() {
  return (
    <section id='experience'>
    <div className=" text-white min-h-screen py-12 px-6 md:px-20">
      <h1 className="text-2xl font-bold mb-10  inline-block">
        Experience
      </h1>
      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="bg-neutral-900 p-6 rounded-lg shadow-lg border border-neutral-800 hover:border-red-500 transition"
          >
            <h2 className="text-2xl font-semibold text-red-500">
              {exp.role}
            </h2>
            <p className="text-lg text-gray-300">{exp.company}</p>
            <p className="text-sm text-gray-500 italic">{exp.duration}</p>
            <p className="mt-4 text-gray-200">{exp.description}</p>
          </div>
        ))}
      </div>
    </div>
    </section>
  );
}

export default Experience