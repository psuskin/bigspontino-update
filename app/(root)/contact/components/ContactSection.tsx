'use client';

import { motion, useInView, type Variants } from 'framer-motion';
import { Clock, Globe, Mail, MapPin, Phone } from 'lucide-react';
import { type ChangeEvent, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  phonePrefix: string;
  enquiryType: string;
  message: string;
  receiveNews: boolean;
  agreeTerms: boolean;
}

const ContactSection = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    phonePrefix: '+49',
    enquiryType: '',
    message: '',
    receiveNews: false,
    agreeTerms: false,
  });

  // Refs for intersection observers
  const leftColumnRef = useRef<HTMLDivElement>(null);
  const rightColumnRef = useRef<HTMLDivElement>(null);

  // Intersection observers for animations
  const leftColumnInView = useInView(leftColumnRef, { once: true, margin: '-100px' });
  const rightColumnInView = useInView(rightColumnRef, { once: true, margin: '-100px' });

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

  // Animation variants
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
        staggerChildren: 0.2,
      },
    },
  };

  const contactItemVariants: Variants = {
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

  const formFieldVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
      },
    },
  };

  return (
    <section className="py-8 md:py-16 lg:py-32 px-4 sm:px-6 max-w-[1920px] mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
        {/* Left Column - Contact Info */}
        <motion.div
          ref={leftColumnRef}
          className="p-4 sm:p-6 md:p-8 lg:p-16"
          variants={staggerContainer}
          initial="hidden"
          animate={leftColumnInView ? 'visible' : 'hidden'}
        >
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl uppercase font-bold"
            variants={fadeInLeft}
          >
            {t('contact.title')}
          </motion.h2>
          {/* Contact Information */}
          <motion.div
            className="space-y-6 sm:space-y-7 md:space-y-8 lg:space-y-10 mt-8 md:mt-12 lg:mt-20 font-narrow"
            variants={staggerContainer}
          >
            {/* Address */}
            <motion.div className="flex items-start gap-3 sm:gap-4" variants={contactItemVariants}>
              <MapPin className="w-5 h-5 sm:w-6 sm:h-6 mt-1 text-gray-600 flex-shrink-0" />
              <div>
                <h4 className="font-semibold mb-1 text-sm sm:text-base">{t('contact.address')}</h4>
                <p className="text-base sm:text-lg">{t('contact.addressValue')}</p>
              </div>
            </motion.div>
            {/* Contact Grid */}
            <motion.div
              className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-4 sm:gap-6 md:gap-8 mt-6 md:mt-8 lg:mt-10"
              variants={staggerContainer}
            >
              <motion.div
                className="flex items-center gap-3 sm:gap-4"
                variants={contactItemVariants}
              >
                <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-sm sm:text-base">{t('contact.phone')}</h4>
                  <p className="text-base sm:text-lg">{t('contact.phoneValue')}</p>
                </div>
              </motion.div>
              <motion.div
                className="flex items-center gap-3 sm:gap-4"
                variants={contactItemVariants}
              >
                <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-sm sm:text-base">{t('contact.email')}</h4>
                  <p className="text-base sm:text-lg">{t('contact.emailValue')}</p>
                </div>
              </motion.div>
              <motion.div
                className="flex items-center gap-3 sm:gap-4 xs:col-span-2 lg:col-span-1 xl:col-span-2"
                variants={contactItemVariants}
              >
                <Globe className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-sm sm:text-base">{t('contact.website')}</h4>
                  <p className="text-base sm:text-lg">{t('contact.websiteValue')}</p>
                </div>
              </motion.div>
            </motion.div>
            {/* Opening Hours */}
            <motion.div className="flex items-start gap-3 sm:gap-4" variants={contactItemVariants}>
              <Clock className="w-5 h-5 sm:w-6 sm:h-6 mt-1 text-gray-600 flex-shrink-0" />
              <div className="w-full">
                <h4 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">
                  {t('contact.openingHours')}
                </h4>
                <div className="grid grid-cols-3 xs:grid-cols-7 gap-2 sm:gap-3 md:gap-4 text-center">
                  <div>
                    <div className="font-semibold text-gray-400 mb-1 sm:mb-2 text-xs sm:text-sm">
                      {t('days.mon')}
                    </div>
                    <div className="text-xs sm:text-sm text-gray-400">{t('contact.closed')}</div>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-400 mb-1 sm:mb-2 text-xs sm:text-sm">
                      {t('days.tue')}
                    </div>
                    <div className="text-xs sm:text-sm text-gray-400">{t('contact.closed')}</div>
                  </div>
                  <div>
                    <div className="font-semibold mb-1 sm:mb-2 text-xs sm:text-sm">
                      {t('days.wed')}
                    </div>
                    <div className="text-xs sm:text-sm">{t('contact.wedHours')}</div>
                  </div>
                  <div>
                    <div className="font-semibold mb-1 sm:mb-2 text-xs sm:text-sm">
                      {t('days.thu')}
                    </div>
                    <div className="text-xs sm:text-sm">{t('contact.thuHours')}</div>
                  </div>
                  <div>
                    <div className="font-semibold mb-1 sm:mb-2 text-xs sm:text-sm">
                      {t('days.fri')}
                    </div>
                    <div className="text-xs sm:text-sm">{t('contact.friHours')}</div>
                  </div>
                  <div>
                    <div className="font-semibold mb-1 sm:mb-2 text-xs sm:text-sm">
                      {t('days.sat')}
                    </div>
                    <div className="text-xs sm:text-sm">{t('contact.satHours')}</div>
                  </div>
                  <div>
                    <div className="font-semibold mb-1 sm:mb-2 text-xs sm:text-sm">
                      {t('days.sun')}
                    </div>
                    <div className="text-xs sm:text-sm">{t('contact.sunHours')}</div>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div className="mt-8 sm:mt-10 md:mt-12" variants={contactItemVariants}>
              <p className="mb-4 text-sm sm:text-base">{t('contact.description')}</p>
            </motion.div>
          </motion.div>
        </motion.div>
        {/* Right Column - Form */}
        <motion.div
          ref={rightColumnRef}
          className="p-4 sm:p-6 md:p-8 lg:p-16 lg:mt-58 lg:me-16 bg-gray-100 order-first lg:order-last"
          variants={staggerContainer}
          initial="hidden"
          animate={rightColumnInView ? 'visible' : 'hidden'}
        >
          <motion.h2
            className="text-2xl sm:text-3xl md:text-4xl uppercase font-bold"
            variants={fadeInRight}
          >
            {t('contact.form.yourDetails')}
          </motion.h2>
          <motion.div
            className="w-full h-[1px] bg-black mb-6 sm:mb-8 lg:mb-10 mt-4 sm:mt-5 lg:mt-6"
            variants={fadeInRight}
          ></motion.div>
          {/* Name Fields */}
          <motion.div
            className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 mt-4 sm:mt-6 p-1 font-narrow"
            variants={staggerContainer}
          >
            <motion.div className="w-full" variants={formFieldVariants}>
              <label className="pb-2 ps-3 text-sm sm:text-base" htmlFor="firstName">
                {t('contact.form.firstName')}*
              </label>
              <input
                id="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                required
                placeholder={t('contact.form.placeholders.firstName')}
                className="w-full bg-white text-black border-gray-300 rounded-none py-2 sm:py-3 px-3 sm:px-4 border text-sm sm:text-base"
              />
            </motion.div>
            <motion.div className="w-full" variants={formFieldVariants}>
              <label className="pb-2 ps-3 text-sm sm:text-base" htmlFor="lastName">
                {t('contact.form.lastName')}*
              </label>
              <input
                id="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                required
                placeholder={t('contact.form.placeholders.lastName')}
                className="w-full bg-white text-black border-gray-300 rounded-none py-2 sm:py-3 px-3 sm:px-4 border text-sm sm:text-base"
              />
            </motion.div>
          </motion.div>
          {/* Contact Fields */}
          <motion.div
            className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 mt-4 sm:mt-6 p-1 font-narrow"
            variants={staggerContainer}
          >
            <motion.div className="w-full" variants={formFieldVariants}>
              <div>
                <label className="pb-2 text-sm sm:text-base" htmlFor="phone">
                  {t('contact.form.phone')}*
                </label>
                <div className="flex gap-2">
                  <select
                    value={formData.phonePrefix}
                    onChange={(e) => handleSelectChange('phonePrefix', e.target.value)}
                    className="w-20 sm:w-24 bg-white text-black border-gray-300 rounded-none py-2 sm:py-3 px-1 sm:px-2 border text-sm sm:text-base"
                  >
                    <option value="+49">🇩🇪 +49</option>
                    <option value="+1">🇺🇸 +1</option>
                    <option value="+44">🇬🇧 +44</option>
                  </select>
                  <input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    placeholder={t('contact.form.placeholders.phone')}
                    className="flex-1 bg-white text-black border-gray-300 rounded-none py-2 sm:py-3 px-3 sm:px-4 border text-sm sm:text-base"
                  />
                </div>
              </div>
            </motion.div>
            <motion.div className="w-full" variants={formFieldVariants}>
              <div>
                <label className="pb-2 text-sm sm:text-base" htmlFor="email">
                  {t('contact.form.email')}*
                </label>
                <input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  placeholder={t('contact.form.placeholders.email')}
                  className="w-full bg-white text-black border-gray-300 rounded-none py-2 sm:py-3 px-3 sm:px-4 border text-sm sm:text-base"
                />
              </div>
            </motion.div>
          </motion.div>
          {/* Enquiry Section */}
          <motion.h2
            className="text-2xl sm:text-3xl md:text-4xl uppercase font-bold mt-8 sm:mt-12 lg:mt-16"
            variants={fadeInRight}
          >
            {t('contact.form.yourEnquiry')}
          </motion.h2>
          <motion.div
            className="w-full h-[1px] bg-black mb-6 sm:mb-8 lg:mb-10 mt-4 sm:mt-5 lg:mt-6"
            variants={fadeInRight}
          ></motion.div>
          <motion.div className="mt-4 sm:mt-6 p-1 font-narrow" variants={formFieldVariants}>
            <label className="pb-2 text-sm sm:text-base" htmlFor="enquiryType">
              {t('contact.form.enquiryAbout')}
            </label>
            <select
              id="enquiryType"
              value={formData.enquiryType}
              onChange={(e) => handleSelectChange('enquiryType', e.target.value)}
              className="w-full bg-white text-black border-gray-300 rounded-none py-2 sm:py-3 px-3 sm:px-4 border text-sm sm:text-base"
            >
              <option value="">{t('contact.form.pleaseChoose')}</option>
              <option value="reservation">{t('contact.form.reservation')}</option>
              <option value="events">{t('contact.form.events')}</option>
              <option value="catering">{t('contact.form.catering')}</option>
              <option value="general">{t('contact.form.generalInfo')}</option>
              <option value="other">{t('contact.form.other')}</option>
            </select>
          </motion.div>
          <motion.div className="mt-4 sm:mt-6 p-1 font-narrow" variants={formFieldVariants}>
            <label className="pb-2 text-sm sm:text-base" htmlFor="message">
              {t('contact.form.shareEnquiry')}
            </label>
            <textarea
              id="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder={t('contact.form.placeholders.message')}
              rows={6}
              className="w-full bg-white text-black border-gray-300 rounded-none py-2 sm:py-3 px-3 sm:px-4 border resize-vertical text-sm sm:text-base"
            />
          </motion.div>
          <motion.div className="mt-6 sm:mt-8 p-1" variants={formFieldVariants}>
            <label className="flex items-start space-x-3 cursor-pointer">
              <input
                type="checkbox"
                id="agreeTerms"
                checked={formData.agreeTerms}
                onChange={handleInputChange}
                className="mt-1 w-4 h-4 sm:w-5 sm:h-5"
              />
              <span className="text-xs sm:text-sm">
                {t('contact.form.agreeTerms1')}{' '}
                <a href="#" className="underline">
                  {t('contact.form.terms')}
                </a>{' '}
                {t('contact.form.agreeTerms2')}{' '}
                <a href="#" className="underline">
                  {t('contact.form.privacyPolicy')}
                </a>
                .
              </span>
            </label>
          </motion.div>
          <motion.div className="mt-6 sm:mt-8" variants={formFieldVariants}>
            <button className="bg-black text-white px-8 sm:px-12 py-3 sm:py-4 rounded-none font-semibold hover:bg-gray-800 transition-colors duration-300 text-sm sm:text-base lg:text-lg uppercase w-full sm:w-auto">
              {t('contact.form.submit')}
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
