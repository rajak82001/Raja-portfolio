import { motion } from 'motion/react';
import BrutalCard from './ui/BrutalCard';
import TechBadge from './ui/TechBadge';
import SectionHeading from './ui/SectionHeading';
import { CheckCircle } from 'lucide-react';

export default function Experience() {
  const stack = ['React', 'Redux Toolkit', 'Tailwind CSS'];

  return (
    <section id="experience" className="scroll-mt-32">
      <SectionHeading rotate="rotate-[-1deg]">Experience</SectionHeading>

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <BrutalCard
          rotation={0}
          borderWidth="border-4"
          className="bg-white !shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] hover:!shadow-[14px_14px_0px_0px_rgba(0,0,0,1)] transition-all duration-200"
        >
          <div className="flex flex-col gap-8">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <h3 className="text-2xl sm:text-3xl font-black leading-tight text-ink">
                  Frontend Developer Intern
                </h3>
                <p className="text-xl font-bold text-[#4DA6FF] mt-0.5">@ Amdox Technologies</p>
              </div>

              <span className="inline-flex items-center gap-2 border-2 border-ink px-3 py-2 rounded-full bg-[#111111] text-[#4ade80] text-xs font-mono uppercase tracking-[0.2em] shadow-[2px_2px_0px_#111111]">
                Aug 2023 – Oct 2023
              </span>
            </div>

            <p className="text-base text-ink/80 max-w-2xl leading-relaxed">
              Delivered dashboard UI consistency and real-time data workflows using React, Redux Toolkit, and Tailwind CSS while contributing to a collaborative Agile team.
            </p>

            <div className="space-y-4">
              <div className="flex gap-3">
                <CheckCircle size={20} className="text-[#4ade80] shrink-0" />
                <p className="text-ink/90 leading-relaxed">
                  Built 6+ reusable React components with Redux Toolkit and Tailwind CSS, improving UI consistency across three dashboard modules.
                </p>
              </div>

              <div className="flex gap-3">
                <CheckCircle size={20} className="text-[#4ade80] shrink-0" />
                <p className="text-ink/90 leading-relaxed">
                  Integrated 4 REST APIs into React dashboards for real-time filtering and role-based rendering, improving data responsiveness and access control.
                </p>
              </div>

              <div className="flex gap-3">
                <CheckCircle size={20} className="text-[#4ade80] shrink-0" />
                <p className="text-ink/90 leading-relaxed">
                  Collaborated in an Agile team of 5 engineers on two-week sprint cycles with Git-based code reviews and shared delivery ownership.
                </p>
              </div>
            </div>

            <div className="border-t-2 border-ink/10 pt-5">
              <span className="text-xs font-black uppercase tracking-wider text-ink/50 block mb-2">
                Internship Tech Stack
              </span>
              <div className="flex flex-wrap gap-2">
                {stack.map((tech) => (
                  <TechBadge key={tech} tech={tech} />
                ))}
              </div>
            </div>
          </div>
        </BrutalCard>
      </motion.div>
    </section>
  );
}
