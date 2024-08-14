import React, {FC} from 'react';
import {Carousel} from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import styles from "@/styles/UniversalComponents/CarouselElement.module.scss";
import Net from "@/styles/Mobile/Net/NetMobile.module.scss"
import Image from "next/image";
import '@/styles/UniversalComponents/castomCarousel/castomCarousel.css';
import {netImage} from "@/types/types";

interface CarouselElementProps {
  images: netImage[]
}

const CarouselNet: FC<CarouselElementProps> = ({images}) => {
  return (
      <>
        <Carousel showThumbs={false} showArrows={false} showStatus={false}>
          {images.map((image, index) => (
              <div key={index} className={styles.container}>
                <Image className={Net.image}
                       src={image.src}
                       alt={`Photo ${index + 1}`} width={image.width}
                       height={image.height}/>
              </div>
          ))}
        </Carousel>
      </>
  );
};

export default CarouselNet;
