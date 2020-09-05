const fs = require('fs');
const path = require('path');
const frontmatter = require('front-matter');

const DIR = path.join(process.cwd(), 'src/pages/posts');
const EXTENSION = '.mdx';

const filenames = fs.readdirSync(DIR);
const postNames = filenames.filter((filename) => path.parse(filename).ext === EXTENSION);
// console.log(postNames);

postNames.forEach((postname) => {
  const raw = fs.readFileSync(path.join(DIR, postname), 'utf8');
  console.log(raw);
});
