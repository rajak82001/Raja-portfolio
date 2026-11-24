import { motion } from 'motion/react';

export default function SectionHeading({
  children,
  subtitle,
  color = 'bg-yellow',
  rotate = 'rotate-[-1deg]',
  className = '',
}) {
  return (
    <div className={`mb-12 ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 24, scale: 0.85 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ type: 'spring', stiffness: 260, damping: 16 }}
        whileHover={{ rotate: 0, scale: 1.03 }}
        className="inline-block"
      >
        <div className={`inline-block ${color} border-3 border-ink brutal-shadow px-6 py-2 ${rotate}`}>
          <h2 className="text-3xl font-black uppercase tracking-wider">{children}</h2>
        </div>
      </motion.div>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, x: -16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ delay: 0.25, duration: 0.4 }}
          className="mt-4 font-handwriting text-2xl md:text-3xl text-ink/70"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
