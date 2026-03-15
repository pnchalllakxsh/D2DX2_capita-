import React, { type ReactNode } from 'react';
import { motion, useReducedMotion } from 'motion/react';

interface SectionTransitionProps {
  children: ReactNode;
  delay?: number;
}

export function SectionTransition({ children, delay = 0 }: SectionTransitionProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <>{children}</>;
  }

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 72,
        scale: 0.96,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      // fires as soon as even 1px of the section enters the viewport
      viewport={{ once: true, amount: 0, margin: '0px 0px -80px 0px' }}
      transition={{
        opacity: { duration: 0.5, delay, ease: 'easeOut' },
        y: {
          type: 'spring',
          stiffness: 60,
          damping: 18,
          mass: 0.9,
          delay,
        },
        scale: {
          type: 'spring',
          stiffness: 60,
          damping: 18,
          mass: 0.9,
          delay,
        },
      }}
      style={{ willChange: 'transform, opacity' }}
    >
      {children}
    </motion.div>
  );
}
