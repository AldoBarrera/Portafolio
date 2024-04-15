export class Node {
  slug: string
  parentSlug: string | null
  children: Node[]

  constructor(slug: string, parentSlug: string | null) {
    this.slug = slug
    this.parentSlug = parentSlug
    this.children = []
  }

  addChild(child: Node) {
    this.children.push(child)
  }
}
