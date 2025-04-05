
import React, { useState, useRef } from 'react';
import { Send } from 'lucide-react';
import Navbar from '@/components/Navbar';
import FooterSection from '@/components/FooterSection';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const FunkoChat = () => {
  const [messages, setMessages] = useState<{ role: string; content: string }[]>([]);
  
  const [messageInput, setMessageInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!messageInput.trim()) {
      return;
    }

    // Add user message
    setMessages([
      ...messages, 
      { role: 'user', content: messageInput }
    ]);

    // Simulate AI processing
    setIsLoading(true);
    setTimeout(() => {
      setMessages(prev => [
        ...prev,
        { 
          role: 'system', 
          content: `Hey there! I got your message: "${messageInput}". This is a demo chat interface for the Funko POP! Solana edition.`
        }
      ]);
      setIsLoading(false);
      setMessageInput('');
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
              <p className="text-white/70 text-sm">Chat with the Funko POP! Solana edition</p>
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

            {/* Chat Input Form Area */}
            <form onSubmit={handleSubmit} className="border-t border-white/10 p-4">
              <div className="flex items-center space-x-3">
                <div className="flex-1">
                  <Input
                    value={messageInput}
                    onChange={(e) => setMessageInput(e.target.value)}
                    placeholder="Type your message here..."
                    className="bg-solana-darkGray/50 border-white/10 focus-visible:ring-solana-purple"
                  />
                </div>
                <Button 
                  type="submit" 
                  className="bg-solana-green text-solana-black hover:bg-solana-green/90 h-10 w-10"
                  disabled={isLoading}
                >
                  <Send size={18} />
                </Button>
              </div>
            </form>
          </motion.div>
        </div>
      </main>
      <FooterSection />
    </div>
  );
};

export default FunkoChat;
