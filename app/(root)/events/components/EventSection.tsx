"use client";

import { AnimatedText } from "@/components/animation/text/AnimatedText";
import {
  motion,
  useInView,
  useScroll,
  useTransform,
  type Variants,
} from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";

const EventSection = () => {
  // Refs for intersection observers
  const imageRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const { t } = useTranslation();

  // State for mobile detection
  const [isMobile, setIsMobile] = useState(false);

  // Intersection observers for animations
  const headerInView = useInView(headerRef, { once: true, margin: "-100px" });

  // Parallax scroll effect - fixed by adding containerRef to the section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Animation variants
  const fadeInUp: Variants = {
    hidden: {
      opacity: 0,
      y: 60,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
      },
    },
  };

  const staggerContainer: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <section ref={containerRef}>
      {/* Divider */}
      <div className="widget-container widget-container--bleed line-divider-widget line-divider-widget--pattern">
        <hr className="line-divider" />
      </div>

      <motion.div
        ref={headerRef}
        className="py-12 sm:py-16 pb-0 sm:pb-0 md:pb-0 lg:pb-0 md:py-20 lg:py-28 px-4 sm:px-6 lg:px-6"
        variants={staggerContainer}
        initial="hidden"
        animate={headerInView ? "visible" : "hidden"}
      >
        <motion.h2 variants={fadeInUp}>
          <AnimatedText
            className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-7xl uppercase  w-full md:w-4/5 lg:w-3/5 mx-auto text-center leading-snug sm:leading-tight lg:leading-16"
            text={["La Vita è Bella"]}
          ></AnimatedText>
        </motion.h2>
        <motion.p
          className="text-center font-narrow py-4 lg:py-6 w-full md:w-4/5 lg:w-3/5 mx-auto text-sm md:text-xl"
          variants={fadeInUp}
        >
          {t("events.heroDescription")}
        </motion.p>
      </motion.div>

      {/* Image Section with Parallax - fixed parallax effect */}
      <div
        ref={imageRef}
        className="relative mt-8  lg:mt-16 xl:mt-16
                   h-[400px] lg:h-[500px] xl:h-[600px]
                   overflow-hidden"
      >
        {/* Parallax Image Container */}
        <motion.div
          style={{ y: isMobile ? 0 : y }} // Fixed: Disable parallax on mobile
          className="relative w-full h-[120%] -top-[10%]"
        >
          <Image
            src="/assets/photos/24.jpg"
            fill
            style={{ objectFit: "cover" }}
            alt="A lively restaurant scene"
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 100vw, 100vw"
            priority
            quality={85}
          />

          {/* Optional overlay for better text readability if needed */}
          <div className="absolute inset-0 bg-black/10" />
        </motion.div>
      </div>

      {/* Optional: Add some spacing after the image */}
      <div className="h-6" />
    </section>
  );
};

export default EventSection;
