import { NextPage } from 'next'
import Layout from '~/components/Layout'

// export const config = { amp: true };

const meta = {
  title: '',
  date: '',
  description: '',
}

const Page: NextPage = () => {
  // getPosts();
  return (
    <Layout meta={meta}>
      <p>AtomicStyle.work</p>
    </Layout>
  )
}

export default Page
