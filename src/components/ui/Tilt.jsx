import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';

/** Tilts its children in 3D toward the mouse pointer (mouse only, not touch). */
export default function Tilt({ children, className = '', max = 8, ...rest }) {
  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);
  const sx = useSpring(x, { stiffness: 180, damping: 18 });
  const sy = useSpring(y, { stiffness: 180, damping: 18 });
  const rotateY = useTransform(sx, [0, 1], [-max, max]);
  const rotateX = useTransform(sy, [0, 1], [max, -max]);

  const onPointerMove = (e) => {
    if (e.pointerType !== 'mouse') return;
    const r = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - r.left) / r.width);
    y.set((e.clientY - r.top) / r.height);
  };
  const onPointerLeave = () => {
    x.set(0.5);
    y.set(0.5);
  };

  return (
    <motion.div
      onPointerMove={onPointerMove}
      onPointerLeave={onPointerLeave}
      style={{ rotateX, rotateY, transformPerspective: 900 }}
      className={className}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
