import path from 'path';

const DIR = path.join(process.cwd(), 'content/posts');
const EXTENSION = '.mdx';
/**
 * Markdown のファイル一覧を取得する
 */
export const listContentFiles = ({ fs }: any) => {
  const filenames = fs.readdirSync(DIR);
  return filenames.filter((filename: string) => path.parse(filename).ext === EXTENSION);
};
