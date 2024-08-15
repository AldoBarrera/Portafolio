import parse from 'html-react-parser'
import { CardProps } from 'components/Common/Card'
import { ImageType } from 'components/Common/Image'
import { removeHTML, TextProps } from 'components/Common/Text/index'
import utilsContenful from 'services/contentful'
import { PAGES } from 'constants/pages'
import { APP } from 'constants/app'
import { getHTMLBody, HtmlParentElement } from './blogs'

const publicUrl =
  process.env.NEXT_PUBLIC_PUBLIC_URL || 'https://www.jalasoft.com'

export const handleSidebarSection = async (page) => {
  const { sidebar, sections } = page
  if (sidebar?.name === 'SidebarRelatedCardsArticles' && sidebar?.content) {
    sidebar.content.list = removeBlogUnnecessaryData(sidebar.content?.list)
  }
  if (hasSections(['Article'], sections)) {
    sections.forEach((section) => {
      if (section.name === 'Article') {
        sidebar.content.article = section.content
      }
    })
  }
}

export function removeBlogUnnecessaryData(list: CardProps[]) {
  return list?.map((blog) => {
    const resultBlog = {
      wrdsReading: blog?.content
        ? calculateContentWrdsReading(blog.content)
        : calculateWrdsReading(blog.body),
      body: null,
      image: blog.image,
      slug: blog.slug,
      title: removeHTML(blog.title),
      category: blog?.blogCategory?.title ?? null,
      date: blog?.date ?? null,
      author: {
        fullName: blog?.author?.fullName ?? null,
        slug: blog.author?.slug ?? ''
      }
    }
    return resultBlog
  })
}

export function removeRepeatedBlogs(blogs) {
  return blogs.filter((blog, index) => {
    return index === blogs.findIndex((o) => blog.title === o.title)
  })
}

export function convertDate(dateInput) {
  const date = new Date(dateInput)
  const day = date.getDate()
  const month = date.getMonth() + 1
  const year = date.getFullYear()
  const newdate = day + '/' + month + '/' + year
  return newdate
}

export function calculateContentWrdsReading(content) {
  if (!content || content.length === 0) {
    return 0
  }
  const htmlParent = new HtmlParentElement()
  getHTMLBody(htmlParent, content)
  const htmlBody = htmlParent.generateHtml()
  return calculateWrdsReading(htmlBody)
}

export function calculateWrdsReading(body) {
  if (typeof body !== 'string' || body == '') {
    return 0
  }
  const withoutTags = body.replace(/(<([^>]+)>)/gi, '')
  const words = withoutTags.split(' ')
  return Math.round(words.length / 200)
}

export function hasSections(sections: string[], pageSections?: any) {
  return pageSections?.find((section) => sections.includes(section.name))
}

export const fetchAndFilterData = async (pageData) => {
  const data = await utilsContenful.getAllData(pageData)
  return removeBlogUnnecessaryData(data)
}

export const fetchAndFilterBlogCat = async (pageData, category) => {
  const data = await utilsContenful.getBlogsByCategory(pageData, category)
  return removeBlogUnnecessaryData(data)
}

export const fetchAndFilterBlogPag = async (pageData, category, pag) => {
  const data = await utilsContenful.getPaginationData(pageData, category, pag)
  return removeBlogUnnecessaryData(data)
}

export function addSectionContent(
  pageSections: any,
  sections: string[],
  key: string,
  value: any
) {
  pageSections.forEach((section) => {
    if (sections.includes(section?.name)) {
      section.content[key] = value
    }
  })
}

export function removeSectionUnnecessaryData(
  pageSections: any,
  sections: string[],
  key: string
) {
  pageSections.forEach((section) => {
    if (sections.includes(section?.name)) {
      section.content[key] = removeBlogUnnecessaryData(section.content[key])
    }
  })
}

export function removeArticleUnnecessaryData(
  pageSections: any,
  sections: string[],
  key: string
) {
  pageSections.forEach((section) => {
    if (sections.includes(section?.name)) {
      section.content.author[key] = null
    }
  })
}

export function removeAuthorsUnnecessaryData(
  pageSections: any,
  sections: string[],
  key: string
) {
  pageSections?.forEach((section) => {
    if (sections?.includes(section?.name)) {
      section?.content[key]?.forEach((data) => {
        data[key] = null
      })
    }
  })
}

export function addFaqId(pageSections: any, sections: string[]) {
  const faqId = Math.random().toString()
  pageSections?.forEach((section) => {
    if (sections?.includes(section?.name)) {
      section.content['faqId'] = faqId
    }
  })
}

