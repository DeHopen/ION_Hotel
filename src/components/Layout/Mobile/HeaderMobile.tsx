import {FC, useEffect, useState} from 'react';
import styles from "@/styles/Mobile/Layout/HeaderMobile.module.scss";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "@/store/store";
import {setShowMenu, setShowNav} from "@/store/slices/layoutSlice";
import Image from "next/image";
import MenuDropdownMobile from "@/components/MenuDropdown/Mobile/MenuDropdownMobile";


const HeaderMobile: FC = () => {
  console.log('Render HeaderMobile');
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

  return (
      <>
        <header
            className={`${styles.header} ${layout.showNav ? styles.visible : styles.hidden} ${layout.showMenu ? styles.withShadow : ''}`}>
          <div className={styles.container}>
            <button onClick={handleMenuToggle}>
              <Image className={styles.menu} src={layout.showMenu ? "/Close.svg" : "/Menu.svg"}
                     alt="Menu Icon" width={40} height={40}/>
            </button>
            <div>
              <Image src="/Logo/Logo_black.svg" alt="Logo" width={95} height={36}/>
            </div>
            <a href="tel:+74952341206" className={styles.contactLink}>
              <Image src="/phone.svg" alt='phone' width={24} height={24}/>
            </a>
          </div>
        </header>
        {layout.showMenu && (
            <>
              <MenuDropdownMobile/>
              <div className={styles.overlay} onClick={() => dispatch(setShowMenu(false))}></div>
            </>
        )}
      </>

  );
};


export default HeaderMobile;