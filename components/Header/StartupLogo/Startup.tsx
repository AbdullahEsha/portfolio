import React from "react";
const Startup = (props) => {
  let WidthBy2 = 0;
  let HeightBy2 = 0;
  let greaterThanSmall = false;
  if (typeof window !== "undefined") {
    if (window.innerWidth > 768) {
      WidthBy2 = window.innerWidth / 2 - 48 - 20;
      HeightBy2 = window.innerHeight / 2 - 44;
      greaterThanSmall = true;
    } else {
      WidthBy2 = window.innerWidth / 2 - 28;
      HeightBy2 = window.innerHeight / 2 - 40;
    }

    // console.log("width by 2: ", WidthBy2);
  }

  return (
    <div className="absolute h-full w-full flex justify-center items-center bg-StartupBackground">
      <div className="relative  h-24 w-24 flex justify-center items-center">
        <div className="absolute h-2 w-12 bg-AAsecondary rounded "></div>
        <div className="absolute h-2 w-12 bg-AAsecondary rounded "></div>
        <div className="absolute h-2 w-12 bg-AAsecondary rounded "></div>
        <div className="absolute h-2 w-12 bg-AAsecondary rounded "></div>
        <div className="absolute h-2 w-12 bg-AAsecondary rounded "></div>
        <div className="absolute h-2 w-12 bg-AAsecondary rounded "></div>
        <span className="text-AAsecondary font-Text2 text-4xl">A</span>
      </div>
    </div>
  );
};
export default Startup;
