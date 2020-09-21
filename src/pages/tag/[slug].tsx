import React, { useEffect } from 'react';

import Layout from '~/components/Layout';

const meta = {
  title: 'TAG',
  date: '',
  description: '',
};

// type Props = {
//   param: string;
// };

const Tag = (params: any) => {
  useEffect(() => {
    const url = window.location.href;
    console.log(url);
  }, []);
  return <Layout meta={meta}>test</Layout>;
};

export default Tag;
