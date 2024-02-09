import React from "react";
import Link from "next/link";
import { AiFillGithub, AiFillTwitterCircle, AiFillInstagram} from "react-icons/ai";
const Footer = () => {
  const links = [
    { link: "#", label: "About" },
    { link: "#", label: "Skills" },
    { link: "#", label: "Experience" },
    { link: "#", label: "Contact Me" },
  ];

  return (
    <div className="absolute w-full z-10">
      <div className="max-w-[2560px] mx-auto flex justify-between items-center sm:px-16 px-6 py-2">
        <div>Mitoru Dev</div>

        <div>
          <ul className="hidden md:flex">
            {links.map(({ link, label }) => (
              <li
                key={label}
                className="capitalize px-4 text-sm hover:underline underline-offset-4"
              >
                <Link href={link}>{label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex items-center">
          <span className="p-1 rounded-full hover:bg-gradient-to-br from-purple-600 to-cyan-500 drop-shadow-md ml-3 hoverbg-red-500">
            <AiFillGithub className="text-2xl" />
          </span>

          <span className="p-1 rounded-full hover:bg-gradient-to-br from-purple-600 to-cyan-500 drop-shadow-md ml-3 hoverbg-red-500">
            <AiFillTwitterCircle className="text-2xl" />
          </span>

          <span className="p-1 rounded-full hover:bg-gradient-to-br from-purple-600 to-cyan-500 drop-shadow-md ml-3 hoverbg-red-500">
            <AiFillInstagram className="text-2xl" />
          </span>
        </div>
      </div>
    </div>
  );
};
export default Footer;
