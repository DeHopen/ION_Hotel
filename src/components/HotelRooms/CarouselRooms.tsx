"use client"

import {FC, useState} from 'react';
import styles from '@/styles/carouselRooms.module.scss';

interface Image {
  src: string;
  alt: string;
}

interface RoomCarouselProps {
  images: Image[];
  roomName: string;
  price: string;
}

const CarouselRooms:FC<RoomCarouselProps> = ({images, roomName, price}) => {
  const [current, setCurrent] = useState(0);
  const imageCount = images.length;

  const nextImage = () => {
    setCurrent((prev) => (prev + 1) % imageCount);
  };

  const prevImage = () => {
    setCurrent((prev) => (prev - 1 + imageCount) % imageCount);
  };

  const getNextIndices = (start: number, count: number) => {
    return Array.from({ length: count }, (_, index) => (start + index) % imageCount);
  };

  const smallImageIndices = getNextIndices(current + 1, 2);



  return (
      <div className={styles.carouselContainer}>
        <div className={styles.imagesContainer}>
          {/* Основное изображение */}
          <div className={styles.mainImage}>
            <div className={styles.imgAndText}>
              <img
                  src={images[current].src}
                  alt={images[current].alt}
                  className={styles.image}
              />
              <div className={styles.imageCaption}>
                <div>{roomName}</div>
                <span>{price} ₽ / сутки</span>
              </div>
            </div>
          </div>

          {/* Маленькие изображения */}
          <div className={styles.smallImages}>
            {smallImageIndices.map((index) => (
                <div
                    key={index}
                    className={styles.smallImage}
                    onClick={() => setCurrent(index)}
                >
                  <img
                      src={images[index].src}
                      alt={images[index].alt}
                      className={styles.image}
                  />
                </div>
            ))}
          </div>
        </div>
        {/* Кнопки навигации */}
        <div className={styles.navigationButtons}>
          <button onClick={prevImage} className={styles.navButton}>‹</button>
          <button onClick={nextImage} className={styles.navButton}>›</button>
        </div>
      </div>
  );
}

export default CarouselRooms;
