"use client"

import {FC, useState} from 'react';
import styles from '@/styles/Desktop/HotelRooms/carouselRooms.module.scss';
import {nunitoSans} from '@/styles/fonts/fonts'
import Image from "next/image";

interface Image {
  src: string;
  alt: string;
}

interface RoomCarouselProps {
  images: Image[];
  roomName: string;
  price: string;
}

const CarouselRooms: FC<RoomCarouselProps> = ({images, roomName, price}) => {
  const [current, setCurrent] = useState(0);
  const imageCount = images.length;

  const nextImage = () => {
    setCurrent((prev) => (prev + 1) % imageCount);
  };

  const prevImage = () => {
    setCurrent((prev) => (prev - 1 + imageCount) % imageCount);
  };

  const getNextIndices = (start: number, count: number) => {
    return Array.from({length: count}, (_, index) => (start + index) % imageCount);
  };

  const smallImageIndices = getNextIndices(current + 1, 2);


  return (
      <div className={styles.carouselContainer}>
        <div className={styles.imagesContainer}>
          {/* Основное изображение */}
          <div className={styles.mainImage}>
            <div className={styles.textContainer}>
              <img
                  src={images[current].src}
                  alt={images[current].alt}
                  className={styles.main_image}
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
                      className={styles.small_image}
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

        <div className={nunitoSans.className}>
          <div className={styles.anotherRoomButton}>
            <a href="/another-room" className={styles.buttonLink}>
              <img className={styles.img_room} src="/Small_room/1.jpg" alt=""/>
              <div className={styles.textAndArrow}>
                <span>Малый номер</span>
                <Image src='/RoomPage/arrow_gray.svg' alt='arrow' width={24} height={24}/>
              </div>
            </a>
          </div>
        </div>
      </div>
  );
}

export default CarouselRooms;