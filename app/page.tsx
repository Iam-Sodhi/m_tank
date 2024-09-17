import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import Playground from "@/components/Playground";
import ProgramStructure from "@/components/ProgramStructure";

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

     </>
  );
}
