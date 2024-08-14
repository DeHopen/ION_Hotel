import React, {FC} from 'react';
import styles from "@/styles/Mobile/HotelRooms/HotelRoomsMobile.module.scss";
import CarouselNet from "@/components/HotelRooms/Mobile/RoomCarousel";
import {kanitCyrillic} from "@/styles/fonts/fonts";
import {roomsDetails} from "@/types/types";


interface RoomDescriptionProps {
  room: roomsDetails
}

const RoomDescription: FC<RoomDescriptionProps> = ({room}) => {
  console.log('Render RoomDescription');


  return (
      <>
        <div className={styles.carousel}>
          <CarouselNet images={room.images}/>
        </div>
        <div className={styles.content}>
          <div className={styles.text}>
            <div className={kanitCyrillic.className}>
              <h3>{room.name}</h3>
            </div>
            <p>{room.description}</p>
          </div>
          <div className={styles.button}>
            <button>Забронировать номер</button>
          </div>
        </div>
      </>
  );
};


export default RoomDescription;