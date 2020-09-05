import path from 'path';
import matter from 'front-matter';
import { formatDate } from './format-date';

const DIR = path.join(process.cwd(), 'src/pages/posts');
const EXTENSION = '.mdx';
/**
 * Markdown のファイル一覧を取得する
 */
export const listContentFiles = ({ fs }: any) => {
  const filenames = fs.readdirSync(DIR);
  const list = filenames.filter((filename: string) => path.parse(filename).ext === EXTENSION);
  console.log(list);
  return list;
};

type Attributes = {
  title: string;
  published: Date;
};

export const readContentFile = async ({ fs, slug, filename }: any) => {
  if (slug === undefined) {
    slug = path.parse(filename).name;
  }
  const article: any = matter(fs.readFileSync(path.join(DIR, `${slug}${EXTENSION}`), 'utf8'));
  console.log(article);
  const attributes: Attributes = article.attributes;

  const { title, published: rawPublished } = attributes;
  const content = article.body;

  return {
    title,
    published: formatDate(rawPublished),
    content,
    slug,
  };
};
