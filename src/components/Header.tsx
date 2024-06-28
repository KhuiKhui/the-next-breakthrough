"use client";
import Link from "next/link";
import React from "react";

function Header() {
  return (
    <div className="fixed w-full h-[50px] bg-black border-2 border-[#C08CFF] border-t-0 border-r-0 border-l-0 rounded-b-md flex flex-row justify-between items-center p-2 text-white">
      <button onClick={() => window.scrollTo(0, 0)}>
        AI: The Next Breakthrough
      </button>
      <Link href="#test" className="">
        About
      </Link>
    </div>
  );
}

export default Header;
