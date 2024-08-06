"use client"

import Image from 'next/image';
import {nunitoSans, kanitCyrillic} from "@/styles/fonts/fonts";
import Link from "next/link";
import styles from '@/styles/Desktop/Services/Services.module.scss'
import {useMediaQuery} from "react-responsive";
import ServicesMobile from "@/components/Services/Mobile/ServicesMobile";

const services = [
  {
    title: "Экскурсии по Иннополису",
    description: "Знакомство с Особой экономической зоной, посещение Университета Иннополис и его кампуса, прогулка по необычным локациям.",
    imageUrl: "/Services/inno.jpeg",
    width: 660,
    height: 405,
  },
  {
    title: "Остров Свияжск",
    description: "Город, имеющий уникальную историческую судьбу. Знакомство с ним — возможность многогранного познания прошлого нашей страны.",
    imageUrl: "/Services/Sviyazhsk.jpeg",
    width: 800,
    height: 600,
  },
  {
    title: "Трансфер до горнолыжки",
    description: "5 трасс разной сложности. Самый протяжённый спуск — 1.1 км. Перепад высот 165 м. 3 кресельных подъемника + 1 бугельный.",
    imageUrl: "/Services/skiLift.jpeg",
    width: 900,
    height: 600,
  }
];


const Services = () => {
  const isMobile = useMediaQuery({maxWidth: 768});

  return (
      <>
        {isMobile ? (
            <ServicesMobile services={services}/>
        ) : (
            <div className={styles.container}>
              <div className={styles.header}>
                <div className={kanitCyrillic.className}>
                  <h1 className={styles.title}>Услуги</h1>
                </div>
                <div className={nunitoSans.className}>
                  <Link href='#' className={styles.link}>
                    <span>Все услуги</span>
                    <Image src='/RoomPage/arrow_orange.svg' alt='arrow' width={24} height={24}/>
                  </Link>
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
        )};
      </>
  );
};

export default Services;
