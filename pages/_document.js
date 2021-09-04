import Document, { Html, Head, Main, NextScript } from 'next/document'
import { IMAGE_ENDPOINT } from 'lib/constants'

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href={IMAGE_ENDPOINT} />
          <link rel="dns-prefetch" href={IMAGE_ENDPOINT} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument