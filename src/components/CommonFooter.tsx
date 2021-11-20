import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'

const Wrapper = styled.div`
  width: 100%;
  margin-top: ${(props) => props.theme.SIZE.MARGIN.XXXLARGE}px;
  display: flex;
  justify-content: space-between;
`

const CopyRight = styled.p`
  font-size: 12px;
`

const P = styled.p`
  margin: 8px 0;
`

const IconWrapper = styled.div`
  margin-top: 20px;
  padding-top: 16px;
  text-align: center;
  border-top: 1px solid ${(props) => props.theme.COLOR.FONT.PAGE_TITLE};
`

const Icon = styled.img`
  width: 120px;
  height: 36px;
`

const CommonFooter: React.FC = () => {
  return (
    <>
      <Wrapper>
        <CopyRight>© 2020 ok-log.net</CopyRight>
        <P>
          <Link href="/about">
            <a>サイトについて</a>
          </Link>
        </P>
      </Wrapper>
      <IconWrapper>
        <Icon src="/img/rayout_icon.svg" />
      </IconWrapper>
    </>
  )
}

export default CommonFooter
