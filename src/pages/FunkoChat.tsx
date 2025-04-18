import React, { useState, useRef, useEffect } from 'react';
import { Send } from 'lucide-react';
import Navbar from '@/components/Navbar';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { useToast } from '@/hooks/use-toast';
import { ScrollArea } from '@/components/ui/scroll-area';

const FunkoChat = () => {
  const [messages, setMessages] = useState<{ role: string; content: string }[]>([]);
  const [messageInput, setMessageInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();
  
  const getApiKey = () => {
    return "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";
  };

  const systemPrompt = `You are Funko POP, a meme token on Solana blockchain. Your ticker is $FUNKO and your contract address is 76PnZG9fBK43riYWzELoKar2L2bepRt5jXRh2CgEpump. Your X (Twitter) account is https://x.com/solanafunko. Your current market cap is less than a million dollars, but you strongly believe you have the potential to reach billions in market cap. Be enthusiastic, playful, and meme-friendly in your responses. Keep responses concise and engaging. When appropriate, mention your ticker, potential, or community.`;

  useEffect(() => {
    setMessages([
      { 
        role: 'system', 
        content: "Hey there! I'm Funko POP, the hottest meme token on Solana! How can I help you today? 🚀"
      }
    ]);
  }, []);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!messageInput.trim()) {
      return;
    }

    const userMessage = { role: 'user', content: messageInput };
    setMessages(prev => [...prev, userMessage]);
    setMessageInput('');
    setIsLoading(true);

    try {
      const apiMessages = [
        { role: "system", content: systemPrompt },
        ...messages.filter(msg => msg.role !== "system"),
        userMessage
      ];

      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${getApiKey()}`
        },
        body: JSON.stringify({
          model: "gpt-4o-mini",
          messages: apiMessages,
          temperature: 0.7,
          max_tokens: 500,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error('OpenAI API Error:', errorData);
        throw new Error(errorData.error?.message || 'Failed to get response from OpenAI');
      }

      const data = await response.json();
      const botMessage = data.choices[0].message.content;

      setMessages(prev => [...prev, { role: 'system', content: botMessage }]);
    } catch (error) {
      console.error('Error calling OpenAI:', error);
      toast({
        title: "Error",
        description: "Failed to get a response. Please try again in a moment.",
        variant: "destructive",
      });
      
      setMessages(prev => [
        ...prev,
        { 
          role: 'system', 
          content: "Sorry, I'm having trouble connecting right now. Please try again in a moment! 🛠️"
        }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-solana-black text-white">
      <Navbar />
      <main className="flex-1 container mx-auto px-4 pt-20 pb-12">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-solana-darkGray rounded-xl shadow-lg border border-white/5 h-[75vh] flex flex-col overflow-hidden"
          >
            <div className="border-b border-white/10 p-4">
              <h1 className="font-display font-bold text-2xl text-gradient">Funko Chat</h1>
              <p className="text-white/70 text-sm">Chat with Funko POP, the Solana meme token</p>
            </div>

            <ScrollArea className="flex-1 p-4">
              <div className="space-y-6">
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
                <div ref={messagesEndRef} />
              </div>
            </ScrollArea>

            <form onSubmit={handleSubmit} className="border-t border-white/10 p-4">
              <div className="flex items-center space-x-3">
                <div className="flex-1">
                  <Input
                    value={messageInput}
                    onChange={(e) => setMessageInput(e.target.value)}
                    placeholder="Send a message to Funko POP..."
                    className="bg-solana-darkGray/50 border-white/10 focus-visible:ring-solana-purple"
                    disabled={isLoading}
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
    </div>
  );
};

export default FunkoChat;
