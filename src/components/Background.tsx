"use client";
import React from "react";
import { useGSAP } from "@gsap/react";
import { Draggable } from "gsap/all";
import gsap from "gsap";
gsap.registerPlugin(Draggable);

function Background() {
  useGSAP(() => {
    Draggable.create("#gemini", {
      bounds: document.getElementById("bounds"),
      zIndexBoost: false,
    });
    Draggable.create("#gemini-teal", {
      bounds: document.getElementById("bounds"),
      zIndexBoost: false,
    });
  });
  return (
    <div id="bounds" className="absolute w-full h-[700px]">
      <img
        id="gemini"
        src="/gemini.png"
        alt="gemini"
        className="absolute top-[25%] left-[25%]"
      ></img>
      <img
        id="gemini-teal"
        src="/gemini-teal.png"
        alt="gemini-teal"
        className="absolute top-[25%] left-[70%]"
      ></img>
    </div>
  );
}

export default Background;
