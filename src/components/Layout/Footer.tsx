import React from 'react';
import Image from "next/image";
import styles from '@/styles/Desktop/Layout/Footer.module.scss';  // Import the SCSS file

const Footer = () => {
  return (
      <footer className={styles.footer}>
        <div className={styles.footerContainer}>
          {/* Logo and Copyright */}
          <div className={styles.footerLogoText}>
            <img src="/Logo/Logo_light.svg" alt="ION Hotel Logo" className={styles.logo} />
            <p>© ION-HOTEL 2024</p>
          </div>

          {/* Navigation Links */}
          <div className={styles.footerSection}>
            <nav>
              <a href="#">Бронирование</a>
              <a href="#">Гостиница</a>
              <a href="#">Номера и цены</a>
              <a href="#">Спецпредложения</a>
            </nav>
          </div>

          {/* More Links */}
          <div className={styles.footerSection}>
            <nav>
              <a href="#">Иннополис</a>
              <a href="#">Горнолыжка</a>
              <a href="#">Услуги</a>
              <a href="#">Контакты</a>
            </nav>
          </div>

          {/* Contact Information */}
          <div className={styles.footerSection}>
            <nav>
              <a href="tel:+74952341206" className="text-orange-extra">+7 (495) 234-12-06</a>
              <a href="tel:+74952343332" className="text-orange-extra">+7 (495) 234-33-32</a>
              <a href="mailto:ionhotel@ioncompany.ru">ionhotel@ioncompany.ru</a>
              <a href="#">Политика конфиденциальности</a>
            </nav>
          </div>

          {/* Social Links */}
          <div className={styles.socialLinks}>
            <a href="#" className={styles.socialLink}>
              <Image src='/Icons_footer/telegram.svg' alt='telegram' width={20} height={20}/>
            </a>
            <a href="#" className={styles.socialLink}>
              <Image src='/Icons_footer/vk.svg' alt='vk' width={20} height={20}/>
            </a>
            <a href="#" className={styles.socialLink}>
              <Image src='/Icons_footer/youtube.svg' alt='youtube' width={20} height={20}/>
            </a>
          </div>
          </div>
      </footer>
  );
};

export default Footer;
