import { Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";
import { useDarkMode } from "@/components/context/DarkModeContext";

function ToggleDarkMode() {
   const { isDark, toggle } = useDarkMode();

   return (
      <button
         type="button"
         onClick={toggle}
         aria-pressed={isDark}
         aria-label="Toggle dark mode"
         className={cn(
            "group relative cursor-pointer inline-flex h-8 w-14 items-center rounded-full border border-border/60 bg-gradient-to-br from-muted/70 via-background to-muted/40 p-0.5 shadow-sm transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/40",
            "hover:shadow-md dark:from-neutral-900/60 dark:via-neutral-950/80 dark:to-neutral-900/60",
         )}
      >
         <span
            className={cn(
               "pointer-events-none grid h-7 w-7 place-items-center rounded-full bg-white text-primary-600 shadow transition-all duration-300",
               isDark
                  ? "translate-x-6 bg-neutral-950 text-secondary-400"
                  : "translate-x-0",
            )}
         >
            {isDark ? <Moon className="size-3.5" /> : <Sun className="size-3.5" />}
         </span>
      </button>
   );
}

export default ToggleDarkMode;
