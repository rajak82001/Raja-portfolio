import { motion } from "motion/react";
import StickyNote from "./ui/StickyNote";
import BrutalBadge from "./ui/BrutalBadge";
import SectionHeading from "./ui/SectionHeading";
import {
  Layout,
  Code2,
  Server,
  Database,
  Wrench,
  Lightbulb,
} from "lucide-react";

export default function Skills() {
  const skillCategories = [
    {
      title: "FRONTEND",
      icon: <Layout className="text-blue" />,
      color: "bg-white",
      tapeColor: "bg-blue/50",
      rotation: -2,
      skills: [
        "HTML5",
        "CSS3",
        "Tailwind CSS",
        "React.js",
        "Responsive Design",
      ],
    },
    {
      title: "LANGUAGES",
      icon: <Code2 className="text-yellow" />,
      color: "bg-white",
      tapeColor: "bg-yellow/50",
      rotation: 1,
      skills: ["JavaScript", "Python", "Java"],
    },
    {
      title: "BACKEND",
      icon: <Server className="text-pink" />,
      color: "bg-white",
      tapeColor: "bg-pink/50",
      rotation: -1,
      skills: [
        "Node.js",
        "Express.js",
        "REST APIs",
        "JWT Authentication",
        "Cloudinary",
        "Razorpay",
      ],
    },
    {
      title: "DATABASE",
      icon: <Database className="text-green" />,
      color: "bg-white",
      tapeColor: "bg-green/50",
      rotation: 2,
      skills: ["MongoDB", "SQL"],
    },
    {
      title: "TOOLS",
      icon: <Wrench className="text-purple-400" />,
      color: "bg-white",
      tapeColor: "bg-purple-400/50",
      rotation: -2,
      skills: [
        "Git",
        "GitHub",
        "VS Code",
        "Chrome DevTools",
        "Postman",
        "Vercel",
        "Render",
      ],
    },
    {
      title: "CURRENTLY LEARNING",
      icon: <Lightbulb className="text-orange-400" />,
      color: "bg-white",
      tapeColor: "bg-orange-400/50",
      rotation: 1,
      skills: ["Next.js", "System Design", "TypeScript"],
    },
  ];

  return (
    <section id="skills" className="scroll-mt-32">
      <SectionHeading rotate="rotate-[1deg]" subtitle="My toolbox 🧰">Skills</SectionHeading>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillCategories.map((category, idx) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
          >
            <StickyNote
              color={category.color}
              tapeColor={category.tapeColor}
              rotation={category.rotation}
              className="h-full"
            >
              <div className="flex items-center gap-3 border-b-2 border-ink pb-3 mb-4">
                <motion.span
                  className="inline-flex"
                  whileHover={{ rotate: [0, -15, 15, -8, 0], scale: 1.2 }}
                  transition={{ duration: 0.5 }}
                >
                  {category.icon}
                </motion.span>
                <h3 className="font-black text-xl tracking-wide">
                  {category.title}
                </h3>
              </div>
              <motion.div
                className="flex flex-wrap gap-2"
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={{
                  show: { transition: { staggerChildren: 0.06, delayChildren: 0.25 + idx * 0.1 } },
                }}
              >
                {category.skills.map((skill) => (
                  <motion.span
                    key={skill}
                    className="inline-block"
                    variants={{
                      hidden: { opacity: 0, scale: 0.4, y: 12 },
                      show: { opacity: 1, scale: 1, y: 0, transition: { type: "spring", stiffness: 420, damping: 14 } },
                    }}
                  >
                    <BrutalBadge color="bg-paper" className="text-sm">
                      {skill}
                    </BrutalBadge>
                  </motion.span>
                ))}
              </motion.div>
            </StickyNote>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
