import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import Playground from "@/components/Playground";
import ProgramStructure from "@/components/ProgramStructure";
import Eligibilty from "@/components/Eligibilty";
import Benefits from "@/components/Benefits";
import Outcome  from "@/components/Outcome";
import Pricing  from "@/components/Pricing";

export default function Home() {
  return (
    <>
   
     <div className="h-screen">
      <Navbar />
       <div className="mx-[30px] sm:mx-[120px] ">
          <HeroSection />
       </div>
     </div>

     <Playground />
     <ProgramStructure />
     <Eligibilty />
     <Benefits />
     <Outcome />
     <Pricing />

     </>
  );
}
