'use client';
import { Clock, Globe, Mail, MapPin, Phone } from 'lucide-react';
import { ChangeEvent, useState } from 'react';

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

  return (
    <section className="py-8 md:py-16 lg:py-32 px-4 sm:px-6 max-w-[1920px] mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
        {/* Left Column - Contact Info */}
        <div className="p-4 sm:p-6 md:p-8 lg:p-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl uppercase font-bold">
            Get in touch with Big Spuntino
          </h2>

          {/* Contact Information */}
          <div className="space-y-6 sm:space-y-7 md:space-y-8 lg:space-y-10 mt-8 md:mt-12 lg:mt-20 font-narrow">
            {/* Address */}
            <div className="flex items-start gap-3 sm:gap-4">
              <MapPin className="w-5 h-5 sm:w-6 sm:h-6 mt-1 text-gray-600 flex-shrink-0" />
              <div>
                <h4 className="font-semibold mb-1 text-sm sm:text-base">Address</h4>
                <p className="text-base sm:text-lg">Mühlenkamp 8, 22303 Hamburg</p>
              </div>
            </div>

            {/* Contact Grid */}
            <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-4 sm:gap-6 md:gap-8 mt-6 md:mt-8 lg:mt-10">
              <div className="flex items-center gap-3 sm:gap-4">
                <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-sm sm:text-base">Phone</h4>
                  <p className="text-base sm:text-lg">040 / 69 45 68 28</p>
                </div>
              </div>

              <div className="flex items-center gap-3 sm:gap-4">
                <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-sm sm:text-base">Email</h4>
                  <p className="text-base sm:text-lg">mail@bigspuntino.de</p>
                </div>
              </div>

              <div className="flex items-center gap-3 sm:gap-4 xs:col-span-2 lg:col-span-1 xl:col-span-2">
                <Globe className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-sm sm:text-base">Website</h4>
                  <p className="text-base sm:text-lg">bigspuntino.de</p>
                </div>
              </div>
            </div>

            {/* Opening Hours */}
            <div className="flex items-start gap-3 sm:gap-4">
              <Clock className="w-5 h-5 sm:w-6 sm:h-6 mt-1 text-gray-600 flex-shrink-0" />
              <div className="w-full">
                <h4 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Opening Hours</h4>
                <div className="grid grid-cols-3 xs:grid-cols-7 gap-2 sm:gap-3 md:gap-4 text-center">
                  <div>
                    <div className="font-semibold text-gray-400 mb-1 sm:mb-2 text-xs sm:text-sm">
                      MON
                    </div>
                    <div className="text-xs sm:text-sm text-gray-400">Closed</div>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-400 mb-1 sm:mb-2 text-xs sm:text-sm">
                      TUE
                    </div>
                    <div className="text-xs sm:text-sm text-gray-400">Closed</div>
                  </div>
                  <div>
                    <div className="font-semibold mb-1 sm:mb-2 text-xs sm:text-sm">WED</div>
                    <div className="text-xs sm:text-sm">11:00 - 23:00</div>
                  </div>
                  <div>
                    <div className="font-semibold mb-1 sm:mb-2 text-xs sm:text-sm">THU</div>
                    <div className="text-xs sm:text-sm">11:00 - 23:00</div>
                  </div>
                  <div>
                    <div className="font-semibold mb-1 sm:mb-2 text-xs sm:text-sm">FRI</div>
                    <div className="text-xs sm:text-sm">11:00 - 23:00</div>
                  </div>
                  <div>
                    <div className="font-semibold mb-1 sm:mb-2 text-xs sm:text-sm">SAT</div>
                    <div className="text-xs sm:text-sm">10:00 - 23:00</div>
                  </div>
                  <div>
                    <div className="font-semibold mb-1 sm:mb-2 text-xs sm:text-sm">SUN</div>
                    <div className="text-xs sm:text-sm">10:00 - 17:00</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 sm:mt-10 md:mt-12">
              <p className="mb-4 text-sm sm:text-base">
                The Big Spuntino is a classic day bar where the Spuntini can be tasted all day long.
              </p>
            </div>
          </div>
        </div>

        {/* Right Column - Form */}
        <div className="p-4 sm:p-6 md:p-8 lg:p-16 lg:mt-58 lg:me-16 bg-gray-100 order-first lg:order-last">
          <h2 className="text-2xl sm:text-3xl md:text-4xl uppercase font-bold">Your Details</h2>
          <div className="w-full h-[1px] bg-black mb-6 sm:mb-8 lg:mb-10 mt-4 sm:mt-5 lg:mt-6"></div>

          {/* Name Fields */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 mt-4 sm:mt-6 p-1 font-narrow">
            <div className="w-full">
              <label className="pb-2 ps-3 text-sm sm:text-base" htmlFor="firstName">
                First Name*
              </label>
              <input
                id="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                required
                placeholder="Your first name"
                className="w-full bg-white text-black border-gray-300 rounded-none py-2 sm:py-3 px-3 sm:px-4 border text-sm sm:text-base"
              />
            </div>
            <div className="w-full">
              <label className="pb-2 ps-3 text-sm sm:text-base" htmlFor="lastName">
                Last Name*
              </label>
              <input
                id="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                required
                placeholder="Your last name"
                className="w-full bg-white text-black border-gray-300 rounded-none py-2 sm:py-3 px-3 sm:px-4 border text-sm sm:text-base"
              />
            </div>
          </div>

          {/* Contact Fields */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 mt-4 sm:mt-6 p-1 font-narrow">
            <div className="w-full">
              <div>
                <label className="pb-2 text-sm sm:text-base" htmlFor="phone">
                  Phone Number*
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
                    placeholder="Your phone number"
                    className="flex-1 bg-white text-black border-gray-300 rounded-none py-2 sm:py-3 px-3 sm:px-4 border text-sm sm:text-base"
                  />
                </div>
              </div>
            </div>
            <div className="w-full">
              <div>
                <label className="pb-2 text-sm sm:text-base" htmlFor="email">
                  Email Address*
                </label>
                <input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  placeholder="name@emailaddress.com"
                  className="w-full bg-white text-black border-gray-300 rounded-none py-2 sm:py-3 px-3 sm:px-4 border text-sm sm:text-base"
                />
              </div>
            </div>
          </div>

          {/* Enquiry Section */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl uppercase font-bold mt-8 sm:mt-12 lg:mt-16">
            Your Enquiry
          </h2>
          <div className="w-full h-[1px] bg-black mb-6 sm:mb-8 lg:mb-10 mt-4 sm:mt-5 lg:mt-6"></div>

          <div className="mt-4 sm:mt-6 p-1 font-narrow">
            <label className="pb-2 text-sm sm:text-base" htmlFor="enquiryType">
              What is your enquiry about?
            </label>
            <select
              id="enquiryType"
              value={formData.enquiryType}
              onChange={(e) => handleSelectChange('enquiryType', e.target.value)}
              className="w-full bg-white text-black border-gray-300 rounded-none py-2 sm:py-3 px-3 sm:px-4 border text-sm sm:text-base"
            >
              <option value="">Please choose</option>
              <option value="reservation">Table Reservation</option>
              <option value="events">Private Events</option>
              <option value="catering">Catering</option>
              <option value="general">General Information</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="mt-4 sm:mt-6 p-1 font-narrow">
            <label className="pb-2 text-sm sm:text-base" htmlFor="message">
              Please share your enquiry
            </label>
            <textarea
              id="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Type your message here..."
              rows={6}
              className="w-full bg-white text-black border-gray-300 rounded-none py-2 sm:py-3 px-3 sm:px-4 border resize-vertical text-sm sm:text-base"
            />
          </div>

          <div className="mt-6 sm:mt-8 p-1">
            <label className="flex items-start space-x-3 cursor-pointer">
              <input
                type="checkbox"
                id="agreeTerms"
                checked={formData.agreeTerms}
                onChange={handleInputChange}
                className="mt-1 w-4 h-4 sm:w-5 sm:h-5"
              />
              <span className="text-xs sm:text-sm">
                I have read and agreed to the{' '}
                <a href="#" className="underline">
                  Terms and Conditions
                </a>{' '}
                and the{' '}
                <a href="#" className="underline">
                  Privacy Policy
                </a>
                .
              </span>
            </label>
          </div>

          <div className="mt-6 sm:mt-8">
            <button className="bg-black text-white px-8 sm:px-12 py-3 sm:py-4 rounded-none font-semibold hover:bg-gray-800 transition-colors duration-300 text-sm sm:text-base lg:text-lg uppercase w-full sm:w-auto">
              Submit Your Enquiry
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
