import {FC, useEffect, useState} from 'react';
import styles from "@/styles/Desktop/Layout/Header.module.scss";
import MenuDropdown from "@/components/MenuDropdown/MenuDropdown";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "@/store/store";
import {setShowMenu, setShowNav} from "@/store/slices/layoutSlice";
import Image from "next/image";

const Header: FC = () => {
  console.log('Render Header');
  const [scrollPosition, setScrollPosition] = useState(0);
  const layout = useSelector((state: RootState) => state.layout);
  const dispatch = useDispatch();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      if (!layout.showMenu) {
        const shouldShowNav = scrollPosition > currentScrollPos || currentScrollPos < 10;
        if (layout.showNav !== shouldShowNav) {
          dispatch(setShowNav(shouldShowNav));
        }
      } else {
        if (!layout.showNav) {
          dispatch(setShowNav(true));
        }
      }
      setScrollPosition(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrollPosition, layout.showMenu, layout.showNav, dispatch]);

  const handleMenuToggle = () => {
    dispatch(setShowMenu(!layout.showMenu));
  };

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
      <>
        <header
            className={`${styles.header} ${layout.showNav ? styles.visible : styles.hidden} ${layout.showMenu ? styles.withShadow : ''}`}>
          <div className={styles.headerContent}>
            <div className={styles.headerInner}>
              <div className="flex">
                <div className={styles.navContainer}>
                  <button onClick={handleMenuToggle}>
                    <Image src={layout.showMenu ? "/MenuActive.svg" : "/Menu.svg"}
                           alt="Menu Icon" width={32} height={32}/>
                  </button>
                  <a href="#" className={styles.navLink} onClick={(e) => handleLinkClick(e, 'main')}>Гостиница</a>
                  <a href="#" className={styles.navLink} onClick={(e) => handleLinkClick(e, 'price')}>Номера и цены</a>
                  <a href="#" className={styles.navLink}
                     onClick={(e) => handleLinkClick(e, 'contacts')}>Контакты</a>
                </div>
              </div>
              <div className="mt-4">
                <img src="/Logo/Logo_black.svg" alt="Logo"/>
              </div>
              <div className={styles.contactButton}>
                <a href="tel:+74952341206" className={styles.contactLink}>+7 (495) 234-12-06</a>
                <button className={styles.bookButton}>Забронировать номер</button>
              </div>
            </div>
          </div>
        </header>
        {layout.showMenu && (
            <>
              <MenuDropdown/>
              <div className={styles.overlay} onClick={() => dispatch(setShowMenu(false))}></div>
            </>
        )}
      </>
  );
};

export default Header;
