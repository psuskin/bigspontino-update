'use client';

import { motion, useInView, useScroll, useTransform, type Variants } from 'framer-motion';
import { ArrowRight, Upload } from 'lucide-react';
import Image from 'next/image';
import { type ChangeEvent, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  phonePrefix: string;
  position: string;
  experience: string;
  availability: string;
  message: string;
  cv: File | null;
  agreeTerms: boolean;
}

const JobsSection = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    phonePrefix: '+49',
    position: '',
    experience: '',
    availability: '',
    message: '',
    cv: null,
    agreeTerms: false,
  });

  // Refs for intersection observers
  const sectionRef = useRef(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);

  // Intersection observers for animations
  const headerInView = useInView(headerRef, { once: true, margin: '-100px' });
  const imageInView = useInView(imageRef, { once: true, margin: '-100px' });
  const formInView = useInView(formRef, { once: true, margin: '-100px' });

  // Parallax effect for image
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], ['-30%', '90%']);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleSelectChange = (id: keyof FormData, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData((prev) => ({
      ...prev,
      cv: file,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };
  const handleNextSectionClick = () => {
    const nextSection = document.querySelector('#apply');
    if (nextSection) {
      // Get the navbar height (adjust this value based on your actual navbar height)
      const navbarHeight = 30; // Change this to match your navbar height in pixels

      // Calculate the target position
      const elementPosition = nextSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

      // Smooth scroll to the calculated position
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  // Animation variants
  // const fadeInUp: Variants = {
  //   hidden: {
  //     opacity: 0,
  //     y: 60,
  //   },
  //   visible: {
  //     opacity: 1,
  //     y: 0,
  //     transition: {
  //       duration: 0.8,
  //       ease: [0.25, 0.46, 0.45, 0.94] as const,
  //     },
  //   },
  // };

  const fadeInLeft: Variants = {
    hidden: {
      opacity: 0,
      x: -60,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
      },
    },
  };

  const fadeInRight: Variants = {
    hidden: {
      opacity: 0,
      x: 60,
    },
    visible: {
      opacity: 1,
      x: 0,
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
        staggerChildren: 0.15,
      },
    },
  };

  const imageRevealVariants: Variants = {
    hidden: {
      clipPath: 'inset(100% 0% 0% 0%)',
      y: 100,
    },
    visible: {
      clipPath: 'inset(0% 0% 0% 0%)',
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

  const formFieldVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
      },
    },
  };

  const buttonVariants: Variants = {
    hidden: {
      opacity: 0,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
      },
    },
  };

  return (
    <section
      ref={sectionRef}
      className="py-12 sm:py-16 md:py-20 lg:py-28 px-4 sm:px-6 md:px-8 lg:px-8"
    >
      <div className="">
        <motion.div
          ref={headerRef}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-24 items-start"
          variants={staggerContainer}
          initial="hidden"
          animate={headerInView ? 'visible' : 'hidden'}
        >
          <motion.div variants={fadeInLeft}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-narrow leading-tight">
              <span className="font-primary italic text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
                {t('jobs.empowering')}
              </span>{' '}
              {/* {t('jobs.theFuture')}
              <br />
              {t('jobs.together')} */}
            </h2>
          </motion.div>
          <motion.div className="self-start" variants={fadeInRight}>
            <p className="text-lg sm:text-xl md:text-2xl font-narrow my-6 sm:my-8">
              {t('jobs.description')}
            </p>
            <button
              onClick={handleNextSectionClick}
              className="group relative inline-flex h-12 sm:h-14 items-center cursor-pointer justify-center overflow-hidden rounded-none font-medium text-base sm:text-lg"
            >
              <div className="inline-flex h-full translate-y-0 items-center justify-center bg-primary uppercase px-6 sm:px-8 md:px-10 text-white transition group-hover:-translate-y-[150%] rounded-none">
                {t('jobs.applyNow')}
              </div>
              <div className="absolute inline-flex h-full w-full translate-y-[100%] items-center justify-center uppercase bg-secondary px-6 sm:px-8 md:px-10 text-neutral-50 transition duration-300 group-hover:translate-y-0 rounded-none">
                {t('jobs.applyNow')}
              </div>
            </button>
          </motion.div>
        </motion.div>
        <motion.div
          ref={imageRef}
          className="mt-12 sm:mt-16 md:mt-20 lg:mt-32 h-[200px] sm:h-[300px] md:h-[400px] lg:h-[600px] overflow-hidden"
          variants={imageRevealVariants}
          initial="visible"
          animate={imageInView ? 'visible' : 'visible'}
        >
          <motion.div style={{ y }} className="relative h-full">
            <Image
              src="/assets/jobs/2.jpeg"
              layout="fill"
              objectFit="cover"
              alt="A lively restaurant scene"
            />
          </motion.div>
        </motion.div>
        {/* Application Form */}
        <motion.div
          id="apply"
          ref={formRef}
          className="mt-12 sm:mt-16 md:mt-20 w-full bg-gray-50 p-4 sm:p-6 md:p-8 lg:p-12 font-narrow rounded-none"
          variants={staggerContainer}
          initial="hidden"
          animate={formInView ? 'visible' : 'hidden'}
        >
          {/* <motion.div variants={fadeInUp} className="mb-8 sm:mb-10 md:mb-12">
            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-narrow mb-3 sm:mb-4">
              <span className="font-primary italic">
                {' '}
                {t('jobs.joinOur')} {t('jobs.famiglia')}
              </span>
            </h3>
            <p className="text-sm sm:text-base md:text-lg text-secondary">
              {t('jobs.formDescription')}
            </p>
          </motion.div> */}
          <form onSubmit={handleSubmit}>
            <motion.div variants={staggerContainer} className="space-y-6 sm:space-y-8">
              {/* Personal Info Grid */}
              <motion.div
                variants={formFieldVariants}
                className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6"
              >
                <div>
                  <label
                    className="block text-xs sm:text-sm font-bold mb-1 sm:mb-2 uppercase tracking-wide"
                    htmlFor="firstName"
                  >
                    {t('jobs.form.firstName')}*
                  </label>
                  <div className="relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-secondary after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] focus-within:after:origin-bottom-left focus-within:after:scale-x-100">
                    <motion.input
                      whileFocus={{ scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                      id="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                      placeholder={t('jobs.form.placeholders.firstName')}
                      className="w-full bg-white text-secondary border-2 border-gray-300 focus:border-transparent py-2 sm:py-3 px-3 sm:px-4 transition-all duration-300 text-sm sm:text-base"
                    />
                  </div>
                </div>
                <div>
                  <label
                    className="block text-xs sm:text-sm font-bold mb-1 sm:mb-2 uppercase tracking-wide"
                    htmlFor="lastName"
                  >
                    {t('jobs.form.lastName')}*
                  </label>
                  <div className="relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-secondary after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] focus-within:after:origin-bottom-left focus-within:after:scale-x-100">
                    <motion.input
                      whileFocus={{ scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                      id="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                      placeholder={t('jobs.form.placeholders.lastName')}
                      className="w-full bg-white text-secondary border-2 border-gray-300 focus:border-transparent py-2 sm:py-3 px-3 sm:px-4 transition-all duration-300 text-sm sm:text-base"
                    />
                  </div>
                </div>
              </motion.div>
              {/* Contact Grid */}
              <motion.div
                variants={formFieldVariants}
                className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6"
              >
                <div>
                  <label
                    className="block text-xs sm:text-sm font-bold mb-1 sm:mb-2 uppercase tracking-wide"
                    htmlFor="phone"
                  >
                    {t('jobs.form.phone')}*
                  </label>
                  <div className="flex gap-2">
                    <select
                      value={formData.phonePrefix}
                      onChange={(e) => handleSelectChange('phonePrefix', e.target.value)}
                      className="w-20 sm:w-24 bg-white border-2 border-gray-300 focus:border-secondary py-2 sm:py-3 px-1 sm:px-2 transition-all duration-300 text-sm sm:text-base"
                    >
                      <option value="+49">🇩🇪</option>
                      <option value="+1">🇺🇸</option>
                      <option value="+44">🇬🇧</option>
                    </select>
                    <div className="flex-1 relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-secondary after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] focus-within:after:origin-bottom-left focus-within:after:scale-x-100">
                      <motion.input
                        whileFocus={{ scale: 1.02 }}
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        placeholder={t('jobs.form.placeholders.phone')}
                        className="w-full bg-white border-2 border-gray-300 focus:border-transparent py-2 sm:py-3 px-3 sm:px-4 transition-all duration-300 text-sm sm:text-base"
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <label
                    className="block text-xs sm:text-sm font-bold mb-1 sm:mb-2 uppercase tracking-wide"
                    htmlFor="email"
                  >
                    {t('jobs.form.email')}*
                  </label>
                  <div className="relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-secondary after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] focus-within:after:origin-bottom-left focus-within:after:scale-x-100">
                    <motion.input
                      whileFocus={{ scale: 1.02 }}
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      placeholder={t('jobs.form.placeholders.email')}
                      className="w-full bg-white text-secondary border-2 border-gray-300 focus:border-transparent py-2 sm:py-3 px-3 sm:px-4 transition-all duration-300 text-sm sm:text-base"
                    />
                  </div>
                </div>
              </motion.div>
              {/* Position Details */}
              <motion.div
                variants={formFieldVariants}
                className="border-l-2 sm:border-l-4 border-secondary pl-4 sm:pl-6"
              >
                <h3 className="text-base sm:text-lg md:text-xl font-secondary uppercase mb-3 sm:mb-4">
                  {t('jobs.form.positionDetails')}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 mb-4 sm:mb-6">
                  <div>
                    <label
                      className="block text-xs sm:text-sm font-bold mb-1 sm:mb-2 uppercase tracking-wide"
                      htmlFor="position"
                    >
                      {t('jobs.form.position')}*
                    </label>
                    <select
                      id="position"
                      value={formData.position}
                      onChange={(e) => handleSelectChange('position', e.target.value)}
                      className="w-full bg-white border-2 border-gray-300 focus:border-secondary py-2 sm:py-3 px-3 sm:px-4 transition-all duration-300 text-sm sm:text-base"
                    >
                      <option value="">{t('jobs.form.choose')}</option>
                      <option value="server">{t('jobs.form.positions.server')}</option>
                      <option value="bartender">{t('jobs.form.positions.bartender')}</option>
                      <option value="kitchen">{t('jobs.form.positions.kitchen')}</option>
                      <option value="host">{t('jobs.form.positions.host')}</option>
                      <option value="other">{t('jobs.form.positions.other')}</option>
                    </select>
                  </div>
                  <div>
                    <label
                      className="block text-xs sm:text-sm font-bold mb-1 sm:mb-2 uppercase tracking-wide"
                      htmlFor="experience"
                    >
                      {t('jobs.form.experience')}
                    </label>
                    <select
                      id="experience"
                      value={formData.experience}
                      onChange={(e) => handleSelectChange('experience', e.target.value)}
                      className="w-full bg-white border-2 border-gray-300 focus:border-secondary py-2 sm:py-3 px-3 sm:px-4 transition-all duration-300 text-sm sm:text-base"
                    >
                      <option value="">{t('jobs.form.choose')}</option>
                      <option value="entry">{t('jobs.form.experiences.entry')}</option>
                      <option value="1-2years">{t('jobs.form.experiences.1-2years')}</option>
                      <option value="3-5years">{t('jobs.form.experiences.3-5years')}</option>
                      <option value="5plus">{t('jobs.form.experiences.5plus')}</option>
                    </select>
                  </div>
                  <div className="sm:col-span-2 lg:col-span-1">
                    <label
                      className="block text-xs sm:text-sm font-bold mb-1 sm:mb-2 uppercase tracking-wide"
                      htmlFor="availability"
                    >
                      {t('jobs.form.availability')}
                    </label>
                    <select
                      id="availability"
                      value={formData.availability}
                      onChange={(e) => handleSelectChange('availability', e.target.value)}
                      className="w-full bg-white border-2 border-gray-300 focus:border-secondary py-2 sm:py-3 px-3 sm:px-4 transition-all duration-300 text-sm sm:text-base"
                    >
                      <option value="">{t('jobs.form.choose')}</option>
                      <option value="fulltime">{t('jobs.form.availabilities.fulltime')}</option>
                      <option value="parttime">{t('jobs.form.availabilities.parttime')}</option>
                      <option value="weekends">{t('jobs.form.availabilities.weekends')}</option>
                      <option value="flexible">{t('jobs.form.availabilities.flexible')}</option>
                    </select>
                  </div>
                </div>
              </motion.div>
              {/* CV Upload */}
              <motion.div variants={formFieldVariants}>
                <label
                  className="block text-xs sm:text-sm font-bold mb-1 sm:mb-2 uppercase tracking-wide"
                  htmlFor="cv"
                >
                  {t('jobs.form.cvResume')}*
                </label>
                <motion.div whileHover={{ scale: 1.02 }} className="relative">
                  <input
                    id="cv"
                    type="file"
                    accept=".pdf,.doc,.docx"
                    onChange={handleFileChange}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  />
                  <div className="bg-white border-2 border-dashed border-gray-400 hover:border-secondary py-4 sm:py-6 px-3 sm:px-4 text-center transition-all duration-300">
                    <Upload className="w-6 sm:w-8 h-6 sm:h-8 mx-auto mb-1 sm:mb-2 text-gray-600" />
                    <p className="text-gray-600 font-medium text-xs sm:text-sm md:text-base">
                      {formData.cv ? formData.cv.name : t('jobs.form.uploadText')}
                    </p>
                    <p className="text-xs text-gray-500 mt-1">{t('jobs.form.fileTypes')}</p>
                  </div>
                </motion.div>
              </motion.div>
              {/* Message */}
              <motion.div variants={formFieldVariants}>
                <label
                  className="block text-xs sm:text-sm font-bold mb-1 sm:mb-2 uppercase tracking-wide"
                  htmlFor="message"
                >
                  {t('jobs.form.whyJoin')}
                </label>
                <div className="relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-secondary after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] focus-within:after:origin-bottom-left focus-within:after:scale-x-100">
                  <motion.textarea
                    whileFocus={{ scale: 1.01 }}
                    id="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder={t('jobs.form.placeholders.message')}
                    rows={4}
                    className="w-full bg-white border-2 border-gray-300 focus:border-transparent py-2 sm:py-3 px-3 sm:px-4 resize-y transition-all duration-300 text-sm sm:text-base"
                  />
                </div>
              </motion.div>
              {/* Terms */}
              <motion.div variants={formFieldVariants} className="flex items-start gap-2 sm:gap-3">
                <input
                  type="checkbox"
                  id="agreeTerms"
                  checked={formData.agreeTerms}
                  onChange={handleInputChange}
                  className="mt-0.5 sm:mt-1 w-4 sm:w-5 h-4 sm:h-5 accent-secondary"
                />
                <label
                  htmlFor="agreeTerms"
                  className="text-xs sm:text-sm text-secondary cursor-pointer"
                >
                  {t('jobs.form.agreeTerms1')}{' '}
                  <a href="#" className="underline font-bold hover:text-secondary">
                    {t('jobs.form.terms')}
                  </a>{' '}
                  {t('jobs.form.agreeTerms2')}{' '}
                  <a href="#" className="underline font-bold hover:text-secondary">
                    {t('jobs.form.privacyPolicy')}
                  </a>
                </label>
              </motion.div>
              {/* Submit */}
              <motion.div variants={buttonVariants} className="pt-4 sm:pt-6">
                <motion.button
                  whileHover={{ scale: 1.05, x: 5 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="bg-secondary text-white py-3 sm:py-4 px-6 sm:px-8 md:px-10 font-secondary uppercase tracking-widest hover:bg-gray-800 transition-colors duration-300 flex items-center gap-2 sm:gap-3 text-sm sm:text-base"
                >
                  {t('jobs.form.submit')}
                  <ArrowRight className="w-4 sm:w-5 h-4 sm:h-5" />
                </motion.button>
              </motion.div>
            </motion.div>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default JobsSection;
