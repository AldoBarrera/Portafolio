export class Node {
  slug: string
  parentSlug: string | null
  updatedAt: string
  noIndex: boolean
  noFollow: boolean
  children: Node[]
  parentNodes: Node[]
  parentPath: string

  constructor(
    slug: string,
    parentSlug: string | null,
    updatedAt: string,
    noIndex: boolean,
    noFollow: boolean
  ) {
    this.slug = slug
    this.parentSlug = parentSlug
    this.children = []
    this.parentNodes = []
    this.parentPath = ''
    this.updatedAt = updatedAt
    this.noIndex = noIndex
    this.noFollow = noFollow
  }

  addChild(child: Node) {
    this.children.push(child)
  }
}
