import React from "react";
import { FaEnvelope, FaLinkedin, FaGithub, FaCalendarAlt } from "react-icons/fa";
import { contact } from "@/data/contentConfig";
import SectionHeading from "./SectionHeading";

const links = [
  { label: contact.email, href: `mailto:${contact.email}`, Icon: FaEnvelope },
  { label: "LinkedIn", href: contact.linkedin, Icon: FaLinkedin },
  { label: "GitHub", href: contact.github, Icon: FaGithub },
  { label: "Book a call", href: contact.calendly, Icon: FaCalendarAlt },
];

const Contact = () => {
  return (
    <section id="contact" className="rounded-xl p-4 md:p-6">
      <SectionHeading>Contact</SectionHeading>
      <p className="text-gray-300 mb-4">{contact.timezone}</p>
      <ul className="space-y-3">
        {links.map(({ label, href, Icon }) => (
          <li key={href}>
            <a
              href={href}
              target={href.startsWith("mailto:") ? undefined : "_blank"}
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 text-gray-200 hover:text-[#2eb0cb] transition-colors break-all"
            >
              <Icon className="shrink-0" size={18} aria-hidden />
              {label}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Contact;
