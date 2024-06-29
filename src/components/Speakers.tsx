import Image from "next/image";
import React from "react";
import SpeakersTab from "./SpeakersTab";

function Speakers() {
  return (
    <div className="flex flex-col justify-center items-center mb-[200px]">
      <b id="speakers" className="text-[30px] mb-[100px]">
        Speakers
      </b>

      <div>
        <SpeakersTab
          imgParams={{
            src: "/class_pic.png",
            alt: "temp",
            name: "Speaker #1",
            desc: "Lorem ipsum dolor sit amet",
          }}
        />
      </div>
    </div>
  );
}

export default Speakers;
