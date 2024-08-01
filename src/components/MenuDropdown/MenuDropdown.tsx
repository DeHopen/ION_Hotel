import { FC } from 'react';
import styles from '@/styles/Desktop/Layout/MenuDropdown.module.scss';
import Image from "next/image";
import {useDispatch} from "react-redux";
import {setShowMenu} from "@/store/slices/layoutSlice";


const MenuDropdown: FC = () => {
  const dispatch = useDispatch()

  const handleClose = () => {
    dispatch(setShowMenu(false))
  }

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
            <a href="#">Гостиница</a>
            <a href="#">Услуги</a>
            <a href="#">Номера и цены</a>
            <a href="#">Контакты</a>
          </div>
          <div className={styles.menuRight}>
            <div className={styles.inno}>
              <Image className={styles.inno_img} src="/DropMenu/Inno.jpeg" width={202} height={135} alt="Иннополис"/>
              <span>Иннополис</span>
            </div>
            <div className={styles.ski}>
              <Image className={styles.ski_img} src="/DropMenu/ski.jpeg" width={202} height={135} alt="Горнолыжка"/>
              <span>Горнолыжка</span>
            </div>
          </div>
        </div>
        <button className={styles.close} onClick={handleClose}>
          <Image src="/Close.svg" alt="Close" height={32} width={32}/>
        </button>
      </div>
  );
};

export default MenuDropdown;
