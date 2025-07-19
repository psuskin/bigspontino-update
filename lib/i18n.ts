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
        bookTable: 'Tisch Reservieren',
        book: 'Buchen',
        submit: 'Senden',
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
          name: 'Geben Sie Ihren Namen ein',
          email: 'Geben Sie Ihre E-Mail ein',
          message: 'Geben Sie Ihre Nachricht ein',
        },
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
