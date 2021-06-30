import { useEffect } from 'react'
import tocbot from 'tocbot'

const Toc: React.VFC = () => {
  useEffect(() => {
    tocbot.init({
      tocSelector: '.toc',
      contentSelector: '.post',
      headingSelector: 'h1, h2, h3',
    })

    return () => tocbot.destroy()
  }, [])

  return <div className="toc" />
}

export default Toc
