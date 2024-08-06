import React, {FC} from 'react';
import CarouselElement from "@/components/UniversalComponents/CarouselElement";
import styles from "@/styles/Mobile/SkiPage/SkiPageMobile.module.scss";
import {kanitCyrillic} from "@/styles/fonts/fonts";
import Link from "next/link";
import Image from "next/image";

interface SkiPageMobileProps {
  content: {
    description: string,
  }[]
}

const images = [
  {
    src: '/SkiPage/Dorms.jpeg',
    width: 1100,
    height: 746
  },
  {
    src: '/SkiPage/ski_lift.jpeg',
    width: 1100,
    height: 835
  },
  {
    src: '/SkiPage/ski.jpeg',
    width: 1100,
    height: 755
  }
]
const SkiPageMobile: FC<SkiPageMobileProps> = ({content}) => {
  console.log('Render SkiPageMobile');

  return (
      <div className={styles.Container}>
        <div className={styles.content}>
          <div className={styles.text}>
            <div className={kanitCyrillic.className}>
              <h1 className={styles.title}>Горнолыжка</h1>
            </div>
            {content.map((item, index) => (
                <div key={index} className={styles.discriptions}>
                  <div>
                    <p className={styles.description}>{item.description}</p>
                  </div>
                </div>
            ))}
            <Link href='#' className={styles.link}>
              <span>Подробнее</span>
              <Image src='/RoomPage/arrow_orange.svg' alt='arrow' width={24} height={24}/>
            </Link>
          </div>
          <div className={styles.carousel}>
            <CarouselElement images={images}/>
          </div>
        </div>

      </div>
  );
};

export default SkiPageMobile;