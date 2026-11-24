import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Award, ChevronLeft, ChevronRight, Maximize2, X, ExternalLink } from "lucide-react";
import BrutalCard from "./ui/BrutalCard";
import SectionHeading from "./ui/SectionHeading";

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

const accents = ["bg-yellow/40", "bg-blue/30", "bg-pink/30", "bg-green/30"];

function Lightbox({ index, onClose, onPrev, onNext }) {
  const prog = programs[index];

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    window.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [onClose, onPrev, onNext]);

  return (
    <motion.div
      className="fixed inset-0 z-[70] flex items-center justify-center p-4 bg-ink/80 backdrop-blur-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`${prog.title} certificate`}
    >
      <motion.div
        key={prog.certificate}
        initial={{ scale: 0.85, rotate: -3, opacity: 0 }}
        animate={{ scale: 1, rotate: 0, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ type: "spring", stiffness: 260, damping: 22 }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-4xl bg-white border-4 border-ink rounded-xl brutal-shadow overflow-hidden"
      >
        <div className="flex items-center justify-between gap-4 border-b-3 border-ink bg-yellow px-4 py-3">
          <div className="min-w-0">
            <p className="text-xs font-black uppercase tracking-widest text-ink/70">{prog.company}</p>
            <h3 className="font-black text-lg leading-tight truncate">{prog.title}</h3>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <a
              href={prog.certificate}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open original image"
              className="grid place-items-center w-9 h-9 bg-white border-2 border-ink rounded-md hover:bg-blue transition-colors"
            >
              <ExternalLink size={16} />
            </a>
            <button
              onClick={onClose}
              aria-label="Close"
              className="grid place-items-center w-9 h-9 bg-white border-2 border-ink rounded-md hover:bg-pink transition-colors"
            >
              <X size={18} strokeWidth={3} />
            </button>
          </div>
        </div>

        <div className="relative bg-paper p-3 sm:p-6">
          <img
            src={prog.certificate}
            alt={`${prog.title} certificate`}
            className="mx-auto max-h-[70vh] w-auto object-contain border-2 border-ink rounded-md"
          />
          <button
            onClick={onPrev}
            aria-label="Previous certificate"
            className="absolute left-2 sm:left-3 top-1/2 -translate-y-1/2 grid place-items-center w-10 h-10 bg-white border-2 border-ink rounded-full brutal-shadow-sm hover:bg-yellow"
          >
            <ChevronLeft size={22} strokeWidth={3} />
          </button>
          <button
            onClick={onNext}
            aria-label="Next certificate"
            className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 grid place-items-center w-10 h-10 bg-white border-2 border-ink rounded-full brutal-shadow-sm hover:bg-yellow"
          >
            <ChevronRight size={22} strokeWidth={3} />
          </button>
        </div>

        <p className="border-t-2 border-ink px-4 py-2 text-center text-xs font-bold text-ink/60">
          {index + 1} / {programs.length} · Use ← → to browse, Esc to close
        </p>
      </motion.div>
    </motion.div>
  );
}

export default function Programs() {
  const [open, setOpen] = useState(null);
  const close = useCallback(() => setOpen(null), []);
  const prev = useCallback(() => setOpen((i) => (i - 1 + programs.length) % programs.length), []);
  const next = useCallback(() => setOpen((i) => (i + 1) % programs.length), []);

  return (
    <section id="programs" className="scroll-mt-32">
      <SectionHeading rotate="rotate-[-1deg]" subtitle="Courses I've completed 📜">
        Professional Certifications
      </SectionHeading>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {programs.map((prog, idx) => (
          <motion.div
            key={prog.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: (idx % 2) * 0.1 }}
            className="h-full"
          >
            <BrutalCard rotation={idx % 2 === 0 ? 1 : -1} className="relative bg-white h-full flex flex-col">
              <button
                type="button"
                onClick={() => setOpen(idx)}
                aria-label={`View ${prog.title} certificate`}
                className={`group relative block w-full aspect-[3/2] border-2 border-ink rounded-md overflow-hidden mb-5 p-3 cursor-zoom-in ${accents[idx % 4]}`}
              >
                <img
                  src={prog.certificate}
                  alt={`${prog.title} certificate`}
                  loading="lazy"
                  className="w-full h-full object-contain drop-shadow-[3px_3px_0_rgba(17,17,17,0.35)] transition-transform duration-500 group-hover:scale-[1.04]"
                />
                <span className="absolute bottom-2 right-2 inline-flex items-center gap-1 bg-white border-2 border-ink rounded-full px-2.5 py-0.5 text-xs font-bold brutal-shadow-sm opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 group-focus-visible:opacity-100 transition-all">
                  <Maximize2 size={12} /> View full
                </span>
              </button>

              <div className="flex items-center gap-2 mb-1">
                <Award size={18} className="text-blue" strokeWidth={2.5} />
                <span className="text-sm font-bold text-blue uppercase tracking-wide">{prog.company}</span>
              </div>
              <h3 className="text-xl md:text-2xl font-black leading-tight mb-3">{prog.title}</h3>
              <p className="text-base text-ink/80 leading-relaxed">{prog.desc}</p>

              <button
                type="button"
                onClick={() => setOpen(idx)}
                className="mt-auto pt-4 font-bold text-ink hover:text-blue transition-colors inline-block w-fit text-left"
              >
                View Credential ↗
              </button>
            </BrutalCard>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {open !== null && <Lightbox index={open} onClose={close} onPrev={prev} onNext={next} />}
      </AnimatePresence>
    </section>
  );
}
