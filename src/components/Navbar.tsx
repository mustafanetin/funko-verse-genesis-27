
import React from 'react';
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-solana-black/80 backdrop-blur-md border-b border-white/5">
      <div className="container mx-auto py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <span className="text-2xl font-display font-bold text-gradient">FunkoVerse</span>
          <span className="text-xs px-2 py-1 rounded-full bg-solana-green text-solana-black font-bold">
            GENESIS
          </span>
        </div>
        <nav className="hidden md:flex gap-6 items-center">
          <a href="#home" className="text-white/70 hover:text-white transition-colors">Home</a>
          <a href="#showcase" className="text-white/70 hover:text-white transition-colors">Showcase</a>
          <a href="#gallery" className="text-white/70 hover:text-white transition-colors">Gallery</a>
          <Button className="bg-solana-green text-solana-black hover:bg-solana-green/90">
            Connect Wallet
          </Button>
        </nav>
        <Button variant="ghost" className="md:hidden">
          Menu
        </Button>
      </div>
    </header>
  );
};

export default Navbar;
