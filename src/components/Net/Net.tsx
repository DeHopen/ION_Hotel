'use client'

import {FC, useState} from 'react';
import EnterpriseDetails from './EnterpriseDetails';
import styles from "@/styles/Desktop/Net/Net.module.scss";
import {kanitCyrillic} from '@/styles/fonts/fonts'
import {netEnterprise} from "@/types/types";

interface NetProps {
  enterprises: netEnterprise[]
}

const Net: FC<NetProps> = ({enterprises}) => {
  const [currentEnterprise, setCurrentEnterprise] = useState(enterprises[0]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleSelectEnterprise = (index: number) => {
    setCurrentIndex(index);
    setCurrentEnterprise(enterprises[index]);
  };

  return (

      <div className={styles.container}>
        <div className={styles.header}>
          <div className={kanitCyrillic.className}>
            <h1 className={styles.title}>Наша сеть SIXTY</h1>
          </div>
          <div className={styles.toggleButtons}>
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
        <EnterpriseDetails enterprise={currentEnterprise}/>
      </div>
  );
}

export default Net;