import { FiMapPin, FiGlobe, FiMail } from "react-icons/fi";
import { FaLinkedin } from "react-icons/fa";
import {
  headerData,
  contact,
  profileImage,
  metrics,
} from "@/data/contentConfig";

const Hero = () => {
  const { name, title, company, location, availability, summary } =
    headerData;

  return (
    <section className="relative isolate">
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,rgb(228_228_231/0.7)_1px,transparent_1px),linear-gradient(to_bottom,rgb(228_228_231/0.7)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_70%_60%_at_30%_0%,#000_40%,transparent_100%)] dark:bg-[linear-gradient(to_right,rgb(39_39_42/0.8)_1px,transparent_1px),linear-gradient(to_bottom,rgb(39_39_42/0.8)_1px,transparent_1px)]"
      />
      <div className="container-page pt-12 pb-14 sm:pt-20 sm:pb-20">
        <div className="flex flex-col-reverse gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div className="max-w-2xl">
            <p className="eyebrow">{title}</p>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
              {name}
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-zinc-600 dark:text-zinc-300 sm:text-xl">
              {summary}
            </p>
            <ul className="mt-6 space-y-1.5 text-sm text-zinc-500 dark:text-zinc-400">
              <li className="flex items-start gap-2">
                <FiMapPin className="mt-0.5 shrink-0" aria-hidden />
                <span>
                  {location} · {company}
                </span>
              </li>
              <li className="flex items-start gap-2">
                <FiGlobe className="mt-0.5 shrink-0" aria-hidden />
                <span>{availability}</span>
              </li>
            </ul>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href={`mailto:${contact.email}`} className="btn-primary">
                <FiMail aria-hidden /> Contact me
              </a>
              <a
                href={contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                <FaLinkedin aria-hidden /> LinkedIn
              </a>
            </div>
          </div>
          <img
            src={profileImage}
            alt="Umair Mirza"
            width={160}
            height={160}
            className="h-28 w-28 shrink-0 rounded-2xl object-cover ring-1 ring-zinc-200 sm:h-40 sm:w-40 dark:ring-zinc-800"
          />
        </div>

        <dl className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-zinc-200 bg-zinc-200 sm:grid-cols-3 lg:grid-cols-6 dark:border-zinc-800 dark:bg-zinc-800">
          {metrics.map((m) => (
            <div key={m.label} className="bg-white px-4 py-5 dark:bg-zinc-950">
              <dt className="sr-only">{m.label}</dt>
              <dd>
                <span className="block text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
                  {m.value}
                </span>
                <span className="mt-1 block text-sm text-zinc-500 dark:text-zinc-400">
                  {m.label}
                </span>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
};

export default Hero;
