import { NextPage } from 'next'
import Layout from '~/components/Layout'

// export const config = { amp: true };

const meta = {
  title: '',
  description: 'フロントエンドよりのWebエンジニアです。ブログ書いてます。',
}

const Page: NextPage = () => {
  // getPosts();
  return (
    <Layout meta={meta}>
      <p>ok-log.net</p>
    </Layout>
  )
}

export default Page
