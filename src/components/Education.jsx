import { motion } from 'motion/react';
import StickyNote from './ui/StickyNote';
import SectionHeading from './ui/SectionHeading';

export default function Education() {
  const edu = [
    {
      degree: 'B.Tech – Computer Science Engineering (Artificial Intelligence)',
      school: 'Bhilai Institute of Technology, Durg',
      date: 'Nov 2022 – July 2026',
      score: 'CPI: 8.17/10',
      color: 'bg-blue',
      rotation: -1
    },
    {
      degree: 'Higher Secondary Certificate (HSC)',
      school: 'CBSE Board',
      date: 'Apr 2020 – May 2021',
      score: 'Score: 81.8%',
      color: 'bg-yellow',
      rotation: 1
    },
    {
      degree: 'Secondary School Certificate (SSC)',
      school: 'CBSE Board',
      date: 'Jul 2018 – Mar 2019',
      score: 'Score: 84.8%',
      color: 'bg-pink',
      rotation: -2
    }
  ];

  return (
    <section id="education" className="scroll-mt-32">
      <SectionHeading rotate="rotate-[2deg]">Education</SectionHeading>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {edu.map((item, idx) => (
          <motion.div
            key={item.degree}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
          >
            <StickyNote color={item.color} rotation={item.rotation} tapeColor="bg-white/50" className="h-full flex flex-col">
              <h3 className="font-black text-xl mb-2">{item.degree}</h3>
              <p className="font-bold text-ink/80 mb-4">{item.school}</p>
              <div className="mt-auto pt-4">
                <span className="inline-block bg-white border-2 border-ink px-2 py-1 text-sm font-bold mb-2">
                  {item.date}
                </span>
                {item.score && (
                  <p className="font-bold">{item.score}</p>
                )}
              </div>
            </StickyNote>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
