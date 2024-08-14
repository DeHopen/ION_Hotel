import {FC} from 'react';
import styles from '@/styles/Desktop/Layout/MenuDropdown.module.scss';
import Image from "next/image";
import {useDispatch} from "react-redux";
import {setShowMenu, setShowNav} from "@/store/slices/layoutSlice";


const MenuDropdown: FC = () => {
  const dispatch = useDispatch()

  const handleClose = () => {
    dispatch(setShowMenu(false))
  }

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
      <div className={styles.menuDropdown}>
        <div className={styles.menuContent}>
          <div className={styles.menuLeft}>
            <Image className={styles.hotel_img} src="/DropMenu/hotel.jpeg" alt="Спецпредложения" width={403}
                   height={212}/>
            <span>Спецпредложения</span>
          </div>
          <div className={styles.menuLinks}>
            <a href="#">Бронирование</a>
            <a href="#" onClick={(e) => handleLinkClick(e, 'main')}>Гостиница</a>
            <a href="#" onClick={(e) => handleLinkClick(e, 'services')}>Услуги</a>
            <a href="#" onClick={(e) => handleLinkClick(e, 'price')}>Номера и цены</a>
            <a href="#" onClick={(e) => handleLinkClick(e, 'contacts')}>Контакты</a>
          </div>
          <div className={styles.menuRight}>
            <a className={styles.inno} onClick={(e) => handleLinkClick(e, 'inno')}>
              <Image className={styles.inno_img} src="/DropMenu/Inno.jpeg" width={202} height={135} alt="Иннополис"/>
              <span>Иннополис</span>
            </a>
            <a className={styles.ski} onClick={(e) => handleLinkClick(e, 'ski')}>
              <Image className={styles.ski_img} src="/DropMenu/ski.jpeg" width={202} height={135} alt="Горнолыжка"/>
              <span>Горнолыжка</span>
            </a>
          </div>
        </div>
        <button className={styles.close} onClick={handleClose}>
          <Image src="/Close.svg" alt="Close" height={32} width={32}/>
        </button>
      </div>
  );
};

export default MenuDropdown;
