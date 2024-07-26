import {FC, useEffect, useState} from 'react';
import styles from "@/styles/Header.module.scss";
import MenuDropdown from "@/components/MenuDropdown/MenuDropdown";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "@/store/store";
import {setShowMenu} from "@/store/slices/layoutSlice";




const Header: FC = () => {
  console.log('Render Header');

  const [scrollPosition, setScrollPosition] = useState(0);
  const [headerVisible, setHeaderVisible] = useState(true);
  const layout = useSelector((state: RootState) => state.layout);
  const dispatch = useDispatch();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      if (!layout.showMenu) {
        setHeaderVisible(scrollPosition > currentScrollPos || currentScrollPos < 10);
      }
      setScrollPosition(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrollPosition]);

  const handleMenuToggle = () => {
    dispatch(setShowMenu(!layout.showMenu));
  };

  return (
      <>
        <header
            className={`${styles.header} ${headerVisible ? styles.visible : styles.hidden} ${layout.showMenu ? styles.withShadow : ''}`}>
          <div className={styles.headerContent}>
            <div className={styles.headerInner}>
              <div className="flex">
                <div className={styles.navContainer}>
                  <button onClick={handleMenuToggle}>
                    <img className={styles.logo} src={layout.showMenu ? "/MenuActive.svg" : "/Menu.svg"}
                         alt="Menu Icon"/>
                  </button>
                  <a href="#" className={styles.navLink}>Гостиница</a>
                  <a href="#" className={styles.navLink}>Номера и цены</a>
                  <a href="#" className={styles.navLink}>Контакты</a>
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
              <MenuDropdown />
              <div className={styles.overlay} onClick={() => dispatch(setShowMenu(false))}></div>
            </>
        )}
      </>
  );
};


export default Header;