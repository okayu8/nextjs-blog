import Layout from '~/components/Layout'

const meta = {
  title: 'ABOUT',
  createdDate: '2020/09/06',
  updatedDate: '2020/09/06',
  description: 'ブログについて',
}

const About = () => {
  return (
    <Layout meta={meta}>
      <p>フロント寄りエンジニアのメモ帳。気が向いた時に更新します。</p>
      <h2>Profile</h2>
      <h3 className="mt-24 mb-16 mx-0">Name</h3>
      <div className="p-24 shadow-[4px_4px_8px_rgba(0,0,0,0.1),-4px_-4px_8px_rgba(255,255,255,0.9)]">
        <div className="flex">
          <img 
            src="/img/okayu_profile.jpeg" 
            alt="okayu8 profile"
            className="w-[80px] h-[80px] rounded-[100px]"
          />
          <p className="text-24 font-bold my-auto mx-24">okayu8</p>
        </div>
      </div>
      <h3 className="mt-24 mb-16 mx-0">Contact</h3>
      <div className="p-24 shadow-[4px_4px_8px_rgba(0,0,0,0.1),-4px_-4px_8px_rgba(255,255,255,0.9)]">
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
      </div>
    </Layout>
  )
}
export default About