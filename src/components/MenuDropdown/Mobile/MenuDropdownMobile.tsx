import { FC } from 'react';
import styles from '@/styles/Mobile/Layout/MenuDropdownMobile.module.scss';
import Image from "next/image";



const MenuDropdownMobile: FC = () => {


  return (
      <div className={styles.menuDropdown}>
        <div className={styles.menuContent}>
          <div className={styles.menuLinks}>
            <a href="#">Гостиница</a>
            <a href="#">Номера и цены</a>
            <a href="#">Контакты</a>
            <a href="#">Бронирование</a>
            <a href="#">Гостиница</a>
            <a href="#">Услуги</a>
            <a href="#">Номера и цены</a>
            <a href="#">Контакты</a>
          </div>
          <div className={styles.nodes}>
            <a href='#'>
              <Image src="/DropMenu/hotel.jpeg" alt="Спецпредложения" width={403}
                     height={212}/>
              <span>Спецпредложения</span>
            </a>
            <a href='#'>
              <Image src="/DropMenu/Inno.jpeg" width={202} height={135} alt="Иннополис"/>
              <span>Иннополис</span>
            </a>
            <a href='#'>
              <Image src="/DropMenu/ski.jpeg" width={202} height={135} alt="Горнолыжка"/>
              <span>Горнолыжка</span>
            </a>
          </div>
        </div>
      </div>
  );
};

export default MenuDropdownMobile;
