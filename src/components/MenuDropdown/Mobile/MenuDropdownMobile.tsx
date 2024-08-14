import {FC} from 'react';
import styles from '@/styles/Mobile/Layout/MenuDropdownMobile.module.scss';
import Image from "next/image";
import {setShowMenu, setShowNav} from "@/store/slices/layoutSlice";
import {useDispatch} from "react-redux";


const MenuDropdownMobile: FC = () => {
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
      <div className={styles.menuDropdown}>
        <div className={styles.menuContent}>
          <div className={styles.menuLinks}>
            <a href="#" onClick={(e) => handleLinkClick(e, 'main')}>Гостиница</a>
            <a href="#" onClick={(e) => handleLinkClick(e, 'price')}>Номера и цены</a>
            <a href="#" onClick={(e) => handleLinkClick(e, 'contacts')}>Контакты</a>
            <a href="#">Бронирование</a>
            <a href="#" onClick={(e) => handleLinkClick(e, 'services')}>Услуги</a>
          </div>
          <div className={styles.nodes}>
            <a href='#'>
              <Image src="/DropMenu/hotel.jpeg" alt="Спецпредложения" width={403}
                     height={212}/>
              <span>Спецпредложения</span>
            </a>
            <a href='#' onClick={(e) => handleLinkClick(e, 'inno')}>
              <Image src="/DropMenu/Inno.jpeg" width={202} height={135} alt="Иннополис"/>
              <span>Иннополис</span>
            </a>
            <a href='#' onClick={(e) => handleLinkClick(e, 'ski')}>
              <Image src="/DropMenu/ski.jpeg" width={202} height={135} alt="Горнолыжка"/>
              <span>Горнолыжка</span>
            </a>
          </div>
        </div>
      </div>
  );
};

export default MenuDropdownMobile;
