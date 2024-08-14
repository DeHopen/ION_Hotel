import React, {FC} from 'react';
import {Carousel} from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import styles from "@/styles/UniversalComponents/CarouselElement.module.scss";
import room from "@/styles/Mobile/HotelRooms/HotelRoomsMobile.module.scss"
import Image from "next/image";
import '@/styles/UniversalComponents/castomCarousel/castomCarousel.css';
import {roomImage} from "@/types/types";

interface RoomCarouselProps {
  images: roomImage[]
}

const RoomCarousel: FC<RoomCarouselProps> = ({images}) => {
  return (
      <>
        <Carousel showThumbs={false} showArrows={false} showStatus={false}>
          {images.map((image, index) => (
              <div key={index} className={styles.container}>
                <Image className={room.image}
                       src={image.src}
                       alt={`Photo ${index + 1}`} width={image.width}
                       height={image.height}/>
              </div>
          ))}
        </Carousel>
      </>
  );
};

export default RoomCarousel;
