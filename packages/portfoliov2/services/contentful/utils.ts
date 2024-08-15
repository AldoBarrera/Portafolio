import dataParseContentful from './parse'
import axios from 'axios'
import client from './conection'
import { ERRORS, STATUS_CODES } from '@/constants/errors'
import WebsiteError from '@/utils/error-manager/WebsiteError'
import { APP } from '@/constants/app'
import { PAGES } from '@/constants/pages'

export const getData = async (page: string, include = 10, item = 0) => {
  try {
    const ContentfulData = await client.getEntries({
      content_type: page,
      include: include
    })
    return dataParseContentful(ContentfulData.items[item])
  } catch (error) {
    throw new WebsiteError(
      STATUS_CODES.BAD_REQUEST,
      `${ERRORS.CONTENTFUL_DATA} '${page}' - ${error.message}`
    )
  }
}

export const getAllData = async (page: string, include = 10) => {
  const ContentfulData = await client.getEntries({
    content_type: page,
    include: include
  })
  const resultData = ContentfulData.items.map((item) => {
    return dataParseContentful(item)
  })
  return resultData
}

const excludePaths = ['open-positions', 'contact', 'careers', 'privacy-policy']
export const excludePathsSiteMap = [
  'contactFormThankYou',
  'page-not-found',
  'thank-you',
  '4-tips-for-successful-collab',
  'the-power-of-AI-in-QA-manual-testing',
  'for-companies',
  'for-professionals',
  'jala-ignite',
  'benefits-two',
  'staff-augmentation-old',
  'scrum-master',
  'meetpoint',
  'schedule-call',
  'details',
  'privacy-policy'
]

export const getDataById = async (
  page: string,
  id: string | string[],
  include = 10,
  item = 0
) => {
  const ContentfulData = await client.getEntries({
    content_type: page,
    include: include,
    'fields.slug': id
  })
  return dataParseContentful(ContentfulData.items[item])
}

export const getDataByIdAndParent = async (
  page: string,
  id: string | string[],
  parent: string | string[] = 'root',
  include = 10,
  item = 0
) => {
  const ContentfulData = await client.getEntries({
    content_type: page,
    include: include,
    'fields.slug': id,
    'fields.parentSlug': parent
  })
  return dataParseContentful(ContentfulData.items[item])
}

export const getParentPages = async (
  page: string,
  id: string | string[],
  include = 10
) => {
  const initialMemo = []
  const ContentfulData = await client.getEntries({
    content_type: page,
    include: include,
    'fields.parentSlug': id,
    select: ['fields.slug']
  })

  const resultData = ContentfulData.items.reduce((memo, item: any) => {
    const findElement = excludePaths.find((path) => path === item?.fields?.slug)
    if (!findElement) {
      memo.push(dataParseContentful(item))
    }
    return memo
  }, initialMemo)
  return resultData
}

export const getRootPages = async (page: string, include = 10) => {
  const initialMemo = []
  const ContentfulData = await client.getEntries({
    content_type: page,
    include: include,
    'fields.parentSlug': 'root',
    select: ['fields.slug']
  })
  const resultData = ContentfulData.items.reduce((memo, item: any) => {
    const findElement = excludePaths.find((path) => path === item?.fields?.slug)
    if (!findElement) {
      memo.push(dataParseContentful(item))
    }
    return memo
  }, initialMemo)
  return resultData
}

export const getAllSlugsSiteMapPages = async (page: string, include = 2) => {
  const initialMemo = []
  const ContentfulData = await client.getEntries({
    content_type: page,
    include: include,
    limit: 1000,
    select: ['fields.slug', 'sys.updatedAt', 'fields.parentSlug', 'fields.seo']
  })
  const resultData = ContentfulData.items.reduce((memo, item: any) => {
    const findElement = excludePathsSiteMap.find(
      (path) => path === item?.fields?.slug
    )
    if (!findElement) {
      memo.push(dataParseContentful(item))
    }
    return memo
  }, initialMemo)
  return resultData
}

