import React from 'react';

// Component for horizontal scroller
export default function CompanyScroller() {
  return (
    <div className="w-full overflow-x-auto   ">
      <div className="flex items-center justify-center space-x-6">
        {/* Microsoft */}
        <img
          src="/microsoft-logo.svg"
          alt="Microsoft"
          className="h-16 w-auto object-contain"
        />
        {/* Aditya Birla */}
        <img
          src="/aditya-logo.svg"
          alt="Aditya Birla Group"
          className="h-16 w-auto object-contain"
        />
        {/* Airbus */}
        <img
          src="/airbus.png"
          alt="Airbus"
          className="h-16 w-auto object-contain"
        />
        {/* McLarens */}
        <img
          src="/mclarens-logo.png"
          alt="McLarens Group"
          className="h-16 w-auto object-contain"
        />
      
        <img
          src="/somaiya.png"
          alt="School Logo"
          className="h-16 w-auto object-contain"
        />
        {/* AXISCADES */}
        <img
          src="/axiscades.png"
          alt="AXISCADES"
          className="h-16 w-auto object-contain"
        />
     
      </div>
    </div>
  );
}

