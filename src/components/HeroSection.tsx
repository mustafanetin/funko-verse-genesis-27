
import React from 'react';
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen pt-24 pb-20 px-4 bg-hero-pattern">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="flex-1 text-left">
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
            Create Your Own <span className="text-gradient">Funko POP!</span> on Solana
          </h1>
          <p className="text-lg md:text-xl text-white/70 mb-8 max-w-xl">
            Design and create unique customized Funko figurines in the Solana style. Generate amazing images of your favorite characters or personalities.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button asChild className="bg-solana-green text-solana-black hover:bg-solana-green/90 text-lg px-8 py-6">
              <Link to="/create">
                Click here to make your own Funko!
              </Link>
            </Button>
            <Button variant="outline" className="border-solana-purple hover:bg-solana-purple/20 text-lg px-8 py-6">
              Learn More
            </Button>
          </div>
        </div>
        <div className="flex-1 relative h-[400px] md:h-[600px] w-full flex justify-center items-center">
          <div className="funko-box funko-box-green w-[220px] h-[280px] md:w-[280px] md:h-[350px] transform -rotate-6 absolute z-10 top-10 left-0 md:left-20 animate-float">
            <img src="/lovable-uploads/c9a63e7a-e87a-42b7-914b-46a47a60c7ae.png" alt="Spump.fun Funko" className="w-full h-full object-contain" />
          </div>
          <div className="funko-box funko-box-purple w-[220px] h-[280px] md:w-[280px] md:h-[350px] transform rotate-3 absolute z-20 top-0 right-0 md:right-20 animate-float" style={{ animationDelay: "1s" }}>
            <img src="/lovable-uploads/af24e16f-915b-47e4-9586-57386468d1a1.png" alt="El Charto Funko" className="w-full h-full object-contain" />
          </div>
          <div className="funko-box funko-box-rainbow w-[220px] h-[280px] md:w-[280px] md:h-[350px] transform -rotate-3 absolute z-0 bottom-0 mx-auto animate-float" style={{ animationDelay: "2s" }}>
            <img src="/lovable-uploads/3a1c6bba-f587-439b-a2cc-30a7a2657a02.png" alt="XELF Funko" className="w-full h-full object-contain" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
