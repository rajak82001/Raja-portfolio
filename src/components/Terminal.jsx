import { useEffect, useRef, useState } from 'react';
import { projects } from '../data/projects';
import { EMAIL, goTo, openUrl, downloadResume } from './CommandPalette';

const PROMPT = 'guest@raja:~$';

const HELP = [
  ['whoami', 'who is Raja?'],
  ['skills', 'tech I work with'],
  ['projects', 'things I have built'],
  ['open <n>', 'open project number n'],
  ['experience', 'where I have worked'],
  ['education', 'degree & scores'],
  ['contact', 'how to reach me'],
  ['resume', 'download my resume'],
  ['clear', 'clear the screen'],
];

function run(raw) {
  const input = raw.trim();
  const [cmd, ...args] = input.split(/\s+/);
  switch ((cmd || '').toLowerCase()) {
    case '':
      return [];
    case 'help':
      return [
        'Available commands:',
        ...HELP.map(([c, d]) => `  ${c.padEnd(12)} ${d}`),
        "  …and maybe a hidden one. Try 'sudo hire-raja' 😉",
      ];
    case 'whoami':
      return [
        'Raja Khan — Full-Stack Developer 👋',
        'I build React & Node.js products that solve real problems,',
        'and lately I am exploring how AI can genuinely improve workflows.',
      ];
    case 'skills':
      return [
        'frontend   → HTML5, CSS3, Tailwind CSS, React.js',
        'languages  → JavaScript, Python, Java',
        'backend    → Node.js, Express.js, REST APIs, JWT, Cloudinary, Razorpay',
        'database   → MongoDB, SQL',
        'tools      → Git, GitHub, VS Code, Postman, Vercel, Render',
        'learning   → Next.js, System Design, TypeScript',
      ];
    case 'projects':
    case 'ls':
      return [
        ...projects.map((p, i) => `  [${i + 1}] ${p.title.padEnd(24)} ${p.oneLiner}`),
        "Type 'open 1' to open a project.",
      ];
    case 'open': {
      const n = parseInt(args[0], 10);
      const p = projects[n - 1];
      if (!p) return [`open: no project #${args[0] ?? ''}. Try 'projects'.`];
      openUrl(p.live || p.github);
      return [`Opening ${p.title}… 🚀`];
    }
    case 'experience':
      return [
        'Frontend Developer Intern @ Phoneo (Aug 2026 – Present)  ← current',
        '  Next.js · React · TypeScript · Tailwind CSS · REST APIs · SEO / AEO / GEO',
        'Frontend Developer Intern @ Amdox Technologies (Aug 2023 – Oct 2023)',
        '  React · Redux Toolkit · Tailwind CSS · 4 REST APIs · Agile team of 5',
      ];
    case 'education':
      return [
        'B.Tech CSE (AI) — Bhilai Institute of Technology, Durg (2022–2026) · CPI 8.17',
        'HSC (CBSE) — 81.8%   |   SSC (CBSE) — 84.8%',
      ];
    case 'contact':
      return [`email    → ${EMAIL}`, 'linkedin → linkedin.com/in/raja-khan-b69986241', 'github   → github.com/rajak82001'];
    case 'resume':
      downloadResume();
      return ['Downloading resume… 📄'];
    case 'date':
      return [new Date().toString()];
    case 'echo':
      return [args.join(' ')];
    case 'sudo':
      if (args.join(' ').toLowerCase() === 'hire-raja') {
        setTimeout(() => goTo('contact'), 900);
        return ['[sudo] password for recruiter: ********', 'Permission granted ✔ Great choice! Taking you to the contact section…'];
      }
      return ['Nice try 😄 — only recruiters may use sudo here.'];
    default:
      return [`command not found: ${cmd}. Type 'help' to see what I can do.`];
  }
}

const quick = ['help', 'whoami', 'projects', 'skills', 'contact'];

export default function Terminal({ autoFocus = false }) {
  const [lines, setLines] = useState([
    { kind: 'out', text: "Welcome to raja-portfolio v2.0 ✨  Type 'help' or tap a command below." },
  ]);
  const [value, setValue] = useState('');
  const [history, setHistory] = useState([]);
  const [hIndex, setHIndex] = useState(-1);
  const inputRef = useRef(null);
  const scrollRef = useRef(null);

  useEffect(() => {
    if (autoFocus) inputRef.current?.focus({ preventScroll: true });
  }, [autoFocus]);

  useEffect(() => {
    const el = scrollRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [lines]);

  const execute = (text) => {
    if (text.trim().toLowerCase() === 'clear') {
      setLines([]);
    } else {
      const out = run(text).map((t) => ({ kind: 'out', text: t }));
      setLines((l) => [...l, { kind: 'cmd', text }, ...out]);
    }
    if (text.trim()) setHistory((h) => [text, ...h].slice(0, 30));
    setHIndex(-1);
    setValue('');
  };

  const onKeyDown = (e) => {
    if (e.key === 'Enter') {
      execute(value);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      const i = Math.min(hIndex + 1, history.length - 1);
      if (history[i] !== undefined) {
        setHIndex(i);
        setValue(history[i]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      const i = hIndex - 1;
      setHIndex(Math.max(i, -1));
      setValue(i >= 0 ? history[i] : '');
    }
  };

  return (
    <div className="bg-[#111111] text-[#d1fae5] font-mono text-sm md:text-[15px]" onClick={() => inputRef.current?.focus({ preventScroll: true })}>
      <div ref={scrollRef} className="h-[300px] md:h-[320px] overflow-y-auto p-4 md:p-6 space-y-1 [scrollbar-width:thin]">
        {lines.map((l, i) =>
          l.kind === 'cmd' ? (
            <p key={i} className="whitespace-pre-wrap break-words">
              <span className="text-[#4ade80]">{PROMPT}</span> <span className="text-white">{l.text}</span>
            </p>
          ) : (
            <p key={i} className="whitespace-pre-wrap break-words text-[#d1fae5]/85">
              {l.text}
            </p>
          )
        )}
        <div className="flex items-center gap-2">
          <label htmlFor="terminal-input" className="text-[#4ade80] shrink-0">
            {PROMPT}
          </label>
          <input
            id="terminal-input"
            ref={inputRef}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onKeyDown={onKeyDown}
            autoComplete="off"
            autoCapitalize="off"
            spellCheck={false}
            className="flex-1 min-w-0 bg-transparent text-white caret-[#FFD84D] outline-none focus-visible:outline-none"
            aria-label="Terminal command"
          />
        </div>
      </div>
      <div className="flex flex-wrap gap-2 border-t border-white/15 px-4 md:px-6 py-3">
        {quick.map((q) => (
          <button
            key={q}
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              execute(q);
            }}
            className="rounded-full border border-[#4ade80]/60 px-3 py-0.5 text-xs text-[#4ade80] hover:bg-[#4ade80] hover:text-ink transition-colors"
          >
            {q}
          </button>
        ))}
      </div>
    </div>
  );
}
