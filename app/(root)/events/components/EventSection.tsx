import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import { useCallback, useState } from 'react';

interface Event {
  src: string;
  date: string;
  time: string;
  title: string;
  description: string;
  aspectRatio: string;
}

const EventSection = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleContactClick = () => {
    window.location.href = 'mailto:mail@bigspuntino.de?subject=Event Inquiry';
  };

  const events: Event[] = [
    {
      src: '/assets/events/1.jpg',
      date: '15.03.2024',
      time: '18:00',
      title: 'Aperitivo Serale',
      description:
        'Join us for an authentic Italian aperitivo experience with cicchetti and spritz',
      aspectRatio: 'aspect-4/3',
    },
    {
      src: '/assets/events/2.jpg',
      date: '22.03.2024',
      time: '19:30',
      title: 'Wine Tasting Evening',
      description: 'Discover the finest Italian wines paired with artisanal antipasti',
      aspectRatio: 'aspect-square',
    },
    {
      src: '/assets/events/3.jpg',
      date: '28.03.2024',
      time: '11:00',
      title: 'Brunch Domenicale',
      description: 'Sunday brunch with fresh cornetti, prosciutto, and Italian coffee',
      aspectRatio: 'aspect-5/3',
    },
    {
      src: '/assets/events/4.jpg',
      date: '05.04.2024',
      time: '20:00',
      title: 'Cena Privata',
      description: "Exclusive private dining experience with our chef's special menu",
      aspectRatio: 'aspect-3/2',
    },
  ];

  const openLightbox = useCallback((index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  }, []);

  const closeLightbox = useCallback(() => {
    setLightboxOpen(false);
  }, []);

  const goToNextImage = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      e.stopPropagation();
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % events.length);
    },
    [events.length],
  );

  const goToPrevImage = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      e.stopPropagation();
      setCurrentImageIndex((prevIndex) => (prevIndex - 1 + events.length) % events.length);
    },
    [events.length],
  );

  // Animation variants for the lightbox
  const lightboxVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.3 } },
    exit: { opacity: 0, transition: { duration: 0.2 } },
  };

  const lightboxImageVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { scale: 1, opacity: 1 },
    exit: { scale: 0.8, opacity: 0 },
  };

  return (
    <section className="py-20 lg:py-40 px-4 lg:px-6">
      <div className="">
        <h2 className="text-4xl md:text-5xl lg:text-7xl uppercase font-bold w-full md:w-4/5 lg:w-3/5 mx-auto text-center leading-tight lg:leading-16">
          YOUR NEXT FAVORITE EVENT IS HERE – APERITIVO TO BRUNCH*
        </h2>
        <p className="text-center font-narrow py-4 lg:py-6 w-full md:w-4/5 lg:w-3/5 mx-auto text-sm md:text-base">
          *La vita é bella ... and there is always a reason to celebrate. The Big Spuntino lives
          Italian hospitality and coming together – and not only in the day bar itself, but also in
          its own private or business premises. Get in touch with our team to discuss your
          tailor-made events for the most special moments of pleasure.
        </p>
        {/* Contatto Button */}
        <div className="flex items-center justify-center">
          <button
            onClick={handleContactClick}
            className="group relative inline-flex h-12 md:h-14 lg:h-16 items-center cursor-pointer justify-center overflow-hidden rounded-none font-medium"
          >
            <div className="inline-flex h-12 md:h-14 lg:h-16 translate-y-0 items-center justify-center bg-amber-300 text-xl md:text-2xl lg:text-3xl uppercase px-8 md:px-12 lg:px-16 text-black transition group-hover:-translate-y-[150%] rounded-none">
              Contatto
            </div>
            <div className="absolute inline-flex h-12 md:h-14 lg:h-16 w-full translate-y-[100%] items-center justify-center text-xl md:text-2xl lg:text-3xl uppercase bg-black px-8 md:px-12 lg:px-16 text-neutral-50 transition duration-300 group-hover:translate-y-0 rounded-none">
              Contatto
            </div>
          </button>
        </div>
      </div>

      <div className="pt-16 lg:pt-28">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-1">
          {events.map((event, index) => (
            <div key={index} className="group cursor-pointer" onClick={() => openLightbox(index)}>
              <div className="relative overflow-hidden">
                <Image
                  src={event.src}
                  width={400}
                  height={300}
                  className={`w-full ${event.aspectRatio} object-cover transition-transform duration-300 group-hover:scale-105 group-hover:brightness-90`}
                  alt={event.title}
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className=" text-white uppercase px-3 py-1 text- font-medium rounded">
                    View Details
                  </div>
                </div>
              </div>
              <div className="pt-3 lg:pt-2 ps-3 font-narrow font-semibold opacity-65">
                <code className="text-xs lg:text-sm text-gray-600">
                  {event.date} • {event.time}
                </code>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Relevant text added below the image gallery */}
      <div className="pt-12 lg:pt-16 text-center">
        <p className="text-base lg:text-lg text-gray-700 leading-relaxed mb-6 lg:mb-8 w-full md:w-4/5 lg:w-3/5 mx-auto">
          The Big Spuntino is already working diligently on spettacolo event series – at aperitif
          hour, dinner time, and of course, fantastico brunch. Soon to come – stay tuned.
        </p>
      </div>

      {/* Lightbox Overlay */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 bg-opacity-90 p-4 backdrop-blur-sm"
            variants={lightboxVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={closeLightbox}
          >
            <motion.div
              key={events[currentImageIndex].src}
              className="relative max-w-4xl max-h-full flex flex-col items-center justify-center"
              variants={lightboxImageVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{
                duration: 0.4,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={events[currentImageIndex].src}
                alt={events[currentImageIndex].title}
                width={800}
                height={600}
                className="max-w-full max-h-[70vh] object-contain rounded-none shadow-2xl border-2 border-white/20"
                placeholder="empty"
              />

              {/* Event Details */}
              <div className="mt-6 text-start text-white max-w-md">
                <h3 className="text-2xl font-bold mb-">{events[currentImageIndex].title}</h3>
                <p className="text-sm text-gray-300 mb-3">
                  {events[currentImageIndex].date} • {events[currentImageIndex].time}
                </p>
                <p className="text-sm leading-relaxed font-narrow">
                  {events[currentImageIndex].description}
                </p>
              </div>

              {/* Navigation Buttons */}
              {events.length > 1 && (
                <>
                  <motion.button
                    className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 text-white text-3xl md:text-5xl w-8 h-8 md:w-10 md:h-10 flex items-center justify-center rounded-full bg-gray-800/60 hover:bg-gray-700/80 transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-white/50 z-20 pb-1 md:pb-2"
                    onClick={goToPrevImage}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ delay: 0.2 }}
                  >
                    &#8249;
                  </motion.button>
                  <motion.button
                    className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 text-white text-3xl md:text-5xl w-8 h-8 md:w-10 md:h-10 flex items-center justify-center rounded-full bg-gray-800/60 hover:bg-gray-700/80 transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-white/50 z-20 pb-1 md:pb-2"
                    onClick={goToNextImage}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ delay: 0.2 }}
                  >
                    &#8250;
                  </motion.button>
                </>
              )}

              {/* Close button */}
              <motion.button
                className="absolute top-2 md:top-4 right-2 md:right-4 text-white text-2xl md:text-4xl font-light px-1 md:px-2 py-1 rounded-none bg-red-800/80 hover:bg-red-800 transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-white/50 z-20"
                onClick={closeLightbox}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ delay: 0.2 }}
              >
                &times;
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default EventSection;
