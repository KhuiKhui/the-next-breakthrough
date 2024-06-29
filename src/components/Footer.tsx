import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <div className="w-full h-[100px] bg-black border-2 border-[#C08CFF] border-b-0 border-r-0 border-l-0 rounded-t-md flex flex-row justify-between items-center p-3 text-white">
      <b className="text-[20px] md:text-[30px]">AI: The Next Breakthrough</b>
      <div>
        <button className="p-[8px] rounded-md bg-violet-950 hover:bg-[#61175D] text-center mr-8">
          Register
        </button>
        <Link
          href="#about"
          className="hover:text-[#C084FC] pr-10 pl-8 border-l-2"
        >
          About
        </Link>
        <Link href="#details" className="hover:text-[#C084FC] pr-10">
          Details
        </Link>
        <Link
          href="https://www.facebook.com"
          target="_blank"
          className="hover:text-[#C084FC] pr-4"
        >
          Follow us
        </Link>
      </div>
    </div>
  );
}

export default Footer;
