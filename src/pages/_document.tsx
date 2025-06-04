import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="ja">
        <Head>
          <meta charSet="utf-8" />
          <meta
            name="google-site-verification"
            content="DcJ0IOsJnzOHr4u9Fa9HNa03_DmyRiO6_4Hh33bXhSQ"
          />
          {/* rehypeHighlight */}
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.0.1/styles/base16/harmonic16-dark.min.css"
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <body>
          <Main />
          <NextScript />
          <script async src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.0.1/highlight.min.js"></script>
        </body>
      </Html>
    )
  }
}