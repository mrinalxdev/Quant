"use client";
import React from "react";

const Button = ( props ) => {
  return (
    <button {...props} className={"ease-in-out duration-150  hover:text-black  px-4 py-2 rounded-md " + (props.primary ? 'bg-blue-700 hover:bg-blue-500 text-white' : 'text-gray-600')} />
  );
};

export default Button;
