import React from "react";
import { FaMapMarkerAlt, FaGlobeEurope } from "react-icons/fa";
import { headerData, contact } from "@/data/contentConfig";

type HeaderProps = {
  profileImage: string;
};

const buttonClass =
  "inline-flex items-center justify-center shadow-[0_4px_14px_0_rgb(0,118,255,39%)] hover:shadow-[0_6px_20px_rgba(0,118,255,23%)] hover:bg-[rgba(0,118,255,0.9)] px-8 py-2 bg-[#0070f3] rounded-md text-white font-light transition duration-200 ease-linear";

const secondaryButtonClass =
  "inline-flex items-center justify-center px-8 py-2 rounded-md border border-[#0070f3] text-white font-light hover:bg-[#0070f3]/20 transition duration-200 ease-linear";

const Header: React.FC<HeaderProps> = ({ profileImage }) => {
  const { name, title, company, location, availability, summary } = headerData;

  return (
    <header className="bg-header-gradient rounded-3xl md:rounded-custom-header-lg p-6 md:p-10 mx-4 my-6 flex flex-col md:flex-row justify-center items-center gap-6 md:gap-10">
      <div className="shrink-0 w-28 h-28 md:w-44 md:h-44 rounded-full overflow-hidden bg-gradient-to-r from-blue-500 to-purple-500 p-1">
        <img
          src={profileImage}
          alt="Umair Mirza"
          width={176}
          height={176}
          className="w-full h-full object-cover rounded-full"
        />
      </div>

      <div className="text-center md:text-left max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-bold text-white">{name}</h1>
        <p className="text-lg md:text-xl text-gray-200 mt-1">
          {title} <span className="text-gray-400">at {company}</span>
        </p>
        <p className="mt-4 text-gray-300 leading-relaxed">{summary}</p>
        <div className="mt-3 space-y-1 text-sm text-gray-400">
          <p className="flex justify-center md:justify-start items-center">
            <FaMapMarkerAlt className="mr-2 shrink-0" aria-hidden /> {location}
          </p>
          <p className="flex justify-center md:justify-start items-center">
            <FaGlobeEurope className="mr-2 shrink-0" aria-hidden /> {availability}
          </p>
        </div>
        <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-3 mt-5">
          <a href={`mailto:${contact.email}`} className={buttonClass}>
            Contact
          </a>
          <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" className={secondaryButtonClass}>
            LinkedIn
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
