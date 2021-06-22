import React, { useState, useEffect } from 'react';

import Layout from '~/components/Layout';
import PostList from '~/components/organisms/post-list';

const meta = {
  title: 'Category',
  date: '',
  description: '',
};

const Tag = () => {
  const [tag, setTag] = useState('');
  useEffect(() => {
    const url = decodeURI(window.location.href);
    const urlArray = url.split('/');
    const tagName = urlArray.slice(-1)[0];
    setTag(tagName);
  }, []);
  return (
    <Layout meta={meta}>
      <h2>{tag}</h2>
      <PostList tagName={tag} />
    </Layout>
  );
};

export default Tag;
