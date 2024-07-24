import {FC} from 'react';
import CarouselMainPage from "@/components/HomePage/CarouselMainPage";



const HomePage: FC = () => {

  const images = [
    { src: "/CarouselMainPage/img/restaurant.jpeg", alt: "restaurant", title: 'Единение с природой', mainText: 'Холл отеля', additionalText: 'Зона ресторана' },
    { src: "/CarouselMainPage/img/hall.jpg", alt: "hall", title: 'Приятная атмосфера', mainText: 'Холл отеля', additionalText: 'Коридор' },
    { src: "/CarouselMainPage/img/reception.jpg", alt: "reception", title: 'Комфорт и удобство', mainText: 'Холл отеля', additionalText: 'Ресепшн' },
  ];


  return (
      <div>
        <CarouselMainPage images={images}/>
      </div>
  );
};


export default HomePage;