"use client"

import "./globals.css";
import Footer from '../components/footer'
import Nave from '../components/nave';

import {Provider} from 'react-redux'
import store from '../redux/store'


export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) {
  
  return (
    <html lang="en">
      <body>
      <Provider store={store}>
        <Nave/>
        {children}
        <Footer/>
        </Provider>
      </body>
    </html>
  );
  
}
