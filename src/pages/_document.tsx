import Document, { DocumentContext, Head, Html, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);

    return initialProps;
  }

  render() {
    return (
      <Html lang='ja' dir='ltr'>
        <Head>
          {/* サイト全体に反映させたいデフォルトの設定を記述する ex) Google Fonts の読み込み */}
          <link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png" />
          <link rel="manifest" href="/favicons/site.webmanifest" />
          <link rel="mask-icon" href="/favicons/safari-pinned-tab.svg" color="#000000" />
          {/* IE8以下にも対応したい場合 */}
          <link rel="shortcut icon" href="/favicons/favicon.ico" /> 
          <meta name="msapplication-TileColor" content="#ffffff" />
          {/* Windows8/10のスタート画面のピン留め画像に対応したい場合 */}
          <meta name="msapplication-config" content="/favicons/browserconfig.xml" /> 
          <meta name="theme-color" content="#ffffff" />
          <meta name="application-name" content="MyApp" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
