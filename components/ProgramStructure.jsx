"use client";
import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

// Importing Icons
import { FaLightbulb, FaHandshake, FaCogs, FaRocket } from "react-icons/fa";
import { Button } from "./ui/button";

const structureData = [
  {
    title: "Problem Statement",
    description:
      "Organisations to provide with meaningful problem statements that AI can solve",
    icon: <FaLightbulb />,
  },
  {
    title: "Initial Consultation",
    description: "Mvision to assess needs and outline potential solutions.",
    icon: <FaHandshake />,
  },
  {
    title: "MVP Development",
    description:
      "Collaborate with selected companies to develop AI pilot projects tailored to their specific requirements.",
    icon: <FaCogs />,
  },
  {
    title: "Pilot Deployment",
    description:
      "Piloting your AI powered MVP and get the innovation you enabled to life.",
    icon: <FaRocket />,
  },
];

export default function ProgramStructure() {
  return (
    <div className="mx-[30px] sm:mx[120px] flex flex-col items-center space-y-24 my-40">
      <div className="flex flex-col justify-center items-center space-y-4">
      <Button variant="outline" className='text-lg border-t-4' size="lg">
              Program Timeline
            </Button>
        <h2 className="text-black text-3xl md:text-5xl font-bold">
          Program Structure
        </h2>
        <p className="text-gray-700 max-w-[400px] font-medium text-center ">
          Sequenced phases to guide companies from inception to full-scale AI
          implementations
        </p>
      </div>

      <div className="scroll-mt-28 mb-40 sm:mb-40">
        <VerticalTimeline lineColor="#1d4ed8">
          {structureData.map((item, index) => (
            <React.Fragment key={index}>
              <VerticalTimelineElement
                visible={true}
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
                iconStyle={{
                  background: "white",
                  color: "#1d4ed8",
                  fontSize: "1.5rem",
                }}
                icon={item.icon}
              >
                <h3 className="font-semibold capitalize">{item.title}</h3>
                <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75">
                  {item.description}
                </p>
              </VerticalTimelineElement>
            </React.Fragment>
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
}
