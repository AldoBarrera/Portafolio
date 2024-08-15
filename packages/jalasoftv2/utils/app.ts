import parse from 'html-react-parser'
import { ImageType } from '@/app/ui/components/Common/ImageV2'
import { TextV2Props } from '@/app/ui/components/Common/TextV2'
const publicUrl =
  process.env.NEXT_PUBLIC_PUBLIC_URL || 'https://www.jalasoft.com'

export function removeHTML(html: string) {
  return html.replace(/<[^>]*>/g, '')
}

export function convertDate(dateInput: string | number | Date) {
  const date = new Date(dateInput)
  const day = date.getDate()
  const month = date.getMonth() + 1
  const year = date.getFullYear()
  const newdate = day + '/' + month + '/' + year
  return newdate
}

export function calculateWrdsReading(body: string) {
  if (typeof body !== 'string' || body == '') {
    return 0
  }
  const withoutTags = body.replace(/(<([^>]+)>)/gi, '')
  const words = withoutTags.split(' ')
  return Math.round(words.length / 200)
}

export function hasSections(sections: string[], pageSections?: any) {
  return pageSections?.find((section: { name: string }) =>
    sections.includes(section.name)
  )
}

export function addSectionContent(
  pageSections: any,
  sections: string[],
  key: string,
  value: any
) {
  pageSections.forEach(
    (section: { name: string; content: { [x: string]: any } }) => {
      if (sections.includes(section?.name)) {
        section.content[key] = value
      }
    }
  )
}

export function removeArticleUnnecessaryData(
  pageSections: any,
  sections: string[],
  key: string
) {
  pageSections.forEach(
    (section: { name: string; content: { author: { [x: string]: null } } }) => {
      if (sections.includes(section?.name)) {
        section.content.author[key] = null
      }
    }
  )
}

export function removeAuthorsUnnecessaryData(
  pageSections: any,
  sections: string[],
  key: string
) {
  pageSections?.forEach(
    (section: { name: string; content: { [x: string]: any[] } }) => {
      if (sections?.includes(section?.name)) {
        section?.content[key]?.forEach((data: { [x: string]: null }) => {
          data[key] = null
        })
      }
    }
  )
}

export function addFaqId(pageSections: any, sections: string[]) {
  const faqId = Math.random().toString()
  pageSections?.forEach(
    (section: { name: string; content: { [x: string]: string } }) => {
      if (sections?.includes(section?.name)) {
        section.content['faqId'] = faqId
      }
    }
  )
}

export async function handleArticleSections(
  page: { sections: any },
  filterSections: string[],
  strategy: (pageSections: any, sections: string[], key: string) => any,
  field = 'list'
) {
  const { sections } = page
  const hasAllSections = sections?.filter((section: { name: string }) =>
    filterSections.includes(section.name)
  )
  if (hasAllSections?.length === filterSections.length) {
    await strategy(sections, filterSections, field)
  }
}

export async function handleDataSections(
  page: { sections: any },
  filterSections: string[],
  strategy: (pageSections: any, sections: string[], key: string) => any
) {
  const { sections } = page
  const PROP_BLOGS_LIST = 'list'
  if (hasSections(filterSections, sections)) {
    strategy(sections, filterSections, PROP_BLOGS_LIST)
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

export const getText = (title: string | TextV2Props) =>
  typeof title == 'string' ? title : title?.text

export const getImageUrl = (image: ImageType) =>
  typeof image === 'string' ? image : image?.file?.url

export const hasDescriptionImage = (image: ImageType) => {
  return (
    image &&
    typeof image === 'object' &&
    ('description' in image || 'title' in image)
  )
}

export const getAltImage = (image: ImageType) => {
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
