'use client';
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
  getInTouch: string;
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

const OpeningHours = () => {
  const { t } = useTranslation();
  const contact = t('contact', { returnObjects: true }) as ContactTranslations;
  const days = t('fullDays', { returnObjects: true }) as DaysTranslations;

  return (
    <section className="py-16 bg-stone-100">
      {/* Desktop Layout */}
      <p className="text-secondary  text-center mb-6 sm:mb-20 sm:text-xl px-8 lg:text-2xl leading-relaxed">
        {contact.description}
      </p>
      <div className="w-full h-px bg-secondary/20 my-12 md:hidden "></div>

      <div className="hidden lg:block max-w-6xl mx-auto px-8">
        <div className="grid grid-cols-3 gap-16">
          {/* Opening Hours */}
          <div className="text-center">
            <div className="flex flex-col items-center">
              <h3 className="text-xl sm:text-2xl font-light text-secondary tracking-wide mb-8">
                {contact.openingHours}
              </h3>
              {/* Desktop opening hours */}
              <div className="text-secondary font-light">
                <div className="space-y-2 text-lg leading-relaxed">
                  <div className="text-center">
                    <div>
                      {days.wed} bis {days.fri} | {contact.wedHours}
                    </div>
                  </div>
                  <div className="text-center">
                    <div>
                      {days.sat} | {contact.satHours}
                    </div>
                  </div>
                  <div className="text-center">
                    <div>
                      {days.sun} | {contact.sunHours}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Spacer with vertical line */}
          <div className="flex justify-center">
            <div className="w-px h-56 bg-secondary/30"></div>
          </div>

          {/* Get in Touch */}
          <div className="text-center">
            <div className="flex flex-col items-center">
              <h3 className="text-xl sm:text-2xl font-light text-secondary tracking-wide mb-8">
                {contact.getInTouch}
              </h3>
              <div className="space-y-3 text-secondary font-light text-lg">
                <a
                  href="tel:040694568 28"
                  className="block underline decoration-1 underline-offset-4 hover:text-red-700 transition-colors"
                >
                  {contact.phoneValue}
                </a>
                <a
                  href="mailto:mail@bigspuntino.de"
                  className="block underline decoration-1 underline-offset-4 hover:text-red-700 transition-colors"
                >
                  {contact.emailValue}
                </a>
                <a
                  href="https://bigspuntino.de"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block underline decoration-1 underline-offset-4 hover:text-red-700 transition-colors"
                >
                  {contact.websiteValue}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="lg:hidden max-w-sm sm:max-w-md mx-auto px-6 sm:px-8">
        <div className="space-y-16">
          {/* Opening Hours */}
          <div className="text-center">
            <h3 className="text-xl sm:text-2xl font-light text-secondary tracking-wide mb-8">
              {contact.openingHours}
            </h3>
            {/* Mobile opening hours */}
            <div className="text-secondary font-light">
              <div className="space-y-4 text-base sm:text-lg leading-relaxed">
                <div className="text-center">
                  <div>
                    {days.wed} to {days.fri}
                  </div>
                  <div className="text-sm sm:text-base mt-1">{contact.wedHours}</div>
                </div>
                <div className="text-center">
                  <div>{days.sat}</div>
                  <div className="text-sm sm:text-base mt-1">{contact.satHours}</div>
                </div>
                <div className="text-center">
                  <div>{days.sun}</div>
                  <div className="text-sm sm:text-base mt-1">{contact.sunHours}</div>
                </div>
              </div>
            </div>
            <div className="w-full h-px bg-secondary/20 mt-12"></div>
          </div>

          {/* Get in Touch */}
          <div className="text-center">
            <h3 className="text-xl sm:text-2xl font-light text-secondary tracking-wide mb-8">
              {contact.getInTouch}
            </h3>
            <div className="space-y-2 text-secondary font-light text-lg">
              <a
                href="tel:040694568 28"
                className="block underline decoration-1 underline-offset-4 hover:text-red-700 transition-colors"
              >
                {contact.phoneValue}
              </a>
              <a
                href="mailto:mail@bigspuntino.de"
                className="block underline decoration-1 underline-offset-4 hover:text-red-700 transition-colors"
              >
                {contact.emailValue}
              </a>
              <a
                href="https://bigspuntino.de"
                target="_blank"
                rel="noopener noreferrer"
                className="block underline decoration-1 underline-offset-4 hover:text-red-700 transition-colors"
              >
                {contact.websiteValue}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OpeningHours;
