"use client";
import Link from "next/link";
import React from "react";

function Header() {
  return (
    <div className="fixed z-50 w-full h-[50px] bg-black border-2 border-[#C08CFF] border-t-0 border-r-0 border-l-0 rounded-b-md flex flex-row justify-between items-center p-2 text-white">
      <Link href="/" className="hover:text-[#C084FC]">
        AI: The Next Breakthrough
      </Link>
      <div>
        <Link href="#about" className="hover:text-[#C084FC] pr-10">
          About
        </Link>
        <Link href="#speakers" className="hover:text-[#C084FC] pr-10">
          Speakers
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

export default Header;
