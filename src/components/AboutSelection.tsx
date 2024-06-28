"use client";
import React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function AboutSelection() {
  const tabs: string[] = ["ai", "tnb", "us"];
  const title: string[] = [
    "About AI",
    "About The Next Breakthrough",
    "About us",
  ];
  useGSAP(() => {
    tabs.forEach((tab: string) => {
      const ele: any = document.getElementById(tab);
      gsap.set(ele, { opacity: 0, zIndex: -1 });
      let tl: any = gsap.timeline();
      document
        .getElementById(`#${tab}-button`)
        ?.addEventListener("click", () => {
          tl.to(ele, { opacity: 1, zIndex: 5 });
        });
      ele?.addEventListener("click", () => {
        console.log("IN");
        tl.to(ele, { opacity: 0, zIndex: -1 });
      });
    });
  });
  return (
    <div className="flex flex-row justify-evenly items-center text-[20px] w-full overflow-hidden">
      {tabs.map((ele: string, index: number) => {
        return (
          <button
            id={`#${ele}-button`}
            className="rounded-full w-[250px] h-[250px] bg-[#BB004B] hover:bg-[#9b164b] transition duration-85 text-white"
          >
            {title[index]}
          </button>
        );
      })}

      <div
        id="ai"
        className="absolute w-[1200px] h-[500px] bg-[#9b164b] rounded-md p-2"
      >
        <div className="text-center w-full font-bold">About AI</div>
        <br></br>
        <div>
          Artificial intelligence, or AI for short, is a vast and exciting field
          that encompasses machines that can perform tasks typically requiring
          human intelligence. It's not about creating human replicas, but rather
          about imbuing machines with the ability to reason, learn, solve
          problems, and make decisions. AI systems can analyze information, draw
          conclusions, and adapt their behavior based on new data. This allows
          them to tackle complex challenges in various fields, from healthcare
          and finance to customer service and self-driving cars.
        </div>
        <br></br>
        <div>
          AI is already having a significant impact on our world. In healthcare,
          AI helps analyze medical images for faster and more accurate
          diagnoses, or even assists in developing personalized treatment plans.
          In finance, AI can detect fraudulent activity or predict stock market
          trends with ever-increasing accuracy. Even our daily interactions with
          technology are being shaped by AI. Chatbots powered by AI can provide
          real-time customer service, answer our questions, and even generate
          creative text formats like poems or code. As AI continues to evolve,
          it has the potential to revolutionize many aspects of our lives.
          However, it's important to remember that AI is a tool, and like any
          tool, it can be used for good or bad. There are ongoing discussions
          about the potential risks and ethical considerations of strong AI. But
          for now, AI is a powerful technology that is transforming our world,
          and it will be interesting to see what the future holds.
        </div>
      </div>
      <div
        id="tnb"
        className="absolute z-[-1] w-[1200px] h-[500px] bg-[#9b164b] rounded-md p-2"
      >
        <div className="text-center w-full font-bold">About AI</div>
        <br></br>
        <div>
          Artificial intelligence, or AI for short, is a vast and exciting field
          that encompasses machines that can perform tasks typically requiring
          human intelligence. It's not about creating human replicas, but rather
          about imbuing machines with the ability to reason, learn, solve
          problems, and make decisions. AI systems can analyze information, draw
          conclusions, and adapt their behavior based on new data. This allows
          them to tackle complex challenges in various fields, from healthcare
          and finance to customer service and self-driving cars.
        </div>
        <br></br>
        <div>
          AI is already having a significant impact on our world. In healthcare,
          AI helps analyze medical images for faster and more accurate
          diagnoses, or even assists in developing personalized treatment plans.
          In finance, AI can detect fraudulent activity or predict stock market
          trends with ever-increasing accuracy. Even our daily interactions with
          technology are being shaped by AI. Chatbots powered by AI can provide
          real-time customer service, answer our questions, and even generate
          creative text formats like poems or code. As AI continues to evolve,
          it has the potential to revolutionize many aspects of our lives.
          However, it's important to remember that AI is a tool, and like any
          tool, it can be used for good or bad. There are ongoing discussions
          about the potential risks and ethical considerations of strong AI. But
          for now, AI is a powerful technology that is transforming our world,
          and it will be interesting to see what the future holds.
        </div>
      </div>
      <div
        id="us"
        className="absolute z-[-1] w-[1200px] h-[500px] bg-[#9b164b] rounded-md p-2"
      >
        <div className="text-center w-full font-bold">About AI</div>
        <br></br>
        <div>
          Artificial intelligence, or AI for short, is a vast and exciting field
          that encompasses machines that can perform tasks typically requiring
          human intelligence. It's not about creating human replicas, but rather
          about imbuing machines with the ability to reason, learn, solve
          problems, and make decisions. AI systems can analyze information, draw
          conclusions, and adapt their behavior based on new data. This allows
          them to tackle complex challenges in various fields, from healthcare
          and finance to customer service and self-driving cars.
        </div>
        <br></br>
        <div>
          AI is already having a significant impact on our world. In healthcare,
          AI helps analyze medical images for faster and more accurate
          diagnoses, or even assists in developing personalized treatment plans.
          In finance, AI can detect fraudulent activity or predict stock market
          trends with ever-increasing accuracy. Even our daily interactions with
          technology are being shaped by AI. Chatbots powered by AI can provide
          real-time customer service, answer our questions, and even generate
          creative text formats like poems or code. As AI continues to evolve,
          it has the potential to revolutionize many aspects of our lives.
          However, it's important to remember that AI is a tool, and like any
          tool, it can be used for good or bad. There are ongoing discussions
          about the potential risks and ethical considerations of strong AI. But
          for now, AI is a powerful technology that is transforming our world,
          and it will be interesting to see what the future holds.
        </div>
      </div>
    </div>
  );
}

export default AboutSelection;
