'use client'

import {FC, useState} from 'react';
import EnterpriseDetails from './EnterpriseDetails';
import styles from "@/styles/Desktop/Net/Net.module.scss";
import Image from "next/image";
import {kanitCyrillic} from '@/styles/fonts/fonts'
import {netEnterprise} from "@/types/types";

interface NetProps {
  enterprises: netEnterprise[]
}

const Net: FC<NetProps> = ({enterprises}) => {
  const [currentEnterprise, setCurrentEnterprise] = useState(enterprises[0]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPrevHovered, setIsPrevHovered] = useState(false);
  const [isNextHovered, setIsNextHovered] = useState(false);


  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % enterprises.length);
    setCurrentEnterprise(enterprises[(currentIndex + 1) % enterprises.length]);
  };

  const handlePrev = () => {
    setCurrentIndex((currentIndex - 1 + enterprises.length) % enterprises.length);
    setCurrentEnterprise(enterprises[(currentIndex - 1 + enterprises.length) % enterprises.length]);
  };

  return (

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
  );
}

export default Net;