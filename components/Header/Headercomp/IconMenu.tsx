import React, { useState } from "react";
const IconMenu = (props: {
  rotate;
  setRotate;
  setShowElement;
  ShowElement;
}) => {
  return (
    <div
      className="md:hidden  text-white space-y-2 left-0 hover:cursor-pointer mt-2"
      onClick={() => {
        props.setRotate(!props.rotate);
        props.setShowElement(!props.ShowElement);
      }}
    >
      <div className="flex justify-end">
        <div className="w-8 h-0.5 rounded bg-AAsecondary"></div>
      </div>
      <div className="flex justify-end">
        <div className="w-6 h-0.5 rounded bg-AAsecondary"></div>
      </div>
      <div className="flex justify-end">
        <div className="w-4 h-0.5 rounded bg-AAsecondary"></div>
      </div>
    </div>
  );
};
export default IconMenu;
