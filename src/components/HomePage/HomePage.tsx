import {FC} from 'react';
import Carousel from "@/components/HomePage/Carousel";



const HomePage: FC = () => {

  const images = [
    { src: "/Carousel/img/restaurant.jpeg", alt: "Image 1", title: 'Единение с природой' },
    { src: "https://picsum.photos/800/400?random=2", alt: "Image 2", title: 'Единение' },
    { src: "https://picsum.photos/800/400?random=3", alt: "Image 3", title: 'Единение' },
  ];


  return (
      <div>
        <Carousel images={images}/>
      </div>
  );
};


export default HomePage;