"use client"

import {useState, FC} from "react";
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


const Carousel:FC<CarouselProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPrevHovered, setIsPrevHovered] = useState(false);
  const [isNextHovered, setIsNextHovered] = useState(false);


  const handlePrevClick = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  const handleNextClick = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  return (
      <div className={styles.container}>
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
                  src={isPrevHovered ? '/Carousel/Active/ArrowLeft.svg' : '/Carousel/ArrowLeft.svg'}
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
                  src={isNextHovered ? '/Carousel/Active/ArrowRight.svg' : '/Carousel/ArrowRight.svg'}
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

export default Carousel