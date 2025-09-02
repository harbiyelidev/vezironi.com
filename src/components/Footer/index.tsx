import { Github, Twitter, Bot } from 'lucide-react';

const Footer = () => {
   return (
      <footer className="py-4">
         <div className="mx-auto flex max-w-3xl flex-col items-center justify-center gap-y-2 px-4 sm:flex-row sm:justify-between">
            <div className="flex flex-wrap items-center justify-center gap-x-2 text-center">
               <span className="text-muted-foreground text-sm">© 2025 All rights reserved.</span>
               <div data-orientation="vertical" role="none" data-slot="separator-root" className="bg-border shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px hidden h-4! sm:block"></div>
               <p className="text-muted-foreground text-sm">Made with 🤍 by <a href="https://github.com/harbiyelidev" target="_blank" className="inline-block transition-colors duration-300 ease-in-out underline decoration-muted-foreground underline-offset-[3px] hover:decoration-foreground text-foreground"> harbiyelidev </a>!</p>
            </div>
            <ul className="flex flex-wrap gap-2" role="list">
               <li>
                  <a href="https://github.com/harbiyelidev" target="_blank" className="duration-300 ease-in-out inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border bg-background hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 size-9" aria-label="GitHub" title="GitHub">
                     <Github className="size-4" />
                  </a>
               </li>
               <li>
                  <a href="https://x.com/vezir_oni" target="_blank" className="duration-300 ease-in-out inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border bg-background hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 size-9" aria-label="Twitter" title="Twitter">
                     <Twitter className="size-4" />
                  </a>
               </li>
               <li>
                  <a href="https://discord.com/users/996488031932514394" target="_blank" className="duration-300 ease-in-out inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border bg-background hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 size-9" aria-label="Discord" title="Discord">
                     <Bot className="size-4" />
                  </a>
               </li>
            </ul>
         </div>
      </footer>
   )
}

export default Footer
