import Head from 'next/head';
import React from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { iPage } from '../lib/models/iPage';
import { setDarkToLight } from '../lib/store/headerSlice';
import Section from './sections/Section';

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
      <main id="content">
        {pageData.tbPageSections.map((section) => {
          return (
            <React.Fragment key={section.sectionId}>
              <Section sectionData={section.section} />
            </React.Fragment>
          );
        })}
      </main>
    </>
  );
};
export default PageContainer;
