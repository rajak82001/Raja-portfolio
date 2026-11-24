import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import BrutalButton from './ui/BrutalButton';
import { Menu, X, Download, Search } from 'lucide-react';
import { openPalette, shortcutLabel } from './CommandPalette';

const links = ['About', 'Projects', 'Experience', 'Skills', 'Education', 'GitHub', 'Contact'];
const RESUME = '/Raja_Khan_Resume_24_11_2026.pdf';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Highlight the nav link for the section in the middle of the screen.
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: '-45% 0px -50% 0px' }
    );
    ['home', ...links.map((l) => l.toLowerCase()), 'programs'].forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'py-2' : 'py-4'}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between border-3 border-ink brutal-shadow bg-yellow px-4 sm:px-6 py-3 rounded-xl transition-all">
          <a href="#home" aria-label="Back to top" className="text-2xl font-black tracking-tighter bg-white border-2 border-ink px-2 py-1 rotate-[-2deg] hover:rotate-0 transition-transform">
            RK
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-2 font-bold">
            {links.map((link) => {
              const id = link.toLowerCase();
              const isActive = active === id;
              return (
                <a
                  key={link}
                  href={`#${id}`}
                  aria-current={isActive ? 'true' : undefined}
                  className={`px-2 py-1 rounded-md border-2 transition-all ${
                    isActive
                      ? 'bg-white border-ink shadow-[2px_2px_0px_#111111] -translate-y-0.5'
                      : 'border-transparent hover:border-ink hover:bg-white/60'
                  }`}
                >
                  {link}
                </a>
              );
            })}
            <button
              type="button"
              onClick={openPalette}
              aria-label={`Search (${shortcutLabel})`}
              title={`Search (${shortcutLabel})`}
              className="ml-1 inline-flex items-center gap-1.5 bg-white border-2 border-ink rounded-md px-2 py-1 shadow-[2px_2px_0px_#111111] hover:-translate-y-0.5 transition-transform"
            >
              <Search size={16} strokeWidth={2.5} />
              <kbd className="hidden xl:inline text-xs font-bold font-sans text-ink/60">{shortcutLabel}</kbd>
            </button>
            <BrutalButton color="bg-blue" className="ml-1" href={RESUME} download="Raja_Khan_Resume.pdf">
              Resume
            </BrutalButton>
          </div>

          {/* Mobile Toggle */}
          <div className="lg:hidden flex items-center gap-2">
          <button
            type="button"
            onClick={openPalette}
            aria-label="Search"
            className="border-2 border-ink p-1 bg-white rounded-md"
          >
            <Search size={24} />
          </button>
          <button
            className="lg:hidden border-2 border-ink p-1 bg-white rounded-md"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
          </div>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="lg:hidden mt-2 border-3 border-ink brutal-shadow bg-white p-4 rounded-xl flex flex-col space-y-2 font-bold"
            >
              {links.map((link) => {
                const id = link.toLowerCase();
                return (
                  <a
                    key={link}
                    href={`#${id}`}
                    onClick={() => setIsOpen(false)}
                    className={`p-2 rounded border-2 ${active === id ? 'bg-yellow border-ink' : 'border-transparent hover:bg-yellow/20'}`}
                  >
                    {link}
                  </a>
                );
              })}
              <BrutalButton color="bg-blue" className="w-full text-center !mt-4" href={RESUME} download="Raja_Khan_Resume.pdf">
                <span className="inline-flex items-center gap-2">
                  <Download size={16} /> Download Resume
                </span>
              </BrutalButton>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
