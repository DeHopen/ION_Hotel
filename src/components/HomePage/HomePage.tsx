'use client'

import {FC} from 'react';
import CarouselMainPage from "@/components/HomePage/CarouselMainPage";
import { useMediaQuery } from 'react-responsive';



const HomePage: FC = () => {

  const isMobile = useMediaQuery({ maxWidth: 768 });

  const images = [
    { src: "/CarouselMainPage/img/restaurant.jpeg", alt: "restaurant", title: 'Единение с природой', mainText: 'Холл отеля', additionalText: 'Зона ресторана' },
    { src: "/CarouselMainPage/img/hall.jpg", alt: "hall", title: 'Приятная атмосфера', mainText: 'Холл отеля', additionalText: 'Коридор' },
    { src: "/CarouselMainPage/img/reception.jpg", alt: "reception", title: 'Комфорт и удобство', mainText: 'Холл отеля', additionalText: 'Ресепшн' },
  ];


  return (
      <>
        {isMobile ?(
            <div>
              s
            </div>
            ):(
            <div>
              <CarouselMainPage images={images}/>
            </div>
          )}
      </>

  );
};


export default HomePage;