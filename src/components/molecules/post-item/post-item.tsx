import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

import Const from '~/const';

type Props = {
  post: {
    name: string;
    url: string;
    meta: {
      title: string;
      date: string;
      description: string;
      tags: string[] | [];
    };
  };
};

const PostItem = ({
  post: {
    name,
    url,
    meta: { date, description },
  },
}: Props) => {
  return (
    <Wrapper>
      <Date>{date}</Date>
      <Link href={url}>
        <a>{name}</a>
      </Link>
      <Description>{description}</Description>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: 0 0 ${Const.SIZE.MARGIN.XLARGE}px;
  padding: ${Const.SIZE.MARGIN.XLARGE}px;
  background-color: ${Const.COLOR.BACKGROUND.PANEL};
  border-radius: 8px;

  > a {
    font-size: ${Const.SIZE.FONT.SITE_TITLE}px;
  }
`;

const Date = styled.p`
  margin: 0;
`;

const Description = styled.p`
  margin: 0;
  font-size: ${Const.SIZE.FONT.LARGE};
`;

export default PostItem;
