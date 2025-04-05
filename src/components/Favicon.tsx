
import { useEffect } from 'react';

interface FaviconProps {
  emoji?: string;
  color?: string;
}

const Favicon = ({ emoji = "🪙", color = "#14F195" }: FaviconProps) => {
  useEffect(() => {
    // Create a canvas element to draw our favicon
    const canvas = document.createElement('canvas');
    canvas.width = 64;
    canvas.height = 64;
    const ctx = canvas.getContext('2d');
    
    if (ctx) {
      // Fill background
      ctx.fillStyle = color;
      ctx.fillRect(0, 0, 64, 64);
      
      // Add emoji
      ctx.font = '40px serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillStyle = '#000000';
      ctx.fillText(emoji, 32, 32);
      
      // Update favicon
      const link = document.querySelector("link[rel*='icon']") as HTMLLinkElement || document.createElement('link');
      link.type = 'image/x-icon';
      link.rel = 'shortcut icon';
      link.href = canvas.toDataURL('image/x-icon');
      document.getElementsByTagName('head')[0].appendChild(link);
    }
  }, [emoji, color]);

  return null;
};

export default Favicon;
