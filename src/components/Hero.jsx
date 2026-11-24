import { useEffect, useState } from "react";
import { AnimatePresence, motion, useScroll, useTransform } from "motion/react";
import BrutalButton from "./ui/BrutalButton";
import CountUp from "./ui/CountUp";
import Tilt from "./ui/Tilt";
import { Code, Terminal, Save, ArrowRight, Download } from "lucide-react";
import { projects } from "../data/projects";

const stats = [
  { to: projects.length, suffix: "+", label: "Projects Built", color: "bg-yellow" },
  { to: 180, suffix: "+", label: "DSA Problems", color: "bg-blue" },
  { to: 280, suffix: "+", label: "GitHub Contributions", color: "bg-pink" },
  { to: 8.17, decimals: 2, label: "B.Tech CPI", color: "bg-green" },
];

const roles = [
  { text: "React Web Apps", color: "bg-blue" },
  { text: "AI-Integrated Products", color: "bg-yellow" },
  { text: "MERN Marketplaces", color: "bg-pink" },
  { text: "Automation Pipelines", color: "bg-green" },
];

function RotatingRole() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setI((n) => (n + 1) % roles.length), 2400);
    return () => clearInterval(id);
  }, []);
  const role = roles[i];

  return (
    <span className="relative block h-12 md:h-14 mt-2" aria-hidden="true">
      <AnimatePresence mode="wait">
        <motion.span
          key={role.text}
          initial={{ y: 24, opacity: 0, rotate: -6 }}
          animate={{ y: 0, opacity: 1, rotate: -1.5 }}
          exit={{ y: -24, opacity: 0, rotate: 4 }}
          transition={{ type: "spring", stiffness: 300, damping: 22 }}
          className={`absolute left-0 top-0 inline-block ${role.color} text-ink border-2 border-ink brutal-shadow-sm px-3 py-0.5 rounded-md whitespace-nowrap`}
        >
          {role.text}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

export default function Hero() {
  const { scrollY } = useScroll();
  const avatarY = useTransform(scrollY, [0, 600], [0, 90]);
  const doodleRotate = useTransform(scrollY, [0, 600], [0, 180]);

  return (
    <section
      id="home"
      className="relative flex flex-col md:flex-row items-center justify-between gap-14 md:gap-12 pt-0 md:pt-4 pb-4"
    >
      {/* Background doodles */}
      <motion.svg
        aria-hidden="true"
        style={{ rotate: doodleRotate }}
        className="pointer-events-none absolute top-16 left-[44%] hidden lg:block w-10 h-10 text-yellow drop-shadow-[2px_2px_0_#111]"
        viewBox="0 0 24 24"
      >
        <path fill="currentColor" stroke="#111" strokeWidth="1.2" d="M12 1.5l2.6 7.2 7.4.6-5.7 4.8 1.8 7.4L12 17.6l-6.1 3.9 1.8-7.4L2 9.3l7.4-.6z" />
      </motion.svg>
      <motion.svg
        aria-hidden="true"
        animate={{ x: [0, 10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute bottom-0 left-[40%] hidden lg:block w-28 h-8 text-pink"
        viewBox="0 0 120 30"
      >
        <path d="M2 15 Q 17 0 32 15 T 62 15 T 92 15 T 118 15" fill="none" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
      </motion.svg>

      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="flex-1 space-y-6 w-full"
      >
        <div className="flex flex-wrap items-center gap-4">
          <div className="inline-flex items-center">
            <motion.span
              animate={{ rotate: [0, 14, -8, 14, -4, 10, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 1 }}
              className="inline-block text-4xl origin-[70%_70%]"
            >
              👋
            </motion.span>
            <span className="text-2xl font-bold ml-2 font-handwriting text-blue">
              Hi there!
            </span>
          </div>

          <span className="inline-flex items-center gap-2 bg-white border-2 border-ink rounded-full px-3 py-1 text-sm font-bold brutal-shadow-sm">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full rounded-full bg-green opacity-75 animate-ping" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green border border-ink" />
            </span>
            Open to opportunities
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl font-black leading-tight">
          I'm{" "}
          <span className="relative inline-block">
            Raja Khan
            <motion.svg
              className="absolute w-full h-4 -bottom-1 left-0 text-yellow"
              viewBox="0 0 100 10"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <motion.path
                d="M0 5 Q 50 10 100 5"
                stroke="currentColor"
                strokeWidth="4"
                fill="transparent"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
              />
            </motion.svg>
          </span>
        </h1>

        <h2 className="text-2xl md:text-3xl font-bold text-ink/80">
          Full-Stack Developer building
          <span className="sr-only"> React & AI-integrated web apps</span>
          <RotatingRole />
        </h2>

        <div className="flex flex-col max-w-xl pt-2 pb-2 space-y-[-8px]">
          <motion.div
            animate={{ y: [-1, 1, -1] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="bg-white border-2 border-ink shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] p-2 px-4 md:p-3 md:px-5 rotate-[-2deg] self-start relative z-10"
          >
            <p className="text-lg md:text-xl font-bold leading-tight">
              I'm a developer who enjoys building products
            </p>
          </motion.div>

          <motion.div
            animate={{ y: [1, -1, 1] }}
            transition={{
              duration: 4.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5,
            }}
            className="bg-white border-2 border-ink shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] p-2 px-4 md:p-2 md:px-5 rotate-[1deg] self-center relative z-20"
          >
            <p className="text-base md:text-lg font-medium leading-tight">
              that{" "}
              <mark className="bg-yellow text-ink font-bold px-1">
                solve real problems
              </mark>
              ...
            </p>
          </motion.div>

          <motion.div
            animate={{ y: [-1, 1, -1] }}
            transition={{
              duration: 3.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
            className="bg-white border-2 border-ink shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] p-2 px-4 md:p-2 md:px-5 rotate-[-1deg] self-end relative z-30"
          >
            <p className="text-base md:text-lg font-medium leading-tight">
              creating things that{" "}
              <mark className="bg-yellow text-ink font-bold px-1">
                actually matter
              </mark>
              .
            </p>
          </motion.div>
        </div>

        <div className="flex flex-wrap gap-3 pt-4">
          <BrutalButton color="bg-yellow" href="#projects">
            <span className="inline-flex items-center gap-2">
              View Projects <ArrowRight size={18} strokeWidth={2.5} />
            </span>
          </BrutalButton>
          <BrutalButton color="bg-blue" href="#contact">
            Get in Touch
          </BrutalButton>
          <BrutalButton
            color="bg-white"
            href="/Raja_Khan_Resume_24_11_2026.pdf"
            download="Raja_Khan_Resume.pdf"
          >
            <span className="inline-flex items-center gap-2">
              <Download size={18} strokeWidth={2.5} /> Resume
            </span>
          </BrutalButton>
        </div>

        {/* Quick stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 max-w-xl">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + i * 0.1 }}
              whileHover={{ y: -3, rotate: i % 2 === 0 ? -2 : 2 }}
              className="bg-white border-2 border-ink rounded-lg brutal-shadow-sm px-3 py-2"
            >
              <p className="font-sans text-2xl font-black leading-none">
                <span className={`${s.color} px-1 -mx-1`}>
                  <CountUp to={s.to} decimals={s.decimals} suffix={s.suffix} />
                </span>
              </p>
              <p className="text-xs font-bold text-ink/70 mt-1.5 leading-tight">
                {s.label}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex-1 relative w-full"
      >
        {/* Avatar Container */}
        <div className="relative w-full max-w-[300px] sm:max-w-[360px] lg:max-w-[420px] mx-auto">
          {/* Tape */}
          <div className="absolute -top-3 right-12 w-24 h-8 bg-yellow/80 border border-ink/20 rotate-6 z-30" />

          <motion.div style={{ y: avatarY }} className="relative z-10">
          <Tilt max={10}>
          <motion.div
            animate={{ y: [-8, 8, -8] }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative"
          >
            {/* Glow */}
            <div className="absolute inset-0 rounded-[32px] bg-blue/20 blur-3xl scale-110" />

            {/* Card */}
            <div className="relative overflow-hidden rounded-[28px] border-[4px] border-ink bg-[#EAF5FF] brutal-shadow">
              {/* Decorative circle */}
              <div className="absolute -top-24 -right-24 h-56 w-56 rounded-full bg-blue/20" />

              <img
                src="/avatar.png"
                alt="Raja Khan"
                fetchPriority="high"
                className="relative z-10 block w-full aspect-[21/26] object-cover transition-transform duration-500 hover:scale-[1.04]"
              />

              {/* Bottom Gradient */}
              <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-black/10 to-transparent" />
            </div>
          </motion.div>
          </Tilt>
          </motion.div>

          {/* Floating Icons */}
          <motion.div
            animate={{ y: [-5, 5, -5], rotate: [-10, -5, -10] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute top-8 -left-4 sm:-left-6 bg-blue p-2.5 sm:p-3 border-3 border-ink brutal-shadow rounded-xl z-20"
          >
            <Code size={26} strokeWidth={3} />
          </motion.div>
          <motion.div
            animate={{ y: [5, -5, 5], rotate: [12, 17, 12] }}
            transition={{ duration: 3.5, repeat: Infinity }}
            className="absolute top-32 -right-4 sm:-right-6 bg-yellow p-2.5 sm:p-3 border-3 border-ink brutal-shadow rounded-xl z-20"
          >
            <Terminal size={26} strokeWidth={3} />
          </motion.div>
          <motion.div
            animate={{ y: [-8, 8, -8], rotate: [-8, -3, -8] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute bottom-20 -left-4 sm:-left-6 bg-green p-2.5 sm:p-3 border-3 border-ink brutal-shadow rounded-xl z-20"
          >
            <Save size={26} strokeWidth={3} />
          </motion.div>

          {/* Badge */}
          <div className="absolute -bottom-4 right-4 bg-green border-3 border-ink brutal-shadow px-4 py-2 font-black text-sm rotate-[-3deg] z-20">
            Full-Stack Ninja
          </div>
        </div>
      </motion.div>
    </section>
  );
}
