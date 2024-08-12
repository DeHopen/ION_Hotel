import React, {FC, useState} from 'react';
import styles from "@/styles/Mobile/Net/NetMobile.module.scss";
import {kanitCyrillic} from "@/styles/fonts/fonts";
import Image from "next/image";
import stylesMobile from "@/styles/Mobile/Net/NetMobile.module.scss";
import {netEnterprise} from "@/types/types";
import NetDescription from "@/components/Net/Mobile/NetDescription";

interface NetMobileProps {
  enterprises: netEnterprise[];
}

const NetMobile: FC<NetMobileProps> = ({enterprises}) => {
  console.log('Render NetMobile');
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
        <div className={styles.containerContent}>
          <NetDescription enterprise={currentEnterprise}/>
        </div>
      </div>
  );
};

export default NetMobile;