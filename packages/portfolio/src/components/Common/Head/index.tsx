import Head from 'next/head'
const isProd = process.env.NEXT_PUBLIC_APP_ENV === 'production'

function HeadWrapper({ page }: any) {
  return (
    <Head>
      <link rel="shortcut icon" href="/landings/img/icon-75.ico" />
      <link rel="apple-touch-icon" href="/landings/img/icon-75.ico" />
      {page?.title ? <title>{page.title}</title> : <title>Jalasoft</title>}
      {page?.seo?.description ? (
        <meta name="description" content={page.seo.description} />
      ) : (
        <meta name="description" content="Jalasoft" />
      )}
      {page?.seo?.keywords ? (
        <meta name="keywords" content={page.seo.keywords} />
      ) : (
        <meta name="keywords" content="keywords" />
      )}
      {page && page.seo && page.seo.title && (
        <meta property="og:title" content={page.seo.title} key="title" />
      )}
      {isProd ? (
        <>
          {page?.seo?.noIndex && <meta name="robots" content="noindex" />}
          {page?.seo?.noFollow && <meta name="robots" content="nofollow" />}
          {page?.seo?.noIndex && page?.seo?.noFollow && (
            <meta name="robots" content="noindex,nofollow" />
          )}
        </>
      ) : (
        <meta name="robots" content="noindex,nofollow" />
      )}
    </Head>
  )
}

export default HeadWrapper
