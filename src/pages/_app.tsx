import { useEffect, useState } from 'react'
import Router from 'next/router'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import localFont from '@next/font/local'
import { RecoilRoot } from 'recoil'
import { ThemeProvider } from 'next-themes'

import '@/styles/globals.scss'
import Layout from '@/components/Layout'
import Loading from '@/components/units/Loading'

export default function App({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const showRoute = [
      '/',
      '/character/[name]',
      '/guilds',
      '/markets',
      '/auctions',
    ]
    const start = (url: string) => {
      if (showRoute.find((route) => String(url).includes(route))) {
        setLoading(true)
      }
    }
    const end = (url: string) => {
      if (showRoute.find((route) => String(url).includes(route))) {
        setLoading(false)
      }
    }

    Router.events.on('routeChangeStart', start)
    Router.events.on('routeChangeComplete', end)
    Router.events.on('routeChangeError', end)
    return () => {
      Router.events.off('routeChangeStart', start)
      Router.events.off('routeChangeComplete', end)
      Router.events.off('routeChangeError', end)
    }
  }, [loading])

  return (
    <RecoilRoot>
      {loading && <Loading fixed />}
      <ThemeProvider>
        <Head>
          <title>
            로아몬 - 로스트아크 정보 제공 | 전투정보 검색 | 경매장, 거래소 검색
          </title>
          <meta name="description" content="Generated by create next app" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <style jsx global>{`
          :root {
            --font-base: ${pretendardFont.style.fontFamily};
          }
        `}</style>

        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </RecoilRoot>
  )
}

const pretendardFont = localFont({
  src: [
    {
      path: '../fonts/Pretendard-Thin.woff2',
      weight: '100',
    },
    {
      path: '../fonts/Pretendard-ExtraLight.woff2',
      weight: '200',
    },
    {
      path: '../fonts/Pretendard-Light.woff2',
      weight: '300',
    },
    {
      path: '../fonts/Pretendard-Regular.woff2',
      weight: '400',
    },
    {
      path: '../fonts/Pretendard-Medium.woff2',
      weight: '500',
    },
    {
      path: '../fonts/Pretendard-ExtraBold.woff2',
      weight: '600',
    },
    {
      path: '../fonts/Pretendard-Bold.woff2',
      weight: '700',
    },
  ],
  fallback: ['Helvetica', 'ui-sans-serif'],
})
