import '../styles/theme.scss';
import type { AppProps } from 'next/app';
import MainLayout from '../components/MainLayout';
import Head from 'next/head';
import { useEffect } from 'react';
import { Provider } from 'react-redux';
import { store } from '../lib/store/store';

const MyApp = ({ Component, pageProps }: AppProps) => {
  useEffect(() => {
    typeof document !== undefined ? require('bootstrap/dist/js/bootstrap') : null;
    typeof document !== undefined ? require('waypoints/lib/noframework.waypoints') : null;
  }, []);

  return (
    <>
      <Provider store={store}>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        </Head>
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      </Provider>
    </>
  );
};

export default MyApp;
