import { AppProps } from 'next/app'
import Head from 'next/head'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from 'styles/global'
import theme from 'styles/theme'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Head>
          <title>Jala Store</title>
          <link rel="shortcut icon" href="/img/logo-jalastore.png" />
          <link rel="apple-touch-icon" href="/img/logo-jalastore.png" />
          <link rel="manifest" href="/manifest.json" />
          <meta name="description" content="JalaSoft Website" />
          <meta name="robots" content="noindex,nofollow" />
        </Head>
        <GlobalStyles />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default App
