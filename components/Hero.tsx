import React from "react";
import Link from "next/link";

const hero = () => {
  return (
    <div className="relative h-screen  w-screen flex flex-col sm:flex-row max-w-7xl m-auto">
      <div className="z-10 flex  flex-col sm: justify-center w-1/2">
        <div className="flex flex-col">
          <h3 className="font-medium text-3xl">Hey, I’m Caner</h3>
          <h1 className="text-gradient-to-right text-8xl font-bold mt-4 mb-1">
            Fullstack
          </h1>
          <h1 className="text-8xl font-bold mb-4 mt-1">Developer</h1>
          <p className="font-light text-neutral-400  text-lg">
            I’m a fullstack developer based in Germany.
          </p>
          <p className="text-neutral-300 font-medium text-lg">
            Your ideas, our web. Let’s start together.
          </p>
          <div className="mt-6 flex">
            <div className="font-medium bg-gradient-to-r from-[#0EA5E9] over-[#4B76DF] to-[#9E4BDF] text-gray-100 px-3 py-[0.4rem] rounded-lg text-sm flex items-center">
              <Link href="#">Get in touch</Link>
            </div>
            <div className="font-medium bg-white text-black ml-6 px-3 py-1 rounded-lg text-sm flex items-center">
              <Link href="#">Browse Projects</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="z-10 flex justify-end items-center w-1/2 relative,">
        <svg
          width="382"
          height="382"
          viewBox="0 0 382 382"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute right-0 top-1/2 transform -translate-x-8 -translate-y-1/2"
        >
          <circle cx="191" cy="191" r="190" stroke="white" stroke-width="2" />
        </svg>
        <div className="w-80 h-80 rounded-full overflow-hidden relative mr-16">
          <img
            src="/pfp.jpg"
            alt="User Profile Picture"
            className="w-full h-full object-cover pointer-events-none"
          />
        </div>
      </div>
      <div className="absolute z-[0] w-[35%] h-[25%]  pink__gradient" />
      <div className="absolute z-[0] w-[25%] h-[25%] right-72 top-48  pink__gradient2" />
      <div className="absolute z-[0] w-[45%] h-[45%] right-20 bottom-72 blue__gradient" />
      <div className="hidden md:flex absolute inset-0 -z-10 h-full w-full bg-[radial-gradient(#1b1b1c_0.1px,transparent_0.8px)] [background-size:12px_12px]"></div>
    </div>
  );
};

export default hero;
