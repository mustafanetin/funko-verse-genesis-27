
import React, { useState, useRef } from 'react';
import { ArrowUp, Paperclip, Send, Image } from 'lucide-react';
import Navbar from '@/components/Navbar';
import FooterSection from '@/components/FooterSection';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { motion } from 'framer-motion';

const FunkoChat = () => {
  const [messages, setMessages] = useState<{ role: string; content: string; image?: string }[]>([
    {
      role: 'system',
      content: 'Welcome to Funko Chat! Upload a photo and provide a name to create your own Funko POP! Solana edition. Optionally, you can add a vibe description.'
    }
  ]);
  
  const [name, setName] = useState('');
  const [vibe, setVibe] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setSelectedImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const triggerFileInput = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!selectedImage) {
      // Add a user message indicating an image is required
      setMessages([...messages, { 
        role: 'system', 
        content: 'Please upload an image to create your Funko POP!'
      }]);
      return;
    }

    if (!name.trim()) {
      // Add a user message indicating a name is required
      setMessages([...messages, { 
        role: 'system', 
        content: 'Please provide a name for your Funko POP!'
      }]);
      return;
    }

    // Add user message with their inputs
    const userMessage = `Name: ${name}${vibe ? `\nVibe: ${vibe}` : ''}`;
    setMessages([
      ...messages, 
      { role: 'user', content: userMessage, image: selectedImage }
    ]);

    // Simulate AI processing
    setIsLoading(true);
    setTimeout(() => {
      setMessages(prev => [
        ...prev,
        { 
          role: 'system', 
          content: `Your Solana-style Funko for "${name}" ${vibe ? `with a ${vibe} vibe ` : ''}is being generated! This would normally create a unique Funko POP! based on your specifications.`
        }
      ]);
      setIsLoading(false);
      setName('');
      setVibe('');
      setSelectedImage(null);
    }, 2000);
  };

  return (
    <div className="flex flex-col min-h-screen bg-solana-black text-white">
      <Navbar />
      <main className="flex-1 container mx-auto px-4 pt-24 pb-12">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-solana-darkGray rounded-xl shadow-lg border border-white/5 h-[75vh] flex flex-col"
          >
            {/* Chat Header */}
            <div className="border-b border-white/10 p-4">
              <h1 className="font-display font-bold text-2xl text-gradient">Funko Chat</h1>
              <p className="text-white/70 text-sm">Create your own custom Funko POP! Solana edition</p>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-6">
              {messages.map((message, i) => (
                <div key={i} className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[80%] rounded-lg p-4 ${
                    message.role === 'user' 
                      ? 'bg-solana-boxPurple border border-solana-purple/30' 
                      : 'bg-solana-boxGreen border border-solana-green/30'
                  }`}>
                    {message.image && (
                      <div className="mb-3">
                        <img 
                          src={message.image} 
                          alt="User uploaded" 
                          className="rounded-lg max-h-[200px] w-auto"
                        />
                      </div>
                    )}
                    <p className="text-white whitespace-pre-wrap">{message.content}</p>
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-solana-boxGreen rounded-lg p-4 border border-solana-green/30 max-w-[80%]">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 rounded-full bg-solana-green animate-pulse" />
                      <div className="w-3 h-3 rounded-full bg-solana-green animate-pulse" style={{ animationDelay: "0.2s" }} />
                      <div className="w-3 h-3 rounded-full bg-solana-green animate-pulse" style={{ animationDelay: "0.4s" }} />
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Input Form Area */}
            <form onSubmit={handleSubmit} className="border-t border-white/10 p-4 space-y-3">
              <div className="flex items-center space-x-3">
                <div className="flex-1">
                  <div className="mb-3">
                    <p className="text-sm text-white/70 mb-1">Name for your Funko POP:</p>
                    <Input
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Enter a name (required)"
                      className="bg-solana-darkGray/50 border-white/10 focus-visible:ring-solana-purple"
                    />
                  </div>
                  <div>
                    <p className="text-sm text-white/70 mb-1">Vibe (optional):</p>
                    <Textarea
                      value={vibe}
                      onChange={(e) => setVibe(e.target.value)}
                      placeholder="Cyberpunk, Neon, Retro, etc."
                      className="bg-solana-darkGray/50 border-white/10 focus-visible:ring-solana-purple min-h-[60px]"
                    />
                  </div>
                </div>
                <div className="flex flex-col space-y-3">
                  <Button 
                    type="button" 
                    variant="outline" 
                    className="border-solana-purple hover:bg-solana-purple/20 h-14 w-14"
                    onClick={triggerFileInput}
                  >
                    {selectedImage ? <Image /> : <Paperclip />}
                  </Button>
                  <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleImageUpload}
                    accept="image/*"
                    className="hidden"
                  />
                  <Button 
                    type="submit" 
                    className="bg-solana-green text-solana-black hover:bg-solana-green/90 h-14 w-14"
                    disabled={isLoading}
                  >
                    <Send />
                  </Button>
                </div>
              </div>
              {selectedImage && (
                <div className="mt-2">
                  <p className="text-sm text-white/70 mb-1">Selected Image:</p>
                  <div className="relative w-fit">
                    <img 
                      src={selectedImage} 
                      alt="Selected" 
                      className="h-16 w-auto rounded-md object-cover"
                    />
                    <Button
                      type="button"
                      variant="destructive"
                      className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0"
                      onClick={() => setSelectedImage(null)}
                    >
                      ×
                    </Button>
                  </div>
                </div>
              )}
            </form>
          </motion.div>
        </div>
      </main>
      <FooterSection />
    </div>
  );
};

export default FunkoChat;
