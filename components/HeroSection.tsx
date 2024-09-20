"use client";
import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";

import Registration_Form from "./Registration_Form";

function HeroSection() {

  return (
    <div className="flex flex-col sm:flex-row justify-between items-center mt-16 text-gree overflow-x-hidden">
      <div className=" hidden overflow-hidden sm:absolute -z-10 bottom-[-4rem] -right-[0rem] h-[30rem] w-[8.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] bg-gradient-to-r from-blue-100 to-violet-400 "></div>

      <div className="flex flex-col items-center sm:items-start justify-center space-y-4 sm:max-w-[300px] md:max-w-[580px]  sm:-mt-36">
        <h1 className="text-2xl sm:text-3xl md:text-6xl text-center sm:text-start text-black font-bold">
          Think Tank by <span className="text-custom-primary">Myraa</span>{" "}
          Technologies
        </h1>
        <p className="text-gray-500 text-lg font-medium pl-2">
          Future Proof Your Business
        </p>
        <div className="flex flex-col md:flex-row  space-y-3 md:space-y-0 sm:space-x-4 justify-center items-start sm:items-center pt-4">
         <Registration_Form outline="false" />
          <Button
            variant="outline"
            className="text-md sm:text-lg border-t-4"
            size="lg"
          >
            AI Innovative Program
          </Button>
        </div>
      </div>
      <div className="min-w-[300px] ">
        <Image
          src="/hero-image.svg"
          alt="hero-image"
          height={500}
          width={600}
          className="my-5 sm:mt-0"
        />
      </div>
    </div>
  );
}

export default HeroSection;
