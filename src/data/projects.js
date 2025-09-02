import project1Image from "../assets/react.svg";



const projects = [
  {
    id: "p1",
    title: "SPANNER DRAWING",
    image:project1Image ,
    description: "A spanner, common hand tool used to provide grip and mechanical advantage in applying torque to turn objects—usually rotary fasteners, such as nuts and bolts. CAD (Computer-Aided Design) models of spanners are created using CATIA V5.",
    tech: ["React", "Tailwind", "Vite"],
    url: "/spanner", // lowercase for consistency
  },
  {
    id: "p2",
    title: "GEAR MODEL ",
    description: "Gears are essential components in many mechanical systems, transmitting motion and force between machine parts. The design of gears using CAD software like CATIA V5.",
    tech: ["React", "Node", "Stripe"],
    url: "#",
  },
  { id: 'p3',
    title: "PISTON ENGINE",
    description: "In this project, I’ve recreated the inner workings of a piston engine with precise 3D modeling and advanced simulation features in CATIA V5. The model showcases key components such as the cylinder, piston, crankshaft, and valve system.",
    image: "/images/portfolio.png", // <- Make sure this exists
    tech: ["React", "Tailwind", "Vite"],
    url: "https://example.com"},

    {id: 'p4',
    title: "CAM AND ROCKER",
    description: "Cam and rocker mechanisms are crucial in various mechanical systems, especially in internal combustion engines where they control valve movement. Designing these components using CAD software involves several precise steps to ensure optimal performance and durability.",
    image: "/images/portfolio.png", // <- Make sure this exists
    tech: ["React", "Tailwind", "Vite"],
    url: "https://example.com"},

     {id: 'p5',
    title: "AIR FILTER FOR V6 ENGINE",
    description: "The air filter CAD design project aims to create an efficient, durable, and cost-effective air filtration system for various applications, including automotive, industrial, and residential environments. The project will utilize advanced CAD software to design, analyze, and optimize the air filter's performance.",
    image: "/images/portfolio.png", // <- Make sure this exists
    tech: ["React", "Tailwind", "Vite"],
    url: "https://example.com"},

     {id: 'p6',
    title: "AIR TURBO FILTER FOR V6 ENGINE",
    description: "The air turbo filter CAD design project aims to develop an advanced air filtration system that combines turbocharging and filtration technologies. This design will enhance the performance of engines and machinery by providing clean, high-pressure air. The project will leverage cutting-edge CAD software to design, simulate, and optimize the air turbo filter's performance.",
    image: "/images/portfolio.png", // <- Make sure this exists
    tech: ["React", "Tailwind", "Vite"],
    url: "https://example.com"},

     {id: 'p7',
    title: "CRANKSHAFT FOR V6 ENGINE",
    description: "The crankshaft CAD design project aims to develop a high-performance, durable, and efficient crankshaft for internal combustion engines. This project will leverage advanced CAD software to design, simulate, and optimize the crankshaft, ensuring it meets all performance and reliability standards.",
    image: "/images/portfolio.png", // <- Make sure this exists
    tech: ["React", "Tailwind", "Vite"],
    url: "https://example.com"},

     {id: 'p8',
    title: "BELT WHEEL/ PULLEY  FOR V6 ENGINE",
    description: "The belt wheel/pulley CAD design project focuses on developing a high-performance, durable, and efficient pulley system for a V6 engine. This project will utilize advanced CAD software to design, simulate, and optimize the pulley system, ensuring it meets all performance, durability, and reliability standards.",
    image: "/images/portfolio.png", // <- Make sure this exists
    tech: ["React", "Tailwind", "Vite"],
    url: "https://example.com"},

];

export default projects;
