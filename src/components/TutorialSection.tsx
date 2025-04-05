
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";

const TutorialSection = () => {
  const tutorialSteps = [
    {
      step: 1,
      title: "Describe Your Vision",
      description: "Open ChatGPT and describe your unique Funko POP! character in detail. Be specific about features like hair, clothing, accessories, and pose.",
      prompt: "I want to create a custom Funko POP! figure that looks like a cyberpunk astronaut with neon blue hair, wearing a silver spacesuit with purple accents, and holding a holographic planet in its hand."
    },
    {
      step: 2,
      title: "Refine The Details",
      description: "Work with ChatGPT to refine your design. Ask for specific adjustments to match the classic Funko aesthetic - large square head, simple body, and stylized features.",
      prompt: "Can you make the head more square and the eyes completely black like traditional Funko figures? Also, make the spacesuit more simplified with just key details highlighted."
    },
    {
      step: 3, 
      title: "Generate The Image",
      description: "Ask ChatGPT to generate an image of your custom Funko design. Request multiple angles if you want to see different perspectives.",
      prompt: "Please generate an image of this Funko POP! character inside a display box that has the Funko and Solana branding. Make it look like an official product."
    },
    {
      step: 4,
      title: "Mint Your Creation",
      description: "Once you're satisfied with your design, connect your wallet to our platform and mint your custom Funko as an NFT on the Solana blockchain.",
      prompt: "This final design looks perfect! Now I'd like to save this image to use for minting my custom Funko as an NFT."
    }
  ];

  return (
    <section id="tutorial" className="py-20 px-4 bg-funko-glow">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
            Create Your <span className="text-gradient">Own Funko</span>
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Follow these simple steps to design your custom Funko POP! figure using ChatGPT and mint it on the Solana blockchain.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Tabs defaultValue="step-1" className="w-full">
            <TabsList className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-transparent">
              {tutorialSteps.map((step) => (
                <TabsTrigger
                  key={`step-${step.step}`}
                  value={`step-${step.step}`}
                  className="data-[state=active]:bg-solana-green data-[state=active]:text-solana-black"
                >
                  Step {step.step}
                </TabsTrigger>
              ))}
            </TabsList>

            {tutorialSteps.map((step) => (
              <TabsContent key={`step-${step.step}`} value={`step-${step.step}`} className="mt-6">
                <Card className="glass-card p-6 border-solana-green/20">
                  <h3 className="text-2xl font-display font-bold mb-4">{step.title}</h3>
                  <p className="text-white/70 mb-6">{step.description}</p>
                  
                  <div className="bg-solana-black/50 rounded-lg p-4 border border-white/10">
                    <p className="text-sm text-solana-green font-mono">Example prompt:</p>
                    <p className="italic text-white/90 mt-2">{step.prompt}</p>
                  </div>

                  {step.step === 4 && (
                    <div className="mt-6 bg-gradient-to-r from-solana-purple to-solana-green p-[1px] rounded-lg">
                      <div className="bg-solana-black px-4 py-3 rounded-lg text-center">
                        <p className="text-white font-display">Ready to mint your creation?</p>
                        <p className="text-xs text-white/50 mt-1">Connect your wallet to get started</p>
                      </div>
                    </div>
                  )}
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default TutorialSection;
