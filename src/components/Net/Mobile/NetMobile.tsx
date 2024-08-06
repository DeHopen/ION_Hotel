import React, {FC} from 'react';
import styles from "@/styles/Mobile/Net/NetMobile.module.scss";
import {kanitCyrillic} from "@/styles/fonts/fonts";
import Image from "next/image";
import Link from "next/link";
import CarouselElement from "@/components/UniversalComponents/CarouselElement";

interface Enterprise {
  id: number;
  name: string;
  description1: string;
  description2: string;
  images: {
    src: string;
    width: number;
    height: number;
  }[];
}

interface NetMobileProps {
  enterprise: Enterprise;
}

const NetMobile: FC<NetMobileProps> = ({enterprise}: NetMobileProps) => {

  console.log('Render NetMobile');

  return (
      <div className={styles.containerContent}>
        <div className={styles.carousel}>
          <CarouselElement images={enterprise.images}/>
        </div>
        <div className={styles.text}>
          <div className={kanitCyrillic.className}>
            <h3>{enterprise.name}</h3>
          </div>
          <p>{enterprise.description1}</p>
          <Link href="#" className={styles.link}>
            <span>Подробнее</span>
            <Image src="/RoomPage/arrow_orange.svg" alt="arrow" width={24} height={24}/>
          </Link>
        </div>
      </div>
  );
};

export default NetMobile;