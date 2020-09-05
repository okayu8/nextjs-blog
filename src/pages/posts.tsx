import Layout from '~/components/Layout';
import { listContentFiles } from '~/lib/content-loader';
const meta = {
  title: '記事一覧',
  date: '',
  description: '',
};

const Posts = () => {
  return (
    <Layout meta={meta}>
      <div>リスト作る</div>
    </Layout>
  );
};
export default Posts;
