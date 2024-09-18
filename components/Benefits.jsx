import React from "react";
import BCard from "@/components/BCard";
import { Button } from "./ui/button";
import { BiChat } from 'react-icons/bi';
import { FaRocket, FaRegHandshake } from 'react-icons/fa';
import { GiGearHammer } from 'react-icons/gi';

function Benefits() {
  return (
    <div className="mx-[30px] sm:mx[120px] flex flex-col items-center  space-y-12 sm:space-y-24 my-20  sm:my-40">
      <div className="flex flex-col justify-center items-center space-y-4 text-center">
        <Button variant="outline" className="text-lg border-t-4" size="lg">
          Value Proposition
        </Button>
        <h2 className="text-black text-3xl md:text-5xl font-bold">
          Benefits of Participation
        </h2>
        <p className="text-gray-700 max-w-[400px] font-medium text-center ">
          Exploring the valuable Benefits of AI Innovation Program Participation
        </p>
      </div>
      <div className="flex flex-col space-y-3 md:space-y-0 md:flex-row justify-center items-center sm:space-x-4 ">
        <BCard
          title="Access to Cutting-edge AI Technology and Expertise"
          icon={<BiChat className="text-white h-6 w-6" />}
        />
        <BCard
          title="Opportunity to Develop and Test MVPs with AI"
          icon={<FaRocket className="text-white h-6 w-6" />}
        />
        <BCard
          title="Collaboration with Industry Experts and Peers"
          icon={<FaRegHandshake className="text-white h-6 w-6" />}
        />
        <BCard
          title="Organic Business Growth with Innovation:"
          icon={<GiGearHammer className="text-white h-6 w-6" />}
        />
      </div>
    </div>
  );
}

export default Benefits;
