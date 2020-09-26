import Layout from '~/components/Layout';
import PostList from '~/components/organisms/post-list';

const meta = {
  title: 'ARTICLES',
  date: '',
  description: '',
};

const Articles = () => {
  return (
    <Layout meta={meta}>
      <PostList />
    </Layout>
  );
};
export default Articles;
