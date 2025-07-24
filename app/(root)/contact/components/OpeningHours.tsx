const OpeningHours = () => {
  return (
    <section className="py-16 bg-stone-100">
      {/* Desktop Layout */}
      <div className="hidden lg:block max-w-6xl mx-auto px-8">
        <div className="grid grid-cols-3 gap-16">
          {/* Opening Hours */}
          <div className="text-center">
            <div className="flex flex-col items-center">
              <h3 className="text-2xl font-light text-black tracking-wide mb-8">OPENING HOURS</h3>

              <div className="text-black font-light">
                {/* First line - 2 items */}
                <div className="flex justify-center gap-8 mb-4">
                  <div className="text-center">
                    <div className="mb-1">Wed–Fri</div>
                    <div>11:00 — 23:00</div>
                  </div>
                  <div className="text-center">
                    <div className="mb-1">Sat</div>
                    <div>10:00 — 23:00</div>
                  </div>
                </div>
                {/* Second line - 1 item centered */}
                <div className="flex justify-center">
                  <div className="text-center">
                    <div className="mb-1">Sun</div>
                    <div>10:00 — 17:00</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Spacer with vertical line */}
          <div className="flex justify-center">
            <div className="w-px h-56 bg-black"></div>
          </div>

          {/* Get in Touch */}
          <div className="text-center">
            <div className="flex flex-col items-center">
              <h3 className="text-2xl font-light text-black tracking-wide mb-8">GET IN TOUCH</h3>

              <div className="space-y-4 text-black font-light">
                <div className="space-y-4 text-black font-light">
                  <a
                    href="tel:040694568 28"
                    className="block underline decoration-1 underline-offset-2 hover:text-green-600 transition-colors"
                  >
                    040 / 69 45 68 28
                  </a>
                  <a
                    href="mailto:mail@bigspuntino.de"
                    className="block underline decoration-1 underline-offset-2 hover:text-green-600 transition-colors"
                  >
                    mail@bigspuntino.de
                  </a>
                  <a
                    href="https://bigspuntino.de"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block underline decoration-1 underline-offset-2 hover:text-green-600 transition-colors"
                  >
                    bigspuntino.de
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="lg:hidden max-w-md mx-auto px-8">
        <div className="space-y-16">
          {/* Opening Hours */}
          <div className="text-center">
            <h3 className="text-2xl font-light text-black tracking-wide mb-8">OPENING HOURS</h3>

            <div className="text-black font-light">
              {/* Mobile: Stack vertically */}
              <div className="sm:hidden space-y-6">
                <div className="text-center">
                  <div className="mb-2">Wed–Fri</div>
                  <div>11:00 — 23:00</div>
                </div>
                <div className="text-center">
                  <div className="mb-2">Sat</div>
                  <div>10:00 — 23:00</div>
                </div>
                <div className="text-center">
                  <div className="mb-2">Sun</div>
                  <div>10:00 — 17:00</div>
                </div>
              </div>

              {/* Small screens and up: 2 lines layout */}
              <div className="hidden sm:block">
                {/* First line - 2 items */}
                <div className="flex justify-center gap-6 mb-4">
                  <div className="text-center">
                    <div className="mb-1">Wed–Fri</div>
                    <div>11:00 — 23:00</div>
                  </div>
                  <div className="text-center">
                    <div className="mb-1">Sat</div>
                    <div>10:00 — 23:00</div>
                  </div>
                </div>
                {/* Second line - 1 item centered */}
                <div className="flex justify-center">
                  <div className="text-center">
                    <div className="mb-1">Sun</div>
                    <div>10:00 — 17:00</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full h-px bg-black/20 mt-12"></div>
          </div>

          {/* Get in Touch */}
          <div className="text-center">
            <h3 className="text-2xl font-light text-black tracking-wide mb-8">GET IN TOUCH</h3>

            <div className="space-y-6 text-black font-light">
              <div className="space-y-6 text-black font-light">
                <a
                  href="tel:040694568 28"
                  className="block underline decoration-1 underline-offset-2 hover:text-green-600 transition-colors"
                >
                  040 / 69 45 68 28
                </a>
                <a
                  href="mailto:mail@bigspuntino.de"
                  className="block underline decoration-1 underline-offset-2 hover:text-green-600 transition-colors"
                >
                  mail@bigspuntino.de
                </a>
                <a
                  href="https://bigspuntino.de"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block underline decoration-1 underline-offset-2 hover:text-green-600 transition-colors"
                >
                  bigspuntino.de
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OpeningHours;
