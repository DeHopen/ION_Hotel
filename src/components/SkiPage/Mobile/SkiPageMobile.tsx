import React, {FC} from 'react';
import styles from "@/styles/Mobile/SkiPage/SkiPageMobile.module.scss";
import {kanitCyrillic} from "@/styles/fonts/fonts";
import CarouselSki from "@/components/SkiPage/Mobile/CarouselSki";
import {skiContent, skiImage} from "@/types/types";

interface SkiPageMobileProps {
  content: skiContent[],
  images: skiImage[]
}

const SkiPageMobile: FC<SkiPageMobileProps> = ({content, images}) => {
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
          </div>
          <div className={styles.carousel}>
            <CarouselSki images={images}/>
          </div>
        </div>

      </div>
  );
};

export default SkiPageMobile;