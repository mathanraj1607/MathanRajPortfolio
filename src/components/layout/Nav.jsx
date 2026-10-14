import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { site } from "../../data/site";
import { links } from "../../data/links";
import { Button } from "../ui/Button";
import { UnderlineLink } from "../ui/UnderlineLink";
import { LogoMark } from "../ui/LogoMark";
import { EASE_SECTION } from "../../lib/motion";

const NAV_LINKS = [
  { label: "Work", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (event) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? "border-b border-border bg-bg/80 backdrop-blur" : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
         <div className="flex-1"></div>
         <nav className="flex items-center gap-8 md:flex flex-shrink-0" aria-label="Primary">
           {NAV_LINKS.map((link) => (
             <UnderlineLink key={link.href} href={link.href}>
               {link.label}
             </UnderlineLink>
           ))}
         </nav>
         
         <div className="hidden md:block flex-shrink-0">
           <Button href={links.resumeUrl} target="_blank" rel="noreferrer" variant="secondary">
             Resume
           </Button>
         </div>

        <button
          type="button"
          className="text-fg md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            id="mobile-nav"
            aria-label="Mobile"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: EASE_SECTION }}
            className="overflow-hidden border-t border-border bg-bg md:hidden"
          >
            <div className="flex flex-col gap-1 px-6 py-4">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-2 py-3 text-sm text-fg-muted transition-colors duration-300 hover:text-fg"
                >
                  {link.label}
                </a>
              ))}
              <Button
                href={links.resumeUrl}
                target="_blank"
                rel="noreferrer"
                variant="secondary"
                className="mt-2 w-fit"
              >
                Resume
              </Button>
            </div>
  
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
