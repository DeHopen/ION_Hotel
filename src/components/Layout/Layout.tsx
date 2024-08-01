'use client';

import { FC, ReactNode} from 'react';
import PropTypes from 'prop-types';
import styles from '@/styles/Desktop/Layout/Header.module.scss';
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import { useMediaQuery } from 'react-responsive';
import HeaderMobile from "@/components/Layout/Mobile/HeaderMobile";
import FooterMobile from "@/components/Layout/Mobile/FooterMobile";

interface LayoutProps {
  children?: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }: LayoutProps) => {
  console.log('Render Layout');

  const isMobile = useMediaQuery({ maxWidth: 768 });


  return (
      <>
        {isMobile ?(
            <div>
              <HeaderMobile/>
              <main>{children}</main>
              <FooterMobile/>
            </div>
        ):(
            <div className="min-h-screen  flex flex-col">
              <Header/>
              <main className={styles.mainContent}>{children}</main>
              <Footer/>
            </div>
        )}
      </>
  );
};

Layout.propTypes = {
  children: PropTypes.element,
};

export default Layout;
