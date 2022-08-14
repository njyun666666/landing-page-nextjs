import { InferGetServerSidePropsType } from 'next';
import PageContainer from '../components/PageContainer';
import pageAPI from '../lib/api/page.api';

export async function getServerSideProps({ params }: { params: { pageID: string } }) {
  var pageData = await pageAPI.get(params.pageID);
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
