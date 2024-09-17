import Image from "next/image";
import React from "react";
import ECard from "@/components/ECard";
import {
  AiFillLock,
  AiOutlineSolution,
  AiFillExperiment,
} from "react-icons/ai";

function Eligibilty() {
  return (
    <div className="mx-[30px] sm:mx[120px] flex flex-col items-center space-y-24 my-20  sm:mt-[200px]">
      <div className="flex justify-center">
        <div className="hidden sm:block mr-10 -mt-20 -ml-36">
          <Image
            src="/two-rollers-flipped.svg"
            alt="roller"
            height={250}
            width={250}
          />
        </div>
        <h2 className="text-black text-3xl md:text-5xl font-bold">
          Eligibilty Criteria
        </h2>
      </div>
      <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row justify-center items-center space-x-4 ">
        <ECard
          title="A Compelling Impactful Problem Statement"
          description="A well defined problem statement that can lead to amplified impact with intelligent automation using AI. Impact > Niche."
          icon={<AiFillLock className="text-white h-6 w-6" />}
          count="01"
        />
        <ECard
          title="Ability to Commit a PIC for Fortnightly Project Updates"
          description="This is a co-creation program. We need you as committed as we are for fortnightly updates, challenges, and next steps."
          icon={<AiOutlineSolution className="text-white h-6 w-6" />}
          count="02"
        />
        <ECard
          title="Able to Provide Data for the Experiment (Non-confidential)"
          description="Providing non-confidential/anonymized data for developing AI models customized to your organization and team's problem statement."
          icon={<AiFillExperiment className="text-white h-6 w-6" />}
          count="03"
        />
      </div>
    </div>
  );
}

export default Eligibilty;
