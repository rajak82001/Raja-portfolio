import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import SectionHeading from './ui/SectionHeading';
import { Mail, Phone, Linkedin, Github, Copy, Check, ArrowUpRight } from 'lucide-react';

const EMAIL = 'rajak82001@gmail.com';

const channels = [
  { href: `mailto:${EMAIL}`, kicker: 'Send an Email', value: EMAIL, icon: Mail, color: 'bg-yellow', rotate: -1.5 },
  { href: 'tel:+916260139459', kicker: 'Call Me', value: '+91 6260139459', icon: Phone, color: 'bg-pink', rotate: 1 },
  { href: 'https://www.linkedin.com/in/raja-khan-b69986241/', kicker: 'Connect on', value: 'LinkedIn', icon: Linkedin, color: 'bg-blue', rotate: 1.5 },
  { href: 'https://github.com/rajak82001', kicker: 'Follow on', value: 'GitHub', icon: Github, color: 'bg-green', rotate: -1 },
];

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${EMAIL}`;
    }
  };

  return (
    <section id="contact" className="scroll-mt-32">
      <SectionHeading rotate="rotate-[-2deg]" subtitle="Say hello 👋">Contact</SectionHeading>

      <div className="max-w-4xl mx-auto text-center">
        <motion.h3
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-black mb-6 leading-tight"
        >
          Let's build something{' '}
          <span className="relative inline-block text-blue">
            amazing
            <svg className="absolute left-0 -bottom-2 w-full h-3" viewBox="0 0 100 12" preserveAspectRatio="none" aria-hidden="true">
              <motion.path
                d="M0 6 Q 12.5 0 25 6 T 50 6 T 75 6 T 100 6"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, delay: 0.4 }}
              />
            </svg>
          </span>{' '}
          together!
        </motion.h3>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-xl font-medium mb-6 text-ink/80"
        >
          I'm always open to opportunities, collaborations or tech conversations.
        </motion.p>

        <motion.button
          type="button"
          onClick={copyEmail}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center gap-2 mb-12 bg-white border-2 border-ink rounded-full px-4 py-2 font-bold brutal-shadow-sm"
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={copied ? 'done' : 'copy'}
              initial={{ scale: 0, rotate: -90 }}
              animate={{ scale: 1, rotate: 0 }}
              exit={{ scale: 0, rotate: 90 }}
              transition={{ duration: 0.15 }}
              className="inline-flex"
            >
              {copied ? <Check size={18} className="text-[#16a34a]" strokeWidth={3} /> : <Copy size={18} />}
            </motion.span>
          </AnimatePresence>
          <span aria-live="polite">{copied ? 'Email copied!' : 'Copy email address'}</span>
        </motion.button>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-40px' }}
          variants={{ show: { transition: { staggerChildren: 0.12 } } }}
        >
          {channels.map(({ href, kicker, value, icon: Icon, color, rotate }) => {
            const external = href.startsWith('http');
            return (
              <motion.a
                key={kicker + value}
                href={href}
                target={external ? '_blank' : undefined}
                rel={external ? 'noopener noreferrer' : undefined}
                variants={{
                  hidden: { opacity: 0, y: 40, rotate: 0 },
                  show: { opacity: 1, y: 0, rotate, transition: { type: 'spring', stiffness: 200, damping: 16 } },
                }}
                whileHover={{ rotate: 0, y: -6, transition: { type: 'spring', stiffness: 300, damping: 15 } }}
                className={`group flex items-center gap-3 sm:gap-4 p-5 lg:p-6 border-3 border-ink brutal-shadow ${color} hover:bg-white transition-colors rounded-xl font-bold text-lg`}
              >
                <span className="grid place-items-center shrink-0 w-12 h-12 lg:w-14 lg:h-14 rounded-full bg-white border-2 border-ink group-hover:rotate-12 group-hover:scale-110 transition-transform">
                  <Icon size={26} />
                </span>
                <span className="flex flex-col min-w-0">
                  <span className="text-sm text-ink/70 font-black uppercase">{kicker}</span>
                  <span className="text-base lg:text-xl [overflow-wrap:anywhere]">{value}</span>
                </span>
                <ArrowUpRight
                  size={22}
                  className="hidden lg:block ml-auto shrink-0 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all"
                />
              </motion.a>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
