import '@/styles/index.scss';

import Head from 'next/head'
import Nav from '@/components/Nav';

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name='viewport' content='width=device-width,initial-scale=1' />
      </Head>
      <main className="layout">
        <Nav />
        <Component {...pageProps} />
      </main>
    </>
  )
}