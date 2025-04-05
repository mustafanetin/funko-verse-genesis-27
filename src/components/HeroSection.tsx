
import React from 'react';
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import { useIsMobile } from '@/hooks/use-mobile';

const HeroSection = () => {
  const isMobile = useIsMobile();
  
  return (
    <section id="home" className="min-h-screen py-16 px-4 bg-hero-pattern">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="flex-1 text-left pt-12 md:pt-16">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-display font-bold mb-6 leading-tight">
            Create Your Own <span className="text-gradient">Funko POP!</span> on Solana
          </h1>
          <p className="text-md sm:text-lg md:text-xl text-white/70 mb-8 max-w-xl">
            Design and create unique customized Funko figurines in the Solana style. Generate amazing images of your favorite characters or personalities.
          </p>
          <div className="flex flex-wrap gap-4 mb-12 md:mb-0">
            <Button asChild className="bg-solana-green text-solana-black hover:bg-solana-green/90 text-base md:text-lg px-6 py-5 z-10">
              <Link to="/create">
                Click here to make your own Funko!
              </Link>
            </Button>
            <Button variant="outline" className="border-solana-purple hover:bg-solana-purple/20 text-base md:text-lg px-6 py-5 z-10">
              Learn More
            </Button>
          </div>
        </div>
        
        {/* Funkos display section with better mobile positioning */}
        <div className={`flex-1 relative ${isMobile ? 'h-[400px]' : 'h-[600px]'} w-full flex justify-center items-center mt-8 md:mt-0`}>
          {/* Adjusted positions for better mobile layout */}
          <div className={`funko-box funko-box-green w-[180px] h-[240px] md:w-[280px] md:h-[350px] transform -rotate-6 absolute z-10 
            ${isMobile ? 'top-4 left-4' : 'top-10 left-20'} animate-float`}>
            <img src="/lovable-uploads/c9a63e7a-e87a-42b7-914b-46a47a60c7ae.png" alt="Spump.fun Funko" className="w-full h-full object-contain" />
          </div>
          <div className={`funko-box funko-box-purple w-[180px] h-[240px] md:w-[280px] md:h-[350px] transform rotate-3 absolute z-20 
            ${isMobile ? 'top-0 right-4' : 'top-0 right-20'} animate-float`} style={{ animationDelay: "1s" }}>
            <img src="/lovable-uploads/af24e16f-915b-47e4-9586-57386468d1a1.png" alt="El Charto Funko" className="w-full h-full object-contain" />
          </div>
          <div className={`funko-box funko-box-rainbow w-[180px] h-[240px] md:w-[280px] md:h-[350px] transform -rotate-3 absolute z-0 
            ${isMobile ? 'bottom-4 left-1/2 -translate-x-1/2' : 'bottom-0 mx-auto'} animate-float`} style={{ animationDelay: "2s" }}>
            <img src="/lovable-uploads/3a1c6bba-f587-439b-a2cc-30a7a2657a02.png" alt="XELF Funko" className="w-full h-full object-contain" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
