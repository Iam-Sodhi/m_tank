import React from "react";
import SCard from "@/components/SCard";
import CompanyScroller from "@/components/CompanyScroller.jsx";
import { AiFillExperiment, AiFillTool, AiFillProfile } from "react-icons/ai";
import Image from "next/image";

export default function Success() {
  return (
    <div className="mx-[30px] sm:mx[120px] flex flex-col items-center space-y-12  sm:space-y-16 my-20  sm:mt-[150px]">
      <div className="flex justify-center mt-4">
        <h2 className="text-black text-3xl md:text-5xl font-bold">
          Success Cases & Past Solutions
        </h2>
        <div className="hidden sm:block ml-6 -mt-16 sm:-mr-64">
          <Image src="/two-rollers.svg" alt="roller" height={250} width={250} />
        </div>
      </div>
      <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row justify-center items-center sm:space-x-4 ">
        <SCard
          title="Healthcare"
          points={[
            "An AI model that parses through 1000s of articles and research papers",
            "Isolates and indexes them in a graph database",
            "Increases speed of access to information by 40X",
          ]}
          icon={<AiFillExperiment className="text-white h-6 w-6" />}
        />
        <SCard
          title="Human Resources"
          points={[
            "An AI model that predicts employee exits and productivity dips",
            "A Gen AI model to process feedback and exit data to isolate patterns",
            "Reduction in attrition by 30% in target groups",
          ]}
          icon={<AiFillProfile className="text-white h-6 w-6" />}
        />
        <SCard
          title="Manufacturing"
          points={[
            "An AI model that detects types of defects on an airplane part",
            "Visual AI to classify scratches, holes, and more, and raise alarms",
            "Time of inspection brought down from 72 hours to 30 minutes",
          ]}
          icon={<AiFillTool className="text-white h-6 w-6" />}
        />
  
      </div>

      <CompanyScroller />
    </div>
  );
}
