import React from 'react'
import Head from 'next/head'

import CommonHeader from './CommonHeader'
import CommonFooter from './CommonFooter'
import Tag from './Tag'
import Toc, { HeadLineType } from './Toc'

type Props = {
  children: React.ReactNode
  meta: {
    title?: string
    createdDate?: string
    updatedDate?: string
    description: string
    tags?: string[] | []
    imgPath?: string
    bgImgPath?: string
  }
  headlines?: HeadLineType[]
  type?: 'normal' | 'post' | 'top'
}

const Layout: React.FC<Props> = ({ children, meta, headlines, type = 'normal' }) => {
  const tags = meta.tags || []
  
  return (
    <>
      <Head>
        <title>{meta.title ? `${meta.title} | OK Log` : 'OKLog'}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content={meta.description} />
      </Head>
      
      <CommonHeader />
      
      {/* Background Image */}
      {meta.bgImgPath && (
        <div 
          className="fixed -top-[110px] -left-[24px] w-[calc(100%+48px)] h-[400px] -z-[1]"
          style={{
            background: `linear-gradient(to bottom, rgba(255, 255, 255, 0.6) 20%, #F5F5F5 100%), url(${meta.bgImgPath})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover'
          }}
        />
      )}
      
      <div className={`mx-auto ${type !== 'top' ? 'px-24' : ''} max-w-1120 mt-84`}>
        {/* Sidebar for post type */}
        {type === 'post' && (
          <div className="fixed w-268 bg-bg-base p-16 rounded shadow-[0px_0px_8px_rgba(0,0,0,0.4)] hidden md:block">
            <Toc headlines={headlines} />
          </div>
        )}
        
        <div className="flex justify-between items-start">
          <main className={`
            ${type === 'top' ? 'w-full' : 
              type === 'post' ? 'md:ml-[340px] md:w-[calc(100%-340px)] w-full' : 
              'w-full max-w-content mx-auto'}
          `}>
            <h1 className="text-font-pageTitle text-[2.2em] font-normal m-0 underline decoration-border-h1 decoration-[6px] underline-offset-[6px]">
              {meta.title}
            </h1>
            
            {type === 'post' && meta.createdDate && (
              <div className="text-font-date flex justify-end">
                <p className="mx-16 my-0">作成日</p>
                <p className="m-0 w-[100px] text-right">{meta.createdDate}</p>
              </div>
            )}
            
            {type === 'post' && meta.updatedDate && (
              <div className="text-font-date flex justify-end">
                <p className="mx-16 my-0">更新日</p>
                <p className="m-0 w-[100px] text-right">{meta.updatedDate}</p>
              </div>
            )}
            
            {type === 'post' && tags && (
              <div className="flex my-16 mb-40">
                {tags.map((item: string, index: any) => {
                  return <Tag key={index} tag={item} />
                })}
              </div>
            )}
            
            {children}
          </main>
        </div>
        
        <CommonFooter />
      </div>
    </>
  )
}

export default Layout