import { GetStaticProps, GetStaticPaths, NextPage } from 'next'
import { ParsedUrlQuery } from 'querystring'

type Props = {
  testStr: string
}

interface Params extends ParsedUrlQuery {
  // param名はファイル名の[]内とそろえる必要あり。
  test: string
}

const Test: NextPage<Props> = ({ testStr }) => {
  return <div>{testStr}</div>
}

// 最初に実行される。事前ビルドするパスを配列でreturnする。
export const getStaticPaths:GetStaticPaths<Props> = async() => {
  const strs = ['sample1', 'sample2', 'sample3']
  const paths = strs.map(str => `/test-dir/${str}`)
  return { paths, fallback: false }
}

// ルーティングの情報が入ったparamsを受け取る
export const getStaticProps: GetStaticProps<Props, Params> = async ({params}) => {
  const test = 'test'
  return { props: { testStr: params ? params.test : test} }
}

export default Test