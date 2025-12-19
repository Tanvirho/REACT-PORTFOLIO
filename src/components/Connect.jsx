import React from "react";
import { Form } from "./Form";
import contactImage from "../assets/contact-image.png";

export const Connect = ({ isDark }) => {
  return (
    <div className="container mx-auto rounded-2xl bg-linear-to-r from-[#00BCD4] to-[#8E2DE2] p-0.5">
      <div
        className={`w-full rounded-2xl ${isDark ? "bg-[#191d26]" : "bg-white shadow-2xl"} p-3`}
      >
        <div className="mt-6 mb-15 text-center">
          <h1 className="relative inline-block border-b-2 border-[#00BCD4] text-3xl font-medium text-[#00BCD4] md:text-4xl">
            Get In Touch
          </h1>
        </div>
        <div className="mb-5 items-center justify-center md:flex">
          <div className="w-full md:w-[50%]">
            <img src={contactImage} loading="lazy" alt="contact-image" />
          </div>
          <div className="w-full md:w-[50%]">
            <Form isDark={isDark} />
          </div>
        </div>
      </div>
    </div>
  );
};
