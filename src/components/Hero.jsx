import React from "react";
import { motion } from "framer-motion";
import Image from '../assets/My_image2.png';
import Image1 from '../assets/port12.png';
import Image2 from '../assets/react.svg';


export default function Hero() {
  return (
    
      <section id="hero" className="mb-20">
  

      <br />
      <br />
      <br />
      <div id="img-block" className="grid lg:grid-cols-2 md:grid-cols-1  lg:gap-52 items-center mt-10">
        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9 }}>
          <p className="text-md uppercase tracking-wider text-white/60">Hi, i am</p>
          <h1 className="text-3xl md:text-5xl font-extrabold mt-4">sri</h1>
        <h2 className="flex gap-4 text-2xl mt-4">I'm a <span id="des" className="mt-0.5" >Design Engineer</span></h2>
          <p className="mt-4 text-md text-white/80 lg:w-xl md:w-sm ">
            I'm proficient in CATIA V5 and 3D EXPERIENCE CATIA V6 enabling me to bring designs to life with clean code and responsive functionality.
I know the basics of CREO, SEIMEN NX, SOLIDWORKS. 
          </p>
          <br />
          <div className="mt-6 flex gap-4">
            <a href="#projects" className="px-6 py-3 rounded-md bg-primary text-red-600 font-semibold hover:scale-[1.02] transition">See projects</a>
            <a href="#Footer" className="px-6 py-3 rounded-md border border-white/10 hover:border-primary transition">Get in touch</a>
          </div>
        </motion.div>
        
      


        <div className="home-img">
          <div className="img-box">
            <div className="img-item">
              <img  src={Image2} 
              srcSet="profile-2x.png 2x, profile-3x.png 3x"
              alt="Myimg" />
            </div>
          </div>

         </div>



      </div>

  
      
    </section>
  );

}
