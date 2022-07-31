import Head from 'next/head';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { iPage } from '../lib/models/iPage';
import { setDarkToLight } from '../lib/store/headerSlice';

const PageContainer = ({ pageData }: { pageData: iPage }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setDarkToLight(pageData.headerColorMode));
  }, [dispatch, pageData.headerColorMode]);

  return (
    <>
      <Head>
        <title>{pageData.title}</title>
        <meta name="description" content={pageData.description} />
      </Head>
      <main id="content"></main>
    </>
  );
};
export default PageContainer;
