'use client';
import { motion, Variants } from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react';

// Add necessary types for mouse/cursor coordinates
interface Point {
  x: number;
  y: number;
}

interface MotionPressureTextProps {
  text: string;
  className?: string;
  fontFamily?: string;
  fontUrl?: string;
  width?: boolean;
  weight?: boolean;
  italic?: boolean;
  alpha?: boolean;
  flex?: boolean;
  stroke?: boolean;
  scale?: boolean;
  textColor?: string;
  strokeColor?: string;
  strokeWidth?: number;
  minFontSize?: number;
  // Motion props
  staggerDelay?: number;
  animationDuration?: number;
  initialY?: number;
  initialOpacity?: number;
}

const MotionPressureText: React.FC<MotionPressureTextProps> = ({
  text,
  className = '',
  fontFamily = 'Compressa VF',
  fontUrl = 'https://res.cloudinary.com/dr6lvwubh/raw/upload/v1529908256/CompressaPRO-GX.woff2',
  width = true,
  weight = true,
  italic = true,
  alpha = false,
  flex = true,
  stroke = false,
  scale = false,
  textColor = '#FFFFFF',
  strokeColor = '#FF0000',
  strokeWidth = 2,
  minFontSize = 24, // Base minimum font size for small screens
  staggerDelay = 0.1,
  animationDuration = 0.6,
  initialY = 40,
  initialOpacity = 0,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const spansRef = useRef<(HTMLSpanElement | null)[]>([]);

  // Type the mouse and cursor refs
  const mouseRef = useRef<Point>({ x: 0, y: 0 });
  const cursorRef = useRef<Point>({ x: 0, y: 0 });

  const [fontSize, setFontSize] = useState(minFontSize);
  const [scaleY, setScaleY] = useState(1);
  const [lineHeight, setLineHeight] = useState(1);
  const [animationComplete, setAnimationComplete] = useState(false);

  const chars = text.split('');

  // Type the dist function parameters
  const dist = (a: Point, b: Point): number => {
    const dx = b.x - a.x;
    const dy = b.y - a.y;
    return Math.sqrt(dx * dx + dy * dy);
  };

  // Initialize mouse tracking
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent): void => {
      cursorRef.current.x = e.clientX;
      cursorRef.current.y = e.clientY;
    };

    const handleTouchMove = (e: TouchEvent): void => {
      const t = e.touches[0];
      cursorRef.current.x = t.clientX;
      cursorRef.current.y = t.clientY;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove, { passive: false });

    if (containerRef.current) {
      const { left, top, width, height } = containerRef.current.getBoundingClientRect();
      mouseRef.current.x = left + width / 2;
      mouseRef.current.y = top + height / 2;
      cursorRef.current.x = mouseRef.current.x;
      cursorRef.current.y = mouseRef.current.y;
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
    };
  }, []);

  // Handle sizing
  const setSize = (): void => {
    if (!containerRef.current || !titleRef.current) return;

    const { width: containerW, height: containerH } = containerRef.current.getBoundingClientRect();

    // Responsive font size calculation
    let newFontSize: number;
    if (window.innerWidth < 640) {
      // Small devices (e.g., mobile phones)
      newFontSize = containerW / (chars.length / 1.2); // Adjust divisor for smaller text
    } else if (window.innerWidth < 1024) {
      // Medium devices (e.g., tablets)
      newFontSize = containerW / (chars.length / 1.5); // Slightly larger text
    } else {
      // Large devices (desktops, your original design target)
      newFontSize = containerW / (chars.length / 2); // Original calculation
    }

    // Ensure newFontSize doesn't go below the specified minFontSize
    newFontSize = Math.max(newFontSize, minFontSize);

    setFontSize(newFontSize);
    setScaleY(1);
    setLineHeight(1);

    requestAnimationFrame(() => {
      if (!titleRef.current) return;
      const textRect = titleRef.current.getBoundingClientRect();

      if (scale && textRect.height > 0) {
        const yRatio = containerH / textRect.height;
        setScaleY(yRatio);
        setLineHeight(yRatio);
      }
    });
  };

  useEffect(() => {
    setSize();
    window.addEventListener('resize', setSize);
    return () => window.removeEventListener('resize', setSize);
  }, [scale, text, minFontSize]); // Added minFontSize to dependency array

  // Handle pressure effects after animation is complete
  useEffect(() => {
    if (!animationComplete) return;

    let rafId: number;
    const animate = () => {
      mouseRef.current.x += (cursorRef.current.x - mouseRef.current.x) / 15;
      mouseRef.current.y += (cursorRef.current.y - mouseRef.current.y) / 15;

      if (titleRef.current) {
        const textRect = titleRef.current.getBoundingClientRect();
        // Adjust maxDist based on current fontSize to keep effects consistent
        const maxDist = Math.max(textRect.width / 2, (fontSize * chars.length) / 4);

        spansRef.current.forEach((span) => {
          if (!span) return;

          const rect = span.getBoundingClientRect();
          const charCenter = {
            x: rect.x + rect.width / 2,
            y: rect.y + rect.height / 2,
          };

          const d = dist(mouseRef.current, charCenter);

          const getAttr = (distance: number, minVal: number, maxVal: number) => {
            const val = maxVal - Math.abs((maxVal * distance) / maxDist);
            return Math.max(minVal, val + minVal);
          };

          const wdth = width ? Math.floor(getAttr(d, 5, 200)) : 100;
          const wght = weight ? Math.floor(getAttr(d, 100, 900)) : 400;
          const italVal = italic ? getAttr(d, 0, 1).toFixed(2) : '0';
          const alphaVal = alpha ? getAttr(d, 0, 1).toFixed(2) : '1';

          span.style.opacity = alphaVal;
          span.style.fontVariationSettings = `'wght' ${wght}, 'wdth' ${wdth}, 'ital' ${italVal}`;
        });
      }

      rafId = requestAnimationFrame(animate);
    };

    animate();
    return () => cancelAnimationFrame(rafId);
  }, [animationComplete, width, weight, italic, alpha, chars.length, fontSize]); // Added fontSize to dependency array

  // Animation variants for characters - properly typed
  const charVariants: Variants = {
    hidden: {
      opacity: initialOpacity,
      y: initialY,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: animationDuration,
        ease: 'easeOut', // Use predefined easing string
      },
    },
  };

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: 0.2,
      },
    },
  };

  // Type the animation complete handler
  const handleAnimationComplete = (): void => {
    setAnimationComplete(true);
  };

  return (
    <div ref={containerRef} className="relative w-full h-full overflow-hidden bg-transparent">
      <style>{`
        @font-face {
          font-family: '${fontFamily}';
          src: url('${fontUrl}');
          font-style: normal;
        }
        .stroke span {
          position: relative;
          color: ${textColor};
        }
        .stroke span::after {
          content: attr(data-char);
          position: absolute;
          left: 0;
          top: 0;
          color: transparent;
          z-index: -1;
          -webkit-text-stroke-width: ${strokeWidth}px;
          -webkit-text-stroke-color: ${strokeColor};
        }
      `}</style>

      <motion.h1
        ref={titleRef}
        className={`text-pressure-title ${className} ${flex ? 'flex justify-between' : ''} ${
          stroke ? 'stroke' : ''
        } uppercase text-center`}
        style={{
          fontFamily,
          fontSize: fontSize,
          lineHeight,
          transform: `scale(1, ${scaleY})`,
          transformOrigin: 'center top',
          margin: 0,
          fontWeight: 100,
          color: stroke ? undefined : textColor,
        }}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        onAnimationComplete={handleAnimationComplete}
      >
        {chars.map((char, i) => (
          <motion.span
            key={i}
            ref={(el) => {
              spansRef.current[i] = el;
            }}
            data-char={char}
            className="inline-block"
            variants={charVariants}
          >
            {char}
          </motion.span>
        ))}
      </motion.h1>
    </div>
  );
};

export default MotionPressureText;
