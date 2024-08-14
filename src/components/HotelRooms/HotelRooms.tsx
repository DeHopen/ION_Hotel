'use client'

import {FC, useState} from 'react';
import {kanitCyrillic} from '@/styles/fonts/fonts'
import styles from "@/styles/Desktop/HotelRooms/HotelRooms.module.scss";
import {roomsDetails} from "@/types/types";
import RoomsDetails from "@/components/HotelRooms/RoomsDetails";

interface HotelRoomsProps {
  rooms: roomsDetails[];
}

const HotelRooms: FC<HotelRoomsProps> = ({rooms}) => {

  const [currentRoom, setCurrentRoom] = useState(rooms[0]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleSelectEnterprise = (index: number) => {
    setCurrentIndex(index);
    setCurrentRoom(rooms[index]);
  };

  return (

      <div className={styles.container} id='price'>
        <div className={styles.header}>
          <div className={kanitCyrillic.className}>
            <h1 className={styles.title}>Номера и цены</h1>
          </div>
          <div className={styles.toggleButtons}>
            {rooms.map((enterprise, index) => (
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
        <RoomsDetails room={currentRoom}/>
      </div>
  );
}


export default HotelRooms;