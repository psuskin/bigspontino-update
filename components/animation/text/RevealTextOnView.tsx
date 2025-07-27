'use client';

import { cn } from '@/lib/utils';
import { motion, useInView } from 'framer-motion';
import React, { useRef } from 'react';

// Define types for RevealTextOnView props
interface RevealTextOnViewProps {
  children: string;
  className?: string;
  staggerDelay?: number;
  animationDuration?: number;
  triggerOnce?: boolean;
}

const RevealTextOnView: React.FC<RevealTextOnViewProps> = ({
  children,
  className = '',
  staggerDelay = 0.025,
  animationDuration = 0.6,
  triggerOnce = true,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: triggerOnce,
    margin: '-100px',
  });

  return (
    <motion.div
      ref={ref}
      className={cn('relative block overflow-hidden', className)}
      style={{
        lineHeight: 0.95,
      }}
    >
      <div>
        {children.split('').map((letter, i) => (
          <motion.span
            initial={{
              y: '100%',
            }}
            animate={
              isInView
                ? {
                    y: 0,
                  }
                : {
                    y: '100%',
                  }
            }
            transition={{
              duration: animationDuration,
              ease: 'easeOut',
              delay: staggerDelay * i,
            }}
            className="inline-block"
            key={i}
          >
            {letter === ' ' ? '\u00A0' : letter}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
};

export default RevealTextOnView;
