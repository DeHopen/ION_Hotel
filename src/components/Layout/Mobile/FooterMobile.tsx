import React, { FC } from 'react';
import styles from '@/styles/Mobile/Layout/FooterMobile.module.scss';
import Image from "next/image";

const FooterMobile: FC = () => {
  return (
      <div className={styles.footer}>
        <Image src="/Logo/Logo_light.svg" alt="ION Hotel" width={100} height={40} />
        <Image className={styles.line} src="/line.svg" alt='line' width={311} height={1}/>
        <div className={styles.contact}>
          <a href="tel:+74952341206" className="text-orange-extra">+7 (495) 234-12-06</a>
          <a href="tel:+74952343332" className="text-orange-extra">+7 (495) 234-33-32</a>
          <a href="mailto:ionhotel@ioncompany.ru">ionhotel@ioncompany.ru</a>
        </div>
        <div className={styles.social}>
          <a href="#">
          <Image src='/Icons_footer/telegram.svg' alt='telegram' width={32} height={32}/>
          </a>
          <a href="#">
            <Image src='/Icons_footer/vk.svg' alt='vk' width={32} height={32}/>
          </a>
          <a href="#">
            <Image src='/Icons_footer/youtube.svg' alt='youtube' width={32} height={32}/>
          </a>
        </div>
        <div className={styles.end}>
          <div className={styles.policy}>
            <a href="/privacy">Политика конфиденциальности</a>
          </div>
          <div className={styles.copyright}>
            &copy; IONHOTEL 2024
          </div>
        </div>
      </div>
  );
};

export default FooterMobile;
