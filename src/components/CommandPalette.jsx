import { useEffect, useMemo, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Search, Hash, Download, Copy, Github, Linkedin, Mail, ExternalLink, CornerDownLeft, Command } from 'lucide-react';
import { projects } from '../data/projects';

export const EMAIL = 'rajak82001@gmail.com';
export const RESUME = '/Raja_Khan_Resume_24_11_2026.pdf';
export const OPEN_PALETTE_EVENT = 'open-command-palette';

export const isMac = typeof navigator !== 'undefined' && /Mac|iPhone|iPad/.test(navigator.platform);
export const shortcutLabel = isMac ? '⌘K' : 'Ctrl K';

export const openPalette = () => window.dispatchEvent(new Event(OPEN_PALETTE_EVENT));

export const goTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
export const openUrl = (url) => window.open(url, '_blank', 'noopener,noreferrer');
export const downloadResume = () => {
  const a = document.createElement('a');
  a.href = RESUME;
  a.download = 'Raja_Khan_Resume.pdf';
  a.click();
};

const sections = [
  ['home', 'Home'],
  ['about', 'About'],
  ['projects', 'Projects'],
  ['experience', 'Experience'],
  ['skills', 'Skills'],
  ['education', 'Education'],
  ['programs', 'Certifications'],
  ['github', 'GitHub activity'],
  ['contact', 'Contact'],
];

function buildCommands(notify) {
  return [
    ...sections.map(([id, label]) => ({ group: 'Jump to', label, icon: Hash, run: () => goTo(id) })),
    ...projects.map((p) => ({
      group: 'Projects',
      label: p.title,
      hint: p.live ? 'Live demo' : 'Source code',
      icon: ExternalLink,
      run: () => openUrl(p.live || p.github),
    })),
    { group: 'Actions', label: 'Download resume', icon: Download, run: downloadResume },
    {
      group: 'Actions',
      label: 'Copy email address',
      icon: Copy,
      run: () => navigator.clipboard?.writeText(EMAIL).then(() => notify('Email copied to clipboard ✔')),
    },
    { group: 'Actions', label: 'Send an email', icon: Mail, run: () => (window.location.href = `mailto:${EMAIL}`) },
    { group: 'Actions', label: 'Open GitHub profile', icon: Github, run: () => openUrl('https://github.com/rajak82001') },
    { group: 'Actions', label: 'Open LinkedIn', icon: Linkedin, run: () => openUrl('https://www.linkedin.com/in/raja-khan-b69986241/') },
  ];
}

