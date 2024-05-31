"use client"; // New line at the top
import React from "react";

const About = ({ children }) => {
  return (
    <>
      <div className="w-full h-full px-16">{children}</div>
    </>
  );
};

export default About;
