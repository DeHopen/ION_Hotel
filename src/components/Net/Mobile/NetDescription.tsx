import React, {FC} from 'react';
import styles from "@/styles/Mobile/Net/NetMobile.module.scss";
import CarouselNet from "@/components/Net/Mobile/CarouselNet";
import {kanitCyrillic} from "@/styles/fonts/fonts";
import {netEnterprise} from "@/types/types";


interface NetDescriptionProps {
  enterprise: netEnterprise
}

const NetDescription: FC<NetDescriptionProps> = ({enterprise}) => {
  console.log('Render NetDescription');


  return (
      <>
        <div className={styles.carousel}>
          <CarouselNet images={enterprise.images}/>
        </div>
        <div className={styles.text}>
          <div className={kanitCyrillic.className}>
            <h3>{enterprise.name}</h3>
          </div>
          <p>{enterprise.description1}</p>
        </div>
      </>
  );
};


export default NetDescription;