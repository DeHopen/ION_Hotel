import React, {FC} from 'react';
import {Carousel} from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import styles from "@/styles/UniversalComponents/CarouselElement.module.scss";
import Ski from "@/styles/Mobile/SkiPage/SkiPageMobile.module.scss"
import Image from "next/image";
import '@/styles/UniversalComponents/castomCarousel/castomCarousel.css';

interface CarouselElementProps {
  images: {
    src: string,
    width: number,
    height: number,
  }[]
}

const CarouselSki: FC<CarouselElementProps> = ({images}) => {
  return (
      <>
        <Carousel showThumbs={false} showArrows={false} showStatus={false} autoPlay={true} infiniteLoop={true}>
          {images.map((image, index) => (
              <div key={index} className={styles.container}>
                <Image className={Ski.img}
                       src={image.src}
                       alt={`Photo ${index + 1}`} width={image.width}
                       height={image.height}/>
              </div>
          ))}
        </Carousel>
      </>
  );
};

export default CarouselSki;
