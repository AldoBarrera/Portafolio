import { BlogBody } from 'components/Blog/Article'
import { htmlMap, lineBreakTags } from './htmlTags'
import theme from 'styles/theme'

const tableStyles = {
  table: `margin-bottom: ${theme.spacings.xsmall}; border-collapse: collapse; border-radius: ${theme.border.radius1}; border-style: hidden; box-shadow: ${theme.colors.borderLightGray} 0px 0px 0px 1px; width: 100%; table-layout: fixed; overflow: hidden`,
  'table-row': `border: 1px solid ${theme.colors.borderLightGray}; height: 0;`,
  'table-header-cell': `background-color: ${theme.colors.gray}; border: 1px solid ${theme.colors.borderLightGray}; padding: ${theme.spaces.xxsmall}; font-weight: ${theme.font.bold}; text-align: left;`,
  'table-cell': `border: 1px solid ${theme.colors.borderLightGray}; padding: ${theme.spaces.xxsmall}; word-wrap:break-word;`
}

const videoStyle = {
  height: '100%',
  width: '80%',
  style: 'border: none; margin: 0 10%; height: 60vh;'
}

const idTags = ['heading-2']

interface Tag {
  getTag(): string | string[]
  getText(): string
  generateHtml(): string
}

export class HtmlElement implements Tag {
  constructor(private text?: string, private tags?: string[]) {}

  getTag(): string[] {
    return this.tags?.map((tag) => htmlMap[tag]) ?? this.tags
  }

  getText(): string {
    const regex = /^\s{1,}$/
    if (this.text.includes('\n')) {
      this.text = this.text.replaceAll('\n', '<br>')
    }
    if (this.text === '' || this.text.match(regex)) {
      this.text = ''
    }
    return this.text
  }

  generateHtml(): string {
    if (this.getTag()?.length > 0 && this.getText()) {
      const htmlTags = this.getTag().reduce((acc, tag) => {
        if (acc.includes('children')) {
          return acc.replace('children', `<${tag}>children</${tag}>`)
        } else {
          return `<${tag}>children</${tag}>`
        }
      }, '')
      return `${htmlTags.replace('children', this.getText())}`
    } else return this.getText() ?? ''
  }
}

export class HtmlParentElement implements Tag {
  private children: Tag[] = []
  constructor(
    private text?: string,
    private tag?: string,
    private href?: string,
    private mediaType?: string,
    private src?: string,
    private alt?: string
  ) {}

  private getContentId(): string {
    if (idTags.includes(this.tag)) return ` id="${Math.random()}"`
    else return ''
  }

  private getTableStyles(): string {
    if (Object.keys(tableStyles).includes(this.tag)) {
      return ` style="${tableStyles[this.tag]}"`
    } else return ''
  }

  private getVideoStyle(): string[] {
    if (this.mediaType === 'video') {
      return Object.values(videoStyle)
    } else return
  }

  getTag(): string {
    if (this.mediaType) return htmlMap[this.mediaType] ?? this.tag
    else return htmlMap[this.tag] ?? this.tag
  }

  getText(): string {
    if (this.text.includes('\n')) {
      this.text = this.text.replaceAll('\n', '<br>')
    }
    return this.text
  }

  getHref(): string {
    return this.href
  }

  getSrc(): string {
    return this.src
  }

  getAlt(): string {
    return this.alt
  }

  getExtraProperties(): string {
    const href = this.getHref() ? ` href=${this.getHref()}` : ''
    const src = this.getSrc()
      ? ` src=${this.getSrc()} style="display:block"`
      : ''
    const alt = this.getAlt() ? ` alt=${this.getAlt()}` : ''
    const style = this.getTableStyles()
    const videoStyle = this.getVideoStyle()
      ? ` height=${this.getVideoStyle()[0]} width=${
          this.getVideoStyle()[1]
        } style="${this.getVideoStyle()[2]}"`
      : ''
    const id = this.getContentId()
    return href + src + alt + style + videoStyle + id
  }

  generateHtml(): string {
    return this.getTag()
      ? `<${this.getTag()}${this.getExtraProperties()}>${this.children
          .map((child) => {
            return child.generateHtml()
          })
          .join('')}</${this.getTag()}>${
          lineBreakTags.includes(this.getTag()) ? '<br>' : ''
        }`
      : this.children
          .map((child) => {
            return child.generateHtml()
          })
          .join('')
  }

  addChild(child: Tag) {
    this.children.push(child)
  }
}

export function getHTMLBody(parent: HtmlParentElement, node: BlogBody): string {
  if (node) {
    const { nodeType, content, marks, value, data } = node
    if (nodeType === 'text') {
      let child: HtmlElement
      if (marks?.length > 0) {
        const tags = marks.map((mark) => mark.type)
        child = new HtmlElement(value, tags)
      } else {
        child = new HtmlElement(value)
      }
      parent.addChild(child)
    } else {
      const newParent = new HtmlParentElement(
        value,
        nodeType,
        data?.uri,
        data?.target?.fields?.file?.contentType.split('/')[0],
        data?.target?.fields?.file?.url,
        data?.target?.fields?.title?.replaceAll(/\s/g, '-')
      )
      content.forEach((node) => {
        getHTMLBody(newParent, node)
      })
      parent.addChild(newParent)
    }
  } else return ''
}

export function getArticleContent(content: string, faqId?: string) {
  const regex = /<h2\s+id=["']([^"']+)["'][^>]*>(.+?)\s?<\/h2>/gi
  const matches = content.match(regex)
  const result = matches
    ? matches
        .map((matchH2) => {
          const id = matchH2.match(/id=["']([^"']+)["']/i)[1]
          const data = matchH2.replace(/(<\/?h2[^>]*>)|(<br>)/g, '').trim()
          const hrefData = `#${id}`
          return { id, data, hrefData }
        })
        .filter((item) => item.id !== undefined)
    : []
  if (faqId && faqId !== '')
    result.push({
      id: faqId,
      data: 'Frequently Asked Questions',
      hrefData: `#${faqId}`
    })
  return result
}
