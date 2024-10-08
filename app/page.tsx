import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import Playground from "@/components/Playground";
import ProgramStructure from "@/components/ProgramStructure";
import Eligibilty from "@/components/Eligibilty";
import Benefits from "@/components/Benefits";
import Outcome  from "@/components/Outcome";
import Pricing  from "@/components/Pricing";
import Success  from "@/components/Success";
import Last from "@/components/Last";

export default function Home() {
  return (
    <div className="overflow-hidden">
   
     <div className="h-screen overflow-hidden">
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
     <Success/>
     <Last />

     </div>
  );
}
