"use client";
import React from "react";
import Registration_Form from "./Registration_Form";


function Last() {
 
  return (
    <div className="mx-[30px] sm:mx[120px] flex flex-col items-center space-y-16 my-20  sm:my-32">
      <div className="flex flex-col justify-center items-center space-y-4 text-center">
      
            {/* <Button variant="outline" className="text-lg border-t-4" size="lg">
          Register Now
        </Button> */}

              <Registration_Form outline="true" />



        <h2 className="text-black text-3xl md:text-5xl font-bold">
          Join Think Thank by Myraa Technologies Today!
        </h2>
        <p className="text-gray-700 max-w-[500px] font-medium text-center ">
          Transform your Business With AI. Register now to experiment and pilot MVPs for growth and success.
        </p>
      </div>

          {/* <div className="">
        <Image  src="/qr.png" alt="qr" height={300} width={300} />
            </div>               */}
   
    </div>
  );
}

export default Last;
