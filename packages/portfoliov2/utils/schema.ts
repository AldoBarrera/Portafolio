import { CardProps } from 'components/Common/Card'
import { getOrigin } from 'utils/app'

const getBlogPath = (page) => {
  return `${getOrigin()}/${
    page.slug === 'blog' ? page?.slug : page?.parentSlug
  }`
}

const getBlogPostPath = (page) => {
  return `${getBlogPath(page)}/${page.slug}`
}

const getArticleImage = (page) => {
  return page?.sections?.[0]?.content?.image?.file?.url
    ? `${getOrigin()}/_next/image?url=https:${
        page?.sections?.[0]?.content?.image?.file?.url
      }&w=1920&q=75`
    : `${getOrigin()}/landings/img/img-hero-0.png`
}

export const getSchema = (page) => {
  const ORIGIN_PATH = getOrigin()
  if (!page) return
  return {
    '@context': 'https://schema.org',
    '@type': 'Corporation',
    name: 'Jalasoft',
    url: ORIGIN_PATH,
    logo: `${ORIGIN_PATH}/landings/img/logo-jalasoft.svg`,
    founder: [
      {
        '@type': 'Person',
        name: 'Jorge Lopez',
        identifier: 'https://www.linkedin.com/in/jorge-lopez-7269b9186/'
      }
    ],
    foundingDate: '2001',
    areaServed: 'North America',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Av. Melchor Pérez de Olguín No. 2643',
      addressLocality: 'Cochabamba',
      addressCountry: 'Bolivia'
    }
  }
}

const getCommonBreadcrumbBlogItems = (page) => {
  const BLOG_PATH = getBlogPath(page)
  const ORIGIN_PATH = getOrigin()
  return [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: ORIGIN_PATH
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Blog',
      item: BLOG_PATH
    }
  ]
}

const getCommonBreadcrumbCategoryItems = (blogCategory, blogCategoryUrl) => {
  return [
    {
      '@type': 'ListItem',
      position: 3,
      name: blogCategory,
      item: blogCategoryUrl
    }
  ]
}

export const getSchemaBreadcrumbBlogPost = (page) => {
  const BLOG_CATEGORY = page?.sections?.[0]?.content?.blogCategory?.title
  const BLOG_CATEGORY_URL = `${getBlogPath(page)}/${
    page?.sections?.[0]?.content?.blogCategory?.slug
  }`
  const BLOG_POSTING_TITLE = page?.sections?.[0]?.content?.title
  const BLOG_POSTING_URL = getBlogPostPath(page) ?? page?.canonical

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      ...getCommonBreadcrumbBlogItems(page),
      ...getCommonBreadcrumbCategoryItems(BLOG_CATEGORY, BLOG_CATEGORY_URL),
      {
        '@type': 'ListItem',
        position: 4,
        name: BLOG_POSTING_TITLE,
        item: BLOG_POSTING_URL
      }
    ]
  }
}

export const getSchemaBreadcrumbBlogCategory = (page) => {
  const BLOG_CATEGORY = page?.sections?.[0]?.content?.title
  const BLOG_CATEGORY_URL = `${getBlogPath(page)}/${page?.slug}`

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      ...getCommonBreadcrumbBlogItems(page),
      ...getCommonBreadcrumbCategoryItems(BLOG_CATEGORY, BLOG_CATEGORY_URL)
    ]
  }
}

export const getSchemaBreadcrumbBlog = (page) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: getCommonBreadcrumbBlogItems(page)
  }
}

export const getSchemaBreadcrumb = (page) => {
  if (page?.parentSlug === 'root' && page?.slug === 'blog') {
    return getSchemaBreadcrumbBlog(page)
  }
  if (page?.parentSlug === 'blog' && page?.sections?.[0]?.name === 'Article') {
    return getSchemaBreadcrumbBlogPost(page)
  }
  if (
    page?.parentSlug === 'blog' &&
    page?.sections?.[0]?.name === 'HeroBlogCategory'
  ) {
    return getSchemaBreadcrumbBlogCategory(page)
  }
}

export const getSchemaBlog = (page) => {
  if (page?.parentSlug === 'blog' && page?.sections?.[0]?.name === 'Article') {
    const DATE_OF_PUBLISHING = page?.sections?.[0]?.content?.createdAt
    const DATE_OF_MOD = page?.sections?.[0]?.content?.updatedAt
    const BLOG_POSTING_TITLE = page?.sections?.[0]?.content?.title
    const BLOG_POSTING_AUTHOR = page?.sections?.[0]?.content?.author?.fullName
    const BLOG_POSTING_META_DESCRIPTION = page?.seo?.description
    const BLOG_POST_URL = `${getBlogPostPath(page)}`
    const BLOG_POSTING_MAIN_IMAGE = getArticleImage(page)
    const ORIGIN_PATH = getOrigin()
    return {
      '@context': 'https://schema.org/',
      '@type': 'BlogPosting',
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': `${BLOG_POST_URL}`
      },
      headline: `${BLOG_POSTING_TITLE}`,
      description: `${BLOG_POSTING_META_DESCRIPTION}`,
      image: {
        '@type': 'ImageObject',
        url: `${BLOG_POSTING_MAIN_IMAGE}`,
        width: '1248',
        height: '702'
      },
      author: {
        '@type': 'Person',
        name: `${BLOG_POSTING_AUTHOR}`
      },
      publisher: {
        '@type': 'Corporation',
        name: 'Jalasoft',
        logo: {
          '@type': 'ImageObject',
          url: `${ORIGIN_PATH}/landings/img/logo-jalasoft.svg`,
          width: '220',
          height: '47'
        }
      },
      datePublished: `${DATE_OF_PUBLISHING}`,
      dateModified: `${DATE_OF_MOD}`
    }
  }
}

export const getSchemaFAQs = (questions: CardProps[]) => {
  const faqSchema = questions.map((question: CardProps) => {
    return {
      '@type': 'Question',
      name: question.title,
      acceptedAnswer: {
        '@type': 'Answer',
        text: question.description
      }
    }
  })

  return {
    '@context': 'https://schema.org/',
    '@type': 'FAQPage',
    mainEntity: [...faqSchema]
  }
}
