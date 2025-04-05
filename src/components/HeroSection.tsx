
import React from 'react';
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import { useIsMobile } from '@/hooks/use-mobile';

const HeroSection = () => {
  const isMobile = useIsMobile();
  
  return (
    <section id="home" className="min-h-screen flex items-center py-12 px-4 bg-hero-pattern">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
        <div className="flex-1 text-center md:text-left max-w-full">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold mb-6 leading-tight">
            Create Your Own <span className="text-gradient">Funko POP!</span> on Solana
          </h1>
          <p className="text-lg sm:text-xl md:text-xl text-white/80 mb-8 max-w-xl mx-auto md:mx-0">
            Design and create unique customized Funko figurines in the Solana style. Generate amazing images of your favorite characters or personalities.
          </p>
          <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-12">
            <Button asChild className="bg-solana-green text-solana-black hover:bg-solana-green/90 text-base px-8 py-6 rounded-xl z-10 shadow-lg">
              <Link to="/create">
                Create your Funko
              </Link>
            </Button>
            <Button variant="outline" className="border-solana-purple hover:bg-solana-purple/20 text-base px-8 py-6 rounded-xl z-10 shadow-md">
              Learn More
            </Button>
          </div>
        </div>
        
        {/* Funkos display section with improved mobile positioning */}
        <div className={`relative ${isMobile ? 'h-[400px]' : 'h-[600px]'} w-full flex-1 flex justify-center items-center mt-8 md:mt-0`}>
          <div className={`funko-box funko-box-green ${isMobile ? 'w-[150px] h-[200px]' : 'w-[280px] h-[350px]'} transform -rotate-6 absolute z-10 
            ${isMobile ? 'top-0 left-1/4 -translate-x-1/4' : 'top-10 left-20'} animate-float`}>
            <img src="/lovable-uploads/c9a63e7a-e87a-42b7-914b-46a47a60c7ae.png" alt="Spump.fun Funko" className="w-full h-full object-contain" />
          </div>
          <div className={`funko-box funko-box-purple ${isMobile ? 'w-[150px] h-[200px]' : 'w-[280px] h-[350px]'} transform rotate-3 absolute z-20 
            ${isMobile ? 'top-4 right-1/4 translate-x-1/4' : 'top-0 right-20'} animate-float`} style={{ animationDelay: "1s" }}>
            <img src="/lovable-uploads/af24e16f-915b-47e4-9586-57386468d1a1.png" alt="El Charto Funko" className="w-full h-full object-contain" />
          </div>
          <div className={`funko-box funko-box-rainbow ${isMobile ? 'w-[150px] h-[200px]' : 'w-[280px] h-[350px]'} transform -rotate-3 absolute z-0 
            ${isMobile ? 'bottom-8 left-1/2 -translate-x-1/2' : 'bottom-0 mx-auto left-1/2 -translate-x-1/2'} animate-float`} style={{ animationDelay: "2s" }}>
            <img src="/lovable-uploads/3a1c6bba-f587-439b-a2cc-30a7a2657a02.png" alt="XELF Funko" className="w-full h-full object-contain" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
