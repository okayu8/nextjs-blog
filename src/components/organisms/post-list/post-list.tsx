import React from 'react';
import styled from 'styled-components';

import PostItem from '../../molecules/post-item';
import metadata from '~/data/metadata.json';
import Const from '~/const';

type Props = {
  tagName?: string;
};

const allPosts = (data: any) => {
  const postNode = data.find((item: any) => item.name === 'articles');
  const posts = (postNode || {}).children || [];
  return posts;
};

const PostList = ({ tagName }: Props) => {
  const posts = allPosts(metadata);
  return (
    <Wrapper>
      {posts.map((item: any, index: any) => {
        if (!tagName) {
          return <PostItem key={index} post={item} />;
        } else {
          return item.meta.tags.includes(tagName) && <PostItem key={index} post={item} />;
        }
      })}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-top: ${Const.SIZE.MARGIN.XLARGE}px;
`;

export default PostList;
