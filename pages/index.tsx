import { InferGetServerSidePropsType, NextPage } from 'next';
import Head from 'next/head';
import PageContainer from '../components/PageContainer';
import pageAPI from '../lib/api/page.api';

export async function getServerSideProps() {
  var pageData = await pageAPI.get('index');
  return {
    props: { pageData: pageData.data },
  };
}

const Home = ({ pageData }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <>
      <PageContainer pageData={pageData} />
    </>
  );
};

export default Home;
