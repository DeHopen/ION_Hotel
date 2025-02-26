"use client"

import {useState, FC, useEffect, useRef} from "react";
import styles from "@/styles/Desktop/MainPage/carousel.module.scss"
import Image from "next/image";
import Placeholder from "@/components/UniversalComponents/Placeholder";
import {kanitCyrillic} from '@/styles/fonts/fonts'
import {mainPageImage} from "@/types/types";

interface CarouselProps {
  images: mainPageImage[];
}

const CarouselMainPage: FC<CarouselProps> = ({images}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPrevHovered, setIsPrevHovered] = useState(false);
  const [isNextHovered, setIsNextHovered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const touchStartXRef = useRef<number | null>(null);
  const autoScrollIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const inactivityTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const autoRotate = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };


  const startAutoScroll = () => {
    autoScrollIntervalRef.current = setInterval(autoRotate, 10000); // Change slide every 3 seconds
  };

  const stopAutoScroll = () => {
    if (autoScrollIntervalRef.current) {
      clearInterval(autoScrollIntervalRef.current);
      autoScrollIntervalRef.current = null;
    }
  };

  const resetInactivityTimeout = () => {
    if (inactivityTimeoutRef.current) {
      clearTimeout(inactivityTimeoutRef.current);
    }
    inactivityTimeoutRef.current = setTimeout(() => {
      startAutoScroll();
    }, 30000); // 30 seconds of inactivity to restart auto-scroll
  };

  const handlePrevClick = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
    stopAutoScroll();
    resetInactivityTimeout();
  };

  const handleNextClick = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
    stopAutoScroll();
    resetInactivityTimeout();
  };

  const handleTouchStart = (event: TouchEvent) => {
    touchStartXRef.current = event.touches[0].clientX;
    stopAutoScroll();
    resetInactivityTimeout();
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
      container.addEventListener("touchstart", handleTouchStart);
      container.addEventListener("touchmove", handleTouchMove);
    }
    return () => {
      if (container) {
        container.removeEventListener("touchstart", handleTouchStart);
        container.removeEventListener("touchmove", handleTouchMove);
      }
    };
  }, [currentIndex]);

  useEffect(() => {
    resetInactivityTimeout();
  }, [currentIndex]);

  return (
      <div className={styles.container} ref={containerRef} id={'main'}>
        <div className={styles.box}>
          <div className={styles.carousel_container} style={{transform: `translateX(-${currentIndex * 100}%)`}}>
            {images.map((image, index) => (
                <div key={index} className={styles.carousel}>
                  <Image src={image.src} alt={image.alt} className={styles.img} width={image.width}
                         height={image.height} onClick={() => {
                    stopAutoScroll();
                    resetInactivityTimeout();
                  }}/>
                  <div className={styles.overlay}></div>
                  <div className={styles.items}>
                    <div className={styles.placeholder}>
                      <Placeholder mainText={image.mainText} additionalText={image.additionalText}/>
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
                  <div className={styles.textOverlay}>
                    <div className={kanitCyrillic.className}>
                      <h2 className={styles.title}>{image.title}</h2>
                    </div>
                  </div>
                </div>
            ))}
          </div>
        </div>
      </div>
  );
};

export default CarouselMainPage;
