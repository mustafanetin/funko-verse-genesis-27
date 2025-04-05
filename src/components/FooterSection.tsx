
import React from 'react';

const FooterSection = () => {
  return (
    <footer className="bg-solana-darkGray border-t border-white/5 py-12 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="mb-6 md:mb-0">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-display font-bold text-gradient">FunkoVerse</span>
              <span className="text-xs px-2 py-1 rounded-full bg-solana-green text-solana-black font-bold">
                GENESIS
              </span>
            </div>
            <p className="text-white/50 mt-2 text-sm">The future of digital collectibles</p>
          </div>
          
          <div className="flex flex-wrap gap-6 md:gap-12">
            <div>
              <h4 className="text-white font-medium mb-3">Site</h4>
              <div className="flex flex-col gap-2">
                <a href="#home" className="text-white/50 hover:text-solana-green text-sm">Home</a>
                <a href="#about" className="text-white/50 hover:text-solana-green text-sm">About</a>
                <a href="#tutorial" className="text-white/50 hover:text-solana-green text-sm">Tutorial</a>
                <a href="#gallery" className="text-white/50 hover:text-solana-green text-sm">Gallery</a>
              </div>
            </div>
            <div>
              <h4 className="text-white font-medium mb-3">Community</h4>
              <div className="flex flex-col gap-2">
                <a href="#" className="text-white/50 hover:text-solana-green text-sm">Discord</a>
                <a href="#" className="text-white/50 hover:text-solana-green text-sm">Twitter</a>
                <a href="#" className="text-white/50 hover:text-solana-green text-sm">Telegram</a>
              </div>
            </div>
            <div>
              <h4 className="text-white font-medium mb-3">Resources</h4>
              <div className="flex flex-col gap-2">
                <a href="#" className="text-white/50 hover:text-solana-green text-sm">Documentation</a>
                <a href="#" className="text-white/50 hover:text-solana-green text-sm">Solana</a>
                <a href="#" className="text-white/50 hover:text-solana-green text-sm">ChatGPT</a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/5 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/30 text-sm">© 2023 FunkoVerse Genesis. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="text-white/30 hover:text-white text-sm">Terms</a>
            <a href="#" className="text-white/30 hover:text-white text-sm">Privacy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
