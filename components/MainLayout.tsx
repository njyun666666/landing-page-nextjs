import Header from './Header';
import Footer from './Footer';
import { useEffect } from 'react';

import { aos, sub_dropdown } from '../lib/theme';

const MainLayout = ({ children }: React.PropsWithChildren<{}>) => {
  useEffect(() => {
    aos();
    sub_dropdown();
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
