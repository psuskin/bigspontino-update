'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Upload } from 'lucide-react';
import Image from 'next/image';
import { type ChangeEvent, useRef, useState } from 'react';

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

  const sectionRef = useRef(null);
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
    // Handle form submission here
    console.log('Form submitted:', formData);
    // You can add your submission logic here
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section ref={sectionRef} className="py-20 md:py-32 px-4 md:px-8">
      <div className="">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <motion.div initial="hidden" animate="visible" variants={fadeInUpVariants}>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-narrow leading-tight">
              <span className="font-primary italic text-5xl md:text-7xl lg:text-7xl">
                Empowering
              </span>{' '}
              the
              <br />
              Future together
            </h2>
          </motion.div>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUpVariants}
            className="self-start"
          >
            <p className="text-xl md:text-2xl font-narrow my-8">
              You want to become part of the Famiglia and work in the happiest day bar in Hamburg?
              Then get in touch with our team – we look forward to receiving your applications!
            </p>
            <button className="group relative inline-flex h-14 items-center cursor-pointer justify-center overflow-hidden rounded-none font-medium text-lg">
              <div className="inline-flex h-full translate-y-0 items-center justify-center bg-amber-300 uppercase px-10 text-black transition group-hover:-translate-y-[150%] rounded-none">
                Apply Now
              </div>
              <div className="absolute inline-flex h-full w-full translate-y-[100%] items-center justify-center uppercase bg-black px-10 text-neutral-50 transition duration-300 group-hover:translate-y-0 rounded-none">
                Apply Now
              </div>
            </button>
          </motion.div>
        </div>

        <div className="mt-20 md:mt-32 h-[300px] md:h-[500px] lg:h-[600px] overflow-hidden">
          <motion.div style={{ y }} className="relative h-full">
            <Image
              src="/assets/08-Il-Bambini-Club.jpg"
              layout="fill"
              objectFit="cover"
              alt="A lively restaurant scene"
            />
          </motion.div>
        </div>

        {/* Application Form */}

        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="mt-20 w-full bg-gray-50 p-6 md:p-12 font-narrow rounded-lg"
        >
          <motion.div variants={fadeInUpVariants} className="mb-12">
            <h3 className="text-3xl md:text-5xl font-narrow mb-4">
              Join Our <span className="font-primary italic">Famiglia</span>
            </h3>
            <p className="text-base md:text-lg text-gray-700">
              Fill out the application form below and let&apos;s start your journey with us.
            </p>
          </motion.div>

          <form onSubmit={handleSubmit}>
            <motion.div variants={containerVariants} className="space-y-8">
              {/* Personal Info Grid */}
              <motion.div
                variants={fadeInUpVariants}
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
              >
                <div>
                  <label
                    className="block text-sm font-bold mb-2 uppercase tracking-wide"
                    htmlFor="firstName"
                  >
                    First Name*
                  </label>
                  <div className="relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-black after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] focus-within:after:origin-bottom-left focus-within:after:scale-x-100">
                    <motion.input
                      whileFocus={{ scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                      id="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                      placeholder="Your first name"
                      className="w-full bg-white text-black border-2 border-gray-300 focus:border-transparent py-3 px-4 transition-all duration-300"
                    />
                  </div>
                </div>
                <div>
                  <label
                    className="block text-sm font-bold mb-2 uppercase tracking-wide"
                    htmlFor="lastName"
                  >
                    Last Name*
                  </label>
                  <div className="relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-black after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] focus-within:after:origin-bottom-left focus-within:after:scale-x-100">
                    <motion.input
                      whileFocus={{ scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                      id="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                      placeholder="Your last name"
                      className="w-full bg-white text-black border-2 border-gray-300 focus:border-transparent py-3 px-4 transition-all duration-300"
                    />
                  </div>
                </div>
              </motion.div>

              {/* Contact Grid */}
              <motion.div
                variants={fadeInUpVariants}
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
              >
                <div>
                  <label
                    className="block text-sm font-bold mb-2 uppercase tracking-wide"
                    htmlFor="phone"
                  >
                    Phone*
                  </label>
                  <div className="flex gap-2">
                    <select
                      value={formData.phonePrefix}
                      onChange={(e) => handleSelectChange('phonePrefix', e.target.value)}
                      className="w-24 bg-white border-2 border-gray-300 focus:border-black py-3 px-2 transition-all duration-300"
                    >
                      <option value="+49">🇩🇪</option>
                      <option value="+1">🇺🇸</option>
                      <option value="+44">🇬🇧</option>
                    </select>
                    <div className="flex-1 relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-black after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] focus-within:after:origin-bottom-left focus-within:after:scale-x-100">
                      <motion.input
                        whileFocus={{ scale: 1.02 }}
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        placeholder="Phone number"
                        className="w-full bg-white border-2 border-gray-300 focus:border-transparent py-3 px-4 transition-all duration-300"
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <label
                    className="block text-sm font-bold mb-2 uppercase tracking-wide"
                    htmlFor="email"
                  >
                    Email*
                  </label>
                  <div className="relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-black after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] focus-within:after:origin-bottom-left focus-within:after:scale-x-100">
                    <motion.input
                      whileFocus={{ scale: 1.02 }}
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      placeholder="your@email.com"
                      className="w-full bg-white border-2 border-gray-300 focus:border-transparent py-3 px-4 transition-all duration-300"
                    />
                  </div>
                </div>
              </motion.div>

              {/* Position Details */}
              <motion.div variants={fadeInUpVariants} className="border-l-4 border-black pl-6">
                <h3 className="text-lg md:text-xl font-black uppercase mb-4">Position Details</h3>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <div>
                    <label
                      className="block text-sm font-bold mb-2 uppercase tracking-wide"
                      htmlFor="position"
                    >
                      Position*
                    </label>
                    <select
                      id="position"
                      value={formData.position}
                      onChange={(e) => handleSelectChange('position', e.target.value)}
                      className="w-full bg-white border-2 border-gray-300 focus:border-black py-3 px-4 transition-all duration-300"
                    >
                      <option value="">Choose</option>
                      <option value="server">Server</option>
                      <option value="bartender">Bartender</option>
                      <option value="kitchen">Kitchen</option>
                      <option value="host">Host</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label
                      className="block text-sm font-bold mb-2 uppercase tracking-wide"
                      htmlFor="experience"
                    >
                      Experience
                    </label>
                    <select
                      id="experience"
                      value={formData.experience}
                      onChange={(e) => handleSelectChange('experience', e.target.value)}
                      className="w-full bg-white border-2 border-gray-300 focus:border-black py-3 px-4 transition-all duration-300"
                    >
                      <option value="">Choose</option>
                      <option value="entry">Entry Level</option>
                      <option value="1-2years">1-2 Years</option>
                      <option value="3-5years">3-5 Years</option>
                      <option value="5plus">5+ Years</option>
                    </select>
                  </div>
                  <div>
                    <label
                      className="block text-sm font-bold mb-2 uppercase tracking-wide"
                      htmlFor="availability"
                    >
                      Availability
                    </label>
                    <select
                      id="availability"
                      value={formData.availability}
                      onChange={(e) => handleSelectChange('availability', e.target.value)}
                      className="w-full bg-white border-2 border-gray-300 focus:border-black py-3 px-4 transition-all duration-300"
                    >
                      <option value="">Choose</option>
                      <option value="fulltime">Full-time</option>
                      <option value="parttime">Part-time</option>
                      <option value="weekends">Weekends</option>
                      <option value="flexible">Flexible</option>
                    </select>
                  </div>
                </div>
              </motion.div>

              {/* CV Upload */}
              <motion.div variants={fadeInUpVariants}>
                <label
                  className="block text-sm font-bold mb-2 uppercase tracking-wide"
                  htmlFor="cv"
                >
                  CV/Resume*
                </label>
                <motion.div whileHover={{ scale: 1.02 }} className="relative">
                  <input
                    id="cv"
                    type="file"
                    accept=".pdf,.doc,.docx"
                    onChange={handleFileChange}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  />
                  <div className="bg-white border-2 border-dashed border-gray-400 hover:border-black py-6 px-4 text-center transition-all duration-300">
                    <Upload className="w-8 h-8 mx-auto mb-2 text-gray-600" />
                    <p className="text-gray-600 font-medium text-sm md:text-base">
                      {formData.cv ? formData.cv.name : 'Drop your CV here or click to browse'}
                    </p>
                    <p className="text-xs text-gray-500 mt-1">PDF, DOC, DOCX up to 10MB</p>
                  </div>
                </motion.div>
              </motion.div>

              {/* Message */}
              <motion.div variants={fadeInUpVariants}>
                <label
                  className="block text-sm font-bold mb-2 uppercase tracking-wide"
                  htmlFor="message"
                >
                  Why Join Us?
                </label>
                <div className="relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-black after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] focus-within:after:origin-bottom-left focus-within:after:scale-x-100">
                  <motion.textarea
                    whileFocus={{ scale: 1.01 }}
                    id="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us what excites you about joining our team..."
                    rows={4}
                    className="w-full bg-white border-2 border-gray-300 focus:border-transparent py-3 px-4 resize-y transition-all duration-300"
                  />
                </div>
              </motion.div>

              {/* Terms */}
              <motion.div variants={fadeInUpVariants} className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="agreeTerms"
                  checked={formData.agreeTerms}
                  onChange={handleInputChange}
                  className="mt-1 w-5 h-5 accent-black"
                />
                <label htmlFor="agreeTerms" className="text-sm text-gray-700 cursor-pointer">
                  I agree to the{' '}
                  <a href="#" className="underline font-bold hover:text-black">
                    Terms & Conditions
                  </a>{' '}
                  and{' '}
                  <a href="#" className="underline font-bold hover:text-black">
                    Privacy Policy
                  </a>
                </label>
              </motion.div>

              {/* Submit */}
              <motion.div variants={fadeInUpVariants} className="pt-6">
                <motion.button
                  whileHover={{ scale: 1.05, x: 5 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="bg-black text-white py-4 px-10 font-black uppercase tracking-widest hover:bg-gray-800 transition-colors duration-300 flex items-center gap-3"
                >
                  Submit Application
                  <ArrowRight className="w-5 h-5" />
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
