interface ComplimentPopupProps {
  compliment: string;
  heading: string;
  isOpen: boolean;
  onClose: () => void;
  onNewCompliment: () => void;
}

const ComplimentPopup = ({ compliment, heading, isOpen, onClose, onNewCompliment }: ComplimentPopupProps) => {
  if (!isOpen) return null;

  return (
    <div className="popup-overlay" onClick={onClose}>
      <div className="popup-content" onClick={(e) => e.stopPropagation()}>
        <div className="text-center">
          <div className="text-4xl mb-4">🌟</div>
          <h3 className="text-xl font-bold mb-4">{heading}</h3>
          <p className="text-lg leading-relaxed mb-6">{compliment}</p>
          <button 
            onClick={onNewCompliment}
            className="sparkle-button"
          >
            Aww Thank You! 💕
          </button>
        </div>
      </div>
    </div>
  );
};

export default ComplimentPopup;