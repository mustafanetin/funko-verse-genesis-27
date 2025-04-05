
import React from 'react';
import { motion } from 'framer-motion';

const FunkoShowcase = () => {
  const funkos = [
    {
      id: 1,
      name: "BENBYBIT",
      image: "/lovable-uploads/fa3f99ff-5156-4264-a5d2-5df237674bf6.png",
      backgroundColor: "bg-gradient-to-br from-amber-700 to-amber-900",
    },
    {
      id: 2,
      name: "PYRO RED",
      image: "/lovable-uploads/1ba9de95-d0cc-4045-bfc4-ccfe1a39185b.png",
      backgroundColor: "bg-gradient-to-br from-green-900 to-green-950",
    },
    {
      id: 3,
      name: "EL CHARTO",
      image: "/lovable-uploads/9f499331-c1de-46c1-89ca-cc955469cd2f.png",
      backgroundColor: "bg-gradient-to-br from-yellow-500 to-amber-600",
    },
    {
      id: 4,
      name: "DEV.FUN",
      image: "/lovable-uploads/19a51140-75bd-4708-bb9d-0a08c45570f6.png",
      backgroundColor: "bg-gradient-to-br from-green-400 to-green-600",
    },
    {
      id: 5,
      name: "XELF",
      image: "/lovable-uploads/62aaf146-6de5-4fca-9f9c-019538bc40e2.png",
      backgroundColor: "bg-gradient-to-br from-fuchsia-500 via-blue-500 to-green-500",
    },
    {
      id: 6,
      name: "SATOSHI",
      image: "/lovable-uploads/01beb052-2d59-41c3-8d30-14bb6f894ed8.png",
      backgroundColor: "bg-gradient-to-br from-indigo-900 to-violet-900",
    },
  ];

  return (
    <section id="showcase" className="py-20 px-4 bg-solana-black relative">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
            Solana <span className="text-gradient">Funko</span> Collection
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Check out these amazing custom Funko POPs inspired by the Solana ecosystem.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {funkos.map((funko, index) => (
            <motion.div
              key={funko.id}
              className="card-shine"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className={`rounded-xl overflow-hidden ${funko.backgroundColor} p-6 hover:scale-105 transition-all duration-300`}>
                <div className="aspect-square flex items-center justify-center">
                  <img 
                    src={funko.image} 
                    alt={`${funko.name} Funko POP`} 
                    className="object-contain h-full max-h-[400px]"
                  />
                </div>
                <div className="text-center mt-4">
                  <h3 className="text-xl font-display font-bold">{funko.name}</h3>
                  <p className="text-white/70 text-sm">SOLANA EDITION</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      <div className="absolute top-1/2 left-0 w-full h-3/4 -translate-y-1/2 bg-funko-glow opacity-30 blur-3xl -z-10"></div>
    </section>
  );
};

export default FunkoShowcase;
