import Document, { DocumentContext, Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

type Props = {
  styleTags: JSX.Element;
};

export default class MyDocument extends Document<Props> {
  // storybookのスタイルをレスポンス時にHTMLに入れ込む
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const page = ctx.renderPage((App) => (props) => sheet.collectStyles(<App {...props} />));
    const styleTags = sheet.getStyleElement();

    return { ...page, styleTags };
  }

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
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.0.1/styles/base16/harmonic16-dark.min.css"/>
          {this.props.styleTags}
        </Head>
        <body>
          <Main />
          <NextScript />
          <script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.0.1/highlight.min.js"></script>
        </body>
      </Html>
    );
  }
}
