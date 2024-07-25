import {FC} from 'react';
import CarouselRooms from "@/components/HotelRooms/CarouselRooms";
import {kanitCyrillic, nunitoSans} from '@/styles/fonts/fonts'
import Image from "next/image";



const HotelRooms: FC = () => {

  const images = [
    { src: "/Big_room/1.jpg", alt: "restaurant"},
    { src: "/Big_room/2.jpg", alt: "restaurant"},
    { src: "/Big_room/3.jpg", alt: "restaurant"},
    { src: "/Big_room/4.jpg", alt: "restaurant"},
    { src: "/Big_room/5.jpg", alt: "restaurant"},
    { src: "/Big_room/6.jpg", alt: "restaurant"},
  ];

  const RoomName = 'Большой номер'
  const Price = '12 000'


  return (
      <div className="flex justify-center mt-52 mb-40 w-full px-28">
        <main className={kanitCyrillic.className}>
          <div className='flex flex-row justify-between items-center mb-8'>
            <h1 className="text-5xl font-normal text-gray">Номера и цены</h1>
            <div className={nunitoSans.className}>
              <div className='flex text-orange-extra gap-3 text-xl font-light'>
                <span>Все номера</span>
                <Image src='/RoomPage/arrow_orange.svg' alt='arrow' width={24} height={24}/>
              </div>
            </div>
          </div>
          <CarouselRooms roomName={RoomName} images={images} price={Price}/>
        </main>
      </div>
  );
};


export default HotelRooms;