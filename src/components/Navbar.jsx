import React, { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { Link } from "react-router-dom"; // Only if using react-router

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed w-full backdrop-blur-sm bg-black/40 z-40">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <div className="text-2xl font-bold">
          <a href="#" className="text-white">MyPortfolio</a>
        </div>

        {/* Desktop Menu */}

        <nav id="Nav" className="hidden md:flex gap-10 space-x-6 items-center ">
         <ul>
          <li className="active">
            <a href="#hero" className="hover:text-primary transition">Home</a>
             
          </li>
          <li>
            <a href="#projects" className="hover:text-primary transition">Projects</a>
            
          </li>
          <li>
             <a href="#about" className="hover:text-primary transition">About</a>
            
          </li>
          <li>
            <a href="#experience" className="hover:text-primary transition">Experience</a>
           
          </li>
         </ul>

          <a
            href="/resume.pdf"
            className="px-4 py-2 border border-white/10 rounded-md text-sm hover:bg-primary hover:text-black transition glow-accent"
          >
            Resume
          </a>
         
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden sm:hidden">
          <button
            aria-label="menu"
            className="p-3 border rounded-md border-white/10"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <HiMenuAlt3  size={25}/>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden bg-black/90 border-t border-white/10 px-6 py-4 space-y-4">
          <a href="#projects" className="block hover:text-primary transition" onClick={() => setMenuOpen(false)}>Projects</a>
          <a href="#about" className="block hover:text-primary transition" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#hero" className="block hover:text-primary transition" onClick={() => setMenuOpen(false)}>Home</a>
          <a href="#experience" className="block hover:text-primary transition" onClick={() => setMenuOpen(false)}>Experience</a>
          <a
            href="/resume.pdf"
            className="block px-4 py-2 border border-white/10 rounded-md text-sm hover:bg-primary hover:text-black transition glow-accent"
            onClick={() => setMenuOpen(false)}
          >
            Resume
          </a>
        </div>
      )}
    </header>
  );
}
