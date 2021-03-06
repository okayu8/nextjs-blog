import Layout from '~/components/Layout'
import PostList from '~/components/PostList'

const meta = {
  title: 'ARTICLES',
  date: '',
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
