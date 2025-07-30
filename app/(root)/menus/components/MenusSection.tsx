"use client";
import { AnimatedText } from "@/components/animation/text/AnimatedText";
import {
  motion,
  useInView,
  useScroll,
  useTransform,
  type Variants,
} from "framer-motion";
import type React from "react";
import { useRef } from "react";
import { useTranslation } from "react-i18next";

interface Category {
  id: number;
  nameKey: string;
  image: string; // Changed from images array to single image
  link: string;
  pdfPath: string;
}

interface CardLayoutProps {
  category: Category;
  index: number;
}

const MenusSection: React.FC = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  const { t } = useTranslation();
  const headerInView = useInView(headerRef, { once: true, margin: "-100px" });

  const menuCategories: Category[] = [
    {
      id: 1,
      nameKey: "menus.categories.brunch.name",
      image: "/assets/menus/brunch/italianBrunch.jpg", // Single image
      link: "/menu/brunch",
      pdfPath: "/assets/menus/pdf/brunch.pdf",
    },
    {
      id: 2,
      nameKey: "menus.categories.lunch.name",
      image: "/assets/menus/lunch/pranzo.jpg", // Single image
      link: "/menu/lunch",
      pdfPath: "/assets/menus/pdf/lunch.pdf",
    },
    {
      id: 3,
      nameKey: "menus.categories.dinner.name",
      image: "/assets/menus/dinner/cena.jpg", // Single image
      link: "/menu/dinner",
      pdfPath: "/assets/menus/pdf/dinner.pdf",
    },
  ];

  const handleMenuClick = (pdfPath: string) => {
    window.open(pdfPath, "_blank");
  };

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

  const imageRevealVariants: Variants = {
    hidden: {
      clipPath: "inset(100% 0% 0% 0%)",
      y: 100,
    },
    visible: {
      clipPath: "inset(0% 0% 0% 0%)",
      y: 0,
      transition: {
        clipPath: {
          duration: 1.2,
          ease: [0.76, 0, 0.24, 1] as const,
        },
        y: {
          duration: 1.2,
          ease: [0.76, 0, 0.24, 1] as const,
        },
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

  const cardVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 80,
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

  // Image component with parallax effect
  const ParallaxImage: React.FC<{
    src: string;
    className?: string;
    cardInView: boolean;
  }> = ({ src, className = "", cardInView }) => {
    const imageRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
      target: imageRef,
      offset: ["start end", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

    return (
      <div
        ref={imageRef}
        className={`aspect-square overflow-hidden relative ${className}`}
      >
        <motion.div
          className="w-full h-[120%] bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-110"
          style={{
            backgroundImage: `url(${src})`,
            y,
          }}
          variants={imageRevealVariants}
          initial="hidden"
          animate={cardInView ? "visible" : "hidden"}
        />
      </div>
    );
  };

  // Unified card layout with image on left, text on right
  const CardLayout: React.FC<CardLayoutProps> = ({ category, index }) => {
    const cardRef = useRef<HTMLDivElement>(null);
    const cardInView = useInView(cardRef, { once: true, margin: "-50px" });

    // Alternate layout: even indices have image on left, odd on right
    const isImageLeft = index % 2 === 0;

    return (
      <motion.div
        ref={cardRef}
        className="w-full bg-red-50/15 grid grid-cols-1 md:grid-cols-2 gap-1 overflow-hidden group"
        variants={cardVariants}
        initial="hidden"
        animate={cardInView ? "visible" : "hidden"}
      >
        {/* Image Section */}
        <div
          className={`${
            isImageLeft ? "order-1 md:order-1" : "order-1 md:order-2"
          }`}
        >
          <ParallaxImage src={category.image} cardInView={cardInView} />
        </div>

        {/* Text Section */}
        <motion.div
          className={`bg-red-50/15 z-10 w-full flex flex-col justify-center items-center text-secondary p-8 md:p-12 lg:p-16 aspect-square ${
            isImageLeft ? "order-2 md:order-2" : "order-2 md:order-1"
          }`}
          variants={staggerContainer}
          initial="hidden"
          animate={cardInView ? "visible" : "hidden"}
        >
          <motion.h3
            className="text-sm uppercase md:text-base lg:text-lg font-light tracking-widest mb-2 opacity-90"
            variants={fadeInUp}
          >
            Big Spuntino
          </motion.h3>
          <motion.h2
            className=" text-3xl md:text-5xl lg:text-7xl font-normal mb-4 md:mb-6 tracking-wide text-center"
            variants={fadeInUp}
          >
            {t(category.nameKey)}
          </motion.h2>
          <motion.button
            onClick={() => handleMenuClick(category.pdfPath)}
            className="group relative inline-flex cursor-pointer h-12 items-center justify-center overflow-hidden rounded-full border border-secondary font-narrow px-8 md:px-10 py-2 mt-4"
            variants={fadeInUp}
          >
            <div className="inline-flex h-12 translate-y-0 items-center justify-center bg-transparent text-sm md:text-base font-medium tracking-widest uppercase text-secondary transition group-hover:-translate-y-[150%]">
              {t("menus.viewMenu")}
            </div>
            <div className="absolute inline-flex h-12 w-full translate-y-[100%] items-center justify-center bg-secondary text-sm md:text-base font-medium tracking-widest uppercase text-white transition duration-300 group-hover:translate-y-0">
              {t("menus.viewMenu")}
            </div>
          </motion.button>
        </motion.div>
      </motion.div>
    );
  };

  return (
    <section>
      <div className="widget-container widget-container--bleed line-divider-widget line-divider-widget--pattern">
        <hr className="line-divider" />
      </div>

      <motion.div
        ref={headerRef}
        className="py-12 md:py-20 px-4 md:px-6 text-secondary"
        variants={staggerContainer}
        initial="hidden"
        animate={headerInView ? "visible" : "hidden"}
      >
        <motion.h2 variants={fadeInUp}>
          <AnimatedText
            className="text-3xl md:text-6xl lg:text-7xl uppercase  w-full md:w-4/5 lg:w-3/5 mx-auto text-center leading-tight"
            text={["A Tavola"]}
          ></AnimatedText>
        </motion.h2>
        <motion.p
          className="text-center font-narrow pt-4 md:pt-6 w-full md:w-4/5 lg:w-3/5 mx-auto  text-sm md:text-xl md:leading-relaxed leading-normal lg:px-4"
          variants={fadeInUp}
        >
          {t("menus.sectionDescription")}
        </motion.p>
      </motion.div>

      <div className="pt-8 md:pt-12 lg:pt-16 mx-auto ">
        {menuCategories.map((category, index) => (
          <CardLayout key={category.id} category={category} index={index} />
        ))}
      </div>
    </section>
  );
};

export default MenusSection;
