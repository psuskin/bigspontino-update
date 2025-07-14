'use client';
import FacebookIcon from '@/components/icons/FacebookIcon';
import InstagramIcon from '@/components/icons/InstagramIcon';
import PlusIcon from '@/components/icons/PlusIcon';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import Link from 'next/link';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="flex items-center px-6 bg-white relative">
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger className="flex items-center gap-2 text-2xl">
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
          className="my-9 mx-6 rounded-none border border-amber-300 bg-transparent"
          style={{ height: 'calc(100vh - 4rem)' }}
        >
          <div className="w-xl h-full bg-amber-300">
            <SheetHeader>
              <SheetTitle></SheetTitle>
              <SheetDescription></SheetDescription>
              <div
                style={{ height: 'calc(100vh - 4rem)' }}
                className="w-full flex gap-1.5 flex-col h-full items-center justify-center"
              >
                <Link
                  href="/"
                  className="block text-6xl font-medium text-center hover:italic hover:underline hover:underline-offset-1 hover:decoration-5"
                >
                  Home
                </Link>
                <Link
                  href="/"
                  className="block text-6xl font-medium text-center hover:italic hover:underline hover:underline-offset-1 hover:decoration-5"
                >
                  Our Story
                </Link>
                <Link
                  href="/"
                  className="block text-6xl font-medium text-center hover:italic hover:underline hover:underline-offset-1 hover:decoration-5"
                >
                  Jobs
                </Link>
                <Link
                  href="/"
                  className="block text-6xl font-medium text-center hover:italic hover:underline hover:underline-offset-1 hover:decoration-5"
                >
                  FAQ
                </Link>
              </div>
            </SheetHeader>
          </div>
        </SheetContent>
      </Sheet>

      {/* Centered title */}
      <div className="absolute inset-0 flex items-center justify-center -z-20">
        <h1 className="text-2xl">BigSpontino</h1>
      </div>

      {/* Right side content */}
      <div className="flex items-center ml-auto">
        <div className="flex items-center gap-2 pe-3">
          <Link href={'www.google.com'} className="text-primary">
            <InstagramIcon />
          </Link>
          <Link href={'www.google.com'} className="text-primary">
            <FacebookIcon />
          </Link>
        </div>
        <div className="w-4 h-[1px] bg-gray-600"></div>
        <div className="text-2xl flex items-center gap-1 px-3">
          <button className="">De</button>,<button className="">En</button>
        </div>
        <button className="px-6 py-0.5 bg-amber-300 text-2xl">Book A Table</button>
      </div>
    </header>
  );
};

export default Navbar;
