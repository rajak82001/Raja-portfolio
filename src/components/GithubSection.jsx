import { useState } from 'react';
import { motion } from 'motion/react';
import BrutalCard from './ui/BrutalCard';
import BrutalButton from './ui/BrutalButton';
import SectionHeading from './ui/SectionHeading';
import CountUp from './ui/CountUp';
import { Github, GitCommit, FolderGit2, Code2 } from 'lucide-react';

export default function GithubSection() {
  const [graphFailed, setGraphFailed] = useState(false);

  return (
    <section id="github" className="scroll-mt-32">
      <SectionHeading rotate="rotate-[1deg]" subtitle="Building in public 💻">GitHub</SectionHeading>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <BrutalCard rotation={0} className="bg-white">
          <div className="flex flex-col md:flex-row gap-8 items-center justify-between mb-8">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-ink text-white rounded-full flex items-center justify-center border-2 border-ink brutal-shadow-sm">
                <Github size={32} />
              </div>
              <div>
                <h3 className="text-2xl font-black">@rajak82001</h3>
                <p className="font-bold text-ink/70">Full Stack Developer</p>
              </div>
            </div>
            <BrutalButton color="bg-yellow" href="https://github.com/rajak82001">
              View GitHub Profile
            </BrutalButton>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="border-2 border-ink p-4 rounded-lg bg-blue/10 flex items-center gap-4">
              <GitCommit className="text-blue" />
              <div>
                <p className="font-black text-2xl"><CountUp to={280} suffix="+" /></p>
                <p className="font-bold text-sm">Contributions</p>
              </div>
            </div>
            <div className="border-2 border-ink p-4 rounded-lg bg-pink/10 flex items-center gap-4">
              <FolderGit2 className="text-pink" />
              <div>
                <p className="font-black text-2xl"><CountUp to={25} suffix="+" /></p>
                <p className="font-bold text-sm">Repositories</p>
              </div>
            </div>
            <div className="border-2 border-ink p-4 rounded-lg bg-green/10 flex items-center gap-4">
              <Code2 className="text-green" />
              <div>
                <p className="font-black text-2xl">JavaScript</p>
                <p className="font-bold text-sm">Top Language</p>
              </div>
            </div>
          </div>

          {/* Real contribution graph (falls back to a link if the image service is down) */}
          <div className="border-2 border-ink p-4 rounded-lg bg-white">
            <div className="flex items-center justify-between gap-4 mb-3">
              <p className="font-bold">Contribution Graph</p>
              <span className="inline-flex items-center gap-1.5 text-xs font-bold text-ink/60">
                <span className="w-2 h-2 rounded-full bg-green border border-ink" /> Live from GitHub
              </span>
            </div>
            {graphFailed ? (
              <a
                href="https://github.com/rajak82001"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center font-bold py-8 hover:text-blue"
              >
                See my contributions on GitHub ↗
              </a>
            ) : (
              <div className="overflow-x-auto">
                <img
                  src="https://ghchart.rshah.org/16a34a/rajak82001"
                  alt="Raja Khan's GitHub contribution graph for the past year"
                  loading="lazy"
                  onError={() => setGraphFailed(true)}
                  className="w-full min-w-[640px]"
                />
              </div>
            )}
          </div>
        </BrutalCard>
      </motion.div>
    </section>
  );
}
