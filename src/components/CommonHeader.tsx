import React, { useState, useEffect } from 'react'
import Link from 'next/link'

import Icons from '~/components/icons'

const { ProfileIcon, PostIcon } = Icons

const CommonHeader: React.FC = () => {
  const [isScrollTop, setIsScrollTop] = useState(true)
  
  const ScrollEvent = () => {
    if (window.scrollY === 0) {
      return setIsScrollTop(true)
    } else {
      return setIsScrollTop(false)
    }
  }
  
  useEffect(() => {
    window.addEventListener('scroll', ScrollEvent)
    return () => {
      window.removeEventListener('scroll', ScrollEvent)
    }
  }, [])
  
  return (
    <header 
      className={`fixed top-0 w-full h-header transition-all duration-200 shadow-[0px_4px_5px_0px_rgb(0_0_0_/_14%),0px_1px_10px_0px_rgb(0_0_0_/_12%),0px_2px_4px_-1px_rgb(0_0_0_/_20%)]`}
      style={{
        backgroundColor: isScrollTop ? '#555' : 'rgba(0, 0, 0, 0.5)'
      }}
    >
      <div className="mx-auto px-24 max-w-1120 h-full flex justify-between">
        <div className="h-full flex">
          <Link href="/">
            <img 
              src="/img/OKLog_light.svg" 
              alt="OKLog" 
              className="my-auto cursor-pointer w-[100px]"
            />
          </Link>
        </div>
        
        <ul className="hidden md:block">
          <li className="inline-block">
            <Link href="/articles">
              <div className="text-font-navItem no-underline inline-block ml-16 cursor-pointer">
                Articles
              </div>
            </Link>
          </li>
          <li className="inline-block">
            <Link href="/about">
              <div className="text-font-navItem no-underline inline-block ml-16 cursor-pointer">
                About
              </div>
            </Link>
          </li>
        </ul>
        
        <div className="flex md:hidden">
          <Link href="/articles">
            <p className="ml-16 cursor-pointer">
              <PostIcon />
            </p>
          </Link>
          <Link href="/about">
            <p className="ml-16 cursor-pointer">
              <ProfileIcon />
            </p>
          </Link>
        </div>
      </div>
    </header>
  )
}

export default CommonHeader