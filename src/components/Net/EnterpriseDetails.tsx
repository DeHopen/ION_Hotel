import React, {useState, useEffect, useRef} from 'react';
import styles from '@/styles/Desktop/Net/NetDetails.module.scss';
import Image from 'next/image';
import {kanitCyrillic} from '@/styles/fonts/fonts';
import {netEnterprise} from "@/types/types";


interface EnterpriseDetailsProps {
  enterprise: netEnterprise;
}

export default function EnterpriseDetails({enterprise}: EnterpriseDetailsProps) {
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
      const thumbnailWidth = container.scrollWidth / enterprise.images.length;
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
            <p>{enterprise.description}</p>
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
