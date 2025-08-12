/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import type React from "react";
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";

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
    firstName: "",
    lastName: "",
    phone: "",
    phonePrefix: "+49",
    email: "",
    enquiryType: "",
    message: "",
    receiveNews: false,
    agreeTerms: false,
  });

  // const imageRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  // const [isMobile, setIsMobile] = useState(false);
  const { t } = useTranslation();
  const contact = t("contact", { returnObjects: true }) as ContactTranslations;
  const days = t("days", { returnObjects: true }) as DaysTranslations;

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    setFormData((prev) => ({
      ...prev,
      [id]: type === "checkbox" ? checked : value,
    }));
  };

  // Parallax scroll effect - fixed by using the correct container ref
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

  // Check if device is mobile
  // useEffect(() => {
  //   const checkMobile = () => {
  //     setIsMobile(window.innerWidth < 768);
  //   };
  //   checkMobile();
  //   window.addEventListener("resize", checkMobile);
  //   return () => window.removeEventListener("resize", checkMobile);
  // }, []);

  const handleSelectChange = (id: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div ref={containerRef} className="w-full">
      {" "}
      {/* Added containerRef here */}
      {/* First Section: Sticky Image + Contact Form */}
      <section className="bg-reg-800 min-h-screen">
        <div className="flex flex-col lg:flex-row min-h-screen">
          {/* Left Column - Sticky Image */}
          <div className="w-full lg:w-1/2 lg:sticky lg:top-0 h-[50vh] lg:h-screen">
            <Image
              src="/assets/contact/2.jpg"
              className="w-full h-full object-cover"
              alt="Big Spuntino - Italian Bartender Cocktails Hamburg"
              width={600}
              height={800}
              priority
            />
          </div>

          {/* Right Column - Contact Form */}
          <div className="w-full lg:w-1/2 bg-primary text-white">
            <div className="p-6 sm:p-8 lg:p-20">
              {/* Header */}
              <div className="mb-12 lg:mb-16">
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold uppercase mb-6 lg:mb-8">
                  {contact.title}
                </h1>
                <p className="text-white-900 font-narrow text-sm mb-10 sm:mb-16">
                  {t("contact.welcomeMessage")}
                </p>
              </div>

              {/* Your Details Section */}
              <div className="mb-16 sm:mb-20">
                <h2 className="text-lg sm:text-xl lg:text-2xl uppercase font-bold mb-6 sm:mb-10">
                  {contact.form.yourDetails}
                </h2>

                {/* Name Fields */}
                <div className="flex flex-col sm:flex-row gap-4 mb-6">
                  <div className="w-full">
                    <input
                      id="firstName"
                      type="text"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      placeholder={`${contact.form.firstName} *`}
                      className="w-full bg-background/40 text-secondary py-4 sm:py-6 px-4 text-sm font-medium placeholder-gray-50 focus:outline-none"
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
                      className="w-full bg-background/40 text-secondary py-4 sm:py-6 px-4 text-sm font-medium placeholder-gray-50 focus:outline-none"
                      required
                    />
                  </div>
                </div>

                {/* Contact Fields */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="w-full">
                    <div className="flex">
                      <Select
                        value={formData.phonePrefix}
                        onValueChange={(value) =>
                          handleSelectChange("phonePrefix", value)
                        }
                      >
                        <SelectTrigger className="w-fit bg-background/40 text-white border-0 py-7 sm:py-[34px] px-2 text-sm focus:ring-0 focus:ring-offset-0 rounded-none shadow-none [&>svg]:hidden">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent className="bg-background/90 backdrop-blur-sm border-white/20">
                          <SelectItem
                            value="+49"
                            className="text-gray-800 hover:text-gray-900"
                          >
                            🇩🇪 +49
                          </SelectItem>
                          <SelectItem
                            value="+33"
                            className="text-gray-800 hover:text-gray-900"
                          >
                            🇫🇷 +33
                          </SelectItem>
                          <SelectItem
                            value="+1"
                            className="text-gray-800 hover:text-gray-900"
                          >
                            🇺🇸 +1
                          </SelectItem>
                          <SelectItem
                            value="+44"
                            className="text-gray-800 hover:text-gray-900"
                          >
                            🇬🇧 +44
                          </SelectItem>
                        </SelectContent>
                      </Select>
                      <input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder={`${contact.form.phone} *`}
                        className="flex-1 bg-background/40 text-white py-4 sm:py-6 px-4 text-sm font-medium placeholder-gray-50 focus:outline-none"
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
                      className="w-full bg-background/40 text-white py-4 sm:py-6 px-4 text-sm font-medium placeholder-gray-50 focus:outline-none"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Your Enquiry Section */}
              <div>
                <div className="w-full h-px bg-background mb-8 sm:mb-14"></div>
                <h2 className="text-lg sm:text-xl lg:text-2xl uppercase font-bold mb-6 sm:mb-10">
                  {contact.form.yourEnquiry}
                </h2>

                <div className="space-y-4">
                  <Select
                    value={formData.enquiryType}
                    onValueChange={(value) =>
                      handleSelectChange("enquiryType", value)
                    }
                  >
                    <SelectTrigger className="w-full bg-background/40 text-white border-0 py-4 sm:py-6 px-4 text-sm focus:ring-0 focus:ring-offset-0 rounded-none shadow-none data-[placeholder]:text-gray-50">
                      <SelectValue
                        placeholder={`${contact.form.enquiryAbout} *`}
                      />
                    </SelectTrigger>
                    <SelectContent className="bg-background/90 backdrop-blur-sm border-white/20">
                      <SelectItem
                        value="reservation"
                        className="text-gray-800 hover:text-gray-900"
                      >
                        {contact.form.reservation}
                      </SelectItem>
                      <SelectItem
                        value="events"
                        className="text-gray-800 hover:text-gray-900"
                      >
                        {contact.form.events}
                      </SelectItem>
                      <SelectItem
                        value="catering"
                        className="text-gray-800 hover:text-gray-900"
                      >
                        {contact.form.catering}
                      </SelectItem>
                      <SelectItem
                        value="general"
                        className="text-gray-800 hover:text-gray-900"
                      >
                        {contact.form.generalInfo}
                      </SelectItem>
                      <SelectItem
                        value="other"
                        className="text-gray-800 hover:text-gray-900"
                      >
                        {contact.form.other}
                      </SelectItem>
                    </SelectContent>
                  </Select>

                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder={contact.form.placeholders.message}
                    rows={6}
                    className="w-full bg-background/40 text-white py-4 sm:py-6 px-4 text-sm placeholder-gray-50 focus:outline-none resize-none"
                  ></textarea>

                  <div className="mb-10 sm:mb-14">
                    <label className="flex items-start space-x-3 cursor-pointer text-sm">
                      <input
                        type="checkbox"
                        id="agreeTerms"
                        checked={formData.agreeTerms}
                        onChange={handleInputChange}
                        className="mt-1 w-4 h-4 accent-primary"
                      />
                      <span className="text-white">
                        {contact.form.agreeTerms1}{" "}
                        <Link
                          href="/terms-and-conditions"
                          className="underline"
                        >
                          {contact.form.terms}
                        </Link>{" "}
                        {contact.form.agreeTerms2}{" "}
                        <Link href="/privacy-policy" className="underline">
                          {contact.form.privacyPolicy}
                        </Link>
                      </span>
                    </label>
                  </div>

                  <button
                    onClick={handleSubmit}
                    className="border-2 border-white text-white hover:bg-background hover:text-primary px-8 sm:px-16 py-4 sm:py-6 font-bold uppercase tracking-wide transition-all duration-300 text-sm w-full sm:w-auto"
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
      <section className="py-16 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row">
            <div
              style={{
                backgroundImage: "url('/assets/divider-15.svg')",
                backgroundSize: "40px auto",
              }}
              className="w-full lg:w-full p-6 sm:p-8 lg:p-20 flex flex-col justify-center bg-background"
            >
              <div className="">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary mb-4 uppercase">
                  BIG SPUNTINO
                </h2>
                {/* <p className="text-primary mb-6 sm:mb-8 text-sm sm:text-base leading-relaxed">
                  {contact.description}
                </p> */}

                <div className="space-y-0">
                  {/* Address */}
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between border-primary border-t-2 py-4 sm:py-5">
                    <div className="text-primary font-bold text-lg sm:text-xl uppercase tracking-wide mb-2 sm:mb-0">
                      {contact.address}
                    </div>
                    <div className="text-primary text-sm sm:text-base">
                      <p className="text-primary font-medium">
                        {contact.addressValue}
                      </p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between border-primary border-y-2 py-4 sm:py-5">
                    <div className="text-primary font-bold text-lg sm:text-xl uppercase tracking-wide mb-2 sm:mb-0">
                      {contact.phone}
                    </div>
                    <div className="text-primary text-sm sm:text-base">
                      <p>{contact.phoneValue}</p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between py-4 sm:py-5">
                    <div className="text-primary font-bold text-lg sm:text-xl uppercase tracking-wide mb-2 sm:mb-0">
                      {contact.email}
                    </div>
                    <div className="text-primary text-sm sm:text-base">
                      <p>{contact.emailValue}</p>
                    </div>
                  </div>

                  {/* Website */}
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between border-primary border-y-2 py-4 sm:py-5">
                    <div className="text-primary font-bold text-lg sm:text-xl uppercase tracking-wide mb-2 sm:mb-0">
                      {contact.website}
                    </div>
                    <div className="text-primary text-sm sm:text-base">
                      <p>{contact.websiteValue}</p>
                    </div>
                  </div>

                  {/* Opening Hours */}
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between py-4 sm:py-5">
                    <div className="text-primary font-bold text-lg sm:text-xl uppercase tracking-wide mb-2 sm:mb-0">
                      {contact.openingHours}
                    </div>
                    <div className="text-primary text-sm sm:text-base">
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
      {/* Parallax Image Section */}
      {/* <section className="">
        <div
          ref={imageRef}
          className="relative  sm:mx-6
                   h-[400px] lg:h-[500px] xl:h-[600px]
                   overflow-hidden"
        >
          <motion.div
            style={{ y: isMobile ? 0 : y }}
            className="relative w-full h-[120%] -top-[10%]"
          >
            <Image
              src="/assets/photos/8.jpeg"
              fill
              style={{ objectFit: "cover" }}
              alt="Big Spuntino - Italian Restaurant Contact Hamburg Winterhude"
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 100vw, 100vw"
              priority
              quality={85}
            />
            <div className="absolute inset-0 bg-black/10" />
          </motion.div>
        </div>
        <div className="h-6" />
      </section> */}
    </div>
  );
};

export default ContactSection;
