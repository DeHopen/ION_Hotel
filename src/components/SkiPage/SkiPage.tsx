'use client'

import React from 'react';
import Image from "next/image";
import styles from '@/styles/Desktop/SkiPage/SkiPage.module.scss'
import Link from "next/link";
import {kanitCyrillic} from '@/styles/fonts/fonts'
import {useMediaQuery} from "react-responsive";
import SkiPageMobile from "@/components/SkiPage/Mobile/SkiPageMobile";

const content = [
  {
    description: 'Генеральный проект Иннополиса разработал планирующий Сингапур Лиу Тай Кер. При строительстве заложили капсулу с посланием будущим жителям.',
  },
  {
    description: 'Генеральный проект Иннополиса разработал планирующий Сингапур Лиу Тай Кер. При строительстве заложили капсулу с посланием будущим жителям.',
  },
];


const SkiPage: React.FC = () => {
  const isMobile = useMediaQuery({maxWidth: 768});

  return (
      <>
        {isMobile ? (
            <SkiPageMobile content={content}/>
        ) : (
            <div className={styles.Container}>
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
                <Link href='#' className={styles.link}>
                  <span>Подробнее</span>
                  <Image src='/RoomPage/arrow_orange.svg' alt='arrow' width={24} height={24}/>
                </Link>
              </div>
              <div className={styles.images_col}>
                <Image className={styles.img} src='/SkiPage/Dorms.jpeg' alt='Dorms' width={1100} height={746}/>
                <Image className={styles.img} src='/SkiPage/ski_lift.jpeg' alt='ski_lift' width={1100} height={835}/>
              </div>
              <div className={styles.right_img}>
                <Image className={styles.ski_img} src='/SkiPage/ski.jpeg' alt='ski' width={1100} height={755}/>
              </div>
            </div>
        )}
      </>
  );
}

export default SkiPage;
