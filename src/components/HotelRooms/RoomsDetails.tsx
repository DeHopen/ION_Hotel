"use client"

import React, {FC, useEffect, useRef, useState} from 'react';
import styles from '@/styles/Desktop/HotelRooms/RoomsDetails.module.scss';
import {kanitCyrillic} from '@/styles/fonts/fonts'
import Image from "next/image";
import {roomsDetails} from "@/types/types";

interface RoomDetailsProps {
  room: roomsDetails
}

const RoomsDetails: FC<RoomDetailsProps> = ({room}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showBokehLeft, setShowBokehLeft] = useState(false);
  const [showBokehRight, setShowBokehRight] = useState(true);
  const smallImagesRef = useRef<HTMLDivElement>(null);

  const handleThumbnailClick = (index: number) => {
    setCurrentImageIndex(index);
  };

  const centerThumbnail = (index: number) => {
    if (smallImagesRef.current) {
      const container = smallImagesRef.current;
      const thumbnailWidth = container.scrollWidth / room.images.length;
      const targetScrollLeft = index * thumbnailWidth - container.clientWidth / 2 + thumbnailWidth / 2;
      container.scrollTo({
        left: targetScrollLeft,
        behavior: 'smooth',
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (smallImagesRef.current) {
        const {scrollLeft, scrollWidth, clientWidth} = smallImagesRef.current;
        setShowBokehLeft(scrollLeft > 0);
        setShowBokehRight(scrollLeft + clientWidth < scrollWidth);
      }
    };

    const handleWheel = (event: WheelEvent) => {
      event.preventDefault();
      if (smallImagesRef.current) {
        smallImagesRef.current.scrollLeft += event.deltaY;
      }
    };

    const smallImagesElement = smallImagesRef.current;
    smallImagesElement?.addEventListener('scroll', handleScroll);
    smallImagesElement?.addEventListener('wheel', handleWheel);

    return () => {
      smallImagesElement?.removeEventListener('scroll', handleScroll);
      smallImagesElement?.removeEventListener('wheel', handleWheel);
    };
  }, []);

  useEffect(() => {
    centerThumbnail(currentImageIndex);
  }, [currentImageIndex]);

  return (
      <div className={styles.container}>
        <div className={styles.mainImg}>
          <Image
              src={room.images[currentImageIndex].src}
              alt={room.name}
              width={room.images[currentImageIndex].width}
              height={room.images[currentImageIndex].height}
              className={styles.imgBig}
          />
        </div>
        <div className={styles.content}>
          <div className={styles.smallImagesWrapper}>
            {showBokehLeft && <div className={styles.bokehLeft}></div>}
            <div className={styles.smallImages} ref={smallImagesRef}>
              {room.images.map((image, index) => (
                  <div
                      key={index}
                      className={`${styles.thumbnail} ${currentImageIndex === index ? styles.selectedImg : ''}`}
                      onClick={() => handleThumbnailClick(index)}
                  >
                    <Image
                        src={image.src}
                        alt={`${room.name} thumbnail ${index + 1}`}
                        className={styles.img}
                        width={image.width}
                        height={image.height}
                    />
                  </div>
              ))}
            </div>
            {showBokehRight && <div className={styles.bokehRight}></div>}
          </div>
          <div className={styles.description}>
            <div className={styles.text}>
              <div className={kanitCyrillic.className}>
                <h3>{room.name}</h3>
              </div>
              <p>{room.description}</p>
            </div>
            <div className={styles.button}>
              <button>
                <span className={styles.buttonText}>Забронировать за {room.price}Р</span>
              </button>
            </div>
          </div>

        </div>
      </div>
  );
}

export default RoomsDetails;