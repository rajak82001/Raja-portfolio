import { motion } from 'motion/react';
import { Github, Linkedin, Mail, Heart, ArrowUpRight, ArrowUp } from 'lucide-react';

const navLinks = ['About', 'Projects', 'Experience', 'Skills', 'Education', 'Contact'];

const socials = [
  { href: 'https://github.com/rajak82001', label: 'GitHub', handle: '@rajak82001', icon: Github, color: 'bg-yellow' },
  { href: 'https://www.linkedin.com/in/raja-khan-b69986241/', label: 'LinkedIn', handle: 'Raja Khan', icon: Linkedin, color: 'bg-blue' },
  { href: 'mailto:rajak82001@gmail.com', label: 'Email', handle: 'rajak82001@gmail.com', icon: Mail, color: 'bg-pink' },
];

export default function Footer() {
  return (
    <footer className="mt-20 border-t-3 border-ink bg-ink text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* CTA strip */}
        <motion.a
          href="#contact"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          whileHover={{ rotate: 0, y: -3 }}
          className="group -translate-y-1/2 flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-yellow text-ink border-3 border-ink rounded-xl px-5 sm:px-8 py-5 shadow-[6px_6px_0_#4DA6FF] rotate-[-1deg]"
        >
          <span className="font-sans text-xl sm:text-2xl md:text-3xl font-black leading-tight">
            Have a project or role in mind?
          </span>
          <span className="inline-flex items-center gap-2 self-start sm:self-auto shrink-0 bg-ink text-white rounded-lg px-4 py-2 font-bold">
            Let's talk
            <ArrowUpRight size={18} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </span>
        </motion.a>

        {/* Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1.2fr] gap-10 lg:gap-12 pb-10 -mt-4">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <a
              href="#home"
              className="inline-block text-2xl font-black tracking-tighter bg-yellow text-ink border-2 border-white px-2 py-0.5 rotate-[-2deg] hover:rotate-0 transition-transform"
            >
              RK
            </a>
            <p className="mt-4 max-w-sm text-white/75 leading-relaxed">
              Full-Stack Developer building React, Next.js &amp; AI-integrated web apps that solve real problems.
            </p>
            <span className="mt-4 inline-flex items-center gap-2 rounded-full border border-white/25 px-3 py-1 text-sm font-bold">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full rounded-full bg-green opacity-75 animate-ping" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green" />
              </span>
              Open to opportunities
            </span>
          </div>

          {/* Navigate */}
          <nav aria-label="Footer">
            <h3 className="text-xs font-black uppercase tracking-[0.2em] text-yellow mb-4">Navigate</h3>
            <ul className="grid grid-cols-2 gap-x-6 gap-y-2.5 font-bold">
              {navLinks.map((l) => (
                <li key={l}>
                  <a
                    href={`#${l.toLowerCase()}`}
                    className="text-white/80 hover:text-yellow underline-offset-4 hover:underline transition-colors"
                  >
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Connect */}
          <div>
            <h3 className="text-xs font-black uppercase tracking-[0.2em] text-yellow mb-4">Connect</h3>
            <ul className="space-y-3">
              {socials.map(({ href, label, handle, icon: Icon, color }) => {
                const external = href.startsWith('http');
                return (
                  <li key={label}>
                    <a
                      href={href}
                      target={external ? '_blank' : undefined}
                      rel={external ? 'noopener noreferrer' : undefined}
                      className="group flex items-center gap-3 min-w-0"
                    >
                      <span
                        className={`grid place-items-center shrink-0 w-10 h-10 rounded-lg ${color} text-ink border-2 border-white transition-transform group-hover:-rotate-6 group-hover:scale-110`}
                      >
                        <Icon size={18} strokeWidth={2.5} />
                      </span>
                      <span className="min-w-0">
                        <span className="block text-xs font-bold uppercase tracking-wider text-white/50">{label}</span>
                        <span className="block font-bold truncate group-hover:text-yellow transition-colors">{handle}</span>
                      </span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-t border-white/15 pt-6 pb-8 text-sm text-white/60">
          <p>
            © {new Date().getFullYear()} Raja Khan. Designed &amp; built with{' '}
            <Heart size={14} className="inline -mt-0.5 text-pink fill-pink" aria-label="love" /> in India.
          </p>
          <a href="#home" className="inline-flex items-center gap-1.5 font-bold text-white/80 hover:text-yellow transition-colors">
            Back to top <ArrowUp size={15} />
          </a>
        </div>
      </div>
    </footer>
  );
}
