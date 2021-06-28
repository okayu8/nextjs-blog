import React from 'react'
import { GetStaticProps, GetStaticPaths, NextPage } from 'next'
import { ParsedUrlQuery } from 'querystring'

import Layout from '~/components/Layout'
import PostList from '~/components/organisms/post-list'

import tagslist from '~/data/tagslist.json'

type Props = {
  tag: string
}

type Params = ParsedUrlQuery & {
  // param名はファイル名の[]内とそろえる必要あり。
  tag: string
}

const meta = {
  title: 'Category',
  date: '',
  description: '',
}

const Test: NextPage<Props> = ({ tag }) => {
  return (
    <Layout meta={meta}>
      <h2>#{tag}</h2>
      <PostList tagName={tag} />
    </Layout>
  )
}

// 最初に実行される。事前ビルドするパスを配列でreturnする。
export const getStaticPaths: GetStaticPaths = async () => {
  const tags = tagslist
  const paths = tags.map((tag) => `/tag/${tag}`)
  return { paths, fallback: false }
}

// ルーティングの情報が入ったparamsを受け取る
export const getStaticProps: GetStaticProps<Props, Params> = async ({ params }) => {
  const test = 'test'
  return { props: { tag: params ? params.tag : test } }
}

export default Test
