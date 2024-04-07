


import HeroSection from "@/components/HeroSection";
import FeatureCard from '@/components/FeatureCard'

import Image from "next/image";
import Footer from "@/components/Footer";

export default function Home() {
  return (
  
    <main className="min-h-screen antialiased bg-grid-white/[0.02]">

      <HeroSection/>
      <FeatureCard/>
      <Footer/>
    
    </main>
  );
}
