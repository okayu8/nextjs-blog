import Layout from '~/components/Layout';
import AllPostList from '~/components/organisms/all-post-list';

const meta = {
  title: '記事一覧',
  date: '',
  description: '',
};

const Posts = () => {
  return (
    <Layout meta={meta}>
      <AllPostList />
    </Layout>
  );
};
export default Posts;
