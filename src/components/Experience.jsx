import { motion } from 'motion/react';
import BrutalCard from './ui/BrutalCard';
import TechBadge from './ui/TechBadge';
import SectionHeading from './ui/SectionHeading';
import { CheckCircle, Briefcase, MapPin } from 'lucide-react';

export const experiences = [
  {
    role: 'Frontend Developer Intern',
    company: 'Phoneo',
    location: 'Bhilai, Chhattisgarh, India',
    date: 'Aug 2026 – Present',
    current: true,
    summary:
      'Building fast, SEO-friendly product experiences for a mobile phone platform with Next.js, React and TypeScript.',
    points: [
      'Developed responsive web interfaces using Next.js, React.js, TypeScript, and Tailwind CSS.',
      'Integrated REST APIs and built dynamic pages for mobile product details, specifications, and comparisons.',
      'Developed theme-based mobile websites, reusable components, and SEO-friendly blog pages.',
      'Conducted keyword research and implemented SEO, AEO, and GEO-focused content optimization.',
      'Performed functional testing, identified application bugs, and debugged UI, API integration, routing, and rendering issues.',
    ],
    stack: ['Next.js', 'React.js', 'TypeScript', 'Tailwind CSS', 'REST APIs', 'SEO / AEO / GEO'],
    color: 'bg-yellow',
  },
  {
    role: 'Frontend Developer Intern',
    company: 'Amdox Technologies',
    date: 'Aug 2023 – Oct 2023',
    summary:
      'Delivered dashboard UI consistency and real-time data workflows using React, Redux Toolkit, and Tailwind CSS while contributing to a collaborative Agile team.',
    points: [
      'Built 6+ reusable React components with Redux Toolkit and Tailwind CSS, improving UI consistency across three dashboard modules.',
      'Integrated 4 REST APIs into React dashboards for real-time filtering and role-based rendering, improving data responsiveness and access control.',
      'Collaborated in an Agile team of 5 engineers on two-week sprint cycles with Git-based code reviews and shared delivery ownership.',
    ],
    stack: ['React', 'Redux Toolkit', 'Tailwind CSS'],
    color: 'bg-green',
  },
];

function ExperienceCard({ exp }) {
  return (
    <div className="relative">
      {/* Timeline node */}
      <motion.div
        aria-hidden="true"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ type: 'spring', stiffness: 300, damping: 14, delay: 0.2 }}
        className={`absolute -left-10 md:-left-16 top-6 ml-0 md:ml-[6px] grid place-items-center w-8 h-8 md:w-9 md:h-9 rounded-full ${exp.color} border-3 border-ink brutal-shadow-sm z-10`}
      >
        {exp.current && (
          <span className="absolute inset-0 rounded-full bg-yellow animate-ping opacity-60" />
        )}
        <Briefcase size={15} strokeWidth={3} className="relative" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <BrutalCard
          rotation={0}
          borderWidth="border-4"
          className="bg-white !w-full !shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] hover:!shadow-[14px_14px_0px_0px_rgba(0,0,0,1)] transition-shadow duration-200"
        >
          <div className="flex flex-col gap-7">
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
              <div>
                {exp.current && (
                  <span className="inline-flex items-center gap-1.5 mb-2 bg-yellow border-2 border-ink rounded-full px-2.5 py-0.5 text-xs font-black uppercase tracking-wider">
                    <span className="w-2 h-2 rounded-full bg-green border border-ink animate-pulse" />
                    Current role
                  </span>
                )}
                <h3 className="text-2xl sm:text-3xl font-black leading-tight text-ink">{exp.role}</h3>
                <p className="text-xl font-bold text-[#4DA6FF] mt-0.5">@ {exp.company}</p>
                {exp.location && (
                  <p className="inline-flex items-center gap-1 text-sm font-semibold text-ink/60 mt-1">
                    <MapPin size={14} /> {exp.location}
                  </p>
                )}
              </div>

              <span className="inline-flex items-center gap-2 border-2 border-ink px-3 py-2 rounded-full bg-[#111111] text-[#4ade80] text-xs font-mono uppercase tracking-[0.2em] shadow-[2px_2px_0px_#111111] w-fit shrink-0">
                {exp.date}
              </span>
            </div>

            <p className="text-base text-ink/80 max-w-2xl leading-relaxed">{exp.summary}</p>

            <motion.div
              className="space-y-4"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-40px' }}
              variants={{ show: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } } }}
            >
              {exp.points.map((p) => (
                <motion.div
                  key={p}
                  className="flex gap-3"
                  variants={{
                    hidden: { opacity: 0, x: 20 },
                    show: { opacity: 1, x: 0, transition: { duration: 0.4 } },
                  }}
                >
                  <CheckCircle size={20} className="text-[#22c55e] shrink-0 mt-0.5" />
                  <p className="text-ink/90 leading-relaxed">{p}</p>
                </motion.div>
              ))}
            </motion.div>

            <div className="border-t-2 border-ink/10 pt-5">
              <span className="text-xs font-black uppercase tracking-wider text-ink/50 block mb-2">Tech Stack</span>
              <div className="flex flex-wrap gap-2">
                {exp.stack.map((tech, i) => (
                  <TechBadge key={tech} tech={tech} index={i} />
                ))}
              </div>
            </div>
          </div>
        </BrutalCard>
      </motion.div>
    </div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="scroll-mt-32">
      <SectionHeading rotate="rotate-[-1deg]" subtitle="Where I've worked 💼">
        Experience
      </SectionHeading>

      <div className="relative pl-10 md:pl-16">
        {/* Timeline line draws itself on scroll */}
        <motion.div
          aria-hidden="true"
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          className="absolute left-[14px] md:left-[22px] top-4 bottom-4 w-1 bg-ink origin-top rounded-full"
        />
        <div className="space-y-14">
          {experiences.map((exp) => (
            <ExperienceCard key={exp.company} exp={exp} />
          ))}
        </div>
      </div>
    </section>
  );
}
