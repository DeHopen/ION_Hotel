import React, {FC, useEffect, useRef} from 'react';
import {Carousel} from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import styles from "@/styles/UniversalComponents/CarouselElement.module.scss";
import Main from "@/styles/Mobile/MainPage/CarouselMain.module.scss"
import Image from "next/image";
import '@/styles/Mobile/MainPage/castomCarouselMain/castomCarousel.css';
import Placeholder from "@/components/UniversalComponents/Placeholder";
import {kanitCyrillic} from "@/styles/fonts/fonts";

interface CarouselElementProps {
  images: {
    src: string;
    alt: string;
    title: string;
    mainText: string;
    additionalText: string;
    width: number,
    height: number,
  }[]
}

const CarouselMain: FC<CarouselElementProps> = ({images}) => {
  const carouselRef = useRef<HTMLDivElement>(null);
  let startX = 0;
  let startY = 0;
  let isScrolling = false;

  useEffect(() => {
    const handleTouchStart = (event: TouchEvent) => {
      const touch = event.touches[0];
      startX = touch.clientX;
      startY = touch.clientY;
      isScrolling = false; // Reset scrolling flag
    };

    const handleTouchMove = (event: TouchEvent) => {
      if (isScrolling) return;

      const touch = event.touches[0];
      const deltaX = touch.clientX - startX;
      const deltaY = touch.clientY - startY;

      // Determine if the swipe is more vertical
      if (Math.abs(deltaY) > Math.abs(deltaX)) {
        isScrolling = true; // Set the flag to prevent carousel handling
      }
    };

    const carouselElement = carouselRef.current;
    if (carouselElement) {
      carouselElement.addEventListener('touchstart', handleTouchStart, {passive: true});
      carouselElement.addEventListener('touchmove', handleTouchMove, {passive: true});
    }

    return () => {
      if (carouselElement) {
        carouselElement.removeEventListener('touchstart', handleTouchStart);
        carouselElement.removeEventListener('touchmove', handleTouchMove);
      }
    };
  }, []);

  return (
      <div className={Main.container} ref={carouselRef}>
        <Carousel showThumbs={false}
                  showArrows={false}
                  showStatus={false}
                  autoPlay={true}
                  infiniteLoop={true}
                  swipeable={true}
                  className='main'>
          {images.map((image, index) => (
              <div key={index} className={styles.container}>
                <Image className={Main.img}
                       src={image.src}
                       alt={`Photo ${index + 1}`} width={image.width}
                       height={image.height}/>
                <div className={Main.overlay}></div>
                <div className={Main.placeholder}>
                  <Placeholder mainText={image.mainText} additionalText={image.additionalText}/>
                </div>
                <div className={Main.textOverlay}>
                  <div className={kanitCyrillic.className}>
                    <h2 className={Main.title}>{image.title}</h2>
                  </div>
                </div>
              </div>
          ))}
        </Carousel>
      </div>
  );
};

export default CarouselMain;
