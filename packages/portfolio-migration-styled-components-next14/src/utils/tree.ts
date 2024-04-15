import { Node } from './node'
export function buildTree(
  arr: { parentSlug: string; slug: string }[]
): Node {
  const nodes: { [slug: string]: Node } = {}
  arr.forEach((obj) => {
    nodes[obj.slug] = new Node(obj.slug, obj.parentSlug)
  })
  arr.forEach((obj) => {
    const node = nodes[obj.slug]
    const parent = nodes[obj.parentSlug]
    if (parent) {
      parent.addChild(node)
    } else {
      nodes[obj.slug] = node
    }
  })
  return nodes[arr[0].slug]
}

export function getNodesAtLevel(
  node: Node,
  currentLevel: number,
  targetLevel: number
): Node[] {
  if (currentLevel === targetLevel) {
    return [node]
  }

  const nodesAtLevel: Node[] = []

  if (node.children) {
    node.children.forEach((child) => {
      const childNodesAtLevel = getNodesAtLevel(
        child,
        currentLevel + 1,
        targetLevel
      )
      nodesAtLevel.push(...childNodesAtLevel)
    })
  }

  return nodesAtLevel
}

export function getNodeBySlug(node: Node, slug: string): Node | null {
  if (node.slug === slug) {
    return node
  }

  if (node.children) {
    for (let i = 0; i < node.children.length; i++) {
      const result = getNodeBySlug(node.children[i], slug)
      if (result) {
        return result
      }
    }
  }

  return null
}

export function getParents(node: Node, nodes: Node[]): Node[] {
  const parents: Node[] = []
  let parentSlug = node.parentSlug

  while (parentSlug) {
    const parent = nodes.find((obj) => obj.slug === parentSlug)
    if (parent) {
      parents.push(parent)
      parentSlug = parent.parentSlug
    } else {
      parentSlug = null
    }
  }

  return parents
}

export function getStaticPathsSlugs(slugs: any[], level: number) {
  const rootSlug = 'root'
  if (slugs.length > 0) {
    slugs.unshift({ slug: rootSlug, parentSlug: null })
    const root = buildTree(slugs)
    const nodesAtLevel = getNodesAtLevel(root, 1, level)
    return nodesAtLevel
  }
}
