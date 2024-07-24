import {FC} from 'react';
import Carousel from "@/components/HomePage/Carousel";



const HomePage: FC = () => {

  const images = [
    { src: "/Carousel/img/restaurant.jpeg", alt: "restaurant", title: 'Единение с природой', mainText: 'Холл отеля', additionalText: 'Зона ресторана' },
    { src: "/Carousel/img/hall.jpg", alt: "hall", title: 'Приятная атмосфера', mainText: 'Холл отеля', additionalText: 'Коридор' },
    { src: "/Carousel/img/reception.jpg", alt: "reception", title: 'Комфорт и удобство', mainText: 'Холл отеля', additionalText: 'Ресепшн' },
  ];


  return (
      <div>
        <Carousel images={images}/>
      </div>
  );
};


export default HomePage;