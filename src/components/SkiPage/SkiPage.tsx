import {FC} from 'react';
import Image from "next/image";
import styles from '@/styles/Desktop/SkiPage/SkiPage.module.scss'
import {kanitCyrillic} from '@/styles/fonts/fonts'
import {skiContent, skiImage} from "@/types/types";

interface SkiPageProps {
  content: skiContent[],
  images: skiImage[]
}

const SkiPage: FC<SkiPageProps> = ({content, images}) => {

  return (

      <div className={styles.Container} id='ski'>
        <div className={styles.content}>
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
        <div className={styles.images_col}>
          <Image className={styles.img} src={images[0].src} alt='Dorms' width={images[0].width}
                 height={images[0].height}/>
          <Image className={styles.img} src={images[1].src} alt='ski_lift' width={images[1].width}
                 height={images[1].height}/>
        </div>
        <div className={styles.right_img}>
          <Image className={styles.ski_img} src={images[2].src} alt='ski' width={images[2].width}
                 height={images[2].height}/>
        </div>
      </div>
  );
}

export default SkiPage;
