import {FC} from 'react';
import CarouselRooms from "@/components/HotelRooms/CarouselRooms";
import {kanitCyrillic} from '@/styles/fonts/fonts'



const HotelRooms: FC = () => {

  const images = [
    { src: "/Big_room/1.jpg", alt: "restaurant"},
    { src: "/Big_room/2.jpg", alt: "restaurant"},
    { src: "/Big_room/3.jpg", alt: "restaurant"},
    { src: "/Big_room/4.jpg", alt: "restaurant"},
    { src: "/Big_room/5.jpg", alt: "restaurant"},
    { src: "/Big_room/6.jpg", alt: "restaurant"},
  ];


  return (
      <div className="container ml-28 mt-48 mb-48">
        <main className={kanitCyrillic.className}>
          <div className='flex flex-row justify-between items-center mb-8'>
            <h1 className="text-3xl font-normal text-gray">Номера и цены</h1>
            <span>Все номера</span>
          </div>
          <CarouselRooms roomName='Большая комната' images={images} price='12 000'/>
        </main>
      </div>
  );
};


export default HotelRooms;