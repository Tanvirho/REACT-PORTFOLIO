import React from "react";
import { Form } from "./Form";
import contactImage from "../assets/contact-image.png";

export const Connect = () => {
  return (
    <div className="container mx-auto rounded-2xl bg-linear-to-r from-[#00BCD4] to-[#8E2DE2] p-0.5">
      <div className="w-full rounded-2xl bg-[#191d26] p-3">
        <div className="mb-15 mt-6 text-center">
        <h1 className="relative inline-block border-b-2 border-[#00BCD4] bg-[#191d26] text-4xl font-medium text-[#00BCD4]">
          Get In Touch
        </h1>
      </div>
        <div className="md:flex items-center justify-center mb-5">
          <div className="w-full md:w-[50%]">
            <img src={contactImage} alt="contact-image" />
          </div>
          <div className="w-full md:w-[50%]">
            <Form />
          </div>
        </div>
      </div>
    </div>
  );
};
