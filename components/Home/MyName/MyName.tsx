import React from "react";
import { motion } from "../../../node_modules/framer-motion/dist/framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";
export default function MyName() {
  const router = useRouter();
  return (
    <div
      className="h-full flex flex-col justify-center
      px-8 2xl:px-72 xl:px-56 lg:px-32  md:px-28 sm:px-8 py-32 sm:py-52  "
    >
      <span className="text-AAsecondary font-mono">Hi, my name is</span>
      <h1 className="text-gray-300 font-bold text-3xl lg:text-7xl sm:text-5xl md:text-6xl mt-4">
        Abdullah Esha.
      </h1>
      <h2 className="text-gray-400 font-bold text-3xl lg:text-7xl sm:text-5xl md:text-6xl mt-4">
        I animate thoughts into realities.
      </h2>

      <h3 className="text-gray-400 font-Header text-sm md:text-lg sm:text-md mt-10 tracking-wider">
        I&apos;m a <span className="text-AAsecondary">software engineer</span>,
        i possess strong problem-solving skills and specialize in crafting
        exceptional <br className="2xl:block hidden" />
        digital experiences. My current area of focus is in the{" "}
        <span className="text-AAsecondary">
          Service Oriented Architecture like ERP and CRM
        </span>
        , where I actively engage in developing{" "}
        <span className="text-AAsecondary">microservices</span>,{" "}
        <span className="text-AAsecondary">APIs</span>,{" "}
        <span className="text-AAsecondary">databases</span>,{" "}
        <span className="text-AAsecondary">back-end</span>,{" "}
        <span className="text-AAsecondary">front-end</span> and{" "}
        <span className="text-AAsecondary">full-stack</span> applications. I
        have a strong understanding of the full software development life cycle,
        from <br className="2xl:block hidden" />
        creating and deploying them, as well as implementing the front-end
        components to enable seamless user interactions.
        {/* <br className="2xl:block hidden" />creating and deploying them, as well as implementing the
        front-end components to enable seamless user interactions. */}
      </h3>
      <div className="mt-12">
        <a href={"/resume.pdf"} target={"_blank"} rel="noreferrer">
          <button className="bg-AAprimary text-AAsecondary border rounded px-4 sm:px-8 py-3 sm:py-4 border-AAsecondary">
            Check out my resume!
          </button>
        </a>
      </div>
    </div>
  );
}
