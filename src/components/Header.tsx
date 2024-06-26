import Link from "next/link";
import React from "react";

function Header() {
  return (
    <div className="w-full h-[50px] bg-slate-400 flex flex-row justify-between items-center p-2 font-['Oswald']">
      <b>AI: The Next Breakthrough</b>
      <Link href="#test" className="text-black">
        About
      </Link>
    </div>
  );
}

export default Header;
