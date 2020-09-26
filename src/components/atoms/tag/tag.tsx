import React from 'react';
import styled from 'styled-components';

import Const from '~/const';

type Props = {
  tag: string;
};

const Tag = ({ tag }: Props) => {
  return (
    <a href={`/tag/${tag}`}>
      <Wrapper>{tag}</Wrapper>
    </a>
  );
};

const Wrapper = styled.div`
  margin: ${Const.SIZE.MARGIN.SMALL}px;
  padding: 4px 8px;
  font-size: ${Const.SIZE.FONT.SMALL}px;
  color: ${Const.COLOR.FONT.SITE_TITLE};
  background-color: ${Const.COLOR.BACKGROUND.TAG};
  border-radius: 16px;
  cursor: pointer;
`;

export default Tag;
