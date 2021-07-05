import Layout from '~/components/Layout'

const meta = {
  title: 'ABOUT',
  date: '2020/09/06',
  description: 'ブログについて',
}

const About = () => {
  return (
    <Layout meta={meta}>
      <p>ブログを書いています。</p>
    </Layout>
  )
}
export default About