export default function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [active, setActive] = useState(0);
  const [toast, setToast] = useState('');
  const [showTip, setShowTip] = useState(false);
  const inputRef = useRef(null);
  const listRef = useRef(null);

  const notify = (msg) => {
    setToast(msg);
    setTimeout(() => setToast(''), 1800);
  };

  const commands = useMemo(() => buildCommands(notify), []);
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return commands;
    return commands.filter((c) => `${c.label} ${c.group} ${c.hint || ''}`.toLowerCase().includes(q));
  }, [commands, query]);

  // Global shortcut + custom open event
  useEffect(() => {
    const onKey = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setOpen((o) => !o);
      }
    };
    const onOpen = () => setOpen(true);
    window.addEventListener('keydown', onKey);
    window.addEventListener(OPEN_PALETTE_EVENT, onOpen);
    return () => {
      window.removeEventListener('keydown', onKey);
      window.removeEventListener(OPEN_PALETTE_EVENT, onOpen);
    };
  }, []);

  // One-time discoverability tip for mouse/keyboard users
  useEffect(() => {
    if (!window.matchMedia?.('(pointer: fine)').matches) return;
    let seen = false;
    try {
      seen = sessionStorage.getItem('palette-tip') === '1';
    } catch {}
    if (seen) return;
    const show = setTimeout(() => setShowTip(true), 3500);
    const hide = setTimeout(() => setShowTip(false), 11000);
    try {
      sessionStorage.setItem('palette-tip', '1');
    } catch {}
    return () => {
      clearTimeout(show);
      clearTimeout(hide);
    };
  }, []);

  useEffect(() => {
    if (open) {
      setQuery('');
      setActive(0);
      setShowTip(false);
      setTimeout(() => inputRef.current?.focus(), 10);
    }
  }, [open]);

  useEffect(() => setActive(0), [query]);

  useEffect(() => {
    listRef.current?.querySelector(`[data-index="${active}"]`)?.scrollIntoView({ block: 'nearest' });
  }, [active]);

  const runCommand = (cmd) => {
    if (!cmd) return;
    cmd.run();
    setOpen(false);
  };

  const onInputKey = (e) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setActive((a) => Math.min(a + 1, filtered.length - 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setActive((a) => Math.max(a - 1, 0));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      runCommand(filtered[active]);
    } else if (e.key === 'Escape') {
      setOpen(false);
    }
  };

  let lastGroup = null;

  return (
    <>
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[80] flex items-start justify-center px-4 pt-[12vh] bg-ink/60 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
          >
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-label="Command palette"
              initial={{ y: -20, scale: 0.96, opacity: 0 }}
              animate={{ y: 0, scale: 1, opacity: 1 }}
              exit={{ y: -10, scale: 0.97, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 380, damping: 28 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-xl bg-white border-3 border-ink rounded-xl brutal-shadow overflow-hidden"
            >
              <div className="flex items-center gap-3 border-b-3 border-ink bg-yellow px-4 py-3">
                <Search size={20} strokeWidth={2.5} />
                <input
                  ref={inputRef}
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  onKeyDown={onInputKey}
                  placeholder="Search sections, projects, actions…"
                  className="flex-1 bg-transparent font-bold placeholder:text-ink/50 outline-none focus-visible:outline-none"
                  aria-label="Search commands"
                />
                <kbd className="hidden sm:inline-block text-xs font-bold bg-white border-2 border-ink rounded px-1.5 py-0.5">Esc</kbd>
              </div>

              <ul ref={listRef} className="max-h-[50vh] overflow-y-auto p-2" role="listbox">
                {filtered.length === 0 && (
                  <li className="px-3 py-8 text-center font-bold text-ink/50">No results for “{query}”</li>
                )}
                {filtered.map((cmd, i) => {
                  const header = cmd.group !== lastGroup ? cmd.group : null;
                  lastGroup = cmd.group;
                  const Icon = cmd.icon;
                  const isActive = i === active;
                  return (
                    <li key={cmd.group + cmd.label}>
                      {header && (
                        <p className="px-3 pt-3 pb-1 text-[11px] font-black uppercase tracking-widest text-ink/50">{header}</p>
                      )}
                      <button
                        type="button"
                        data-index={i}
                        role="option"
                        aria-selected={isActive}
                        onMouseMove={() => setActive(i)}
                        onClick={() => runCommand(cmd)}
                        className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg border-2 text-left font-bold transition-colors ${
                          isActive ? 'bg-blue/25 border-ink' : 'border-transparent'
                        }`}
                      >
                        <span className={`grid place-items-center w-8 h-8 rounded-md border-2 border-ink ${isActive ? 'bg-yellow' : 'bg-paper'}`}>
                          <Icon size={16} strokeWidth={2.5} />
                        </span>
                        <span className="flex-1 truncate">{cmd.label}</span>
                        {cmd.hint && <span className="text-xs font-bold text-ink/50">{cmd.hint}</span>}
                        {isActive && <CornerDownLeft size={16} className="text-ink/60" />}
                      </button>
                    </li>
                  );
                })}
              </ul>

              <div className="flex items-center justify-between gap-4 border-t-2 border-ink bg-paper px-4 py-2 text-xs font-bold text-ink/60">
                <span>↑↓ to navigate · ↵ to select</span>
                <span className="inline-flex items-center gap-1">
                  {isMac && <Command size={12} />} {shortcutLabel} to toggle
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Discoverability tip */}
      <AnimatePresence>
        {showTip && !open && (
          <motion.button
            type="button"
            onClick={() => setOpen(true)}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 30 }}
            className="fixed bottom-5 left-1/2 -translate-x-1/2 z-[60] inline-flex items-center gap-2 bg-ink text-white border-2 border-ink rounded-full px-4 py-2 text-sm font-bold shadow-[4px_4px_0_#FFD84D]"
          >
            💡 Pro tip: press
            <kbd className="bg-yellow text-ink border-2 border-white rounded px-1.5 py-0.5 text-xs">{shortcutLabel}</kbd>
            to explore quickly
          </motion.button>
        )}
      </AnimatePresence>

      {/* Toast */}
      <AnimatePresence>
        {toast && (
          <motion.div
            role="status"
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-5 left-1/2 -translate-x-1/2 z-[90] bg-green border-2 border-ink rounded-full px-4 py-2 font-bold brutal-shadow-sm"
          >
            {toast}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
