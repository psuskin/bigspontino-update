'use client';

import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

export function ModeToggle() {
  const { setTheme } = useTheme();

  return (
    <button
      onClick={() => setTheme((theme) => (theme === 'dark' ? 'light' : 'dark'))}
      className="relative flex h-[2.4rem] w-[5.6rem] shrink-0 cursor-pointer items-center rounded-full border-2 border-white/30 bg-background/10 shadow-sm focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 dark:border-gray-800/80 dark:bg-gray-800/80 dark:ring-offset-gray-900/90 dark:focus:ring-offset-gray-900/90"
    >
      <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
      <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
      <span className="sr-only">Toggle theme</span>
    </button>
  );
}
