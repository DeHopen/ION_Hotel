'use client'

import { useState, useEffect, useRef } from 'react';

interface Image {
  src: string;
  alt: string;
}

interface RoomCarouselProps {
  images: Image[];
  visibleImagesCount: number; // Number of images to be visible on screen at once
}

const Carousel: React.FC<RoomCarouselProps> = ({ images, visibleImagesCount = 3 }) => {
  const [currentIndex, setCurrentIndex] = useState(images.length);
  const [isScrolling, setIsScrolling] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);

  // Duplicate images to create an infinite loop effect
  const extendedImages = [...images, ...images, ...images];

  const handleScroll = (event: React.WheelEvent<HTMLDivElement>) => {
    event.preventDefault();
    if (isScrolling) return;

    setIsScrolling(true);
    lockPageScroll();

    const direction = event.deltaY;
    if (direction > 0) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    } else {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  const lockPageScroll = () => {
    document.body.style.overflow = 'hidden';
  };

  const unlockPageScroll = () => {
    document.body.style.overflow = '';
  };

  useEffect(() => {
    if (isScrolling) {
      const timeout = setTimeout(() => {
        setIsScrolling(false);
        unlockPageScroll();

        const totalImages = images.length;

        // Reset to the middle of the extended images list to maintain infinite effect
        if (currentIndex >= totalImages * 2 || currentIndex < totalImages) {
          setCurrentIndex((prevIndex) => {
            const newIndex = prevIndex < totalImages ? totalImages + prevIndex : prevIndex - totalImages;
            if (carouselRef.current) {
              carouselRef.current.style.transition = 'none'; // Temporarily disable transition
              carouselRef.current.style.transform = `translateX(-${newIndex * (100 / visibleImagesCount)}%)`;

              requestAnimationFrame(() => {
                if (carouselRef.current) {
                  carouselRef.current.style.transition = 'transform 0.7s ease-in-out'; // Re-enable transition
                }
              });
            }
            return newIndex;
          });
        }
      }, 700); // Match transition duration

      return () => clearTimeout(timeout);
    }
  }, [isScrolling, currentIndex, images.length, visibleImagesCount]);

  const getImageStyle = (index: number) => {
    const actualIndex = index % images.length;
    return `object-cover duration-700 ${
        actualIndex === currentIndex % images.length
            ? 'w-832 h-832' // Highlight selected image
            : 'w-[25rem] h-[33rem] opacity-50' // Dim non-selected images
    }`;
  };

  return (
      <div className="flex w-full overflow-hidden" onWheel={handleScroll}>
        <div
            ref={carouselRef}
            className="flex gap-4 transition-transform ease-in-out duration-700 w-full"
            style={{
              width: `${100 * (extendedImages.length / visibleImagesCount)}%`, // Adjust width based on visible images
              transform: `translateX(-${currentIndex * (100 / visibleImagesCount)}%)`  // Center the current image
            }}
        >
          {extendedImages.map((image, index) => (
              <div key={index} className={`flex-shrink-0 w-full`} style={{ width: `${100 / 3}%` }}>
                <img src={image.src} alt={image.alt} className={getImageStyle(index)} />
              </div>
          ))}
        </div>
      </div>
  );
};

export default Carousel;
