import React from "react";
import { Link as ReactScrollLink } from "react-scroll";

export default function DesktopMenu() {
  return (
    <div className="font-mono text-xs md:flex hidden flex-row items-center space-x-8 ">
      <div className=" text-AAsecondary">
        <ReactScrollLink
          to="aboutSection"
          spy={true}
          smooth={true}
          offset={-100}
          duration={200}
        >
          &gt; 01.{" "}
          <span className="text-white hover:cursor-pointer hover:text-AAsecondary duration-300">
            About
          </span>
        </ReactScrollLink>
      </div>
      <div className="text-AAsecondary">
        <ReactScrollLink
          to="WhereIhaveWorkedSection"
          spy={true}
          smooth={true}
          offset={-300}
          duration={200}
        >
          &gt; 02.{" "}
          <span className="text-white  hover:cursor-pointer hover:text-AAsecondary duration-300">
            Experience
          </span>
        </ReactScrollLink>
      </div>
      <div className="text-AAsecondary">
        <ReactScrollLink
          to="SomethingIveBuiltSection"
          spy={true}
          smooth={true}
          offset={-100}
          duration={200}
        >
          &gt; 03.{" "}
          <span className="text-white  hover:cursor-pointer hover:text-AAsecondary duration-300">
            Projects
          </span>
        </ReactScrollLink>
      </div>
      <div className="text-AAsecondary">
        <a href={"/blog"} target={"_blank"} rel="noreferrer">
          &gt; 04.{" "}
          <span className="text-white  hover:cursor-pointer hover:text-AAsecondary duration-300">
            Blogs
          </span>
        </a>
      </div>
      <span className="text-AAsecondary">
        <ReactScrollLink
          to="GetInTouchSection"
          spy={true}
          smooth={true}
          offset={-100}
          duration={200}
        >
          &gt; 05.{" "}
          <span className="text-white  hover:cursor-pointer hover:text-AAsecondary duration-300">
            Contact
          </span>
        </ReactScrollLink>
      </span>
      <a href={"/resume.pdf"} target={"_blank"} rel="noreferrer">
        <button className="text-AAsecondary border border-spacing-2 py-2 px-3 rounded-sm border-AAsecondary hover:bg-ResumeButtonHover">
          Resume
        </button>
      </a>
    </div>
  );
}
