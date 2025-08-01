"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useTranslation } from "react-i18next";

const slideData = {
  id: 3,
  image: "/assets/final_images/StartingScreen.jpg",
  titleKey: "hero.slide2.title",
  descriptionKey: "hero.slide2.description",
};

export default function HeroSection() {
  const { t } = useTranslation();

  const handleNextSectionClick = () => {
    const nextSection = document.querySelector("#italian-daytime-bar");
    if (nextSection) {
      // Get the navbar height (adjust this value based on your actual navbar height)
      const navbarHeight = 0; // Change this to match your navbar height in pixels

      // Calculate the target position
      const elementPosition = nextSection.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - navbarHeight;

      // Smooth scroll to the calculated position
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative w-full mx-auto h-dvh lg:w-full overflow-hidden bg-primary">
      {/* Main Container */}
      <div className="relative w-full h-full">
        <div className="relative w-full h-full">
          <Image
            width={1920}
            height={1080}
            src={slideData.image}
            alt={t(slideData.titleKey)}
            className="w-full h-full object-cover"
            priority
            quality={100}
          />

          {/* Simple dark overlay for text readability */}
          <div className="absolute inset-0 bg-black/30" />

          {/* Content Overlay - Centered */}
          {/* <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              variants={contentVariants}
              initial="enter"
              animate="center"
              transition={{
                duration: 0.4,
                ease: 'easeInOut',
              }}
              className="text-center text-white max-w-xs sm:max-w-sm md:max-w-md lg:max-w-3xl px-4"
            >
              <h2 className="text-2xl sm:text-3xl lg:text-7xl uppercase font-bold mb-2 sm:mb-3">
                {t(slideData.titleKey)}
              </h2>
            </motion.div>
          </div> */}
        </div>

        {/* Explore Button */}
        <div className="absolute bottom-14 sm:bottom-16 lg:bottom-4 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center">
          <button
            onClick={handleNextSectionClick}
            className="text-sm sm:text-base lg:text-lg font-semibold text-white rounded-full transition-all duration-200 hover:text-gray-200 cursor-pointer shadow-2xl"
          >
            {t("hero.explore")}
          </button>
          <motion.svg
            fill="#fff"
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            width="16px"
            height="16px"
            className="sm:w-5 sm:h-5 lg:w-6 lg:h-6"
            viewBox="0 0 100 100"
            enableBackground="new 0 0 100 100"
            xmlSpace="preserve"
            animate={{ y: [0, -4, 0] }}
            transition={{
              duration: 1.5,
              ease: "easeInOut",
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "loop",
            }}
          >
            <g>
              <path d="M78.466,35.559L50.15,63.633L22.078,35.317c-0.777-0.785-2.044-0.789-2.828-0.012s-0.789,2.044-0.012,2.827L48.432,67.58 c0.365,0.368,0.835,0.563,1.312,0.589c0.139,0.008,0.278-0.001,0.415-0.021c0.054,0.008,0.106,0.021,0.16,0.022 c0.544,0.029,1.099-0.162,1.515-0.576l29.447-29.196c0.785-0.777,0.79-2.043,0.012-2.828S79.249,34.781,78.466,35.559z"></path>
            </g>
          </motion.svg>
        </div>
      </div>
    </div>
  );
}
