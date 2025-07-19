'use client';

import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface AnimatedTextProps {
  text: string | string[];
  className?: string;
}

export function AnimatedText({ text, className }: AnimatedTextProps) {
  const animation = {
    initial: { y: '100%' },
    enter: (i: number) => ({
      y: '0',
      transition: {
        duration: 0.75,
        ease: [0.33, 1, 0.68, 1] as const,
        delay: 0.075 * i,
      },
    }),
  };

  const { ref, inView } = useInView({
    threshold: 0.75,
    triggerOnce: true,
  });

  const phrases = Array.isArray(text) ? text : [text];

  return (
    <div ref={ref} className={cn('text-base', className)}>
      {phrases.map((phrase, index) => (
        <div key={index} className="overflow-hidden">
          <motion.p
            className="m-0"
            custom={index}
            variants={animation}
            initial="initial"
            animate={inView ? 'enter' : ''}
          >
            {phrase}
          </motion.p>
        </div>
      ))}
    </div>
  );
}
