
import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import TutorialSection from '@/components/TutorialSection';
import GallerySection from '@/components/GallerySection';
import FooterSection from '@/components/FooterSection';

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen bg-solana-black text-white overflow-hidden">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <TutorialSection />
        <GallerySection />
      </main>
      <FooterSection />
    </div>
  );
};

export default Index;
