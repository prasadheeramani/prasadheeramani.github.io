import Document, { Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";
import PageHead from "../components/layout/PageHead";
import { site_config } from "../site-config";

class MyDocument extends Document {
  static getInitialProps({ renderPage, asPath }) {
    const sheet = new ServerStyleSheet();
    const page = renderPage(App => props =>
      sheet.collectStyles(<App {...props} />)
    );
    const styleTags = sheet.getStyleElement();
    return { ...page, styleTags, asPath };
  }
  //   setGoogleTags() {
  //     return {
  //       __html: `
  //         window.dataLayer = window.dataLayer || [];
  //         function gtag(){dataLayer.push(arguments);}
  //         gtag('js', new Date());
  //         gtag('config', 'UA-145857926-1');
  //       `
  //     };
  //   }
  render() {
    return (
      <html lang="en">
        <Head>
          {this.props.styleTags}
          <meta
            name="google-site-verification"
            content="BlPz8eQZC18W_26rALJs9WAv9pDRstWg9zmEzooTcJQ"
          />
        </Head>
        <PageHead {...site_config} query={this.props.asPath} />
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}

export default MyDocument;
