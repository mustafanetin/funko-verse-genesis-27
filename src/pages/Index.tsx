
import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import FunkoShowcase from '@/components/FunkoShowcase';
import GallerySection from '@/components/GallerySection';

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen bg-solana-black text-white overflow-hidden">
      <Navbar />
      <main>
        <HeroSection />
        <FunkoShowcase />
        <GallerySection />
      </main>
    </div>
  );
};

export default Index;
