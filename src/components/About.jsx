import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { GraduationCap, Briefcase, Rocket, BookOpen, FileText, SquareTerminal } from 'lucide-react';
import Terminal from './Terminal';
import BrutalBadge from './ui/BrutalBadge';
import SectionHeading from './ui/SectionHeading';

const highlights = ['React Development', 'Frontend UI', 'Responsive Design', 'Problem Solving'];

const facts = [
  { icon: GraduationCap, label: 'Education', value: 'B.Tech CSE (AI), BIT Durg · 2026', color: 'bg-blue', rotate: -2 },
  { icon: Briefcase, label: 'Currently', value: 'Frontend Developer Intern @ Phoneo', color: 'bg-yellow', rotate: 1.5 },
  { icon: Rocket, label: 'Focus', value: 'Full-stack MERN products with real integrations', color: 'bg-green', rotate: -1 },
  { icon: BookOpen, label: 'Learning', value: 'Next.js, TypeScript & GenAI', color: 'bg-pink', rotate: 2 },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function About() {
  const [mode, setMode] = useState('readme');

  return (
    <section id="about" className="scroll-mt-32">
      <SectionHeading rotate="rotate-[-2deg]" subtitle="A little bit about me ✍️">
        About
      </SectionHeading>

      <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_290px] gap-10 lg:gap-12 items-start">
        {/* Tactical System Window */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="bg-white border-2 border-ink shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] rounded-lg overflow-hidden rotate-[-0.5deg]"
        >
          {/* Window Header */}
          <div className="flex items-center border-b-2 border-ink bg-gray-100 px-4 py-3">
            <div className="flex gap-2">
              <div className="w-3.5 h-3.5 rounded-full bg-[#ff5f56] border border-ink shadow-[1px_1px_0px_0px_rgba(0,0,0,1)]"></div>
              <div className="w-3.5 h-3.5 rounded-full bg-[#ffbd2e] border border-ink shadow-[1px_1px_0px_0px_rgba(0,0,0,1)]"></div>
              <div className="w-3.5 h-3.5 rounded-full bg-[#27c93f] border border-ink shadow-[1px_1px_0px_0px_rgba(0,0,0,1)]"></div>
            </div>
            <div role="tablist" aria-label="About view" className="ml-auto flex items-center gap-1 bg-white border-2 border-ink rounded-md p-0.5">
              {[
                { id: 'readme', label: 'README.md', icon: FileText },
                { id: 'terminal', label: 'Terminal', icon: SquareTerminal },
              ].map(({ id, label, icon: Icon }) => (
                <button
                  key={id}
                  type="button"
                  role="tab"
                  aria-selected={mode === id}
                  onClick={() => setMode(id)}
                  className="relative inline-flex items-center gap-1.5 px-2.5 py-1 rounded text-xs font-bold uppercase tracking-wider"
                >
                  {mode === id && (
                    <motion.span
                      layoutId="about-tab"
                      className={`absolute inset-0 rounded border-2 border-ink ${id === 'terminal' ? 'bg-green' : 'bg-yellow'}`}
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                  <Icon size={14} className="relative" />
                  <span className="relative">{label}</span>
                  {id === 'terminal' && mode !== 'terminal' && (
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full rounded-full bg-pink opacity-75 animate-ping" />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-pink" />
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>

          <AnimatePresence mode="wait" initial={false}>
          {mode === 'terminal' ? (
            <motion.div
              key="terminal"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              <Terminal autoFocus />
            </motion.div>
          ) : (
          <motion.div
            key="readme"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >

          {/* Window Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="p-6 md:p-8 text-lg md:text-xl font-medium leading-relaxed space-y-6"
          >
            <motion.p variants={itemVariants}>
              I'm a full-stack developer who enjoys building products that{' '}
              <mark className="bg-yellow text-ink font-bold px-1 py-0.5">solve real problems</mark> from a live
              marketplace with payments and auth to automation pipelines that save people hours of manual work.
            </motion.p>
            <motion.p variants={itemVariants}>
              I like owning the full picture: designing the backend logic, wiring up integrations like payments and
              media delivery and making sure the interface feels simple even when the system underneath isn't. Lately,
              I have been exploring how{' '}
              <mark className="bg-yellow text-ink font-bold px-1 py-0.5">AI can genuinely improve workflows</mark> not
              just as a buzzword but as a working part of the product.
            </motion.p>
            <motion.p variants={itemVariants}>
              Currently expanding into Next.js and building more with GenAI always shipping, always refining.
              <motion.span
                aria-hidden="true"
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                className="inline-block w-2.5 h-6 bg-ink align-middle ml-1"
              />
            </motion.p>
            <motion.button
              variants={itemVariants}
              type="button"
              onClick={() => setMode('terminal')}
              className="inline-flex items-center gap-2 text-sm md:text-base font-mono font-bold bg-ink text-[#4ade80] border-2 border-ink rounded-md px-3 py-1.5 shadow-[3px_3px_0_#FFD84D] hover:-translate-y-0.5 transition-transform"
            >
              <SquareTerminal size={16} /> $ open terminal — try typing commands
            </motion.button>
          </motion.div>
          </motion.div>
          )}
          </AnimatePresence>

          {/* Status Bar / Footer */}
          <div className="border-t-2 border-ink bg-gray-50 px-6 py-4 flex flex-col md:flex-row items-start md:items-center gap-4">
            <span className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-ink/70">
              <span className="w-2 h-2 rounded-full bg-green border border-ink animate-pulse" />
              System Status: Active
            </span>
            <div className="flex flex-wrap gap-3 md:ml-auto">
              {highlights.map((h, i) => (
                <BrutalBadge key={h} color={['bg-pink', 'bg-blue', 'bg-yellow', 'bg-green'][i % 4]}>
                  {h}
                </BrutalBadge>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Quick facts */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-5">
          {facts.map(({ icon: Icon, label, value, color, rotate }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, x: 40, rotate: 0 }}
              whileInView={{ opacity: 1, x: 0, rotate }}
              whileHover={{ rotate: 0, scale: 1.04 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ type: 'spring', stiffness: 220, damping: 18, delay: i * 0.1 }}
              className={`${color} border-2 border-ink brutal-shadow-sm rounded-lg p-4 flex items-start gap-3`}
            >
              <span className="grid place-items-center shrink-0 w-10 h-10 rounded-full bg-white border-2 border-ink">
                <Icon size={20} strokeWidth={2.5} />
              </span>
              <div>
                <p className="text-xs font-black uppercase tracking-widest text-ink/70">{label}</p>
                <p className="font-bold leading-snug">{value}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
