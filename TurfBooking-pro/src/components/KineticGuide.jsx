import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import GuideAvatar from '../assets/human_guide_avatar.png';

const KineticGuide = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Determine message based on route
  const getMessage = () => {
    switch (location.pathname) {
      case '/':
        return "Welcome to TurfBooking! Need help finding the perfect pitch? Let's get started.";
      case '/find-arena':
        return "Use the dynamic filters above to adjust the radius and price for a turf near you!";
      case '/leagues':
        return "Check out the seasonal insights and top players dominating the network!";
      case '/register-user':
      case '/register-owner':
        return "Almost there! Fill in your details to join the premium network.";
      case '/reviews':
        return "See what the community thinks! Hover over the clips to cycle through gameplay.";
      case '/turf-details':
        return "Check availability and book your next session securely right here!";
      default:
        return "Hey there! I'm your Kinetic Guide. The pitch is yours.";
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100] flex flex-col items-end">
      {/* Tooltip Chat Bubble */}
      <div 
        className={`bg-surface-container-highest border border-primary/30 p-4 rounded-xl rounded-br-none shadow-[0_0_20px_rgba(0,255,148,0.2)] mb-4 w-64 transition-all duration-300 origin-bottom-right ${
          isOpen ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-50 translate-y-4 pointer-events-none'
        }`}
      >
        <div className="flex items-center gap-2 mb-2">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            <span className="text-[10px] text-primary uppercase font-bold tracking-widest headline-font">Kinetic Guide</span>
        </div>
        <p className="font-body text-sm text-on-surface font-medium leading-relaxed">
          {getMessage()}
        </p>
      </div>

      {/* Avatar Container */}
      <div 
        className="relative cursor-pointer group"
        onClick={() => setIsOpen(!isOpen)}
      >
        {/* Glowing Aura */}
        <div className="absolute -inset-4 kinetic-gradient blur-xl opacity-20 group-hover:opacity-40 transition-opacity rounded-full"></div>
        
        {/* Floating Avatar */}
        <div className="relative w-16 h-16 rounded-full bg-surface-dim border-2 border-primary/40 flex items-center justify-center overflow-hidden animate-[bounce_3s_infinite] hover:border-primary transition-colors shadow-lg">
          <img 
            src={GuideAvatar} 
            alt="Kinetic Guide" 
            className="w-full h-full object-cover brightness-110"
          />
        </div>
      </div>
    </div>
  );
};

export default KineticGuide;
