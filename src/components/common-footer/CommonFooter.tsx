import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'

import Const from '~/const'

const CommonFooter = () => {
  return (
    <Wrapper>
      <CopyRight>© 2020 atomicstyle.work</CopyRight>
      <P>
        <Link href="/about">
          <a>サイトについて</a>
        </Link>
      </P>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 100%;
  margin-top: ${Const.SIZE.MARGIN.XXLARGE}px;
  display: flex;
  justify-content: space-between;
`

const CopyRight = styled.p`
  font-size: 12px;
`

const P = styled.p`
  margin: 8px 0;
`

export default CommonFooter
