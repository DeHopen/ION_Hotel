'use client'

import {FC} from 'react';
import CarouselMainPage from "@/components/HomePage/CarouselMainPage";
import {useMediaQuery} from 'react-responsive';
import CarouselMain from "@/components/HomePage/Mobile/CarouselMain";


const images = [
  {
    src: "/CarouselMainPage/img/restaurant.jpeg",
    alt: "restaurant",
    title: 'Единение с природой',
    mainText: 'Холл отеля',
    additionalText: 'Зона ресторана',
    width: 2500,
    height: 1406,
  },
  {
    src: "/CarouselMainPage/img/hall.jpg",
    alt: "hall",
    title: 'Приятная атмосфера',
    mainText: 'Холл отеля',
    additionalText: 'Коридор',
    width: 2500,
    height: 1406,
  },
  {
    src: "/CarouselMainPage/img/reception.jpg",
    alt: "reception",
    title: 'Комфорт и удобство',
    mainText: 'Холл отеля',
    additionalText: 'Ресепшн',
    width: 2500,
    height: 1406,
  },
];


const HomePage: FC = () => {

  const isMobile = useMediaQuery({maxWidth: 768});

  return (
      <>
        {isMobile ? (
            <div>
              <CarouselMain images={images}/>
            </div>
        ) : (
            <div>
              <CarouselMainPage images={images}/>
            </div>
        )}
      </>

  );
};


export default HomePage;