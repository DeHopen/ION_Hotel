import {FC} from 'react';
import styles from "@/styles/Mobile/Services/ServicesMobile.module.scss";
import {kanitCyrillic} from "@/styles/fonts/fonts";

import Image from "next/image";
import {hotelServices} from "@/types/types";


interface ServicesMobileProps {
  services: hotelServices[]
}

const ServicesMobile: FC<ServicesMobileProps> = ({services}) => {
  console.log('Render ServicesMobile');

  return (
      <div className={styles.container} id={'services'}>
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

export default ServicesMobile;