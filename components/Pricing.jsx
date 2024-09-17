import Image from "next/image";
import React from "react";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
  } from "@/components/ui/carousel"
import { Card, CardContent } from "./ui/card";
  

function Pricing() {
  return (
    <div className="mx-[30px] sm:mx[120px] flex flex-col items-center space-y-24 my-20  sm:mt-[200px]">
      <div className="flex justify-center">
        <div className="hidden sm:block mr-10 -mt-20 -ml-56">
          <Image
            src="/two-rollers-flipped.svg"
            alt="roller"
            height={250}
            width={250}
          />
        </div>
        <h2 className="text-black text-3xl md:text-5xl font-bold">
          Pricing
        </h2>
      </div>
    
      <div className="flex  space-x-6">

      <Carousel className="w-full max-w-xs bg-gray-400">
      <CarouselContent>
          <CarouselItem >
            <div className="p-1">
              <Card className="bg-gray-100">
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <span className="text-6xl font-semibold">ZERO</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
      </CarouselContent>
    </Carousel>

    <div className="flex flex-col justify-center items-start">
        <h3 className="text-black font-semibold text-3xl">Bring your best problem statements</h3>
        <p className="text-gray-700 font-light">Impact over Volume.</p>
    </div>
      </div>


    
    </div>
  );
}

export default Pricing;
