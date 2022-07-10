import Header from './Header';
import Footer from './Footer';
import AOS from 'aos';
import { useEffect } from 'react';

import 'aos/dist/aos.css';

const MainLayout = ({ children }: React.PropsWithChildren<{}>) => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 700,
      easing: 'ease-out-quad',
      once: !0,
    });
  }, []);

  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default MainLayout;
