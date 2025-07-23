'use client';

import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import React from 'react';

// Define types for RevealText props
interface RevealTextProps {
  children: string;
}

const DURATION = 0.25;
const STAGGER = 0.025;

// Define the RevealText component with props type annotations
const RevealText: React.FC<RevealTextProps> = ({ children }) => {
  return (
    <motion.a
      initial="initial"
      whileHover="hovered"
      className={cn('relative block overflow-hidden whitespace-nowrap')}
      style={{
        lineHeight: 0.75,
      }}
    >
      <div>
        {children.split('').map((l, i) => (
          <motion.span
            variants={{
              initial: {
                y: 0,
              },
              hovered: {
                y: '-100%',
              },
            }}
            transition={{
              duration: DURATION,
              ease: 'easeInOut',
              delay: STAGGER * i,
            }}
            className="inline-block"
            key={i}
          >
            {l}
          </motion.span>
        ))}
      </div>
      <div className="absolute inset-0">
        {children.split('').map((l, i) => (
          <motion.span
            variants={{
              initial: {
                y: '100%',
              },
              hovered: {
                y: 0,
              },
            }}
            transition={{
              duration: DURATION,
              ease: 'easeInOut',
              delay: STAGGER * i,
            }}
            className="inline-block"
            key={i}
          >
            {l}
          </motion.span>
        ))}
      </div>
    </motion.a>
  );
};

export default RevealText;
