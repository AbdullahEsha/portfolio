import React from "react";
import { motion } from "../../../node_modules/framer-motion/dist/framer-motion";
export default function Logo() {
  return (
    <>
      <div className=" relative h-12 w-10 ">
        <span className="absolute h-full w-full flex justify-center items-center text-lg font-Header text-AAsecondary">
          A
        </span>

        <div className="h-1 w-6 rounded bg-AAsecondary"></div>
        <div className="h-1 w-6 rounded bg-AAsecondary"></div>
        <div className="h-1 w-6 rounded bg-AAsecondary"></div>
        <div className="h-1 w-6 rounded bg-AAsecondary"></div>
        <div className="h-1 w-6 rounded bg-AAsecondary"></div>
        <div className="h-1 w-6 rounded bg-AAsecondary"></div>
      </div>
    </>
  );
}
