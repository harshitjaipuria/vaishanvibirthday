import { useState } from "react";
import ComplimentPopup from "./ComplimentPopup";
import FloatingElements from "./FloatingElements";
import vaishanviImage from "@/assets/vaishanvi-placeholder.jpg";

const BirthdayWishes = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [currentCompliment, setCurrentCompliment] = useState("");
  const [currentHeading, setCurrentHeading] = useState("");

  const headings = [
    "Here's why Vaishanvi is amazing:",
    "Another reason Vaishanvi is wonderful:",
    "Why Vaishanvi is so special:",
    "What makes Vaishanvi incredible:",
    "Why everyone loves Vaishanvi:",
    "Vaishanvi's beautiful qualities:",
    "What makes Vaishanvi shine:",
    "Why Vaishanvi is a treasure:",
    "Vaishanvi's amazing traits:",
    "What makes Vaishanvi so sweet:",
    "Why Vaishanvi is extraordinary:",
    "Vaishanvi's wonderful nature:",
    "What makes Vaishanvi unique:",
    "Why Vaishanvi is so dear:",
    "Vaishanvi's lovely characteristics:",
    "What makes Vaishanvi magical:",
    "Why Vaishanvi is precious:",
    "Vaishanvi's heartwarming qualities:",
    "What makes Vaishanvi so lovable:",
    "Why Vaishanvi is simply the best:"
  ];

  const compliments = [
    "You have the most beautiful heart and always make everyone around you feel special and loved! 💖",
    "Your kindness radiates like sunshine and brightens up even the gloomiest days! ☀️",
    "You're incredibly sweet and have this amazing ability to make people smile just by being yourself! 😊",
    "Your humble nature is so refreshing - you never realize how amazing you truly are! 🌟",
    "You have the most genuine soul and your friendship means the world to everyone who knows you! 💝",
    "Your laughter is contagious and fills every room with joy and positive energy! 😄",
    "You're always there for others with open arms and the biggest, warmest hugs! 🤗",
    "Your wisdom and gentle guidance help others see the light in difficult times! 🕯️",
    "You have this incredible gift of making ordinary moments feel magical and special! ✨",
    "Your loyalty and trustworthiness make you the most precious friend anyone could have! 👑",
    "You see beauty in everything and help others appreciate the wonderful world around us! 🌸",
    "Your courage to be authentically yourself inspires others to embrace their true selves too! 🦋",
    "You have the most caring heart and always put others' happiness before your own! 💕",
    "Your positive energy is like a magnet that draws all the good things in life! 🌈",
    "You're incredibly thoughtful and remember the little things that matter most to people! 🎁",
    "Your patience and understanding create a safe space where people feel truly heard! 👂",
    "You have this amazing strength that helps you overcome challenges with grace and dignity! 💪",
    "Your creativity and unique perspective make the world a more colorful and interesting place! 🎨",
    "You're genuinely interested in others and make everyone feel important and valued! 💎",
    "Your love is unconditional and your friendship is a treasure beyond measure! 🏆"
  ];

  const handleThankYou = () => {
    const randomCompliment = compliments[Math.floor(Math.random() * compliments.length)];
    const randomHeading = headings[Math.floor(Math.random() * headings.length)];
    setCurrentCompliment(randomCompliment);
    setCurrentHeading(randomHeading);
    setShowPopup(true);
  };

  const handleNewCompliment = () => {
    const randomCompliment = compliments[Math.floor(Math.random() * compliments.length)];
    const randomHeading = headings[Math.floor(Math.random() * headings.length)];
    setCurrentCompliment(randomCompliment);
    setCurrentHeading(randomHeading);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative">
      <FloatingElements />
      
      <div className="birthday-card text-center max-w-2xl w-full relative z-10">
        <div className="mb-8">
          <div className="mb-6 flex justify-center">
            <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-birthday-pink shadow-magical">
              <img 
                src={vaishanviImage} 
                alt="Beautiful Vaishanvi" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <h1 className="text-6xl font-bold title-gradient mb-4">
            Happy Birthday
          </h1>
          <h2 className="text-5xl font-bold text-birthday-purple mb-6 font-dancing">
            Vaishanvi! 🎉
          </h2>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Today is all about celebrating the incredible person you are! 
            Your childhood friend wanted to create something special just for you. 
            You bring so much joy and love into this world! 🌟
          </p>
        </div>

        <div className="space-y-6">
          <div className="text-7xl mb-6">🎂🎈🎁</div>
          
          <button 
            onClick={handleThankYou}
            className="birthday-button"
          >
            Thank You! 💖
          </button>
          
          <p className="text-sm text-muted-foreground mt-4">
            Click the button to discover why you're so wonderful! ✨
          </p>
        </div>
      </div>

      <ComplimentPopup 
        compliment={currentCompliment}
        heading={currentHeading}
        isOpen={showPopup}
        onClose={() => setShowPopup(false)}
        onNewCompliment={handleNewCompliment}
      />
    </div>
  );
};

export default BirthdayWishes;