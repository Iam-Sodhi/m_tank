"use client"
import Image from 'next/image'
import React from 'react'
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

const structureData = [
  {
    "title": "Problem Statement",
    "description": "Organisations to provide with meaningful problem statements that AI can solve"
  },
  {
    "title": "Initial Consultation",
    "description": "Mvision to assess needs and outline potential solutions."
  },
  {
    "title": "MVP Development",
    "description": "Collaborate with selected companies to develop AI pilot projects tailored to their specific requirements."
  },
  {
    "title": "Pilot Deployment",
    "description": "Piloting your AI powered MVP and get the innovation you enabled to life."
  }
];

export default function ProgramStructure() {
  return (
    <div className=' mx-[30px] sm:mx[120px] flex flex-col items-center space-y-24 my-40'>
        <div className='flex justify-center'>
             <h2 className='text-black text-3xl md:text-5xl font-bold'>
                Program Structure
             </h2>
             <div className='hidden sm:block ml-6 -mt-20 -mr-10'>
                 <Image  src="/two-rollers.svg"  alt="roller" height={250} width={250} />
             </div>
        </div>

        <div>
        <VerticalTimeline lineColor="" >
        {structureData.map((item, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement //we can't use tailwind here
              contentStyle={{
                background: "#f3f4f6",
                boxShadow: "none",
                border: "1px solid rgba(0, 0, 0, 0.05)",
                textAlign: "left",
                padding: "1.3rem 2rem",
              }}
              contentArrowStyle={{
                borderRight: "0.4rem solid #9ca3af",
              }}
              date={item.date}
              icon={item.icon}
              iconStyle={{
                background: "white",
                fontSize: "1.5rem",
              }}
            >
              <h3 className="font-semibold capitalize">{item.title}</h3>
              {/* <p className="font-normal !mt-0">{item.location}</p> */}
              <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75">
                {item.description}
              </p>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>

        </div>
    
    </div>
  )
}
