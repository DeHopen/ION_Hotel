import React from 'react';
import Image from "next/image";
import styles from '@/styles/Desktop/Layout/Footer.module.scss';
import {setShowMenu, setShowNav} from "@/store/slices/layoutSlice";
import {useDispatch} from "react-redux";  // Import the SCSS file

const Footer = () => {
  const dispatch = useDispatch();


  const handleLinkClick = (event: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    event.preventDefault();
    dispatch(setShowMenu(false));

    if (targetId === 'main') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
      dispatch(setShowNav(true));
    } else {
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        const offset = -20; // Смещение от целевого элемента
        const elementPosition = targetElement.getBoundingClientRect().top + window.scrollY;
        const offsetPosition = elementPosition + offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        });

        setTimeout(() => {
          dispatch(setShowNav(false));
        }, 300);
      }
    }
  };

  return (
      <footer className={styles.footer}>
        <div className={styles.footerContainer}>
          <div className={styles.footerLogoText}>
            <img src="/Logo/Logo_light.svg" alt="ION Hotel Logo" className={styles.logo}/>
            <p>© ION-HOTEL 2024</p>
          </div>
          <div className={styles.footerSection}>
            <nav>
              <a href="#">Бронирование</a>
              <a href="#" onClick={(e) => handleLinkClick(e, 'main')}>Гостиница</a>
              <a href="#" onClick={(e) => handleLinkClick(e, 'price')}>Номера и цены</a>
              <a href="#">Спецпредложения</a>
            </nav>
          </div>
          <div className={styles.footerSection}>
            <nav>
              <a href="#" onClick={(e) => handleLinkClick(e, 'inno')}>Иннополис</a>
              <a href="#" onClick={(e) => handleLinkClick(e, 'ski')}>Горнолыжка</a>
              <a href="#" onClick={(e) => handleLinkClick(e, 'services')}>Услуги</a>
              <a href="#" onClick={(e) => handleLinkClick(e, 'contacts')}>Контакты</a>
            </nav>
          </div>
          <div className={styles.footerSection}>
            <nav>
              <a href="tel:+74952341206" className="text-orange-extra">+7 (495) 234-12-06</a>
              <a href="tel:+74952343332" className="text-orange-extra">+7 (495) 234-33-32</a>
              <a href="mailto:ionhotel@ioncompany.ru">ionhotel@ioncompany.ru</a>
              <a href="#">Политика конфиденциальности</a>
            </nav>
          </div>
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
