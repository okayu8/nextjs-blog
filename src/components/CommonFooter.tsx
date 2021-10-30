import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'

const Wrapper = styled.div`
  width: 100%;
  margin-top: ${(props) => props.theme.SIZE.MARGIN.XXLARGE}px;
  display: flex;
  justify-content: space-between;
`

const CopyRight = styled.p`
  font-size: 12px;
`

const P = styled.p`
  margin: 8px 0;
`

const CommonFooter: React.FC = () => {
  return (
    <Wrapper>
      <CopyRight>© 2020 ok-log.net</CopyRight>
      <P>
        <Link href="/about">
          <a>サイトについて</a>
        </Link>
      </P>
    </Wrapper>
  )
}

export default CommonFooter
