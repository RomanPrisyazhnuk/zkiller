import React from 'react';
import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document';
// import { GA_TRACKING_ID } from '../constants/seoConstants';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    return await Document.getInitialProps(ctx);
  }
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="shortcut icon" href="/static/favicon.ico" />
          {/*<script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`} />*/}
          {/*<script*/}
          {/*  // eslint-disable-next-line react/no-danger*/}
          {/*  dangerouslySetInnerHTML={{*/}
          {/*    __html: `*/}
          {/*          window.dataLayer = window.dataLayer || [];*/}
          {/*          function gtag(){dataLayer.push(arguments);}*/}
          {/*          gtag('js', new Date());*/}
          {/*          gtag('config', '${GA_TRACKING_ID}', {*/}
          {/*          page_path: window.location.pathname,*/}
          {/*          });*/}
          {/*      `,*/}
          {/*  }}*/}
          {/*/>*/}
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
