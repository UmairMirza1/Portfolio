import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

const links = [
  { href: "/#about", label: "About" },
  { href: "/#experience", label: "Experience" },
  { href: "/#work", label: "Work" },
  { href: "/writing", label: "Writing" },
  { href: "/#contact", label: "Contact" },
];

const Nav = () => (
  <header className="sticky top-0 z-40 border-b border-zinc-200/70 bg-white/80 backdrop-blur dark:border-zinc-800/70 dark:bg-zinc-950/80">
    <nav className="container-page flex h-14 items-center justify-between gap-4">
      <Link href="/" className="font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
        Umair Mirza
      </Link>
      <div className="flex items-center gap-1 sm:gap-2">
        <ul className="hidden sm:flex items-center gap-1">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="rounded-md px-3 py-1.5 text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
        <Link href="/#contact" className="sm:hidden rounded-md px-3 py-1.5 text-sm text-zinc-600 dark:text-zinc-400">
          Contact
        </Link>
        <ThemeToggle />
      </div>
    </nav>
  </header>
);

export default Nav;
