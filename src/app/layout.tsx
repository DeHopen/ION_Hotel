'use client'

import {nunitoSans} from '@/styles/fonts/fonts'
import "./globals.css";
import Layout from "@/components/Layout/Layout";
import {Provider} from "react-redux";
import {store} from "@/store/store";



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={nunitoSans.className}>
      <Provider store={store}>
        <Layout>
          {children}
        </Layout>
      </Provider>
      </body>
    </html>
  );
}
