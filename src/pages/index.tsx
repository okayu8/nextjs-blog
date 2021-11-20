import styled from 'styled-components'
import { NextPage } from 'next'
import Layout from '~/components/Layout'
import TopPostList from '~/components/TopPostList'

// export const config = { amp: true };

const meta = {
  title: '',
  description: 'フロントエンドよりのWebエンジニアです。ブログ書いてます。',
}

const Section = styled.div`
  margin-bottom: ${(props) => props.theme.SIZE.MARGIN.XXLARGE}px;
`

const SecTitle = styled.h2`
  color: ${(props) => props.theme.COLOR.FONT.PAGE_TITLE};
  border-bottom: none;
  margin: 0 0 ${(props) => props.theme.SIZE.MARGIN.LARGE}px 0;

  &::before {
    content: none;
  }
`

const Page: NextPage = () => {
  return (
    <Layout meta={meta} type="top">
      <Section>
        <SecTitle>ARTICLES</SecTitle>
        <TopPostList />
      </Section>
      <Section>
        <SecTitle>PROFILE</SecTitle>
      </Section>
      <p>ok-log.net</p>
    </Layout>
  )
}

export default Page
