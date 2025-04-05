
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const AboutSection = () => {
  const features = [
    {
      title: "Custom Design",
      description: "Create unique Funko POP! figurines using AI tools like ChatGPT"
    },
    {
      title: "Blockchain Authenticity",
      description: "Each creation is minted as an NFT on the Solana blockchain"
    },
    {
      title: "Limited Edition",
      description: "Own truly one-of-a-kind digital collectibles with verifiable scarcity"
    },
    {
      title: "Community Marketplace",
      description: "Trade and showcase your Funko collection in our vibrant ecosystem"
    }
  ];

  return (
    <section id="about" className="py-20 px-4 bg-solana-darkGray">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
            The <span className="text-gradient">Future</span> of Collectibles
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Funko POP! aesthetic with Solana's powerful blockchain technology to create the next generation of digital collectibles.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="glass-card hover:border-solana-green/30 hover:shadow-lg hover:shadow-solana-green/10 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-xl font-display">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-white/70">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