export const getChildPages = async (
  page: string,
  parent = 'root',
  include = 10
) => {
  const initialMemo = []
  const ContentfulData = await client.getEntries({
    content_type: page,
    include: include,
    limit: 1000,
    'fields.parentSlug[in]': parent,
    select: ['fields.slug', 'fields.parentSlug']
  })
  const resultData = ContentfulData.items.reduce((memo, item: any) => {
    const findElement = excludePaths.find((path) => path === item?.fields?.slug)
    if (!findElement) {
      memo.push(dataParseContentful(item))
    }
    return memo
  }, initialMemo)
  return resultData
}

export const getAllSlugs = async (page: string, include = 10) => {
  const initialMemo = []
  const ContentfulData = await client.getEntries({
    content_type: page,
    include: include,
    limit: 1000,
    select: ['fields.slug', 'fields.parentSlug']
  })
  const resultData = ContentfulData.items.reduce((memo, item: any) => {
    const findElement = excludePaths.find((path) => path === item?.fields?.slug)
    if (!findElement) {
      memo.push(dataParseContentful(item))
    }
    return memo
  }, initialMemo)
  return resultData
}

export const getBlogsByCategory = async (
  page: string,
  categorySlug: string,
  query = null,
  limit?: number,
  include = 10
) => {
  const ContentfulData = await client.getEntries({
    content_type: page,
    limit: limit,
    include: include,
    'fields.blogCategory.sys.contentType.sys.id': PAGES.BLOG_CAT.data,
    'fields.blogCategory.fields.slug': categorySlug,
    'fields.title[match]': query?.title ?? ''
  })
  const resultData = ContentfulData.items.map((item) => {
    return dataParseContentful(item)
  })
  return resultData
}

export const getCategoryByTitle = async (
  title: string,
  page: string = PAGES.BLOG_CAT.data,
  include = 1
) => {
  const ContentfulData = await client.getEntries({
    content_type: page,
    include: include,
    'fields.title': title
  })
  const resultData = ContentfulData.items.map((item) => {
    return dataParseContentful(item)
  })

  return resultData?.length > 0 ? resultData[0] : null
}

export const getBlogsByTags = async (page: string, tags: string, limit = 6) => {
  const tagIds = await Promise.all(
    tags.split(',').map(async (tag) => {
      const item = await client.getEntries({
        content_type: PAGES.BLOG_TAG.data,
        'fields.slug': tag
      })
      return item?.items[0]?.sys?.id
    })
  )
  const blogs = []
  await Promise.all(
    tagIds.map(async (tagId) => {
      if (blogs.length < limit) {
        const ContentfulData = await client.getEntries({
          content_type: page,
          limit: limit,
          links_to_entry: tagId
        })
        const resultData = ContentfulData.items.map((item) => {
          return dataParseContentful(item)
        })
        blogs.push(...resultData)
      }
    })
  )
  return blogs
}

export const getPaginationData = async (
  page: string,
  categorySlug: string,
  skip = 0,
  limit = APP.PAGINATION.BLOGS_PER_PAGE
) => {
  const ContentfulData = await client.getEntries({
    content_type: page,
    'fields.blogCategory.sys.contentType.sys.id': PAGES.BLOG_CAT.data,
    'fields.blogCategory.fields.slug': categorySlug,
    order: '-fields.date',
    skip: skip,
    limit: limit
  })
  const resultData = ContentfulData.items.map((item) => {
    return dataParseContentful(item)
  })
  return resultData
}

export function searchBlogsFromClient({ query: { category, title } }) {
  let buildQuery = ''
  if (category) {
    if (title) {
      buildQuery = `?category=${category}&title=${title}`
    } else {
      buildQuery = `?category=${category}`
    }
  } else if (title) {
    buildQuery = `?title=${title}`
  }
  return axios
    .get(`/api/contentful/blogs/search${buildQuery}`)
    .then((response) => {
      return response.data
    })
    .catch((e) => {
      throw e
    })
}

export default { getData, getDataById, getDataByIdAndParent }
