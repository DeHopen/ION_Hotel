'use client'

import {FC} from 'react';
import CarouselRooms from "@/components/HotelRooms/CarouselRooms";
import {kanitCyrillic, nunitoSans} from '@/styles/fonts/fonts'
import Image from "next/image";
import Link from "next/link";
import {useMediaQuery} from "react-responsive";

const images = [
  {src: "/Big_room/1.jpg", alt: "restaurant"},
  {src: "/Big_room/2.jpg", alt: "restaurant"},
  {src: "/Big_room/3.jpg", alt: "restaurant"},
  {src: "/Big_room/4.jpg", alt: "restaurant"},
  {src: "/Big_room/5.jpg", alt: "restaurant"},
  {src: "/Big_room/6.jpg", alt: "restaurant"},
];

const RoomName = 'Большой номер'
const Price = '12 000'

const HotelRooms: FC = () => {

  const isMobile = useMediaQuery({maxWidth: 768});

  return (
      <>
        {isMobile ? (
            <div className='mt-28'>

            </div>
        ) : (
            <div className="flex justify-center mt-52 mb-40 w-full px-28">
              <main className={kanitCyrillic.className}>
                <div className='flex flex-row justify-between items-center mb-8'>
                  <h1 className="text-5xl font-normal text-gray">Номера и цены</h1>
                  <div className={nunitoSans.className}>
                    <Link href='#' className='flex text-orange-extra gap-3 text-xl font-light'>
                      <span>Все номера</span>
                      <Image src='/RoomPage/arrow_orange.svg' alt='arrow' width={24} height={24}/>
                    </Link>
                  </div>
                </div>
                <CarouselRooms roomName={RoomName} images={images} price={Price}/>
              </main>
            </div>
        )}
      </>
  );
};


export default HotelRooms;