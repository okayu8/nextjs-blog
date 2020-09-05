import * as fs from 'fs';
import path from 'path';

import Layout from '~/components/Layout';
import { listContentFiles } from '~/lib/content-loader';

type Params = {
  title: string;
  published: string;
  content: string;
};

export default function Post(params: Params) {
  return (
    <Layout title={params.title}>
      {params.published}
      <div className="post-body" dangerouslySetInnerHTML={{ __html: params.content }} />
    </Layout>
  );
}

/**
 * ページコンポーネントで使用する値を用意する
 */
export async function getStaticProps({ params }: any) {
  const content = await readContentFile({ fs, slug: params.slug });

  return {
    props: {
      ...content,
    },
  };
}

/**
 * 有効な URL パラメータを全件返す
 */
export async function getStaticPaths() {
  const paths = listContentFiles({ fs }).map((filename: string) => ({
    params: {
      slug: path.parse(filename).name,
    },
  }));
  // fallback 静的ジェネレータとして使う： false, SSRもさせる: true
  return { paths, fallback: true };
}

async function readContentFile({ fs, slug }: any) {
  return {
    title: '竹取物語',
    published: '2020/07/23',
    content: '今は昔竹取の翁といふものありけり。野山にまじりて、竹をとりつゝ、萬の事につかひけり。',
  };
}
// function listContentFiles({ fs }: any) {
//   return ['taketori.mdx'];
// }
