const items = [
  'React.js',
  'Node.js',
  'Express.js',
  'MongoDB',
  'Redux Toolkit',
  'Tailwind CSS',
  'TypeScript',
  'JWT Auth',
  'REST APIs',
  'Razorpay',
  'Cloudinary',
  'Next.js',
];

export default function TechMarquee() {
  // The list is rendered twice so the -50% translate loops seamlessly.
  const loop = [...items, ...items];

  return (
    <div
      aria-label="Technologies I work with"
      className="group relative -rotate-1 border-3 border-ink rounded-xl brutal-shadow bg-ink py-3 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)]"
    >
      <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused]">
        {loop.map((tech, i) => (
          <span
            key={i}
            aria-hidden={i >= items.length}
            className="flex items-center gap-6 pr-6 font-sans text-lg md:text-xl font-black uppercase tracking-wider text-white"
          >
            {tech}
            <span className="text-yellow">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
