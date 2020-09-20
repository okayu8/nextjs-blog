import React from 'react';
import styled from 'styled-components';

import PostItem from '../../molecules/post-item';
import metadata from '~/data/metadata.json';
import Const from '~/const';

const allPosts = (data: any) => {
  const postNode = data.find((item: any) => item.name === 'articles');
  const posts = (postNode || {}).children || [];
  return posts;
};

const AllPostList = () => {
  const posts = allPosts(metadata);
  return (
    <Wrapper>
      {posts.map((item: any, index: any) => {
        return <PostItem key={index} post={item} />;
      })}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-top: ${Const.SIZE.MARGIN.XLARGE}px;
`;

export default AllPostList;
