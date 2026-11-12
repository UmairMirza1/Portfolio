import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { contact } from "@/data/contentConfig";

const socialLinks = [
  { href: contact.github, label: "GitHub", Icon: FaGithub },
  { href: contact.linkedin, label: "LinkedIn", Icon: FaLinkedin },
  { href: `mailto:${contact.email}`, label: "Email", Icon: FaEnvelope },
];

const Footer = () => (
  <footer className="border-t border-zinc-200 dark:border-zinc-800">
    <div className="container-page flex flex-col-reverse sm:flex-row items-center justify-between gap-4 py-8 text-sm text-zinc-500">
      <p>© {new Date().getFullYear()} Umair Mirza</p>
      <div className="flex gap-1">
        {socialLinks.map(({ href, label, Icon }) => (
          <a
            key={label}
            href={href}
            aria-label={label}
            target={href.startsWith("mailto:") ? undefined : "_blank"}
            rel="noopener noreferrer"
            className="rounded-md p-2 text-zinc-500 hover:bg-zinc-100 hover:text-zinc-900 dark:hover:bg-zinc-900 dark:hover:text-zinc-50"
          >
            <Icon size={18} />
          </a>
        ))}
      </div>
    </div>
  </footer>
);

export default Footer;
