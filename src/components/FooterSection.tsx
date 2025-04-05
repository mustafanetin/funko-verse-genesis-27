
import React from 'react';

const FooterSection = () => {
  return (
    <footer className="bg-solana-darkGray border-t border-white/5 py-8 md:py-12 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-6 md:mb-8 gap-6">
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-12 w-full md:w-auto">
            <div>
              <h4 className="text-white font-medium mb-2 md:mb-3 text-sm md:text-base">Site</h4>
              <div className="flex flex-col gap-1 md:gap-2">
                <a href="#home" className="text-white/50 hover:text-solana-green text-xs md:text-sm">Home</a>
                <a href="#showcase" className="text-white/50 hover:text-solana-green text-xs md:text-sm">Showcase</a>
                <a href="#gallery" className="text-white/50 hover:text-solana-green text-xs md:text-sm">Gallery</a>
              </div>
            </div>
            <div>
              <h4 className="text-white font-medium mb-2 md:mb-3 text-sm md:text-base">Community</h4>
              <div className="flex flex-col gap-1 md:gap-2">
                <a href="#" className="text-white/50 hover:text-solana-green text-xs md:text-sm">Discord</a>
                <a href="#" className="text-white/50 hover:text-solana-green text-xs md:text-sm">Twitter</a>
                <a href="#" className="text-white/50 hover:text-solana-green text-xs md:text-sm">Telegram</a>
              </div>
            </div>
            <div>
              <h4 className="text-white font-medium mb-2 md:mb-3 text-sm md:text-base">Resources</h4>
              <div className="flex flex-col gap-1 md:gap-2">
                <a href="#" className="text-white/50 hover:text-solana-green text-xs md:text-sm">Documentation</a>
                <a href="#" className="text-white/50 hover:text-solana-green text-xs md:text-sm">Solana</a>
                <a href="#" className="text-white/50 hover:text-solana-green text-xs md:text-sm">ChatGPT</a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/5 pt-4 md:pt-6 flex flex-col md:flex-row justify-between items-center">
          <div className="flex gap-4 mt-2 md:mt-0">
            <a href="#" className="text-white/30 hover:text-white text-xs md:text-sm">Terms</a>
            <a href="#" className="text-white/30 hover:text-white text-xs md:text-sm">Privacy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
