'use client';

import { FC, ReactNode} from 'react';
import PropTypes from 'prop-types';
import styles from '@/styles/Header.module.scss';
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";

interface LayoutProps {
  children?: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }: LayoutProps) => {
  console.log('Render Layout');


  return (
      <div className="min-h-screen  flex flex-col">
        <Header/>
        <main className={styles.mainContent}>{children}</main>
        <Footer/>
      </div>
  );
};

Layout.propTypes = {
  children: PropTypes.element,
};

export default Layout;
