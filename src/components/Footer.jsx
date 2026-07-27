import { Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t-3 border-ink bg-white py-8 mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="font-black text-xl">
          Designed & Developed by Raja Khan © 2026
        </div>
        <div className="flex gap-4">
          <a href="https://github.com/rajak82001" target="_blank" rel="noreferrer" className="p-2 border-2 border-ink rounded-full hover:bg-yellow transition-colors brutal-shadow-sm">
            <Github size={20} />
          </a>
          <a href="http://www.linkedin.com/in/raja-khan-b69986241/" target="_blank" rel="noreferrer" className="p-2 border-2 border-ink rounded-full hover:bg-blue transition-colors brutal-shadow-sm">
            <Linkedin size={20} />
          </a>
          <a href="mailto:rajak82001@gmail.com" className="p-2 border-2 border-ink rounded-full hover:bg-pink transition-colors brutal-shadow-sm">
            <Mail size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}
