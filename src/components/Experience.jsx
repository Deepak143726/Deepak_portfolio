import React from 'react'
import MitImage from "../images/mit.jpeg";
import dileka from "../images/dileka.jpeg"

const experiences = [
  {
    role: "Project Technician- Design engineer ",
    company: "Madras Institute Of Technology",
    duration: "August,2024 - Previous",
    description:
      "CAD modeling and simulation: Utilized advanced CAD software , 3D experience (Catia V6) to create detailed industrial product design, 3D models and assemblies. Conducted simulations to predict stress points and optimized designs for weight reduction while maintaining structural strength. Prototyping and Testing : Experience with creating prototypes and conducting testing to refine designs. Problem-Solving : Ability to identify design issues and develop creative, efficient solutions.",
    image: MitImage
  },
  {
    role: "Intern",
    company: "Dileka Innovations",
    duration: "May,2024 - July,2024",
    description:
      "Completed a On Job Training (OJT) in 3D experience (Catia V6). Material Selection and Testing.",
    image:dileka
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
              className="relative p-6  rounded-lg shadow-lg border border-neutral-800 hover:border-red-500 transition bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${exp.image})` }} // ✅ Set background image
            >
              {/* ✅ Overlay to darken background */}
              <div className="absolute inset-0 bg-black/60 rounded-lg"></div>

              {/* ✅ Content placed above overlay */}
              <div className="relative z-10">
                <h2 className="text-2xl font-semibold text-red-500">
                  {exp.role}
                </h2>
                <p className="text-lg text-gray-300">{exp.company}</p>
                <p className="text-sm text-white italic">{exp.duration}</p>
                <p className="mt-4 text-gray-200">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience
