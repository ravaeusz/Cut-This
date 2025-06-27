import "./globals.css";
import Footer from '../components/footer'
import Nave from '../components/nave';

export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="en">
      <body>
        <Nave/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
