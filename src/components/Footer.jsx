import React from "react";

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-white/6 py-8 text-sm">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <div>© {new Date().getFullYear()} Your Name</div>
        <div className="flex gap-4">
          <a href="#" className="hover:text-primary">GitHub</a>
          <a href="#" className="hover:text-primary">LinkedIn</a>
          <a href="#" className="hover:text-primary">Twitter</a>
        </div>
      </div>
    </footer>
  );
}
