'use client';
import FacebookIcon from '@/components/icons/FacebookIcon';
import InstagramIcon from '@/components/icons/InstagramIcon';
import PlusIcon from '@/components/icons/PlusIcon';
import BookingSheet from '@/components/ui/booking-sheet';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isBookingSheetOpen, setIsBookingSheetOpen] = useState(false); // New state for booking sheet
  const pathname = usePathname();
  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/menus', label: 'Il Menu (menus)' },
    { href: '/events', label: 'Events' },
    { href: '/history', label: 'La Storia (history)' },
    { href: '/impressions', label: 'Impressions (Bildgalerie)' },
    { href: '/contact', label: 'Contatto (contact / opening hours)' },
    { href: '/jobs', label: 'Jobs' },
  ];
  // const socialLinks = [
  //   { href: 'https://www.instagram.com/', label: 'Instagram' },
  //   { href: 'https://www.facebook.com/', label: 'Facebook' },
  // ];
  const processText = (text: string) => {
    const parts = text.split('(');
    const mainText = parts[0].trim();
    const bracketed = parts[1] ? `(${parts[1]}` : '';

    return { mainText, bracketed };
  };

  return (
    <header className="flex items-center px-6 bg-white sticky top-0 z-50 w-full">
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger className="flex items-center gap-2 text-2xl z-20">
          <span>Menu</span>
          <div className="relative">
            <PlusIcon
              className={`w-6 h-6 transition-transform duration-300 ease-in-out ${
                isOpen ? 'rotate-45' : 'rotate-0'
              }`}
            />
          </div>
        </SheetTrigger>
        <SheetContent
          className="my-10 mx-6 rounded-none border border-amber-300 bg-transparent pointer-events-none w-xl"
          style={{ height: 'calc(100vh - 4rem)' }}
        >
          <div className="w-xl h-full bg-amber-300 pointer-events-auto rounded-none">
            <SheetHeader>
              <SheetTitle></SheetTitle>
              <SheetDescription></SheetDescription>
              <div
                style={{ height: 'calc(100vh - 4rem)' }}
                className="w-full flex gap-0.5 flex-col h-full items-center justify-center ps-16 pe-10"
              >
                {/* <div className="flex items-center mb-4 gap-4">
                  <h5 className="text-xl mb-2 font-narrow">Menu</h5>
                  <div className="w-8 h-[1px] bg-gray-600"></div>
                </div> */}
                {navLinks.map((link) => {
                  const { mainText, bracketed } = processText(link.label);

                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className={`block font-medium text-center relative after:absolute after:bottom-1.5 after:left-0 after:h-[3px] after:w-full after:origin-bottom-right after:scale-x-0 dark:after:bg-black after:bg-neutral-800 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom-left hover:after:scale-x-100 hover:italic  ${
                        pathname === link.href ? 'italic after:scale-x-100' : ''
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <span className="text-5xl leading-tight">{mainText}</span>
                        {bracketed && (
                          <span className="text-xl uppercase leading-tight">
                            {bracketed.split('(')[1].split(')')[0]}
                          </span>
                        )}
                      </div>
                    </Link>
                  );
                })}
                {/* <div className="flex items-center mt-10 mb-4 gap-4">
                  <h5 className="text-xl mb-2 font-narrow">Social</h5>
                  <div className="w-8 h-[1px] bg-gray-600"></div>
                </div>
                {socialLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`block text-5xl font-medium text-center relative after:absolute after:bottom-0 after:left-0 after:h-[3px] after:w-full after:origin-bottom-right after:scale-x-0 dark:after:bg-black after:bg-neutral-800 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom-left hover:after:scale-x-100 hover:italic ${
                      pathname === link.href ? 'italic after:scale-x-100' : ''
                    }`}
                  >
                    {link.label}
                  </Link>
                ))} */}
              </div>
            </SheetHeader>
          </div>
        </SheetContent>
      </Sheet>
      {/* Centered title */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <Link href={'/'} className="">
          <h1 className="text-2xl">BigSpontino</h1>
        </Link>
      </div>
      {/* Right side content */}
      <div className="flex items-center ml-auto z-20">
        <div className="flex items-center gap-2 pe-3">
          <Link href={'https://www.google.com'} className="text-primary">
            <InstagramIcon />
          </Link>
          <Link href={'https://www.google.com'} className="text-primary">
            <FacebookIcon />
          </Link>
        </div>
        <div className="w-4 h-[1px] bg-gray-600"></div>
        <div className="text-2xl flex items-center gap-1 px-3">
          <button className="hover:text-amber-500">De</button>,
          <button className="hover:text-amber-500">En</button>
        </div>
        {/* Booking Sheet Integration */}
        <Sheet open={isBookingSheetOpen} onOpenChange={setIsBookingSheetOpen}>
          <SheetTrigger asChild>
            <button className="group relative inline-flex h-10 items-center cursor-pointer justify-center overflow-hidden rounded-none font-medium">
              <div className="inline-flex h-10 translate-y-0 items-center justify-center bg-amber-300 text-2xl px-6 text-black transition group-hover:-translate-y-[150%] rounded-none">
                Book A Table
              </div>
              <div className="absolute inline-flex h-10 w-full translate-y-[100%] items-center justify-center text-2xl bg-black px-6 text-neutral-50 transition duration-300 group-hover:translate-y-0 rounded-none">
                Book A Table
              </div>
            </button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="w-full sm:max-w-md p-0 [&>button]:hidden rounded-none"
          >
            <BookingSheet setIsOpen={setIsBookingSheetOpen} />
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Navbar;
