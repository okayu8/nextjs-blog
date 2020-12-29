import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

type Props = {
  styleTags: any;
};

export default class MyDocument extends Document<Props> {
  static getInitialProps({ renderPage }: any) {
    const sheet = new ServerStyleSheet();
    const page = renderPage((App: any) => (props: any) => sheet.collectStyles(<App {...props} />));
    const styleTags = sheet.getStyleElement();

    return { ...page, styleTags };
  }

  render() {
    return (
      <Html lang="ja">
        <Head>
          <meta charSet="utf-8" />
          <link
            href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.9.0/themes/prism-tomorrow.min.css"
            rel="stylesheet"
          />
          {this.props.styleTags}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
