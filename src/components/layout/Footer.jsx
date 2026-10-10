import { site } from "../../data/site";
import { links } from "../../data/links";
import { UnderlineLink } from "../ui/UnderlineLink";
import { LogoMark } from "../ui/LogoMark";

const SOCIALS = [
  { label: "LinkedIn", href: links.linkedin },
  { label: "Fiverr", href: links.fiverr },
  { label: "Instagram", href: links.instagram },
];

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 py-12 sm:flex-row sm:justify-between">
        <span className="flex items-center gap-2 text-sm font-semibold text-fg">
          <LogoMark className="h-5 w-5" />
          {site.brand}
        </span>

        <div className="flex items-center gap-6">
          {SOCIALS.map(({ label, href }) => (
            <UnderlineLink key={label} href={href} muted target="_blank" rel="noreferrer">
              {label}
            </UnderlineLink>
          ))}
        </div>

        <p className="text-xs text-fg-subtle">
          © {new Date().getFullYear()} {site.name} — {site.brand}.
        </p>
      </div>
    </footer>
  );
}
