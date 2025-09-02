import { Sun, Moon } from 'lucide-react';
import { useState } from 'react';

const Navbar = () => {
   const [theme, setTheme] = useState<'light' | 'dark'>('dark');

   const toggleTheme = () => {
      setTheme(theme === 'light' ? 'dark' : 'light');
      document.documentElement.setAttribute('data-theme', theme);
      localStorage.setItem('theme', theme);
   };

   return (
      <header>
         <div className="mx-auto flex max-w-3xl items-center justify-between gap-4 px-4 py-3">
            <a href="/" target="_self" className="transition-colors duration-300 ease-in-out flex shrink-0 items-center justify-center gap-3">
               <span className="hidden h-full text-lg font-medium min-[300px]:block">No.1</span>
            </a>
            <div className="flex items-center sm:gap-4">
               <nav className="hidden items-center gap-4 text-sm sm:flex sm:gap-6">
                  <a href="/blog" target="_self" className="inline-block duration-300 ease-in-out text-foreground/60 hover:text-foreground/80 capitalize transition-colors">Blog</a>
                  <a href="/projects" target="_self" className="inline-block duration-300 ease-in-out text-foreground/60 hover:text-foreground/80 capitalize transition-colors">Projects</a>
                  <a href="/gallery" target="_self" className="inline-block duration-300 ease-in-out text-foreground/60 hover:text-foreground/80 capitalize transition-colors">Gallery</a>
               </nav>
               <button data-slot="button" className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50 -me-2 size-8 cursor-pointer" id="theme-toggle" title="Toggle theme" onClick={toggleTheme}>
                  <Sun className="size-4 scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
                  <Moon className="absolute size-4 scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
                  <span className="sr-only">Toggle theme</span>
               </button>
            </div>
         </div>
      </header>
   )
};

export default Navbar;