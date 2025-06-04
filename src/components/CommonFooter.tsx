import React from 'react'
import Link from 'next/link'

const CommonFooter: React.FC = () => {
  return (
    <>
      <div className="w-full mt-84 flex justify-between">
        <p className="text-12">© 2020 ok-log.net</p>
        <p className="my-8 mx-0">
          <Link href="/about">サイトについて</Link>
        </p>
      </div>
      <div className="mt-[20px] pt-16 text-center border-t border-font-pageTitle">
        <img 
          src="/img/rayout_icon.svg" 
          alt="Rayout" 
          className="w-[120px] h-[36px]"
        />
      </div>
    </>
  )
}

export default CommonFooter