import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { contact } from "@/data/contentConfig";

const socialLinks = [
  { href: contact.github, label: "GitHub", Icon: FaGithub },
  { href: contact.linkedin, label: "LinkedIn", Icon: FaLinkedin },
  { href: `mailto:${contact.email}`, label: "Email", Icon: FaEnvelope },
];

const Footer = () => {
  return (
    <footer className="mx-4 mt-12 mb-8 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-gray-800 pt-6 text-sm text-gray-400">
      <p>© {new Date().getFullYear()} Umair Mirza</p>
      <div className="flex gap-3">
        {socialLinks.map(({ href, label, Icon }) => (
          <a
            key={label}
            href={href}
            aria-label={label}
            target={href.startsWith("mailto:") ? undefined : "_blank"}
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white bg-[#0D1425] p-2 rounded-lg border border-gray-600 hover:border-white transition-all"
          >
            <Icon size={20} />
          </a>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
