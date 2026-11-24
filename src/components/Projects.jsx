import { motion } from 'motion/react';
import BrutalCard from './ui/BrutalCard';
import BrutalButton from './ui/BrutalButton';
import TechBadge from './ui/TechBadge';
import FeaturedBadge from './ui/FeaturedBadge';
import Tilt from './ui/Tilt';
import SectionHeading from './ui/SectionHeading';
import { ExternalLink, Github, Zap } from 'lucide-react';
import { projects } from '../data/projects';

const pad = (n) => String(n).padStart(2, '0');

/* ─── Sub-Component: ProjectCard ────────────────────────────────────── */
const ProjectCard = ({ project, index, total }) => {
  const primaryLink = project.live || (project.github !== '#' ? project.github : '');

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.45, delay: index * 0.06, ease: 'easeOut' }}
    >
      <BrutalCard
        rotation={project.rotation}
        className="bg-white"
        borderWidth={project.featured ? 'border-[5px]' : 'border-3'}
      >
        <div className="flex flex-col md:flex-row gap-8 items-stretch">
          {/* LEFT: Screenshot in a mini browser window */}
          <Tilt max={7} className="w-full md:w-[42%] shrink-0 self-start">
          <a
            href={primaryLink || undefined}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Open ${project.title}`}
            className="group w-full border-3 border-ink brutal-shadow-sm rounded-lg overflow-hidden relative flex flex-col"
            style={{ backgroundColor: project.bgColor }}
          >
            <div className="flex items-center gap-1.5 px-3 py-2 border-b-2 border-ink bg-white">
              <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56] border border-ink" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e] border border-ink" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f] border border-ink" />
              <span className="ml-2 flex-1 truncate rounded bg-paper border border-ink/20 px-2 text-[10px] font-mono text-ink/60">
                {project.live ? project.live.replace(/^https?:\/\//, '').replace(/\/$/, '') : `github.com/${project.github.split('/').slice(-2).join('/')}`}
              </span>
            </div>
            <div className="relative aspect-video overflow-hidden p-3">
              <img
                src={project.screenshot}
                alt={`${project.title} screenshot`}
                className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              {project.featured && <FeaturedBadge className="!top-3 !left-3" />}
            </div>
          </a>
          </Tilt>

          {/* RIGHT: Content */}
          <div className="flex flex-col justify-between gap-4 flex-1">
            <div className="flex items-start justify-between gap-4">
              <h3 className="text-3xl font-black leading-tight">{project.title}</h3>
              <span className="font-mono text-sm font-bold text-ink/40 pt-2 shrink-0">
                {pad(index + 1)} / {pad(total)}
              </span>
            </div>

            <p className="inline-block bg-yellow border-2 border-ink px-3 py-1 font-bold text-base leading-snug w-fit">
              {project.oneLiner}
            </p>

            <p className="text-base text-ink/80 leading-relaxed">{project.description}</p>

            <div className="flex flex-wrap items-center gap-3">
              <span className="text-xs font-black uppercase tracking-widest text-ink/50">
                {project.type}
              </span>
              <span className="inline-flex items-center gap-1.5 bg-green border-2 border-ink brutal-shadow-sm px-3 py-1 text-sm font-black rounded-full text-ink">
                <Zap size={13} strokeWidth={3} />
                {project.techCallout}
              </span>
            </div>

            <div className="flex flex-wrap gap-2 pt-1 pb-1">
              {project.stack.map((tech, i) => (
                <TechBadge key={tech} tech={tech} index={i} />
              ))}
            </div>

            <div className="flex flex-wrap gap-3 pt-1">
              {project.live && (
                <BrutalButton
                  color="bg-ink"
                  shadow="shadow-[4px_4px_0px_#6b7280]"
                  className="text-white"
                  href={project.live}
                >
                  <span className="flex items-center gap-2">
                    <ExternalLink size={16} />
                    Live Demo
                  </span>
                </BrutalButton>
              )}
              {project.github && project.github !== '#' && (
                <BrutalButton
                  color={project.live ? 'bg-white' : 'bg-ink'}
                  shadow={project.live ? 'shadow-[4px_4px_0px_#111111]' : 'shadow-[4px_4px_0px_#6b7280]'}
                  className={project.live ? '' : 'text-white'}
                  href={project.github}
                >
                  <span className="flex items-center gap-2">
                    <Github size={16} />
                    {project.live ? 'Code' : 'View Code'}
                  </span>
                </BrutalButton>
              )}
            </div>
          </div>
        </div>
      </BrutalCard>
    </motion.div>
  );
};

/* ─── Main Component ────────────────────────────────────────────────── */
export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-32">
      <SectionHeading subtitle="Things I've built & shipped 🚀">Projects</SectionHeading>

      <div className="space-y-16">
        {projects.map((project, idx) => (
          <ProjectCard key={project.title} project={project} index={idx} total={projects.length} />
        ))}
      </div>
    </section>
  );
}
