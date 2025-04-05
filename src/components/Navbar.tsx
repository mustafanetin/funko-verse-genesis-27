
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-solana-black/80 backdrop-blur-md border-b border-white/5">
      <div className="container mx-auto py-3 md:py-4 px-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Link to="/" onClick={() => setIsMenuOpen(false)}>
            <span className="text-xl md:text-2xl font-display font-bold text-gradient">Funko</span>
          </Link>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6 items-center">
          <Link to="/" className="text-white/70 hover:text-white transition-colors">Home</Link>
          <Link to="/create" className="text-white/70 hover:text-white transition-colors">Create</Link>
          <a href="#showcase" className="text-white/70 hover:text-white transition-colors">Showcase</a>
          <a href="#gallery" className="text-white/70 hover:text-white transition-colors">Gallery</a>
        </nav>
        
        {/* Mobile Menu Button */}
        <Button 
          variant="ghost" 
          size="icon"
          className="md:hidden text-white"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </Button>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-solana-darkGray border-b border-white/10 py-3">
          <nav className="flex flex-col gap-3 px-4">
            <Link 
              to="/" 
              className="text-white/70 hover:text-white transition-colors py-2" 
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/create" 
              className="text-white/70 hover:text-white transition-colors py-2" 
              onClick={() => setIsMenuOpen(false)}
            >
              Create
            </Link>
            <a 
              href="#showcase" 
              className="text-white/70 hover:text-white transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Showcase
            </a>
            <a 
              href="#gallery" 
              className="text-white/70 hover:text-white transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Gallery
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
