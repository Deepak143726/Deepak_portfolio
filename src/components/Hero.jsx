import React from "react";
import { motion } from "framer-motion";
import Image from '../assets/My_image2.png';
import Image1 from '../assets/port12.png'

export default function Hero() {
  return (
    <section id="hero" className="mb-20 ">
      <br />
      <br />
      <br />
      <div id="img-block" className="grid lg:grid-cols-2 md:grid-cols-1  lg:gap-52 items-center">
        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9 }}>
          <p className="text-md uppercase tracking-wider text-white/60">Hi, i am</p>
          <h1 className="text-4xl md:text-6xl font-extrabold mt-4">Deepak Rajasekar</h1>
          <p className="mt-4 text-md text-white/80 lg:w-xl md:w-sm ">
            I'm proficient in CATIA V5 and 3D EXPERIENCE CATIA V6 enabling me to bring designs to life with clean code and responsive functionality.
I know the basics of CREO, SEIMEN NX, SOLIDWORKS. 
          </p>
          <div className="mt-6 flex gap-4">
            <a href="#projects" className="px-6 py-3 rounded-md bg-primary text-red-500 font-semibold hover:scale-[1.02] transition">See projects</a>
            <a href="#contact" className="px-6 py-3 rounded-md border border-white/10 hover:border-primary transition">Get in touch</a>
          </div>
        </motion.div>
        
      


        <div className="home-img">
          <div className="img-box">
            <div className="img-item">
              <img  src={Image1} 
              srcSet="profile-2x.png 2x, profile-3x.png 3x"
              alt="Myimg" />
            </div>
          </div>

         </div>



      </div>

  
         {/* <motion.div initial={{ opacity: 0 , y:40 }} animate={{ opacity: 1 ,y: 0 }} transition={{ duration: 0.9 , delay: 0.2 }} className="relative">
          <div className="w-full h-64 rounded-2xl bg-gradient-to-bl from-surface to-black p-6 glow-accent">
            <div className="w-full h-full rounded-lg border border-white/6 flex items-center justify-center text-white/40">
              
            </div>
          </div>
        </motion.div> 
         
      */}
    </section>
  );

}
