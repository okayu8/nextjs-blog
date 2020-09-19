import React from 'react';
import styled from 'styled-components';

import metadata from '~/data/metadata.json';

const AllPostList = () => {
  console.log(metadata);
  return <div>{metadata[0].name}</div>;
};

export default AllPostList;
