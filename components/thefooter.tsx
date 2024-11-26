import React, { useState, useEffect,} from 'react';
import Image from 'next/image';

const Thefooter = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);  // Stan do śledzenia aktualnego obrazu
  const imageSources = [
    '/images/Wall-Poster-Mockup.jpg',
    '/images/nigel-hoare-r5c_l6SCRdg-unsplash.jpg',
    '/images/susan-wilkinson-IIc73xHTRTg-unsplash.jpg',
    '/images/demi-deherrera-L-sm1B4L1Ns-unsplash.jpg',
  ];

  // Funkcja do obsługi zdarzenia scroll
  const handleWheel = (e: WheelEvent) => {
    if (e.deltaY > 0) {
      // Przewijanie w dół (zmienia na następny obrazek)
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageSources.length);
    } else {
      // Przewijanie w górę (zmienia na poprzedni obrazek)
      setCurrentImageIndex((prevIndex) => (prevIndex - 1 + imageSources.length) % imageSources.length);
    }
  };

  useEffect(() => {
    // Dodanie event listenera dla scrolla
    window.addEventListener('wheel', handleWheel);

    // Czyszczenie event listenera przy unmount
    return () => {
      window.removeEventListener('wheel', handleWheel);
    };
  }, []);

  return (
    <div className="scroll-container h-[105vh]">
      <div className="image-item">
        <Image
          src={imageSources[currentImageIndex]}
          alt={`Image ${currentImageIndex + 1}`}
          width={300}
          height={200}
          className="absolute"
        />
      </div>
    </div>
  );
};

export default Thefooter;
