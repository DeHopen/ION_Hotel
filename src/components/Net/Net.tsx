'use client'

import {useState} from 'react';
import EnterpriseDetails from './EnterpriseDetails';
import styles from "@/styles/Desktop/Net/Net.module.scss";
import stylesMobile from '@/styles/Mobile/Net/NetMobile.module.scss'
import Image from "next/image";
import {kanitCyrillic} from '@/styles/fonts/fonts'
import {useMediaQuery} from "react-responsive";
import NetMobile from "@/components/Net/Mobile/NetMobile";

const enterprises = [
  {
    id: 1,
    name: 'SIXTY барбершоп',
    description1: 'Данный базовый курс позволит Вам приобрести уверенность, понять принципы и основы мужских стрижек, бритья и оформления бороды. Отработать чёткую последовательность и чистоту в работе. В курс входит теоретическая и практическая часть.',
    description2: 'Данный базовый курс позволит Вам приобрести уверенность, понять принципы и основы мужских стрижек, бритья и оформления бороды. Отработать чёткую последовательность и чистоту в работе. В курс входит теоретическая и практическая часть.',
    images: [
      {
        src: '/Net/SIXTY/AllView.jpeg',
        width: 1189,
        height: 745
      },
      {
        src: '/Net/SIXTY/SW.jpeg',
        width: 1440,
        height: 1800
      },
      {
        src: '/Net/SIXTY/workArea.jpeg',
        width: 583,
        height: 755
      },
      {
        src: '/Net/SIXTY/Holl.jpeg',
        width: 1193,
        height: 744
      }
    ],
  },
  {
    id: 2,
    name: 'Another Enterprise',
    description1: 'Данный базовый курс позволит Вам приобрести уверенность, понять принципы и основы мужских стрижек, бритья и оформления бороды. Отработать чёткую последовательность и чистоту в работе. В курс входит теоретическая и практическая часть.',
    description2: 'Данный базовый курс позволит Вам приобрести уверенность, понять принципы и основы мужских стрижек, бритья и оформления бороды. Отработать чёткую последовательность и чистоту в работе. В курс входит теоретическая и практическая часть.',
    images: [
      {
        src: '/Net/SIXTY/AllView.jpeg',
        width: 1189,
        height: 745
      },
      {
        src: '/Net/SIXTY/SW.jpeg',
        width: 1440,
        height: 1800
      },
      {
        src: '/Net/SIXTY/workArea.jpeg',
        width: 583,
        height: 755
      },
      {
        src: '/Net/SIXTY/Holl.jpeg',
        width: 1193,
        height: 744
      }
    ],
  },
];

export default function Net() {
  const [currentEnterprise, setCurrentEnterprise] = useState(enterprises[0]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPrevHovered, setIsPrevHovered] = useState(false);
  const [isNextHovered, setIsNextHovered] = useState(false);

  const isMobile = useMediaQuery({maxWidth: 768});

  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % enterprises.length);
    setCurrentEnterprise(enterprises[(currentIndex + 1) % enterprises.length]);
  };

  const handlePrev = () => {
    setCurrentIndex((currentIndex - 1 + enterprises.length) % enterprises.length);
    setCurrentEnterprise(enterprises[(currentIndex - 1 + enterprises.length) % enterprises.length]);
  };

  return (
      <>
        {isMobile ? (
            <div className={stylesMobile.container}>
              <div className={stylesMobile.header}>
                <div className={kanitCyrillic.className}>
                  <h1 className={stylesMobile.title}>Наша сеть</h1>
                </div>
                <div className={stylesMobile.buttons}>
                  <button
                      className={stylesMobile.button1}
                      onClick={handlePrev}
                      onMouseEnter={() => setIsPrevHovered(true)}
                      onMouseLeave={() => setIsPrevHovered(false)}
                  >
                    <Image
                        src={isPrevHovered ? '/Net/Arrows/Active/Left.svg' : '/Net/Arrows/Left.svg'}
                        alt='ArrowLeft'
                        width={24}
                        height={24}
                    />
                  </button>
                  <button
                      className={stylesMobile.button2}
                      onClick={handleNext}
                      onMouseEnter={() => setIsNextHovered(true)}
                      onMouseLeave={() => setIsNextHovered(false)}
                  >
                    <Image
                        src={isNextHovered ? '/Net/Arrows/Active/Right.svg' : '/Net/Arrows/Right.svg'}
                        alt='ArrowRight'
                        width={24}
                        height={24}
                    />
                  </button>
                </div>
              </div>
              <NetMobile enterprise={currentEnterprise}/>
            </div>
        ) : (
            <div className={styles.container}>
              <div className={styles.header}>
                <div className={kanitCyrillic.className}>
                  <h1 className={styles.title}>Наша сеть</h1>
                </div>
                <div className={styles.buttons}>
                  <button
                      className={styles.button1}
                      onClick={handlePrev}
                      onMouseEnter={() => setIsPrevHovered(true)}
                      onMouseLeave={() => setIsPrevHovered(false)}
                  >
                    <Image
                        src={isPrevHovered ? '/Net/Arrows/Active/Left.svg' : '/Net/Arrows/Left.svg'}
                        alt='ArrowLeft'
                        width={24}
                        height={24}
                    />
                  </button>
                  <button
                      className={styles.button2}
                      onClick={handleNext}
                      onMouseEnter={() => setIsNextHovered(true)}
                      onMouseLeave={() => setIsNextHovered(false)}
                  >
                    <Image
                        src={isNextHovered ? '/Net/Arrows/Active/Right.svg' : '/Net/Arrows/Right.svg'}
                        alt='ArrowRight'
                        width={24}
                        height={24}
                    />
                  </button>
                </div>
              </div>
              <EnterpriseDetails enterprise={currentEnterprise}/>
            </div>
        )}
      </>

  );
}