import { motion } from "motion/react";
import BrutalCard from "./ui/BrutalCard";
import SectionHeading from "./ui/SectionHeading";

export default function Programs() {
  const programs = [
        {
      title: "Data Structures & Algorithms using Java",
      company: "Complete Coding",
      desc: "Completed a comprehensive Data Structures & Algorithms course in Java covering arrays, linked lists, trees, graphs, recursion, sorting algorithms and dynamic programming. Solved 180+ problems applying these concepts on LeetCode and other coding platforms",
      certificate: "/assets/java_DSA.jpg",
    },
    {
      title: "React & Redux",
      company: "KG Coding",
      desc: "Completed an industry-oriented React & Redux course covering Hooks, Context API, Redux Toolkit, React Router, component architecture and state management by building real-world frontend applications.",
      certificate: "/assets/react_certificate.png",
    },
    {
      title: "HTML Fundamentals",
      company: "KG Coding",
      desc: "Learned modern HTML5 concepts including semantic elements, forms, tables, multimedia, accessibility and SEO best practices. Built responsive webpage layouts following industry standards.",
      certificate: "/assets/html_certificate.png",
    },

    {
      title: "Java Programming",
      company: "KG Coding",
      desc: "Completed a comprehensive Java programming course covering object-oriented programming (OOP), classes, objects, inheritance, polymorphism, exception handling, collections, file handling, and core Java concepts through hands-on coding exercises.",
      certificate: "/assets/java_certificate.png",
    },
  ];

  return (
    <section id="programs" className="scroll-mt-32">
      <SectionHeading rotate="rotate-[-1deg]">
        Professional Certifications
      </SectionHeading>

      <div className="space-y-6">
        {programs.map((prog, idx) => (
          <motion.div
            key={prog.title}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
          >
            <BrutalCard
              rotation={idx % 2 === 0 ? 1 : -1}
              className="relative overflow-hidden bg-white"
            >
              <div className="absolute right-0 top-0 w-32 h-32 bg-yellow/20 rounded-full -mr-16 -mt-16" />
              <h3 className="text-2xl font-black">{prog.title}</h3>
              <p className="text-xl font-bold text-blue mb-4">{prog.company}</p>
              <p className="text-lg font-medium max-w-3xl relative z-10">
                {prog.desc}
              </p>
              {prog.certificate && (
                <a
                  href={prog.certificate}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-ink hover:text-blue transition-colors relative z-10 inline-block mt-4"
                >
                  View Credential ↗
                </a>
              )}
            </BrutalCard>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
