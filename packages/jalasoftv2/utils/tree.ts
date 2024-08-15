import { Node } from '@/utils/node'

const ROOT_NODE = 'root'
export function buildTree(
  arr: {
    parentSlug: string
    slug: string
    updatedAt: string
    seo: {
      noIndex: boolean
      noFollow: boolean
    }
  }[]
): Node {
  const nodes: { [slug: string]: Node } = {}
  arr.forEach((obj) => {
    return (nodes[obj.slug] = new Node(
      obj.slug,
      obj.parentSlug,
      obj.updatedAt,
      obj.seo?.noIndex,
      obj.seo?.noFollow
    ))
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
  const rootSlug = ROOT_NODE
  if (slugs.length > 0) {
    slugs.unshift({ slug: rootSlug, parentSlug: null })
    const root = buildTree(slugs)
    const nodesAtLevel = getNodesAtLevel(root, 1, level)
    return nodesAtLevel
  }
}

export function getStaticPathsSlugsSiteMaps(slugs: any[]) {
  const rootSlug = ROOT_NODE
  if (slugs.length > 0) {
    slugs.unshift({ slug: rootSlug, parentSlug: null })
    const root = buildTree(slugs)
    const paths: pathSite[] = []
    addParentPathInfo(root, paths)
    return paths
  }
}

type pathSite = {
  slug: string
  updatedAt: string
}
export function addParentPathInfo(node: Node, paths: pathSite[]): void {
  function traverse(node: Node, parentPath: string, paths: pathSite[]) {
    const currentPath =
      parentPath === '' ? node.slug : `${parentPath}/${node.slug}`
    node.parentPath = currentPath
    if (node.slug !== ROOT_NODE && !node.noFollow && !node.noIndex) {
      paths.push({
        slug: node.parentPath.replace(`${ROOT_NODE}/`, ''),
        updatedAt: node.updatedAt
      })
    }
    node.children.forEach((child) => {
      traverse(child, currentPath, paths)
    })
  }
  traverse(node, '', paths)
}
