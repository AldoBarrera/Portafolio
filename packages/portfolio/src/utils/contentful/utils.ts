import dataParseContentful from './parse'
import client from './conection'
import { ERRORS, STATUS_CODES } from 'constants/errors'
import WebsiteError from 'utils/error-manager/WebsiteError'

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

const excludePaths = [
  'work-culture',
  'bootcamps',
  'our-services',
  'for-companies',
  'for-professionals',
  'open-positions',
  'blog',
  'article',
  'author',
  'education',
  'bootcamps',
  'careers',
  'about-us2'
]

export const getAllDataPage = async (page: string, include = 10) => {
  const initialMemo = []
  const ContentfulData = await client.getEntries({
    content_type: page,
    include: include
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

export const getChildPages = async (page: string, include = 10) => {
  const initialMemo = []
  const ContentfulData = await client.getEntries({
    content_type: page,
    include: include,
    'fields.parentSlug[nin]': 'root',
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

export const getAllDataBlogs = async (page: string, include = 10) => {
  const ContentfulData = await client.getEntries({
    content_type: page,
    include: include,
    select: ['fields.slug', 'fields.title', 'fields.image']
  })
  const resultData = ContentfulData.items.map((item) => {
    return dataParseContentful(item)
  })
  return resultData
}

export default { getData, getDataById }
