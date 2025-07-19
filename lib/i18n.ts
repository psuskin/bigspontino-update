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
        history: 'La Storia',
        impressions: 'Impressions',
        jobs: 'Jobs',
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
          title: 'Il Bambini Club',
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
        explore: 'EXPLORE',
      },
      location: {
        title: "Don't overthink it, if it's tasty and inexpensive, it'll already be phenomenal*",
        description:
          'BigSpontino, a world where the spirit of Italy is captured in every corner and each dish. Here, the sociable atmosphere is matched only by the authentic and wholesome Italian cuisine that brings family and friends together for an unfeigned and delightful experience. At BigSpontino, the traditional meets the contemporary and it is reflected in the lush fabrics and warm lighting that invite guests to a space of domestic comfort.',
        footer: 'Experience the Heart of Italy at BigSpontino*',
        explore: 'Explore',
      },
      flavors: {
        title: 'Italian Finest Flavors',
        description:
          "The cuisine at BigSpontino restaurants tells a narrative of flavors, with each plate representing a chapter from the heart of Italy's culinary traditions. Classic dishes such as Tagliatelle Al Tartufo, Pistachio Pesto Trofie, and the iconic Milanese Cutlet are adorned with the finest harvests from Italian soils. Meanwhile, the theatrics of our artisanal pizza oven unveil crusts that combine the ethereal fluff of Naples with the crisp whisper of Rome. The dining experience is then completed with a selection of generous Italian desserts.",
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
        title: 'BigSpontino',
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
        location: 'Veteranenstraße 9, Berlin',
        emailSent: 'A confirmation email has been sent to {{email}}.',
        lookingForward: 'We look forward to seeing you!',
        close: 'Close',
      },
      footer: {
        brand: 'BigSpontino',
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
            name: 'LUNCH',
            description:
              'Midday classics featuring fresh insalata, crispy focaccia, and our famous spuntini selection.',
          },
          dinner: {
            name: 'DINNER',
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
        history: 'La Storia',
        impressions: 'Eindrücke',
        jobs: 'Jobs',
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
        bookTable: 'Tisch reservieren',
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
          title: 'Il Bambini Club',
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
        explore: 'ENTDECKEN',
      },
      location: {
        title:
          'Denken Sie nicht zu viel nach, wenn es lecker und preiswert ist, wird es schon phänomenal sein*',
        description:
          'BigSpontino, eine Welt, in der der Geist Italiens in jeder Ecke und jedem Gericht eingefangen wird. Hier wird die gesellige Atmosphäre nur von der authentischen und gesunden italienischen Küche übertroffen, die Familie und Freunde für ein ungekünsteltes und bezauberndes Erlebnis zusammenbringt. Bei BigSpontino trifft Tradition auf Moderne und spiegelt sich in den üppigen Stoffen und der warmen Beleuchtung wider, die Gäste in einen Raum häuslicher Gemütlichkeit einlädt.',
        footer: 'Erleben Sie das Herz Italiens bei BigSpontino*',
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
        title: 'BigSpontino',
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
        location: 'Veteranenstraße 9, Berlin',
        emailSent: 'Eine Bestätigungs-E-Mail wurde an {{email}} gesendet.',
        lookingForward: 'Wir freuen uns auf Ihren Besuch!',
        close: 'Schließen',
      },
      footer: {
        brand: 'BigSpontino',
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
          'Die Speisekarte von Big Spuntino ist eine liebevolle Hommage an das kulinarische Erbe Italiens. Von Insalata, Caprese und Octopus bis zum knusprigsten Foccacia bietet unsere Karte eine exquisite Auswahl klassischer Spuntini (*ital. "Snacks"). Natürlich gilt das auch für die Dolci: vom traditionellen Crème Mascarpone bis zu den fluffig-leichten Maritozzi versüßt Big Spuntino den Alltag mit den Churros all italiana - neapolitanische Donut-Stäbchen, warm serviert und perfekt zum Eintauchen in geschmolzene Schokolade mit besonderen Toppings.',
        experienceTitle: 'Erleben Sie Big Spuntino',
        experienceDescription:
          'Vom morgendlichen Cappuccino bis zum abendlichen Aperitivo feiert jeder Moment bei Big Spuntino die italienische Lebensart. Unsere warme Atmosphäre und authentischen Aromen schaffen die perfekte Kulisse für gutes Essen und gute Gesellschaft.',
        viewMenu: 'Speisekarte ansehen',
        viewFullMenu: 'Vollständige Speisekarte ansehen (PDF)',
        categories: {
          brunch: {
            name: 'BRUNCH',
            description:
              'Wochenendverwöhnung mit italienischem Flair. Frische Gebäck, Frittatas und unsere signature Frühstücks-Spuntini.',
          },
          lunch: {
            name: 'MITTAGESSEN',
            description:
              'Klassiker zur Mittagszeit mit frischer Insalata, knuspriger Focaccia und unserer berühmten Spuntini-Auswahl.',
          },
          dinner: {
            name: 'ABENDESSEN',
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
      fallbackLng: 'en',
      debug: false,
      lng: 'en', // Set default language
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
