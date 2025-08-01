/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const BookingModal = ({ isOpen, onClose }: BookingModalProps) => {
  const { t } = useTranslation();
  const [iframeUrl, setIframeUrl] = useState("");

  useEffect(() => {
    if (isOpen) {
      // Create the iframe URL with the booking widget
      const htmlContent = `
        <!DOCTYPE html>
        <html>
        <head>
          <title>Book a Table - BigSpuntino</title>
          <style>
            body { 
              margin: 0; 
              padding: 0; 
              font-family: Arial, sans-serif; 
              background: #f5f5f5; 
              height: 100vh;
              overflow: hidden;
            }
            .container { 
              width: 100%; 
              height: 100vh; 
              background: white; 
              display: flex;
              justify-content: center;
              align-items: center;
            }
            #quandoo-booking-widget {
              /* The widget script will define its own size */
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div id="quandoo-booking-widget"></div>
          </div>
          <script src="https://booking-widget.quandoo.com/index.js" data-merchant-id="107538" data-theme="light" data-primary-color="1870C3"></script>
        </body>
        </html>
      `;

      const blob = new Blob([htmlContent], { type: "text/html" });
      const url = URL.createObjectURL(blob);
      setIframeUrl(url);
    }

    return () => {
      if (iframeUrl) {
        URL.revokeObjectURL(iframeUrl);
      }
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full h-full max-w-4xl max-h-[90vh] bg-white rounded-none shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="absolute top-0 left-0 right-0 z-10 bg-primary text-white p-4 flex justify-between items-center">
              <h2 className="text-xl font-semibold">
                {t("buttons.bookTable") || "Book A Table"}
              </h2>
              <button
                onClick={onClose}
                className="text-white hover:text-gray-200 transition-colors"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Iframe Container */}
            <div className="w-full h-full pt-16">
              {iframeUrl && (
                <iframe
                  src={iframeUrl}
                  className="w-full h-full border-0"
                  title="Booking Widget"
                  allow="fullscreen"
                />
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default BookingModal;
