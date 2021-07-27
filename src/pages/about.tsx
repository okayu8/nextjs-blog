import Layout from '~/components/Layout'
import styled from 'styled-components'

const meta = {
  title: 'ABOUT',
  date: '2020/09/06',
  description: 'ブログについて',
}

const Profile = styled.div`
  display: flex;
`

const Icon = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 100px;
`

const Content = styled.div`
  padding: 24px;
  box-shadow: var(--shadow);
  --shadow: 4px 4px 8px rgba(0, 0, 0, 0.1), -4px -4px 8px rgba(255, 255, 255, 0.9);
`

const Title = styled.h3`
  margin: 24px 0 16px;
`

const Name = styled.p`
  font-size: 24px;
  font-weight: 700;
  margin: auto 24px;
`

const About = () => {
  return (
    <Layout meta={meta}>
      <p>フロント寄りエンジニアのメモ帳。気が向いた時に更新します。</p>
      <h2>Profile</h2>
      <Title>Name</Title>
      <Content>
        <Profile>
          <Icon src="/img/okayu_profile.jpeg" />
          <Name>okayu8</Name>
        </Profile>
      </Content>
      <Title>Contact</Title>
      <Content>
        <ul>
          <li>
            Github:{' '}
            <a href="https://github.com/okayu8" target="_blank" rel="noreferrer">
              https://github.com/okayu8
            </a>
          </li>
          <li>
            Mail:{' '}
            <a href="mailto:kataoka-yutaro@atomicstyle.work">kataoka-yutaro@atomicstyle.work</a>
          </li>
        </ul>
      </Content>
    </Layout>
  )
}
export default About
