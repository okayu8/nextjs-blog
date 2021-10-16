import Layout from '~/components/Layout'
import PostList from '~/components/PostList'

const meta = {
  title: 'ARTICLES',
  description: '記事一覧',
}

const Articles = () => {
  return (
    <Layout meta={meta}>
      <PostList />
    </Layout>
  )
}
export default Articles
