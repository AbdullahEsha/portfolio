import React, { useEffect } from "react";
import { motion } from "../../../node_modules/framer-motion/dist/framer-motion";
import { Link as ReactScrollLink } from "react-scroll";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";

export default function DesktopMenu(props: { finishedLoading: boolean }) {
  const pathname = usePathname();
  const router = useRouter();

  // Check if we're on the homepage
  const isHomePage = pathname === "/";

  // Check if we're on the blog page
  const isBlogPage = pathname === "/blog";

  // Effect to handle hash fragments when returning to home page
  useEffect(() => {
    // If we're on the home page and there's a hash in the URL
    if (isHomePage && window.location.hash) {
      // Get the element id from the hash
      const id = window.location.hash.substring(1);
      // Find the element
      const element = document.getElementById(id);
      // If element exists, scroll to it with a small delay to ensure page is loaded
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100);
      }
    }
  }, [isHomePage]);

  // Render different navigation items based on current page
  const renderNavItem = (number, name, sectionId) => {
    // On homepage: use ReactScrollLink for smooth scrolling
    if (isHomePage) {
      return (
        <ReactScrollLink
          to={sectionId}
          spy={true}
          smooth={true}
          offset={-100}
          duration={200}
        >
          &gt; {number}.{" "}
          <span className="text-white hover:cursor-pointer hover:text-AAsecondary duration-300">
            {name}
          </span>
        </ReactScrollLink>
      );
    }

    // On other pages: use Next.js Link to navigate back to home with hash
    return (
      <Link href={`/#${sectionId}`}>
        &gt; {number}.{" "}
        <span className="text-white hover:cursor-pointer hover:text-AAsecondary duration-300">
          {name}
        </span>
      </Link>
    );
  };

  return (
    <div className="font-mono text-xs md:flex hidden flex-row items-center space-x-8">
      <motion.div
        initial={{
          y: -40,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          type: "spring",
          duration: props.finishedLoading ? 0 : 1.2,
          delay: props.finishedLoading ? 0 : 9.4,
        }}
        className="text-AAsecondary"
      >
        {renderNavItem("01", "About", "aboutSection")}
      </motion.div>

      <motion.div
        initial={{
          y: -40,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          type: "spring",
          duration: props.finishedLoading ? 0 : 1.2,
          delay: props.finishedLoading ? 0 : 9.7,
        }}
        className="text-AAsecondary"
      >
        {renderNavItem("02", "Experience", "WhereIhaveWorkedSection")}
      </motion.div>

      <motion.div
        initial={{
          y: -40,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          type: "spring",
          duration: props.finishedLoading ? 0 : 1.2,
          delay: props.finishedLoading ? 0 : 9.8,
        }}
        className="text-AAsecondary"
      >
        {renderNavItem("03", "Projects", "SomethingIveBuiltSection")}
      </motion.div>

      <motion.div
        initial={{
          y: -40,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          type: "spring",
          duration: props.finishedLoading ? 0 : 1.2,
          delay: props.finishedLoading ? 0 : 9.8,
        }}
        className="text-AAsecondary"
      >
        <Link href="/blog">
          &gt; 04.{" "}
          <span className="text-white hover:cursor-pointer hover:text-AAsecondary duration-300">
            Blogs
          </span>
        </Link>
      </motion.div>

      <motion.span
        initial={{
          y: -40,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          type: "spring",
          duration: props.finishedLoading ? 0 : 1.2,
          delay: props.finishedLoading ? 0 : 10.2,
        }}
        className="text-AAsecondary"
      >
        {renderNavItem("05", "Contact", "GetInTouchSection")}
      </motion.span>

      <a href="/resume.pdf" target="_blank" rel="noreferrer">
        <motion.button
          initial={{
            y: -40,
            opacity: 0,
          }}
          animate={{
            y: 0,
            opacity: 1,
          }}
          transition={{
            type: "spring",
            duration: props.finishedLoading ? 0 : 1.2,
            delay: props.finishedLoading ? 0 : 10.4,
          }}
          className="text-AAsecondary border border-spacing-2 py-2 px-3 rounded-sm border-AAsecondary hover:bg-ResumeButtonHover"
        >
          Resume
        </motion.button>
      </a>
    </div>
  );
}
