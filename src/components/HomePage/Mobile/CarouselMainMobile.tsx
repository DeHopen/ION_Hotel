import React, {FC} from 'react';
import {Carousel} from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import styles from "@/styles/UniversalComponents/CarouselElement.module.scss";
import Main from "@/styles/Mobile/MainPage/CarouselMain.module.scss"
import Image from "next/image";
import '@/styles/Mobile/MainPage/castomCarouselMain/castomCarousel.css';
import Placeholder from "@/components/UniversalComponents/Placeholder";
import {kanitCyrillic} from "@/styles/fonts/fonts";
import {mainPageImage} from "@/types/types";


interface CarouselElementProps {
  images: mainPageImage[]
}

const CarouselMainMobile: FC<CarouselElementProps> = ({images}) => {

  return (
      <div className={Main.container}>
        <Carousel showThumbs={false}
                  showArrows={false}
                  showStatus={false}
                  autoPlay={true}
                  infiniteLoop={true}
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

export default CarouselMainMobile;
