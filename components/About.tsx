import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { BsFillTelephoneFill } from "react-icons/bs";

const About = () => {
  return (
    <div className="relative w-screen flex max-w-7xl m-auto">
      <div className="flex w-screen flex-col my-32">
        <h1 className="text-7xl font-medium text-center text-gradient-to-right2 ">
          About Me
        </h1>
        <div className="flex items-center mt-16">
          <div className="w-1/2 flex justify-center">
            <div className="w-80 h-80 rounded-full overflow-hidden relative mr-16">
              <img
                src="/pfp2.jpg"
                alt="User Profile Picture"
                className="w-full h-full object-cover pointer-events-none"
              />
            </div>
          </div>
          <div className="w-1/2 flex justify-center flex-col">
            <p className="font-extralight text-lg">
              Crafting Impactful UIs with Full-stack Magic. Driven by Innovation
              & Problem-solving Expertise. Passionate programmer with expertise
              in research, wireframing, prototyping, and fullstack dev. Crafts
              user-centric interfaces that solve problems and drive results.
              Thrives on innovation and embraces new technologies.
            </p>
            <p className="mt-8 font-medium text-lg">
              <FaMapMarkerAlt className="inline text-sky-500 text-2xl mr-4 my-2" />{" "}
              Hagen, Germany
            </p>
            <p className="font-medium text-lg">
              <FaPhoneAlt className="inline text-sky-500 text-2xl mr-4 my-2" />{" "}
              +49 176 24488397
            </p>
            <p className="font-medium text-lg">
              <IoIosMail className="inline text-sky-500 text-2xl mr-4 my-2" />{" "}
              elmascaner2005@gmail.com
            </p>
          </div>
        </div>
      </div>
      <div className="absolute z-[-10] w-[20%] h-[25%] left-80 top-48  white__gradient" />
      <div className="absolute z-[-10] w-[15%] h-[20%] left-16 top-48  pink__gradient2" />
      <div className="absolute z-[-10] w-[30%] h-[45%] -left-20 bottom-40  blue__gradient" />
      <div className=" hidden md:flex absolute inset-0 -z-10 h-full w-full bg-[radial-gradient(#1b1b1c_0.1px,transparent_0.8px)] [background-size:12px_12px]"></div>
    </div>
  );
};

export default About;
