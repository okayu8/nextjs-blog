import Layout from '~/components/Layout';
import AllPostList from '~/components/organisms/all-post-list';

const meta = {
  title: 'ARTICLES',
  date: '',
  description: '',
};

const Articles = () => {
  return (
    <Layout meta={meta}>
      <AllPostList />
    </Layout>
  );
};
export default Articles;
