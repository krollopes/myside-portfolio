import { ReactNode } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
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
