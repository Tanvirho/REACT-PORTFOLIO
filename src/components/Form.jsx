import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export const Form = () => {
  return (
    <form name="contact" method="POST" data-netlify="true" action="/success">
      <input type="hidden" name="form-name" value="contact" />
      <input
        className="mt-4 w-full rounded-md bg-white p-2 text-[17px] text-black focus:outline-none"
        type="text"
        placeholder="Name"
        name="name"
        required
      />
      <input
        className="mt-8 w-full rounded-md bg-white p-2 text-[17px] text-black focus:outline-none"
        type="email"
        placeholder="Email"
        name="Email"
        required
      />
      <input
        className="mt-8 w-full rounded-md bg-white p-2 text-[17px] text-black focus:outline-none"
        type="text"
        placeholder="Subject"
        name="Subject"
        required
      />
      <textarea
        className="mt-8 max-h-30 min-h-30 w-full resize-none rounded-md bg-white p-2 text-[17px] text-black focus:outline-none"
        name="message"
        placeholder="Message"
      ></textarea>
      <div className="text-center">
        <button
          className="mt-5 cursor-pointer rounded-full bg-linear-to-r from-[#00BCD4] to-[#8E2DE2] px-5 py-2 text-[18px] font-medium transition-all duration-300 ease-in-out hover:scale-108"
          type="submit"
        >
          <FontAwesomeIcon icon={faPaperPlane} /> Send Message
        </button>
      </div>
    </form>
  );
};
