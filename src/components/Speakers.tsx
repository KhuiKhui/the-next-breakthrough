"use client";
import React, { useState } from "react";
import SpeakersTab from "./SpeakersTab";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGreaterThan, faLessThan } from "@fortawesome/free-solid-svg-icons";
import clsx from "clsx";

interface ImgParamsInter {
  src: string;
  alt: string;
  name: string;
  desc: string;
}

function Dot({ id, cur }: { id: string; cur: number }) {
  return (
    <div
      id={id}
      className={clsx("w-[8px] h-[8px] rounded-full", {
        "bg-slate-500": cur !== parseInt(id),
        "bg-slate-50": cur === parseInt(id),
      })}
    ></div>
  );
}

function Speakers() {
  const [speakerPage, setSpeakerPage] = useState<number>(1);
  const speakersUrl: ImgParamsInter[] = [
    {
      src: "/class_pic.png",
      alt: "temp",
      name: "Speaker #1",
      desc: "Lorem ipsum dolor sit amet",
    },
    {
      src: "/class_pic.png",
      alt: "temp",
      name: "Speaker #2",
      desc: "Text 2",
    },
    {
      src: "/class_pic.png",
      alt: "temp",
      name: "Speaker #3",
      desc: "Text 3",
    },
  ];
  function handleNext() {
    if (speakerPage < speakersUrl.length) {
      console.log("IN");
      setSpeakerPage(speakerPage + 1);
    }
  }
  function handleBack() {
    if (speakerPage > 1) {
      setSpeakerPage(speakerPage - 1);
    }
  }

  return (
    <div className="flex flex-col justify-center items-center mb-[200px]">
      <b id="speakers" className="text-[30px] mb-[100px]">
        Speakers
      </b>

      <div className="mb-[50px] flex flex-row justify-center items-center">
        {speakersUrl.map((ele: ImgParamsInter, index: number) => {
          return (
            <SpeakersTab
              imgParams={{
                src: ele.src,
                alt: ele.alt,
                name: ele.name,
                desc: ele.desc,
              }}
              show={speakerPage === index + 1}
            />
          );
        })}
      </div>

      <div className="flex flex-row justify-evenly items-center w-[150px] cursor-pointer">
        <div onClick={handleBack}>
          <FontAwesomeIcon
            icon={faLessThan}
            className={clsx({
              "text-slate-50": speakerPage > 1,
              "text-slate-500": speakerPage <= 1,
            })}
          />
        </div>
        <Dot id="1" cur={speakerPage} />
        <Dot id="2" cur={speakerPage} />
        <Dot id="3" cur={speakerPage} />
        <div onClick={handleNext}>
          <FontAwesomeIcon
            icon={faGreaterThan}
            className={clsx({
              "text-slate-50": speakerPage < speakersUrl.length,
              "text-slate-500": speakerPage >= speakersUrl.length,
            })}
          />{" "}
        </div>
      </div>
    </div>
  );
}

export default Speakers;
