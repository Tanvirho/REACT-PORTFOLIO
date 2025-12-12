import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export const Form = () => {
  return (
    <form action="">
      <input
        className="mt-4 w-full rounded-md bg-white p-2 text-[17px] text-black focus:outline-none"
        type="text"
        placeholder="Name"
        required
      />
      <input
        className="mt-4 w-full rounded-md bg-white p-2 text-[17px] text-black focus:outline-none"
        type="email"
        placeholder="Email"
        required
      />
      <input
        className="mt-4 w-full rounded-md bg-white p-2 text-[17px] text-black focus:outline-none"
        type="text"
        placeholder="Subject"
        required
      />
      <textarea
        className="mt-4 max-h-30 min-h-30 w-full resize-none rounded-md bg-white p-2 text-[17px] text-black focus:outline-none"
        placeholder="Message"
      ></textarea>
      <div className="text-center">
        <button className="mt-5 cursor-pointer rounded-full bg-linear-to-r from-[#00BCD4] to-[#8E2DE2] px-5 py-2 text-[18px] font-medium transition-all duration-300 ease-in-out hover:scale-108">
          <FontAwesomeIcon icon={faPaperPlane} /> Send Message
        </button>
      </div>
    </form>
  );
};
