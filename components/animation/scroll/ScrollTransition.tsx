// 'use client';

// import { motion, useScroll, useTransform, type MotionValue } from 'framer-motion';
// import React, { useRef } from 'react';

// interface ScrollTransitionProps {
//   children: React.ReactNode[];
//   section1ClassName?: string;
//   section2ClassName?: string;
//   containerClassName?: string;
//   scaleRange?: [number, number];
//   yOffset?: number;
// }

// export const ScrollTransition = ({
//   children,
//   section1ClassName = '',
//   section2ClassName = '',
//   containerClassName = '',
//   scaleRange = [1, 0.8],
//   yOffset = 50,
// }: ScrollTransitionProps) => {
//   if (children.length !== 2) {
//     throw new Error('ScrollTransition requires exactly two children');
//   }

//   const container = useRef<HTMLDivElement>(null);
//   const { scrollYProgress } = useScroll({
//     target: container,
//     offset: ['start start', 'end end'],
//   });

//   return (
//     <div ref={container} className={`relative ${containerClassName}`}>
//       <Section1
//         scrollYProgress={scrollYProgress}
//         className={section1ClassName}
//         scaleRange={scaleRange}
//         yOffset={yOffset}
//       >
//         {children[0]}
//       </Section1>
//       <Section2 scrollYProgress={scrollYProgress} className={section2ClassName}>
//         {children[1]}
//       </Section2>
//     </div>
//   );
// };

// interface SectionProps {
//   scrollYProgress: MotionValue<number>;
//   children: React.ReactNode;
//   className?: string;
//   scaleRange?: [number, number];
//   yOffset?: number;
// }

// const Section1 = ({
//   scrollYProgress,
//   children,
//   className = '',
//   scaleRange = [1, 0.8],
//   yOffset = 50,
// }: SectionProps) => {
//   const scale = useTransform(scrollYProgress, [0, 1], scaleRange);
//   const y = useTransform(scrollYProgress, [0, 1], [0, -yOffset]);

//   return (
//     <motion.div style={{ scale, y }} className={`sticky top-0 h-screen origin-top ${className}`}>
//       {children}
//     </motion.div>
//   );
// };

// const Section2 = ({ scrollYProgress, children, className = '' }: SectionProps) => {
//   const y = useTransform(scrollYProgress, [0, 1], ['100vh', '0']);

//   return (
//     <motion.div style={{ y }} className={`relative h-screen ${className}`}>
//       {children}
//     </motion.div>
//   );
// };

'use client';

import { motion, useScroll, useTransform, type MotionValue } from 'framer-motion';
import React, { useRef } from 'react';

interface ScrollTransitionProps {
  children: React.ReactNode[];
  section1ClassName?: string;
  section2ClassName?: string;
  containerClassName?: string;
  yOffset?: number;
}

export const ScrollTransition = ({
  children,
  section1ClassName = '',
  section2ClassName = '',
  containerClassName = '',
  yOffset = 0, // Changed default to 0 since we're not moving section1 up
}: ScrollTransitionProps) => {
  if (children.length !== 2) {
    throw new Error('ScrollTransition requires exactly two children');
  }

  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  });

  return (
    <div ref={container} className={`relative ${containerClassName}`}>
      <Section1 scrollYProgress={scrollYProgress} className={section1ClassName} yOffset={yOffset}>
        {children[0]}
      </Section1>
      <Section2 scrollYProgress={scrollYProgress} className={section2ClassName}>
        {children[1]}
      </Section2>
    </div>
  );
};

interface SectionProps {
  scrollYProgress: MotionValue<number>;
  children: React.ReactNode;
  className?: string;
  yOffset?: number;
}

const Section1 = ({ scrollYProgress, children, className = '', yOffset = 0 }: SectionProps) => {
  const y = useTransform(scrollYProgress, [0, 1], [0, -yOffset]);

  return (
    <motion.div style={{ y }} className={`sticky top-0 h-screen ${className}`}>
      {children}
    </motion.div>
  );
};

const Section2 = ({ scrollYProgress, children, className = '' }: SectionProps) => {
  const y = useTransform(scrollYProgress, [0, 1], ['100vh', '0']);

  return (
    <motion.div style={{ y }} className={`relative h-screen ${className}`}>
      {children}
    </motion.div>
  );
};
