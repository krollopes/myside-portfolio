import { ReactNode } from 'react';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import '../styles/globals.css';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang='pt-br'>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
