'use client';

import Image from 'next/image';
import Link from 'next/link';
import type React from 'react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

interface ContactTranslations {
  title: string;
  description: string;
  address: string;
  addressValue: string;
  phone: string;
  phoneValue: string;
  email: string;
  emailValue: string;
  website: string;
  websiteValue: string;
  openingHours: string;
  closed: string;
  wedHours: string;
  thuHours: string;
  friHours: string;
  satHours: string;
  sunHours: string;
  form: {
    yourDetails: string;
    firstName: string;
    lastName: string;
    phone: string;
    email: string;
    yourEnquiry: string;
    enquiryAbout: string;
    pleaseChoose: string;
    reservation: string;
    events: string;
    catering: string;
    generalInfo: string;
    other: string;
    shareEnquiry: string;
    agreeTerms1: string;
    agreeTerms2: string;
    terms: string;
    privacyPolicy: string;
    submit: string;
    placeholders: {
      firstName: string;
      lastName: string;
      phone: string;
      email: string;
      message: string;
    };
  };
}

interface DaysTranslations {
  mon: string;
  tue: string;
  wed: string;
  thu: string;
  fri: string;
  sat: string;
  sun: string;
}

const ContactSection = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    phonePrefix: '+49',
    email: '',
    enquiryType: '',
    message: '',
    receiveNews: false,
    agreeTerms: false,
  });

  const { t } = useTranslation();
  const contact = t('contact', { returnObjects: true }) as ContactTranslations;
  const days = t('days', { returnObjects: true }) as DaysTranslations;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    setFormData((prev) => ({
      ...prev,
      [id]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSelectChange = (id: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="w-full">
      {/* First Section: Sticky Image + Contact Form */}
      <section className="bg-reg-800 min-h-screen">
        <div className="flex flex-col lg:flex-row min-h-screen">
          {/* Left Column - Sticky Image */}
          <div className="w-full lg:w-1/2 lg:sticky lg:top-0 h-[50vh] lg:h-screen">
            <Image
              src="/assets/photos/7.jpg"
              className="w-full h-full object-cover"
              alt="Bartender making cocktail"
              width={600}
              height={800}
              priority
            />
          </div>

          {/* Right Column - Contact Form */}
          <div className="w-full lg:w-1/2 bg-[#ce2d19] text-white">
            <div className="p-6 sm:p-8 lg:p-20">
              {/* Header */}
              <div className="mb-12 lg:mb-16">
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold uppercase mb-6 lg:mb-8">
                  {contact.title}
                </h1>
                <p className="text-white-900 font-narrow text-sm mb-10 sm:mb-16">
                  {t('contact.welcomeMessage')}
                </p>
                <div className="w-full h-px bg-white"></div>
              </div>

              {/* Your Details Section */}
              <div className="mb-16 sm:mb-20">
                <h2 className="text-lg sm:text-xl lg:text-2xl uppercase font-bold mb-6 sm:mb-10">
                  {contact.form.yourDetails}
                </h2>
                <div className="w-full h-px bg-white mb-10 sm:mb-16"></div>

                {/* Name Fields */}
                <div className="flex flex-col sm:flex-row gap-4 mb-6">
                  <div className="w-full">
                    <input
                      id="firstName"
                      type="text"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      placeholder={`${contact.form.firstName} *`}
                      className="w-full bg-white/40 text-black  py-4 sm:py-6 px-4 text-sm font-medium placeholder-gray-50 focus:outline-none"
                      required
                    />
                  </div>
                  <div className="w-full">
                    <input
                      id="lastName"
                      type="text"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      placeholder={`${contact.form.lastName} *`}
                      className="w-full bg-white/40 text-black  py-4 sm:py-6 px-4 text-sm font-medium placeholder-gray-50 focus:outline-none"
                      required
                    />
                  </div>
                </div>

                {/* Contact Fields */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="w-full">
                    <div className="flex">
                      <select
                        value={formData.phonePrefix}
                        onChange={(e) => handleSelectChange('phonePrefix', e.target.value)}
                        className="bg-white/40 text-white py-4 sm:py-6 px-2 text-sm focus:outline-none"
                      >
                        <option value="+49">🇩🇪 +49</option>
                        <option value="+33">🇫🇷 +33</option>
                        <option value="+1">🇺🇸 +1</option>
                        <option value="+44">🇬🇧 +44</option>
                      </select>
                      <input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder={`${contact.form.phone} *`}
                        className="flex-1 bg-white/40 text-white py-4 sm:py-6 px-4 text-sm font-medium placeholder-gray-50 focus:outline-none"
                        required
                      />
                    </div>
                  </div>
                  <div className="w-full">
                    <input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder={`${contact.form.email} *`}
                      className="w-full bg-white/40 text-white py-4 sm:py-6 px-4 text-sm font-medium placeholder-gray-50 focus:outline-none"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Your Enquiry Section */}
              <div>
                <div className="w-full h-px bg-white mb-8 sm:mb-14"></div>
                <h2 className="text-lg sm:text-xl lg:text-2xl uppercase font-bold mb-6 sm:mb-10">
                  {contact.form.yourEnquiry}
                </h2>

                <div className="space-y-4">
                  <select
                    id="enquiryType"
                    value={formData.enquiryType}
                    onChange={(e) => handleSelectChange('enquiryType', e.target.value)}
                    className="w-full bg-white/40 text-white py-4 sm:py-6 px-4 text-sm focus:outline-none"
                  >
                    <option value="">{contact.form.enquiryAbout} *</option>
                    <option value="reservation">{contact.form.reservation}</option>
                    <option value="events">{contact.form.events}</option>
                    <option value="catering">{contact.form.catering}</option>
                    <option value="general">{contact.form.generalInfo}</option>
                    <option value="other">{contact.form.other}</option>
                  </select>

                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder={contact.form.placeholders.message}
                    rows={6}
                    className="w-full bg-white/40 text-white py-4 sm:py-6 px-4 text-sm placeholder-gray-50 focus:outline-none resize-none"
                  ></textarea>

                  <div className="mb-10 sm:mb-14">
                    <label className="flex items-start space-x-3 cursor-pointer text-sm">
                      <input
                        type="checkbox"
                        id="agreeTerms"
                        checked={formData.agreeTerms}
                        onChange={handleInputChange}
                        className="mt-1 w-4 h-4 accent-[#ce2d19]"
                      />
                      <span className="text-white">
                        {contact.form.agreeTerms1}{' '}
                        <Link href="/terms-and-conditions" className="underline">
                          {contact.form.terms}
                        </Link>{' '}
                        {contact.form.agreeTerms2}{' '}
                        <Link href="/privacy-policy" className="underline">
                          {contact.form.privacyPolicy}
                        </Link>
                      </span>
                    </label>
                  </div>

                  <button
                    onClick={handleSubmit}
                    className="border-2 border-white text-white hover:bg-white hover:text-[#ce2d19] px-8 sm:px-16 py-4 sm:py-6 font-bold uppercase tracking-wide transition-all duration-300 text-sm w-full sm:w-auto"
                  >
                    {contact.form.submit}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Second Section: Map + Contact Information */}
      <section className="bg-gray-100 py-16 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row">
            {/* Left Column - Map */}
            <div className="w-full lg:w-1/2 relative bg-gray-200">
              <div className="h-64 sm:h-96 lg:h-full flex items-center justify-center">
                <Image
                  src="/assets/contact/3.jpg"
                  className="w-full h-full object-cover"
                  alt="Location Map"
                  width={600}
                  height={400}
                />
              </div>
            </div>

            {/* Right Column - Contact Information */}
            <div className="w-full lg:w-1/2 p-6 sm:p-8 lg:p-16 flex flex-col justify-center bg-white">
              <div className="max-w-md mx-auto w-full">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#ce2d19] mb-4 uppercase">
                  BIG SPUNTINO
                </h2>
                <p className="text-gray-700 mb-6 sm:mb-8 text-sm sm:text-base leading-relaxed">
                  {contact.description}
                </p>

                <div className="space-y-0">
                  {/* Address */}
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between border-t-2 py-4 sm:py-5">
                    <div className="text-[#ce2d19] font-bold text-lg sm:text-xl uppercase tracking-wide mb-2 sm:mb-0">
                      {contact.address}
                    </div>
                    <div className="text-gray-700 text-sm sm:text-base">
                      <p className="text-[#ce2d19] font-medium">{contact.addressValue}</p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between border-y-2 py-4 sm:py-5">
                    <div className="text-[#ce2d19] font-bold text-lg sm:text-xl uppercase tracking-wide mb-2 sm:mb-0">
                      {contact.phone}
                    </div>
                    <div className="text-gray-700 text-sm sm:text-base">
                      <p>{contact.phoneValue}</p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between py-4 sm:py-5">
                    <div className="text-[#ce2d19] font-bold text-lg sm:text-xl uppercase tracking-wide mb-2 sm:mb-0">
                      {contact.email}
                    </div>
                    <div className="text-gray-700 text-sm sm:text-base">
                      <p>{contact.emailValue}</p>
                    </div>
                  </div>

                  {/* Website */}
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between border-y-2 py-4 sm:py-5">
                    <div className="text-[#ce2d19] font-bold text-lg sm:text-xl uppercase tracking-wide mb-2 sm:mb-0">
                      {contact.website}
                    </div>
                    <div className="text-gray-700 text-sm sm:text-base">
                      <p>{contact.websiteValue}</p>
                    </div>
                  </div>

                  {/* Opening Hours */}
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between border-t-2 py-4 sm:py-5">
                    <div className="text-[#ce2d19] font-bold text-lg sm:text-xl uppercase tracking-wide mb-2 sm:mb-0">
                      {contact.openingHours}
                    </div>
                    <div className="text-gray-700 text-sm sm:text-base">
                      <p>
                        {days.wed}-{days.fri} {contact.wedHours}
                      </p>
                      <p>
                        {days.sat} {contact.satHours}
                      </p>
                      <p>
                        {days.sun} {contact.sunHours}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactSection;
