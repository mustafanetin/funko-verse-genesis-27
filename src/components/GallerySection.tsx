
import React from 'react';
import { motion } from "framer-motion";

const GallerySection = () => {
  const funkoItems = [
    {
      id: 1,
      name: "El Charto",
      image: "/lovable-uploads/88bd0c7e-d822-4e0b-af11-9bc1071e1f1a.png",
      theme: "brown"
    },
    {
      id: 2,
      name: "Dev.fun",
      image: "/lovable-uploads/af24e16f-915b-47e4-9586-57386468d1a1.png", 
      theme: "green"
    },
    {
      id: 3,
      name: "XELF",
      image: "/lovable-uploads/3a1c6bba-f587-439b-a2cc-30a7a2657a02.png",
      theme: "rainbow"
    },
    {
      id: 4,
      name: "SPUMP.FUN",
      image: "/lovable-uploads/c9a63e7a-e87a-42b7-914b-46a47a60c7ae.png",
      theme: "green"
    }
  ];

  const getBoxClass = (theme: string) => {
    switch (theme) {
      case "green":
        return "funko-box-green";
      case "rainbow":
        return "funko-box-rainbow";
      default:
        return "funko-box-purple";
    }
  };

  return (
    <section id="gallery" className="py-20 px-4 bg-solana-black">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
            Explore Our <span className="text-gradient">Gallery</span>
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Browse through our collection of custom Funko POP! figures created by the community and minted on Solana.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {funkoItems.map((item) => (
            <motion.div 
              key={item.id}
              className={`funko-box ${getBoxClass(item.theme)} card-shine p-4 h-[400px] flex flex-col`}
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="grow flex items-center justify-center p-2">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="mt-4 bg-black/30 backdrop-blur-sm rounded-lg p-3">
                <h3 className="text-xl font-display font-medium">{item.name}</h3>
                <div className="flex items-center justify-between mt-2">
                  <span className="text-xs bg-solana-green/20 text-solana-green px-2 py-1 rounded-full">
                    Solana Edition
                  </span>
                  <span className="text-xs text-white/50">
                    #001
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-white/50 mb-4">Want to see your creation in our gallery?</p>
          <button className="bg-gradient-to-r from-solana-purple to-solana-green p-[1px] rounded-lg">
            <div className="bg-solana-black px-6 py-2 rounded-lg hover:bg-transparent transition-colors">
              Submit Your Design
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
