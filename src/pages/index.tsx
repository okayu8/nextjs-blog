import { NextPage } from 'next'
import Layout from '~/components/Layout'
import TopPostList from '~/components/TopPostList'

// export const config = { amp: true };

const meta = {
  title: '',
  description: 'フロントエンドよりのWebエンジニアです。ブログ書いてます。',
}

const Page: NextPage = () => {
  return (
    <Layout meta={meta} type="top">
      <div className="mb-40">
        <h2 className="text-font-pageTitle border-b-0 m-0 mb-16 before:content-none">
          ARTICLES
        </h2>
        <TopPostList />
      </div>
      <div className="mb-40">
        <h2 className="text-font-pageTitle border-b-0 m-0 mb-16 before:content-none">
          PROFILE
        </h2>
      </div>
      <p>ok-log.net</p>
    </Layout>
  )
}

export default Page