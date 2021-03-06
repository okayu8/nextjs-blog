import React from 'react'
import { GetStaticProps, GetStaticPaths, NextPage } from 'next'
import { ParsedUrlQuery } from 'querystring'

import Layout from '~/components/Layout'
import PostList from '~/components/PostList'

import tagslist from '~/data/tagslist.json'

type Props = {
  tagName: string
}

type Params = ParsedUrlQuery & {
  // param名はファイル名の[]内とそろえる必要あり。
  tag: string
}

const meta = {
  title: 'Topic',
  date: '',
  description: '',
}

const Test: NextPage<Props> = ({ tagName }) => {
  return (
    <Layout meta={meta}>
      <h2>#{tagName}</h2>
      <PostList tagName={tagName} />
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
  return { props: { tagName: params ? params.tag : '' } }
}

export default Test
