import React, { useState, useEffect, useRef } from 'react';
import styles from '@/styles/NetDetails.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import { kanitCyrillic } from '@/styles/fonts/fonts';

interface Enterprise {
  id: number;
  name: string;
  description1: string;
  description2: string;
  images: {
    src: string;
    width: number;
    height: number;
  }[];
}

interface EnterpriseDetailsProps {
  enterprise: Enterprise;
}

export default function EnterpriseDetails({ enterprise }: EnterpriseDetailsProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showBokehLeft, setShowBokehLeft] = useState(false);
  const [showBokehRight, setShowBokehRight] = useState(true);
  const smallImagesRef = useRef<HTMLDivElement>(null);

  const handleThumbnailClick = (index: number) => {
    setCurrentImageIndex(index);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (smallImagesRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = smallImagesRef.current;
        setShowBokehLeft(scrollLeft > 0);

        setShowBokehRight (scrollLeft + clientWidth < scrollWidth);
      }
    };

    const smallImagesElement = smallImagesRef.current;
    smallImagesElement?.addEventListener('scroll', handleScroll);

    return () => {
      smallImagesElement?.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
      <div className={styles.container}>
        <div className={styles.mainImg}>
          <Image
              src={enterprise.images[currentImageIndex].src}
              alt={enterprise.name}
              width={enterprise.images[currentImageIndex].width}
              height={enterprise.images[currentImageIndex].height}
              className={styles.imgBig}
          />
        </div>
        <div className={styles.content}>
          <div className={styles.text}>
            <div className={kanitCyrillic.className}>
              <h3>{enterprise.name}</h3>
            </div>
            <p>{enterprise.description1}</p>
            <p>{enterprise.description2}</p>
            <Link href="#" className={styles.link}>
              <span>Подробнее</span>
              <Image src="/RoomPage/arrow_orange.svg" alt="arrow" width={24} height={24} />
            </Link>
          </div>
          <div className={styles.smallImagesWrapper}>
            {showBokehLeft && <div className={styles.bokehLeft}></div>}
            <div className={styles.smallImages} ref={smallImagesRef}>
              {enterprise.images.map((image, index) => (
                  <div
                      key={index}
                      className={`${styles.thumbnail} ${currentImageIndex === index ? styles.selectedImg : ''}`}
                      onClick={() => handleThumbnailClick(index)}
                  >
                    <Image
                        src={image.src}
                        alt={`${enterprise.name} thumbnail ${index + 1}`}
                        className={styles.img}
                        width={image.width}
                        height={image.height}
                    />
                  </div>
              ))}
            </div>
            {showBokehRight && <div className={styles.bokehRight}></div>}
          </div>
        </div>
      </div>
  );
}
