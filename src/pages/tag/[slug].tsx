import React, { useState, useEffect } from 'react';

import Layout from '~/components/Layout';

const meta = {
  title: 'TAG',
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
  return <Layout meta={meta}>{tag}</Layout>;
};

export default Tag;
