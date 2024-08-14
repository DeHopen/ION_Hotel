import React, {FC, useState} from 'react';
import {kanitCyrillic} from "@/styles/fonts/fonts";
import styles from "@/styles/Mobile/HotelRooms/HotelRoomsMobile.module.scss";
import {roomsDetails} from "@/types/types";
import RoomDescription from "@/components/HotelRooms/Mobile/RoomDescription";

interface roomMobileProps {
  room: roomsDetails[];
}

const RoomMobile: FC<roomMobileProps> = ({room}) => {
  console.log('Render NetMobile');
  const [currentRoom, setCurrentRoom] = useState(room[0]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleSelectEnterprise = (index: number) => {
    setCurrentIndex(index);
    setCurrentRoom(room[index]);
  };

  return (

      <div className={styles.container}>
        <div className={styles.header}>
          <div className={kanitCyrillic.className}>
            <h1 className={styles.title}>Номера и цены</h1>
          </div>
          <div className={styles.toggleButtons}>
            {room.map((enterprise, index) => (
                <button
                    key={enterprise.id}
                    className={`${styles.Button}  ${currentIndex === index ? styles.activeButton : styles.inactiveButton}`}
                    onClick={() => handleSelectEnterprise(index)}
                >
                  {enterprise.type}
                </button>
            ))}
          </div>
        </div>
        <div className={styles.containerContent}>
          <RoomDescription room={currentRoom}/>
        </div>
      </div>
  );
};

export default RoomMobile;