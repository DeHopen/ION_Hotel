import React, {FC, useEffect, useRef, useState} from 'react';
import styles from "@/styles/Mobile/Net/NetMobile.module.scss";
import {kanitCyrillic} from "@/styles/fonts/fonts";
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
  const buttonsRef = useRef<HTMLDivElement>(null);

  const handleSelectEnterprise = (index: number) => {
    setCurrentIndex(index);
    setCurrentEnterprise(enterprises[index]);
  };

  const centerButton = (index: number) => {
    if (buttonsRef.current) {
      const container = buttonsRef.current;
      const buttonWidth = container.scrollWidth / enterprises.length;
      const targetScrollLeft = index * buttonWidth - container.clientWidth / 2 + buttonWidth / 2;
      container.scrollTo({
        left: targetScrollLeft,
        behavior: 'smooth',
      });
    }
  };

  useEffect(() => {
    centerButton(currentIndex);
  }, [currentIndex]);

  return (

      <div className={stylesMobile.container}>
        <div className={stylesMobile.header}>
          <div className={kanitCyrillic.className}>
            <h1 className={stylesMobile.title}>Наша сеть</h1>
          </div>
          <div className={styles.toggleButtons} ref={buttonsRef}>
            {enterprises.map((enterprise, index) => (
                <button
                    key={enterprise.id}
                    className={`${styles.Button}  ${currentIndex === index ? styles.activeButton : styles.inactiveButton}`}
                    onClick={() => handleSelectEnterprise(index)}
                >
                  {enterprise.type}
                </button>
            ))}
          </div>
        </div>
        <div className={styles.containerContent}>
          <NetDescription enterprise={currentEnterprise}/>
        </div>
      </div>
  );
};

export default NetMobile;