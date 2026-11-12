import { FiMail, FiCalendar } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import Experience from "@/components/Experience";
import Work from "@/components/Work";
import PostList from "@/components/PostList";
import { aboutText, skillGroups, education, contact } from "@/data/contentConfig";

const contactLinks = [
  { label: contact.email, href: `mailto:${contact.email}`, Icon: FiMail },
  { label: "LinkedIn", href: contact.linkedin, Icon: FaLinkedin },
  { label: "GitHub", href: contact.github, Icon: FaGithub },
  { label: "Book a 30-minute call", href: contact.calendly, Icon: FiCalendar },
];

const Home = () => (
  <>
    <Hero />

    <Section id="about" eyebrow="About" title="What I do">
      <div className="max-w-prose space-y-4 text-lg leading-relaxed">
        {aboutText.map((p) => (
          <p key={p}>{p}</p>
        ))}
      </div>
    </Section>

    <Section id="experience" eyebrow="Experience" title="Where I've worked">
      <Experience />
    </Section>

    <Section id="work" eyebrow="Selected work" title="What I've built">
      <Work />
    </Section>

    <Section id="writing" eyebrow="Writing" title="Notes from production">
      <PostList />
    </Section>

    <Section id="skills" eyebrow="Skills" title="Stack">
      <dl className="grid gap-8 sm:grid-cols-3">
        {skillGroups.map((g) => (
          <div key={g.name}>
            <dt className="font-semibold text-zinc-900 dark:text-zinc-50">{g.name}</dt>
            <dd className="mt-3">
              <ul className="space-y-1.5 text-sm">
                {g.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </dd>
          </div>
        ))}
      </dl>
    </Section>

    <Section id="education" eyebrow="Education" title="Background">
      {education.map((e) => (
        <div key={e.degree}>
          <div className="flex flex-wrap items-baseline justify-between gap-x-4">
            <h3 className="font-semibold">
              {e.degree}, {e.school}
            </h3>
            <span className="font-mono text-xs text-zinc-500">{e.year}</span>
          </div>
          <ul className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
            {e.achievements.map((a) => (
              <li key={a}>{a}</li>
            ))}
          </ul>
        </div>
      ))}
    </Section>

    <Section id="contact" eyebrow="Contact" title="Get in touch">
      <p className="text-lg">
        The fastest way to reach me is email. {contact.timezone}.
      </p>
      <ul className="mt-6 grid gap-3 sm:grid-cols-2">
        {contactLinks.map(({ label, href, Icon }) => (
          <li key={href}>
            <a
              href={href}
              target={href.startsWith("mailto:") ? undefined : "_blank"}
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-lg border border-zinc-200 px-4 py-3 text-sm font-medium text-zinc-900 transition-colors hover:border-zinc-400 dark:border-zinc-800 dark:text-zinc-100 dark:hover:border-zinc-600"
            >
              <Icon className="shrink-0 text-zinc-500" size={18} aria-hidden />
              <span className="break-all">{label}</span>
            </a>
          </li>
        ))}
      </ul>
    </Section>
  </>
);

export default Home;
