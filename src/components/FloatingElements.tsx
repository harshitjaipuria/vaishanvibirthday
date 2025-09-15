import { useEffect, useState } from "react";

const FloatingElements = () => {
  const [elements, setElements] = useState<Array<{ id: number; type: 'heart' | 'sparkle'; x: number; y: number; delay: number }>>([]);

  useEffect(() => {
    const generateElements = () => {
      const newElements = [];
      for (let i = 0; i < 20; i++) {
        newElements.push({
          id: i,
          type: Math.random() > 0.5 ? 'heart' : 'sparkle',
          x: Math.random() * 100,
          y: Math.random() * 100,
          delay: Math.random() * 6
        });
      }
      setElements(newElements);
    };

    generateElements();
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {elements.map((element) => (
        <div
          key={element.id}
          className={element.type === 'heart' ? 'floating-heart' : 'floating-sparkle'}
          style={{
            left: `${element.x}%`,
            top: `${element.y}%`,
            animationDelay: `${element.delay}s`
          }}
        >
          {element.type === 'heart' ? (
            <span className="text-2xl">💖</span>
          ) : (
            <span className="text-xl">✨</span>
          )}
        </div>
      ))}
    </div>
  );
};

export default FloatingElements;