
import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-solana-black/80 backdrop-blur-md border-b border-white/5">
      <div className="container mx-auto py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Link to="/">
            <span className="text-2xl font-display font-bold text-gradient">Funko</span>
          </Link>
        </div>
        <nav className="hidden md:flex gap-6 items-center">
          <Link to="/" className="text-white/70 hover:text-white transition-colors">Home</Link>
          <Link to="/create" className="text-white/70 hover:text-white transition-colors">Create</Link>
          <a href="#showcase" className="text-white/70 hover:text-white transition-colors">Showcase</a>
          <a href="#gallery" className="text-white/70 hover:text-white transition-colors">Gallery</a>
        </nav>
        <Button variant="ghost" className="md:hidden">
          Menu
        </Button>
      </div>
    </header>
  );
};

export default Navbar;
