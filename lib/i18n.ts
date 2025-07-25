// i18n.ts
import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

// Translation resources
const resources = {
  en: {
    translation: {
      navigation: {
        menu: 'Menu',
        home: 'Home',
        about: 'About',
        contact: 'Contact',
        events: 'Events',
        history: 'History',
        impressions: 'Impressions',
        jobs: 'Positions',
      },
      language: {
        title: 'Language',
        english: 'English',
        german: 'German',
      },
      social: {
        title: 'Social',
      },
      buttons: {
        bookTable: 'Book A Table',
        book: 'Book',
        submit: 'Submit',
        cancel: 'Cancel',
      },
      welcome: 'Welcome',
      hello: 'Hello, {{name}}!',
      description: 'This is a demo of i18next with Next.js',
      form: {
        name: 'Name',
        email: 'Email',
        message: 'Message',
        placeholder: {
          name: 'Enter your name',
          email: 'Enter your email',
          message: 'Enter your message',
        },
      },
      hero: {
        slide1: {
          title: 'Big Spuntino',
          description: 'Intimate Italian dining with authentic culinary traditions',
        },
        slide2: {
          title: 'Private Dining Room',
          description: 'Exclusive setting perfect for special occasions and celebrations',
        },
        slide3: {
          title: "Chef's Table Experience",
          description: 'Experience culinary artistry up close with our master chefs',
        },
        explore: 'ESPLORARE',
      },
      location: {
        title: "Don't overthink it, if it's tasty and inexpensive, it'll already be phenomenal*",
        description:
          'Big Spuntino, a world where the spirit of Italy is captured in every corner and each dish. Here, the sociable atmosphere is matched only by the authentic and wholesome Italian cuisine that brings family and friends together for an unfeigned and delightful experience. At Big Spuntino, the traditional meets the contemporary and it is reflected in the lush fabrics and warm lighting that invite guests to a space of domestic comfort.',
        footer: 'Experience the Heart of Italy at Big Spuntino*',
        explore: 'Explore',
      },
      flavors: {
        title: 'Italian Finest Flavors',
        description:
          "The cuisine at Big Spuntino restaurants tells a narrative of flavors, with each plate representing a chapter from the heart of Italy's culinary traditions. Classic dishes such as Tagliatelle Al Tartufo, Pistachio Pesto Trofie, and the iconic Milanese Cutlet are adorned with the finest harvests from Italian soils. Meanwhile, the theatrics of our artisanal pizza oven unveil crusts that combine the ethereal fluff of Naples with the crisp whisper of Rome. The dining experience is then completed with a selection of generous Italian desserts.",
      },
      architecture: {
        title: 'Italian Architectural Inspirations',
        description:
          "Whether in the heart of the City of Light or at the summit of the mountains, guests are greeted by a vivid setting from the moment they step through the door – it's contrasting, playful, and sophisticated, evoking the dolce vita. Architects have drawn inspiration from the beautiful, the wildest, and the most joyful aspects of Italy, blending noble materials with natural ones.",
      },
      newsletter: {
        title: 'Subscribe for news, recipes & love-letters',
        placeholder: 'Enter your email',
        terms: 'I accept the privacy policy and the terms of use',
        submit: 'Subscribe',
      },
      booking: {
        title: 'Big Spuntino',
        subtitle: 'Quick Reservations',
        guests: 'Guests',
        date: 'Date',
        time: 'Time',
        firstName: 'First Name',
        lastName: 'Last Name',
        email: 'Email Address',
        phone: 'Phone Number',
        reserve: 'Reserve',
        voucher: 'Received a gift voucher?',
        confirmation: 'Reservation Confirmed!',
        confirmationText: 'Thank you, {{firstName}} {{lastName}}!',
        confirmationDetails: 'Table for {{guests}} • {{date}} • {{time}}',
        location: 'Mühlenkamp 8, Hamburg',
        emailSent: 'A confirmation email has been sent to {{email}}.',
        lookingForward: 'We look forward to seeing you!',
        close: 'Close',
      },
      footer: {
        brand: 'Big Spuntino',
        description:
          'We are a team of passionate and creative individuals who are dedicated to providing the best possible experience for our guests.',
        portfolio: 'PORTFOLIO',
        careers: 'CAREERS WITH US',
        press: 'PRESS',
        contact: 'CONTACT',
        consulting: 'CONSULTING',
        about: 'ABOUT',
        privacy: 'PRIVACY POLICY',
        cookies: 'COOKIE POLICY',
        manageCookies: 'MANAGE COOKIES',
        terms: 'TERMS AND CONDITIONS',
        ethics: 'CODE OF ETHICS',
        legal: 'LEGAL NOTICE',
        sitemap: 'SITEMAP',
      },
      // Add this to your existing i18n.ts file under both 'en' and 'de' translations

      menus: {
        heroTitle: 'MENU',
        sectionTitle: 'A Tavola',
        sectionDescription:
          'The menu at Big Spuntino is a warm tribute to Italy\'s culinary heritage. From insalata, caprese and octopus to the crispiest foccacia, our menu offers an exquisite selection of classic spuntini (*ital. "snacks"). Of course, this also applies to the dolci: from the traditional crème the mascarpone to the fluffy light maritozzi, the Big Spuntino sweetens everyday life with the churros all italiana – Neapolitan doughnut sticks, served warm and perfect for dipping in melted chocolate with special toppings. In addition to the culinary experience, classic Italian cosmopolitan cocktails and wines from North and South can be tasted. The essence of an Italian summer is brought to life with a sparkling spritz, while the special aromas of our signature cocktail Spuntino 75 are the perfect prelude to an indulgent evening.',
        experienceTitle: 'Experience Big Spuntino',
        experienceDescription:
          'From morning cappuccino to evening aperitivo, every moment at Big Spuntino celebrates the Italian way of life. Our warm atmosphere and authentic flavors create the perfect setting for sharing good food and great company.',
        viewMenu: 'View Menu',
        viewFullMenu: 'View Full Menu (PDF)',
        categories: {
          brunch: {
            name: 'BRUNCH',
            description:
              'Weekend indulgence with Italian flair. Fresh pastries, frittatas, and signature breakfast spuntini.',
          },
          lunch: {
            name: 'Pranzo',
            description:
              'Midday classics featuring fresh insalata, crispy focaccia, and our famous spuntini selection.',
          },
          dinner: {
            name: 'Cena',
            description:
              'Evening elegance with octopus, caprese, and our full range of Italian culinary treasures.',
          },
          bar: {
            name: 'BAR',
            description:
              'Signature cocktails, sparkling spritz, and our special Spuntino 75 with Italian wines.',
          },
        },
        brandName: 'Big Spuntino',
      },
      events: {
        heroTitle: 'YOUR NEXT FAVORITE EVENT IS HERE – APERITIVO TO BRUNCH*',
        heroDescription:
          '*La vita é bella ... and there is always a reason to celebrate. The Big Spuntino lives Italian hospitality and coming together – and not only in the day bar itself, but also in its own private or business premises. Get in touch with our team to discuss your tailor-made events for the most special moments of pleasure.',
        contactButton: 'Contatto',
        viewDetails: 'View Details',
        footerText:
          'The Big Spuntino is already working diligently on spettacolo event series – at aperitif hour, dinner time, and of course, fantastico brunch. Soon to come – stay tuned.',
        eventList: [
          {
            date: '15.03.2024',
            time: '18:00',
            title: 'Aperitivo Serale',
            description:
              'Join us for an authentic Italian aperitivo experience with cicchetti and spritz',
          },
          {
            date: '22.03.2024',
            time: '19:30',
            title: 'Wine Tasting Evening',
            description: 'Discover the finest Italian wines paired with artisanal antipasti',
          },
          {
            date: '28.03.2024',
            time: '11:00',
            title: 'Brunch Domenicale',
            description: 'Sunday brunch with fresh cornetti, prosciutto, and Italian coffee',
          },
          {
            date: '05.04.2024',
            time: '20:00',
            title: 'Cena Privata',
            description: "Exclusive private dining experience with our chef's special menu",
          },
        ],
      },
      history: {
        title: "Don't overthink it, if it's tasty and inexpensive, it'll already be phenomenal*",
        subtitle:
          "*A brilliant man at East Mamma, whose name we don't remember, just a few weeks before opening.",
        paragraphs: [
          'Since the summer of 2025, the Big Spuntino has been the second Italian centerpiece of host Dario Pittarello. Dario opened the "Ristorante Pittarello" at Mühlenkamp in Hamburg-Winterhude back in 2015 and has been serving his guests with fine, authentic Italian cuisine ever since. But that wasn\'t enough – Dario couldn\'t miss the chance to visit the neighboring shop and has been welcoming old and new guests in a warm and lively day bar with spettacoloso snacks and drinks from Italian cuisine.',
          'The bright red interior combined with classic wood and brass elements that blend harmoniously with each other offers guests the ideal place to go for the "big times" and the alldry long: from boozy brunches on the weekends, to daily lunches to early aperitivo/dinner hour. Here, the Mediterranean joie de vivre of good enjoyment and good drinks as well as the celebration of being together can be perfectly lived. Here\'s to the "big times" with the small snacks!',
        ],
      },
      gallery: {
        title: 'Moments Captured, <br /> Stories Unfold.',
        description:
          'Immerse yourself in the vibrant atmosphere and culinary delights of Big Spuntino through our visual journey.',
      },
      contact: {
        title: 'Get in touch with Big Spuntino',
        description:
          'The Big Spuntino is a classic day bar where the Spuntini can be tasted all day long.',
        welcomeMessage:
          "We'd love to hear from you. Send us a message and we'll respond as soon as possible.",
        address: 'Address',
        addressValue: 'Mühlenkamp 8, 22303 Hamburg',
        phone: 'Phone',
        phoneValue: '040 / 69 45 68 28',
        email: 'Email',
        emailValue: 'mail@bigspuntino.de',
        website: 'Website',
        websiteValue: 'bigspuntino.de',
        openingHours: 'Opening Hours',
        getInTouch: 'Get in Touch',
        closed: 'Closed',
        wedHours: '11:00 - 23:00',
        thuHours: '11:00 - 23:00',
        friHours: '11:00 - 23:00',
        satHours: '10:00 - 23:00',
        sunHours: '10:00 - 17:00',
        form: {
          yourDetails: 'Your Details',
          firstName: 'First Name',
          lastName: 'Last Name',
          phone: 'Phone Number',
          email: 'Email Address',
          yourEnquiry: 'Your Enquiry',
          enquiryAbout: 'What is your enquiry about?',
          pleaseChoose: 'Please choose',
          reservation: 'Table Reservation',
          events: 'Private Events',
          catering: 'Catering',
          generalInfo: 'General Information',
          other: 'Other',
          shareEnquiry: 'Please share your enquiry',
          agreeTerms1: 'I have read and agreed to the',
          agreeTerms2: 'and the',
          terms: 'Terms and Conditions',
          privacyPolicy: 'Privacy Policy',
          submit: 'Submit Your Enquiry',
          placeholders: {
            firstName: 'Your first name',
            lastName: 'Your last name',
            phone: 'Your phone number',
            email: 'name@emailaddress.com',
            message: 'Type your message here...',
          },
        },
      },
      days: {
        mon: 'MON',
        tue: 'TUE',
        wed: 'WED',
        thu: 'THU',
        fri: 'FRI',
        sat: 'SAT',
        sun: 'SUN',
      },
      fullDays: {
        mon: 'Monday',
        tue: 'Tuesday',
        wed: 'Wednesday',
        thu: 'Thursday',
        fri: 'Friday',
        sat: 'Saturday',
        sun: 'Sunday',
      },
      jobs: {
        empowering: 'Andiamo',
        theFuture: 'the',
        together: 'Future together',
        description:
          'You want to become part of the Famiglia and work in the happiest day bar in Hamburg? Then get in touch with our team – we look forward to receiving your applications!',
        applyNow: 'Apply Now',
        joinOur: 'Join Our',
        famiglia: 'Famiglia',
        formDescription:
          "Fill out the application form below and let's start your journey with us.",
        form: {
          firstName: 'First Name',
          lastName: 'Last Name',
          phone: 'Phone',
          email: 'Email',
          positionDetails: 'Position Details',
          position: 'Position',
          experience: 'Experience',
          availability: 'Availability',
          cvResume: 'CV/Resume',
          whyJoin: 'Why Join Us?',
          choose: 'Choose',
          positions: {
            server: 'Server',
            bartender: 'Bartender',
            kitchen: 'Kitchen',
            host: 'Host',
            other: 'Other',
          },
          experiences: {
            entry: 'Entry Level',
            '1-2years': '1-2 Years',
            '3-5years': '3-5 Years',
            '5plus': '5+ Years',
          },
          availabilities: {
            fulltime: 'Full-time',
            parttime: 'Part-time',
            weekends: 'Weekends',
            flexible: 'Flexible',
          },
          uploadText: 'Drop your CV here or click to browse',
          fileTypes: 'PDF, DOC, DOCX up to 10MB',
          agreeTerms1: 'I agree to the',
          agreeTerms2: 'and',
          terms: 'Terms & Conditions',
          privacyPolicy: 'Privacy Policy',
          submit: 'Submit Application',
          placeholders: {
            firstName: 'Your first name',
            lastName: 'Your last name',
            phone: 'Phone number',
            email: 'your@email.com',
            message: 'Tell us what excites you about joining our team...',
          },
        },
      },

      privacy: {
        title: 'Privacy Policy',
        subtitle: 'Data Protection • Big Spuntino',
        contactTitle: 'CONTACT',
        addressTitle: 'Big Spuntino',
        addressLine1: 'Mühlenkamp 8',
        addressLine2: '22303 Hamburg',
        phone: 'Tel',
        phoneNumber: '040 / 69 45 68 28',
        email: 'Email',
        emailAddress: 'mail@bigspuntino.de',
        website: 'Web',
        websiteUrl: 'bigspuntino.de',
        policyTitle: 'PRIVACY POLICY',
        sections: {
          1: {
            title: '1. Responsible Party',
            content:
              'Big Spuntino, Mühlenkamp 8, 22303 Hamburg, Germany. Tel: +49 40 / 69 45 68 28, Email: mail@bigspuntino.de',
          },
          2: {
            title: '2. Collection of Personal Data',
            content:
              'We only collect personal data when you voluntarily provide it to us, for example when making reservations or contact inquiries. We use this data exclusively to process your request.',
          },
          3: {
            title: '3. Cookies and Tracking',
            content:
              'Our website only uses technically necessary cookies. We do not use additional tracking tools or analytics services.',
          },
          4: {
            title: '4. Your Rights',
            content:
              'You have the right to information, correction, deletion, and restriction of processing of your personal data. Please contact us using the contact details provided.',
          },
        },
        lastUpdated: 'Last updated: July 2025',
        backToHome: 'Back to Home',
      },
      cookie: {
        title: 'Cookie Policy',
        subtitle: 'Cookie Usage • Big Spuntino',
        introduction:
          'This Cookie Policy explains how Big Spuntino uses cookies and similar technologies when you visit our website. By using our website, you consent to the use of cookies in accordance with this policy.',
        policyTitle: 'COOKIE POLICY',
        sections: {
          1: {
            title: '1. What Are Cookies',
            content:
              'Cookies are small text files that are stored on your device when you visit a website. They are widely used to make websites work more efficiently and to provide information to the website owners.',
          },
          2: {
            title: '2. How We Use Cookies',
            content:
              'We use cookies to enhance your experience on our website, analyze site usage, and assist in our marketing efforts. Some cookies are essential for the website to function properly.',
          },
          3: {
            title: '3. Types of Cookies We Use',
            content:
              'We use session cookies (temporary) and persistent cookies (remain on your device). These include essential, analytics, preference, and marketing cookies as detailed in the table below.',
          },
          4: {
            title: '4. Managing Cookies',
            content:
              'You can control or delete cookies through your browser settings. However, disabling essential cookies may affect the functionality of our website.',
          },
        },
        tableTitle: 'COOKIES WE USE',
        tableHeaders: {
          name: 'Cookie Name',
          purpose: 'Purpose',
          duration: 'Duration',
        },
        cookies: {
          essential: {
            name: 'session_id',
            purpose: 'Maintain user session and security',
            duration: 'Session',
          },
          analytics: {
            name: '_ga',
            purpose: 'Track website usage and performance',
            duration: '2 years',
          },
          preferences: {
            name: 'lang_pref',
            purpose: 'Store language preferences',
            duration: '1 year',
          },
          marketing: {
            name: '_fbp',
            purpose: 'Track effectiveness of advertising',
            duration: '3 months',
          },
        },
        lastUpdated: 'Last updated: July 2025',
        backToHome: 'Back to Home',
      },

      terms: {
        title: 'Terms & Conditions',
        subtitle: 'Legal Information • Big Spuntino',
        introduction:
          'These Terms and Conditions govern your use of our website and services. By accessing or using our website, you agree to be bound by these Terms and all applicable laws and regulations.',
        termsTitle: 'TERMS & CONDITIONS',
        sections: {
          1: {
            title: '1. Definitions',
            content:
              '"We", "Us", "Our" refers to Big Spuntino. "You", "Your" refers to the user of our website. "Services" refers to all services provided through our website.',
          },
          2: {
            title: '2. Use of Website',
            content:
              'You agree to use our website only for lawful purposes. You must not use our website in any way that causes damage or impairs its availability or accessibility.',
          },
          3: {
            title: '3. Reservations',
            content:
              'Table reservations made through our website are subject to availability. We reserve the right to refuse or cancel reservations at our discretion.',
          },
          4: {
            title: '4. Intellectual Property',
            content:
              'All content on this website, including text, graphics, logos, and images, is our property and protected by copyright laws.',
          },
          5: {
            title: '5. Limitation of Liability',
            content:
              'We shall not be liable for any indirect, incidental, special, or consequential damages resulting from your use of our website or services.',
          },
          6: {
            title: '6. Changes to Terms',
            content:
              'We may revise these Terms at any time without notice. By continuing to use our website, you agree to be bound by the current version of these Terms.',
          },
        },
        contactTitle: 'CONTACT INFORMATION',
        addressTitle: 'Big Spuntino',
        addressLine1: 'Mühlenkamp 8',
        addressLine2: '22303 Hamburg, Germany',
        phone: 'Tel',
        phoneNumber: '040 / 69 45 68 28',
        email: 'Email',
        emailAddress: 'mail@bigspuntino.de',
        website: 'Web',
        websiteUrl: 'bigspuntino.de',
        lastUpdated: 'Last updated: July 2025',
        backToHome: 'Back to Home',
      },
      legal: {
        title: 'Legal Notice',
        subtitle: 'Legal Information • Big Spuntino',
        legalTitle: 'LEGAL INFORMATION',
        sections: {
          provider: {
            title: 'Service Provider',
            content: 'Big Spuntino\nMühlenkamp 8\n22303 Hamburg, Germany',
          },
          contact: {
            title: 'Contact',
            content: 'Phone: +49 40 69 45 68 28\nEmail: mail@bigspuntino.de',
          },
          vat: {
            title: 'VAT Information',
            content: 'VAT Identification Number: DE123456789',
          },
          disclaimer: {
            title: 'Disclaimer',
            content:
              'Despite careful content control, we assume no liability for the content of external links. The operators of linked pages are solely responsible for their content.',
          },
        },
        copyrightTitle: 'COPYRIGHT',
        copyrightContent:
          'All content and works on this website are protected by copyright. Any duplication, processing, distribution, or any form of commercialization beyond the scope of copyright law shall require the prior written consent of Big Spuntino.',
        lastUpdated: 'Last updated: July 2025',
        backToHome: 'Back to Home',
      },
      sitemap: {
        title: 'Sitemap',
        subtitle: 'Website Navigation • Big Spuntino',
        mainPages: 'Main Pages',
        legalPages: 'Legal Pages',
        companyInfo: 'Company Info',
        lastUpdated: 'Last updated: July 2025',
        backToHome: 'Back to Home',
      },
      cookieConsent: {
        title: 'We Use Cookies',
        description:
          'We use cookies to enhance your experience on our website. By clicking "Accept", you consent to our use of cookies.',
        learnMore: 'Learn more',
        accept: 'Accept',
        decline: 'Decline',
      },
    },
  },
  de: {
    translation: {
      navigation: {
        menu: 'Menü',
        home: 'Startseite',
        about: 'Über uns',
        contact: 'Kontakt',
        events: 'Veranstaltungen',
        history: 'Geschichte',
        impressions: 'Impressioni',
        jobs: 'Stellen',
      },
      language: {
        title: 'Sprache',
        english: 'Englisch',
        german: 'Deutsch',
      },
      social: {
        title: 'Soziale Medien',
      },
      buttons: {
        bookTable: 'Riservare',
        book: 'Buchen',
        submit: 'Absenden',
        cancel: 'Abbrechen',
      },
      welcome: 'Willkommen',
      hello: 'Hallo, {{name}}!',
      description: 'Dies ist eine Demo von i18next mit Next.js',
      form: {
        name: 'Name',
        email: 'E-Mail',
        message: 'Nachricht',
        placeholder: {
          name: 'Ihren Namen eingeben',
          email: 'Ihre E-Mail eingeben',
          message: 'Ihre Nachricht eingeben',
        },
      },
      hero: {
        slide1: {
          title: 'Big Spuntino',
          description: 'Intimes italienisches Essen mit authentischen kulinarischen Traditionen',
        },
        slide2: {
          title: 'Privater Speiseraum',
          description: 'Exklusive Umgebung perfekt für besondere Anlässe und Feiern',
        },
        slide3: {
          title: "Chef's Table Erlebnis",
          description: 'Erleben Sie kulinarische Kunst hautnah mit unseren Meisterköchen',
        },
        explore: 'ESPLORARE',
      },
      location: {
        title:
          'Denken Sie nicht zu viel nach, wenn es lecker und preiswert ist, wird es schon phänomenal sein*',
        description:
          'Big Spuntino, eine Welt, in der der Geist Italiens in jeder Ecke und jedem Gericht eingefangen wird. Hier wird die gesellige Atmosphäre nur von der authentischen und gesunden italienischen Küche übertroffen, die Familie und Freunde für ein ungekünsteltes und bezauberndes Erlebnis zusammenbringt. Bei Big Spuntino trifft Tradition auf Moderne und spiegelt sich in den üppigen Stoffen und der warmen Beleuchtung wider, die Gäste in einen Raum häuslicher Gemütlichkeit einlädt.',
        footer: 'Erleben Sie das Herz Italiens bei Big Spuntino*',
        explore: 'Entdecken',
      },
      flavors: {
        title: 'Italiens feinste Aromen',
        description:
          'Die Speisekarte des Big Spuntino ist ein herzliche Hommage an Italiens kulinarisches Erbe. Von Insalata Caprese und Pulpo bis hin zu den knusprigsten Foccacia bietet unsere Speisekarte eine exquisite Auswahl an klassischen Spuntini (*ital. „Snacks“). Dies natürlich auch bei den Dolci: Von der traditionellen Creme die Mascarpone bis hin zu den fluffig leichten Maritozzi versüßt das Big Spuntino den Alltag mit den Churros all italiana – neapolitanische Doughnut-Stangen, warm serviert und perfekt zum Eintauchen in geschmolzene Schokolade mit special Toppings. Ergänzend zum kulinarischen Erlebnis können klassische italienisch-kosmopolitische Cocktails und Weine aus Nord und Süd verköstigt werden. Die Essenz eines italienischen Sommers wird mit einem spritzigen Spritz zum Leben erweckt, während die besonderen Aromen unseres Signature-Cocktails Spuntino 75 der perfekten Auftakt für einen genussvollen Abend sind.',
      },
      architecture: {
        title: 'Italienische Architektur-Inspirationen',
        description:
          'Ob im Herzen der Stadt des Lichts oder auf dem Gipfel der Berge - die Gäste werden vom Moment des Eintritts an von einer lebendigen Kulisse begrüßt - sie ist kontrastreich, verspielt und anspruchsvoll und erinnert an die Dolce Vita. Die Architekten haben sich von den schönsten, wildesten und fröhlichsten Aspekten Italiens inspirieren lassen und edle Materialien mit natürlichen kombiniert.',
      },
      newsletter: {
        title: 'Abonnieren Sie Neuigkeiten, Rezepte & Liebesbriefe',
        placeholder: 'Ihre E-Mail eingeben',
        terms: 'Ich akzeptiere die Datenschutzrichtlinie und die Nutzungsbedingungen',
        submit: 'Abonnieren',
      },
      booking: {
        title: 'Big Spuntino',
        subtitle: 'Schnelle Reservierungen',
        guests: 'Gäste',
        date: 'Datum',
        time: 'Uhrzeit',
        firstName: 'Vorname',
        lastName: 'Nachname',
        email: 'E-Mail-Adresse',
        phone: 'Telefonnummer',
        reserve: 'Reservieren',
        voucher: 'Haben Sie einen Geschenkgutschein erhalten?',
        confirmation: 'Reservierung bestätigt!',
        confirmationText: 'Vielen Dank, {{firstName}} {{lastName}}!',
        confirmationDetails: 'Tisch für {{guests}} • {{date}} • {{time}}',
        location: 'Mühlenkamp 8, Hamburg',
        emailSent: 'Eine Bestätigungs-E-Mail wurde an {{email}} gesendet.',
        lookingForward: 'Wir freuen uns auf Ihren Besuch!',
        close: 'Schließen',
      },
      footer: {
        brand: 'Big Spuntino',
        description:
          'Wir sind ein Team leidenschaftlicher und kreativer Menschen, die sich dafür einsetzen, unseren Gästen das bestmögliche Erlebnis zu bieten.',
        portfolio: 'PORTFOLIO',
        careers: 'KARRIERE BEI UNS',
        press: 'PRESSE',
        contact: 'KONTAKT',
        consulting: 'BERATUNG',
        about: 'ÜBER UNS',
        privacy: 'DATENSCHUTZERKLÄRUNG',
        cookies: 'COOKIE-RICHTLINIE',
        manageCookies: 'COOKIES VERWALTEN',
        terms: 'ALLGEMEINE GESCHÄFTSBEDINGUNGEN',
        ethics: 'ETHIK-KODEX',
        legal: 'IMPRESSUM',
        sitemap: 'SITEMAP',
      },
      menus: {
        heroTitle: 'IL MENU',
        sectionTitle: 'A Tavola',
        sectionDescription:
          'Die Speisekarte des Big Spuntino ist ein herzliche Hommage an Italiens kulinarisches Erbe. Von Insalata Caprese und Pulpo bis hin zu den knusprigsten Foccacia bietet unsere Speisekarte eine exquisite Auswahl an klassischen Spuntini (*ital. „Snacks“). Dies natürlich auch bei den Dolci: Von der traditionellen Creme die Mascarpone bis hin zu den fluffig leichten Maritozzi versüßt das Big Spuntino den Alltag mit den Churros all italiana – neapolitanische Doughnut-Stangen, warm serviert und perfekt zum Eintauchen in geschmolzene Schokolade mit special Toppings. Ergänzend zum kulinarischen Erlebnis können klassische italienisch-kosmopolitische Cocktails und Weine aus Nord und Süd verköstigt werden. Die Essenz eines italienischen Sommers wird mit einem spritzigen Spritz zum Leben erweckt, während die besonderen Aromen unseres Signature-Cocktails Spuntino 75 der perfekten Auftakt für einen genussvollen Abend sind.',
        experienceTitle: 'Erleben Sie Big Spuntino',
        experienceDescription:
          'Vom morgendlichen Cappuccino bis zum abendlichen Aperitivo feiert jeder Moment bei Big Spuntino die italienische Lebensart. Unsere warme Atmosphäre und authentischen Aromen schaffen die perfekte Kulisse für gutes Essen und gute Gesellschaft.',
        viewMenu: 'Speisekarte ansehen',
        viewFullMenu: 'Vollständige Speisekarte ansehen (PDF)',
        categories: {
          brunch: {
            name: 'Italian Brunch',
            description:
              'Wochenendverwöhnung mit italienischem Flair. Frische Gebäck, Frittatas und unsere signature Frühstücks-Spuntini.',
          },
          lunch: {
            name: 'Pranzo',
            description:
              'Klassiker zur Mittagszeit mit frischer Insalata, knuspriger Focaccia und unserer berühmten Spuntini-Auswahl.',
          },
          dinner: {
            name: 'Cena',
            description:
              'Abendliche Eleganz mit Octopus, Caprese und unserer ganzen Palette italienischer kulinarischer Schätze.',
          },
          bar: {
            name: 'BAR',
            description:
              'Signature Cocktails, prickelnde Spritz und unser besonderer Spuntino 75 mit italienischen Weinen.',
          },
        },
        brandName: 'Big Spuntino',
      },
      events: {
        heroTitle: 'IHR NÄCHSTES LIEBLINGSEVENT – VOM APERITIVO BIS ZUM BRUNCH*',
        heroDescription:
          'La vita é bella… und es gibt immer einen Grund um zu feiern. Das Big Spuntino lebt die italienische Gastfreundschaft und das Zusammenkommen – und das nicht nur in der Tagesbar selbst, sondern auch in eigenen privaten oder geschäftlichen Räumlichkeiten. Nehmen Sie Kontakt mit unserem Team auf, um Ihre maßgeschneiderten Veranstaltungen für die besondersten Genussmomente zu besprechen.',
        contactButton: 'Kontakt',
        viewDetails: 'Details anzeigen',
        footerText:
          'Der Big Spuntino arbeitet bereits fleißig an spettacolo Event-Serien – zur Aperitif-Stunde, zum Abendessen und natürlich fantastico Brunch. Kommt bald – bleiben Sie dran.',
        eventList: [
          {
            date: '15.03.2024',
            time: '18:00',
            title: 'Abendlicher Aperitivo',
            description:
              'Erleben Sie einen authentischen italienischen Aperitivo mit Cicchetti und Spritz',
          },
          {
            date: '22.03.2024',
            time: '19:30',
            title: 'Weinverkostungsabend',
            description:
              'Entdecken Sie die feinsten italienischen Weine, kombiniert mit handwerklich hergestellten Antipasti',
          },
          {
            date: '28.03.2024',
            time: '11:00',
            title: 'Sonntagsbrunch',
            description:
              'Sonntagsbrunch mit frischen Cornetti, Prosciutto und italienischem Kaffee',
          },
          {
            date: '05.04.2024',
            time: '20:00',
            title: 'Privates Abendessen',
            description:
              'Exklusives Private-Dining-Erlebnis mit dem Spezialmenü unseres Küchenchefs',
          },
        ],
      },
      history: {
        title:
          'Denken Sie nicht zu viel nach - wenn es lecker und preiswert ist, wird es schon phänomenal sein*',
        subtitle:
          '*Ein brillanter Mann bei East Mamma, dessen Namen wir uns nicht erinnern, nur wenige Wochen vor der Eröffnung.',
        paragraphs: [
          'Seit Sommer 2025 ist das Big Spuntino das zweite italienische Herzstück des Gastgebers Dario Pittarello. Bereits 2015 eröffnete Dario das „Ristorante Pittarello" am Mühlenkamp in Hamburg-Winterhude und bewirtet seither seine Gäste mit feiner, authentischer italienischen Küche. Doch damit sollte es nicht genug sein – die Chance auf den Nachbarladen konnte sich Dario nicht entgehen lassen und begrüßt zusätzlich nun seither alte wie neue Gäste in einer herzlich-lebhaften Tagesbar mit spettacoloso Snacks und Drinks aus der italienischen Küche.',
          'Das knallig rote Interieur kombiniert mit klassischen Holz-&Messing-Elementen, die harmonisch miteinander verschmelzen, bietet den Gästen die ideale Anlaufstelle für die „big times" und das alldry long: von boozy Brunches an den Wochenenden, über daily Lunches bis hin zur earlier Aperitivo/Dinner-Hour. Hier kann die mediterrane Lebensfreude am guten Genuss und guten Getränken sowie dem Feiern des Zusammenseins perfekt gelebt werden. Auf die „big times" mit den kleinen Snacks!',
        ],
      },
      gallery: {
        title: 'Eingefangene Momente, <br /> erzählte Geschichten.',
        description:
          'Tauchen Sie ein in die lebendige Atmosphäre und kulinarischen Köstlichkeiten von Big Spuntino durch unsere visuelle Reise.',
      },
      contact: {
        title: 'Kontaktieren Sie Big Spuntino',
        description:
          'Das Big Spuntino ist eine klassische Tagesbar, in denen die Spuntini ganztags verköstigt werden können.',
        welcomeMessage:
          'Wir würden uns freuen, von Ihnen zu hören. Senden Sie uns eine Nachricht und wir werden uns so schnell wie möglich bei Ihnen melden.',
        address: 'Adresse',
        addressValue: 'Mühlenkamp 8, 22303 Hamburg',
        phone: 'Telefon',
        phoneValue: '040 / 69 45 68 28',
        email: 'E-Mail',
        emailValue: 'mail@bigspuntino.de',
        website: 'Webseite',
        websiteValue: 'bigspuntino.de',
        openingHours: 'Öffnungszeiten',
        getInTouch: 'Kontakt',
        closed: 'Geschlossen',
        wedHours: '11:00 - 23:00',
        thuHours: '11:00 - 23:00',
        friHours: '11:00 - 23:00',
        satHours: '10:00 - 23:00',
        sunHours: '10:00 - 17:00',
        form: {
          yourDetails: 'Ihre Daten',
          firstName: 'Vorname',
          lastName: 'Nachname',
          phone: 'Telefonnummer',
          email: 'E-Mail-Adresse',
          yourEnquiry: 'Ihre Anfrage',
          enquiryAbout: 'Worum geht es in Ihrer Anfrage?',
          pleaseChoose: 'Bitte auswählen',
          reservation: 'Tischreservierung',
          events: 'Private Veranstaltungen',
          catering: 'Catering',
          generalInfo: 'Allgemeine Informationen',
          other: 'Anderes',
          shareEnquiry: 'Bitte teilen Sie uns Ihre Anfrage mit',
          agreeTerms1: 'Ich habe die',
          agreeTerms2: 'und die',
          terms: 'Allgemeinen Geschäftsbedingungen',
          privacyPolicy: 'Datenschutzerklärung',
          submit: 'Anfrage absenden',
          placeholders: {
            firstName: 'Ihr Vorname',
            lastName: 'Ihr Nachname',
            phone: 'Ihre Telefonnummer',
            email: 'name@emailadresse.com',
            message: 'Geben Sie hier Ihre Nachricht ein...',
          },
        },
      },
      days: {
        mon: 'MO',
        tue: 'DI',
        wed: 'MI',
        thu: 'DO',
        fri: 'FR',
        sat: 'SA',
        sun: 'SO',
      },
      fullDays: {
        mon: 'Montag',
        tue: 'Dienstag',
        wed: 'Mittwoch',
        thu: 'Donnerstag',
        fri: 'Freitag',
        sat: 'Samstag',
        sun: 'Sonntag',
      },
      jobs: {
        empowering: 'Andiamo',
        theFuture: 'die',
        together: 'Zukunft gemeinsam',
        description:
          'Ihr wollt Teil der Famiglia werden und in der fröhlichsten Tagesbar Hamburgs arbeiten? Dann nehmt Kontakt mit unserem Team auf – wir freuen uns auf eure Bewerbungen!',
        applyNow: 'Jetzt bewerben',
        joinOur: 'Werden Sie Teil unserer',
        famiglia: 'Famiglia',
        formDescription:
          'Füllen Sie das Bewerbungsformular unten aus und starten Sie Ihre Reise mit uns.',
        form: {
          firstName: 'Vorname',
          lastName: 'Nachname',
          phone: 'Telefon',
          email: 'E-Mail',
          positionDetails: 'Stellendetails',
          position: 'Position',
          experience: 'Erfahrung',
          availability: 'Verfügbarkeit',
          cvResume: 'Lebenslauf',
          whyJoin: 'Warum möchten Sie uns beitreten?',
          choose: 'Auswählen',
          positions: {
            server: 'Kellner',
            bartender: 'Barkeeper',
            kitchen: 'Küche',
            host: 'Empfang',
            other: 'Andere',
          },
          experiences: {
            entry: 'Anfänger',
            '1-2years': '1-2 Jahre',
            '3-5years': '3-5 Jahre',
            '5plus': '5+ Jahre',
          },
          availabilities: {
            fulltime: 'Vollzeit',
            parttime: 'Teilzeit',
            weekends: 'Wochenenden',
            flexible: 'Flexibel',
          },
          uploadText: 'Ziehen Sie Ihren Lebenslauf hierher oder klicken Sie, um zu durchsuchen',
          fileTypes: 'PDF, DOC, DOCX bis zu 10MB',
          agreeTerms1: 'Ich stimme den',
          agreeTerms2: 'und der',
          terms: 'Allgemeinen Geschäftsbedingungen',
          privacyPolicy: 'Datenschutzerklärung',
          submit: 'Bewerbung absenden',
          placeholders: {
            firstName: 'Ihr Vorname',
            lastName: 'Ihr Nachname',
            phone: 'Telefonnummer',
            email: 'ihre@email.de',
            message: 'Erzählen Sie uns, was Sie daran begeistert, unserem Team beizutreten...',
          },
        },
      },
      privacy: {
        title: 'Datenschutz',
        subtitle: 'Datenschutz • Big Spuntino',
        contactTitle: 'KONTAKT',
        addressTitle: 'Big Spuntino',
        addressLine1: 'Mühlenkamp 8',
        addressLine2: '22303 Hamburg',
        phone: 'Tel',
        phoneNumber: '040 / 69 45 68 28',
        email: 'E-Mail',
        emailAddress: 'mail@bigspuntino.de',
        website: 'Web',
        websiteUrl: 'bigspuntino.de',
        policyTitle: 'DATENSCHUTZERKLÄRUNG',
        sections: {
          1: {
            title: '1. Verantwortlicher',
            content:
              'Big Spuntino, Mühlenkamp 8, 22303 Hamburg. Tel: 040 / 69 45 68 28, E-Mail: mail@bigspuntino.de',
          },
          2: {
            title: '2. Erhebung personenbezogener Daten',
            content:
              'Wir erheben personenbezogene Daten nur, wenn Sie uns diese freiwillig mitteilen, beispielsweise bei Reservierungen oder Kontaktanfragen. Diese Daten verwenden wir ausschließlich zur Bearbeitung Ihrer Anfrage.',
          },
          3: {
            title: '3. Cookies und Tracking',
            content:
              'Unsere Website verwendet nur technisch notwendige Cookies. Weitere Tracking-Tools oder Analysedienste setzen wir nicht ein.',
          },
          4: {
            title: '4. Ihre Rechte',
            content:
              'Sie haben das Recht auf Auskunft, Berichtigung, Löschung und Einschränkung der Verarbeitung Ihrer personenbezogenen Daten. Kontaktieren Sie uns gerne unter den oben genannten Kontaktdaten.',
          },
        },
        lastUpdated: 'Stand: Juli 2025',
        backToHome: 'Zurück zur Startseite',
      },
      cookie: {
        title: 'Cookie-Richtlinie',
        subtitle: 'Cookie-Verwendung • Big Spuntino',
        introduction:
          'Diese Cookie-Richtlinie erklärt, wie Big Spuntino Cookies und ähnliche Technologien verwendet, wenn Sie unsere Website besuchen. Durch die Nutzung unserer Website stimmen Sie der Verwendung von Cookies gemäß dieser Richtlinie zu.',
        policyTitle: 'COOKIE-RICHTLINIE',
        sections: {
          1: {
            title: '1. Was sind Cookies',
            content:
              'Cookies sind kleine Textdateien, die auf Ihrem Gerät gespeichert werden, wenn Sie eine Website besuchen. Sie werden häufig verwendet, um Websites effizienter arbeiten zu lassen und Informationen an die Website-Betreiber zu liefern.',
          },
          2: {
            title: '2. Wie wir Cookies verwenden',
            content:
              'Wir verwenden Cookies, um Ihr Erlebnis auf unserer Website zu verbessern, die Nutzung der Website zu analysieren und unsere Marketingbemühungen zu unterstützen. Einige Cookies sind für die ordnungsgemäße Funktion der Website unerlässlich.',
          },
          3: {
            title: '3. Arten von Cookies, die wir verwenden',
            content:
              'Wir verwenden Session-Cookies (temporär) und persistente Cookies (bleiben auf Ihrem Gerät). Dazu gehören essentielle, Analyse-, Präferenz- und Marketing-Cookies, wie in der folgenden Tabelle detailliert beschrieben.',
          },
          4: {
            title: '4. Cookies verwalten',
            content:
              'Sie können Cookies über Ihre Browsereinstellungen kontrollieren oder löschen. Das Deaktivieren essentieller Cookies kann jedoch die Funktionalität unserer Website beeinträchtigen.',
          },
        },
        tableTitle: 'VERWENDETE COOKIES',
        tableHeaders: {
          name: 'Cookie-Name',
          purpose: 'Zweck',
          duration: 'Dauer',
        },
        cookies: {
          essential: {
            name: 'session_id',
            purpose: 'Benutzersitzung und Sicherheit aufrechterhalten',
            duration: 'Sitzung',
          },
          analytics: {
            name: '_ga',
            purpose: 'Website-Nutzung und Leistung verfolgen',
            duration: '2 Jahre',
          },
          preferences: {
            name: 'lang_pref',
            purpose: 'Spracheinstellungen speichern',
            duration: '1 Jahr',
          },
          marketing: {
            name: '_fbp',
            purpose: 'Wirksamkeit der Werbung verfolgen',
            duration: '3 Monate',
          },
        },
        lastUpdated: 'Stand: Juli 2025',
        backToHome: 'Zurück zur Startseite',
      },
      terms: {
        title: 'Allgemeine Geschäftsbedingungen',
        subtitle: 'Rechtliche Informationen • Big Spuntino',
        introduction:
          'Diese Allgemeinen Geschäftsbedingungen regeln Ihre Nutzung unserer Website und Dienstleistungen. Durch den Zugriff auf oder die Nutzung unserer Website erklären Sie sich mit diesen Bedingungen und allen geltenden Gesetzen und Vorschriften einverstanden.',
        termsTitle: 'ALLGEMEINE GESCHÄFTSBEDINGUNGEN',
        sections: {
          1: {
            title: '1. Definitionen',
            content:
              '"Wir", "Uns", "Unser" bezieht sich auf Big Spuntino. "Sie", "Ihr" bezieht sich auf den Nutzer unserer Website. "Dienstleistungen" bezieht sich auf alle über unsere Website angebotenen Dienstleistungen.',
          },
          2: {
            title: '2. Nutzung der Website',
            content:
              'Sie erklären sich damit einverstanden, unsere Website nur für rechtmäßige Zwecke zu nutzen. Sie dürfen unsere Website nicht in einer Weise nutzen, die Schäden verursacht oder deren Verfügbarkeit oder Zugänglichkeit beeinträchtigt.',
          },
          3: {
            title: '3. Reservierungen',
            content:
              'Tischreservierungen über unsere Website unterliegen der Verfügbarkeit. Wir behalten uns das Recht vor, Reservierungen nach unserem Ermessen abzulehnen oder zu stornieren.',
          },
          4: {
            title: '4. Geistiges Eigentum',
            content:
              'Alle Inhalte dieser Website, einschließlich Texte, Grafiken, Logos und Bilder, sind unser Eigentum und durch Urheberrechtsgesetze geschützt.',
          },
          5: {
            title: '5. Haftungsbeschränkung',
            content:
              'Wir haften nicht für indirekte, zufällige, besondere oder Folgeschäden, die sich aus Ihrer Nutzung unserer Website oder Dienstleistungen ergeben.',
          },
          6: {
            title: '6. Änderungen der Bedingungen',
            content:
              'Wir können diese Bedingungen jederzeit ohne vorherige Ankündigung überarbeiten. Durch die weitere Nutzung unserer Website erklären Sie sich mit der aktuellen Version dieser Bedingungen einverstanden.',
          },
        },
        contactTitle: 'KONTAKTINFORMATIONEN',
        addressTitle: 'Big Spuntino',
        addressLine1: 'Mühlenkamp 8',
        addressLine2: '22303 Hamburg, Deutschland',
        phone: 'Tel',
        phoneNumber: '040 / 69 45 68 28',
        email: 'E-Mail',
        emailAddress: 'mail@bigspuntino.de',
        website: 'Web',
        websiteUrl: 'bigspuntino.de',
        lastUpdated: 'Stand: Juli 2025',
        backToHome: 'Zurück zur Startseite',
      },
      legal: {
        title: 'Impressum',
        subtitle: 'Rechtliche Informationen • Big Spuntino',
        legalTitle: 'RECHTLICHE HINWEISE',
        sections: {
          provider: {
            title: 'Dienstanbieter',
            content: 'Big Spuntino\nMühlenkamp 8\n22303 Hamburg, Deutschland',
          },
          contact: {
            title: 'Kontakt',
            content: 'Telefon: +49 40 69 45 68 28\nE-Mail: mail@bigspuntino.de',
          },
          vat: {
            title: 'Umsatzsteuer',
            content: 'Umsatzsteuer-Identifikationsnummer: DE123456789',
          },
          disclaimer: {
            title: 'Haftungsausschluss',
            content:
              'Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung für die Inhalte externer Links. Für den Inhalt der verlinkten Seiten sind ausschließlich deren Betreiber verantwortlich.',
          },
        },
        copyrightTitle: 'URHEBERRECHT',
        copyrightContent:
          'Alle Inhalte und Werke auf dieser Website sind urheberrechtlich geschützt. Jede Vervielfältigung, Bearbeitung, Verbreitung oder jede andere Form der Verwertung außerhalb der Grenzen des Urheberrechts bedarf der vorherigen schriftlichen Zustimmung von Big Spuntino.',
        lastUpdated: 'Stand: Juli 2025',
        backToHome: 'Zurück zur Startseite',
      },
      sitemap: {
        title: 'Sitemap',
        subtitle: 'Website Navigation • Big Spuntino',
        mainPages: 'Hauptseiten',
        legalPages: 'Rechtliche Seiten',
        companyInfo: 'Firmeninformationen',
        lastUpdated: 'Stand: Juli 2025',
        backToHome: 'Zurück zur Startseite',
      },
      cookieConsent: {
        title: 'Wir verwenden Cookies',
        description:
          'Wir verwenden Cookies, um Ihr Erlebnis auf unserer Website zu verbessern. Durch Klicken auf "Akzeptieren" stimmen Sie der Verwendung von Cookies zu.',
        learnMore: 'Mehr erfahren',
        accept: 'Akzeptieren',
        decline: 'Ablehnen',
      },
    },
  },
};

// Initialize i18n only if not already initialized
if (!i18n.isInitialized) {
  i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
      resources,
      fallbackLng: 'de',
      debug: false,
      lng: 'de', // Set default language to German
      interpolation: {
        escapeValue: false,
      },
      detection: {
        order: ['localStorage', 'navigator', 'htmlTag'],
        caches: ['localStorage'],
      },
    });
}

export default i18n;
