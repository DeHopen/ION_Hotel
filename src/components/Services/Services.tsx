import Image from 'next/image';
import {kanitCyrillic} from "@/styles/fonts/fonts";
import styles from '@/styles/Desktop/Services/Services.module.scss'
import {FC} from "react";
import {hotelServices} from "@/types/types";

interface ServicesProps {
  services: hotelServices[]
}

const Services: FC<ServicesProps> = ({services}) => {

  return (

      <div className={styles.container} id='services'>
        <div className={styles.header}>
          <div className={kanitCyrillic.className}>
            <h1 className={styles.title}>Услуги</h1>
          </div>
        </div>
        <div className={styles.content_box}>
          {services.map((service, index) => (
              <div key={index} className={styles.content}>
                <Image src={service.imageUrl} alt={service.title} width={service.width} height={service.height}
                       className={styles.img}/>
                <div className={styles.text}>
                  <div className={kanitCyrillic.className}>
                    <h2 className={styles.mainText}>{service.title}</h2>
                  </div>
                  <p className={styles.description}>{service.description}</p>
                </div>
              </div>
          ))}
        </div>
      </div>
  );
};

export default Services;
