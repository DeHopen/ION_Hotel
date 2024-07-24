"use client"

import {useState, FC, useEffect, useRef} from "react";
import styles from "@/styles/carousel.module.scss"
import Image from "next/image";
import Placeholder from "@/components/UniversalComponents/Placeholder";
import {kanitCyrillic} from '@/styles/fonts/fonts'

interface ImageProps {
  src: string;
  alt: string;
  title: string;
  mainText: string;
  additionalText: string;
}

interface CarouselProps {
  images: ImageProps[];

}


const CarouselMainPage:FC<CarouselProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPrevHovered, setIsPrevHovered] = useState(false);
  const [isNextHovered, setIsNextHovered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const touchStartXRef = useRef<number | null>(null);
  const isScrolling = useRef(false);

  const handlePrevClick = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  const handleNextClick = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  const handleWheel = (event: WheelEvent) => {
    if (isScrolling.current) return;
    isScrolling.current = true;

    if (event.deltaY > 0) {
      handleNextClick();
    } else {
      handlePrevClick();
    }

    setTimeout(() => {
      isScrolling.current = false;
    }, 700); // Устанавливаем задержку для предотвращения частых переключений
  };

  const handleTouchStart = (event: TouchEvent) => {
    touchStartXRef.current = event.touches[0].clientX;
  };

  const handleTouchMove = (event: TouchEvent) => {
    if (touchStartXRef.current === null) return;
    const touchEndX = event.touches[0].clientX;
    if (touchStartXRef.current - touchEndX > 50) {
      handleNextClick();
      touchStartXRef.current = null;
    } else if (touchStartXRef.current - touchEndX < -50) {
      handlePrevClick();
      touchStartXRef.current = null;
    }
  };

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.addEventListener("wheel", handleWheel, { passive: false });
      container.addEventListener("touchstart", handleTouchStart);
      container.addEventListener("touchmove", handleTouchMove);
    }
    return () => {
      if (container) {
        container.removeEventListener("wheel", handleWheel);
        container.removeEventListener("touchstart", handleTouchStart);
        container.removeEventListener("touchmove", handleTouchMove);
      }
    };
  }, [currentIndex]);



  return (
      <div className={styles.container} ref={containerRef}>
        <div className={styles.box}>
          <div className={styles.carousel_container} style={{transform: `translateX(-${currentIndex * 100}%)`}}>
            {images.map((image, index) => (
                <div key={index} className={styles.carousel}>
                  <img src={image.src} alt={image.alt} className={styles.img}/>
                  <div className={styles.overlay}></div>
                  <Placeholder mainText={image.mainText} additionalText={image.additionalText}/>
                  <div className={styles.textOverlay}>
                    <div className={kanitCyrillic.className}>
                      <h2 className={styles.title}>{image.title}</h2>
                    </div>
                  </div>
                </div>
            ))}
          </div>
          <div className={styles.buttons}>
            <button
                className={styles.button1}
                onClick={handlePrevClick}
                onMouseEnter={() => setIsPrevHovered(true)}
                onMouseLeave={() => setIsPrevHovered(false)}
            >
              <Image
                  src={isPrevHovered ? '/CarouselMainPage/Active/ArrowLeft.svg' : '/CarouselMainPage/ArrowLeft.svg'}
                  alt='ArrowLeft'
                  width={24}
                  height={24}
              />
            </button>
            <button
                className={styles.button2}
                onClick={handleNextClick}
                onMouseEnter={() => setIsNextHovered(true)}
                onMouseLeave={() => setIsNextHovered(false)}
            >
              <Image
                  src={isNextHovered ? '/CarouselMainPage/Active/ArrowRight.svg' : '/CarouselMainPage/ArrowRight.svg'}
                  alt='ArrowRight'
                  width={24}
                  height={24}
              />
            </button>
          </div>
        </div>
      </div>
  );
};

export default CarouselMainPage;