export async function handleBlogSections(page, filterSections: string[]) {
  const { sections } = page
  const PROP_BLOGS_LIST = 'list'
  const PROP_BLOGS_CATEGORIES = 'blogCategories'
  if (hasSections(filterSections, sections)) {
    const blogs = await fetchAndFilterData(PAGES.BLOG.data)
    const blogCategories = await fetchAndFilterData(PAGES.BLOG_CAT.data)

    addSectionContent(sections, filterSections, PROP_BLOGS_LIST, blogs)
    addSectionContent(
      sections,
      filterSections,
      PROP_BLOGS_CATEGORIES,
      blogCategories
    )
  }
}

export async function handleArticleSections(
  page,
  filterSections: string[],
  strategy: (pageSections: any, sections: string[], key: string) => any,
  field = 'list'
) {
  const { sections } = page
  const hasAllSections = sections?.filter((section) =>
    filterSections.includes(section.name)
  )
  if (hasAllSections?.length === filterSections.length) {
    await strategy(sections, filterSections, field)
  }
}

export async function handleDataSections(
  page,
  filterSections: string[],
  strategy: (pageSections: any, sections: string[], key: string) => any
) {
  const { sections } = page
  const PROP_BLOGS_LIST = 'list'
  if (hasSections(filterSections, sections)) {
    strategy(sections, filterSections, PROP_BLOGS_LIST)
  }
}

export const handleBlogCatPagSections = async (
  page,
  filterSections: string[],
  params
) => {
  const { sections } = page
  const PROP_BLOGS_LIST = 'list'
  const PROP_BLOGS_CATEGORIES = 'blogCategories'
  const PROP_TOTAL_BLOGS = 'totalBlogs'
  const PROP_CURRENT_PAG = 'currentPage'

  if (hasSections(filterSections, sections)) {
    let skip = 0
    let currentPage = 0
    if (params.pg) {
      currentPage = parseInt(params.pg) - 1
      if (currentPage < 0 || isNaN(currentPage)) return false
    }
    skip = currentPage * APP.PAGINATION.BLOGS_PER_PAGE
    const blogsPaginated = await fetchAndFilterBlogPag(
      PAGES.BLOG.data,
      params.subpage,
      skip
    )
    if (blogsPaginated.length === 0) {
      return false
    }
    const blogs = await fetchAndFilterBlogCat(PAGES.BLOG.data, params.subpage)
    const blogCategories = await fetchAndFilterData(PAGES.BLOG_CAT.data)
    addSectionContent(sections, filterSections, PROP_TOTAL_BLOGS, blogs.length)
    addSectionContent(sections, filterSections, PROP_BLOGS_LIST, blogsPaginated)
    addSectionContent(
      sections,
      filterSections,
      PROP_CURRENT_PAG,
      currentPage + 1
    )
    addSectionContent(
      sections,
      filterSections,
      PROP_BLOGS_CATEGORIES,
      blogCategories
    )
    return true
  }
}

export const scrollTo = (id: string, behavior?: ScrollBehavior) => {
  const options: boolean | ScrollIntoViewOptions = behavior
    ? { behavior }
    : true
  const element = document.getElementById(id)
  if (!element) return
  element.scrollIntoView(options)
}

export const getRedTitle = (title: string, redTitle: any) => {
  let resultTitle = ''

  if (typeof title === 'string' && title != '') {
    const titleTmp = title.split(' ')

    if (Array.isArray(redTitle) && redTitle.length > 0) {
      titleTmp.forEach((val, index) => {
        resultTitle +=
          (redTitle.indexOf(index + 1) >= 0 ? `<span>${val}</span>` : val) + ' '
      })
    } else if (redTitle) {
      resultTitle = `<span>${title}</span>`
    } else {
      resultTitle = title
    }
  }

  return parse(resultTitle)
}

export const getText = (title: string | TextProps) =>
  typeof title == 'string' ? title : title?.text

export const getImageUrl = (image: string | ImageType) =>
  typeof image === 'string' ? image : image?.file?.url

export const hasDescriptionImage = (image) => {
  return (
    image &&
    typeof image === 'object' &&
    ('description' in image || 'title' in image)
  )
}

export const getAltImage = (image) => {
  if (hasDescriptionImage(image)) {
    return image?.description || image?.title
  }
  return undefined
}

export const getOrigin = () => {
  return typeof window !== 'undefined' && window.location.origin
    ? window.location.origin
    : publicUrl
}

export const setIntersectionObserver = (
  element: Element,
  handleIntersection: IntersectionObserverCallback
) => {
  if (!element) {
    return
  }

  const observer = new IntersectionObserver(handleIntersection, {
    threshold: 0.1
  })

  observer.observe(element)

  return () => {
    observer.unobserve(element)
  }
}
