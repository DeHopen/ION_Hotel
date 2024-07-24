'use client';

import { FC, ReactNode, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styles from '@/styles/layout.module.scss';
import MenuDropdown from "@/components/MenuDropdown/MenuDropdown";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "@/store/store";
import {setShowMenu} from "@/store/slices/layoutSlice";

interface LayoutProps {
  children?: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }: LayoutProps) => {
  console.log('Render Layout');
  const [scrollPosition, setScrollPosition] = useState(0);
  const [headerVisible, setHeaderVisible] = useState(true);
  const layout = useSelector((state: RootState) => state.layout);
  const dispatch = useDispatch();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setHeaderVisible(scrollPosition > currentScrollPos || currentScrollPos < 10);
      setScrollPosition(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrollPosition]);

  const handleMenuToggle = () => {
    dispatch(setShowMenu(true))
    if (layout.showMenu){
      dispatch(setShowMenu(false))
    }
  };

  return (
      <div className="min-h-screen flex flex-col">
        <header className={`${styles.header} ${headerVisible ? styles.visible : styles.hidden} ${layout.showMenu ? styles.withShadow : ''}`}>
          <div className={styles.headerContent}>
            <div className={styles.headerInner}>
              <div className="flex">
                <div className={styles.navContainer}>
                  <button onClick={handleMenuToggle}>
                    <img className={styles.logo} src={layout.showMenu ? "/MenuActive.svg" : "/Menu.svg"} alt="Menu Icon"/>
                  </button>
                  <a href="#" className={styles.navLink}>Гостиница</a>
                  <a href="#" className={styles.navLink}>Номера и цены</a>
                  <a href="#" className={styles.navLink}>Контакты</a>
                </div>
              </div>
              <div className="mt-4">
                <img src="/Logo.svg" alt="Logo"/>
              </div>
              <div className={styles.contactButton}>
                <a href="tel:+74952341206" className={styles.contactLink}>+7 (495) 234-12-06</a>
                <button className={styles.bookButton}>Забронировать номер</button>
              </div>
            </div>
          </div>
          {layout.showMenu && <MenuDropdown/>}
        </header>
        <main className={styles.mainContent}>{children}</main>
        <footer className={styles.footer}>
          © 2024 ION Hotel. All rights reserved.
        </footer>
      </div>
  );
};

Layout.propTypes = {
  children: PropTypes.element,
};

export default Layout;
