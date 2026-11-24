import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const navLinks = ['About', 'Projects', 'Experience', 'Skills', 'Contact'];

const socials = [
  { href: 'https://github.com/rajak82001', label: 'GitHub', icon: Github, hover: 'hover:bg-yellow' },
  { href: 'https://www.linkedin.com/in/raja-khan-b69986241/', label: 'LinkedIn', icon: Linkedin, hover: 'hover:bg-blue' },
  { href: 'mailto:rajak82001@gmail.com', label: 'Email', icon: Mail, hover: 'hover:bg-pink' },
];

export default function Footer() {
  return (
    <footer className="border-t-3 border-ink bg-white py-10 mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <a href="#home" className="inline-block text-2xl font-black tracking-tighter bg-yellow border-2 border-ink px-2 py-0.5 rotate-[-2deg] hover:rotate-0 transition-transform">
            RK
          </a>
          <p className="font-bold mt-3 inline-flex items-center gap-1.5">
            Designed & built with <Heart size={16} className="text-pink fill-pink" /> by Raja Khan © {new Date().getFullYear()}
          </p>
        </div>

        <nav aria-label="Footer" className="flex flex-wrap justify-center gap-x-5 gap-y-2 font-bold text-sm">
          {navLinks.map((l) => (
            <a key={l} href={`#${l.toLowerCase()}`} className="hover:underline decoration-2 underline-offset-4">
              {l}
            </a>
          ))}
        </nav>

        <div className="flex gap-4">
          {socials.map(({ href, label, icon: Icon, hover }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className={`p-2 border-2 border-ink rounded-full ${hover} hover:-translate-y-0.5 transition-all brutal-shadow-sm`}
            >
              <Icon size={20} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
