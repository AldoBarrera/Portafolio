import Link from 'next/link'
import css from './BreadcrumbV2.module.css'
import { TextV2Props } from '@/app/ui/components/Common/TextV2'
import theme from '@/styles/themeV2'

interface Breadcrumb {
  breadcrumb: string
  href: string
}

export type BreadcrumbProps = {
  title?: TextV2Props
  extraPath?: Breadcrumb
  path?: string
  classes?: string
  style?: any
}

type PathItem = {
  breadcrumb: string
  href: string
}

function Breadcrumb({
  title,
  extraPath,
  path,
  classes,
  style
}: Readonly<BreadcrumbProps>) {
  const pathArray: PathItem[] = []
  if (path) {
    const linkPath = path.split('/')
    linkPath.shift()
    linkPath.pop()

    const pathArray = linkPath?.map((pathItem, i) => {
      return {
        breadcrumb: pathItem,
        href: '/' + linkPath.slice(0, i + 1).join('/')
      }
    })

    if (extraPath) {
      pathArray.push({
        breadcrumb: extraPath.breadcrumb,
        href: `/${linkPath.join('/')}/${extraPath.href}`
      })
    }
  }

  return (
    <nav
      aria-label="breadcrumbs"
      className={`${css.Breadcrumb__Content} ${classes}`}
      style={
        {
          '--breadcrumb-color':
            theme.colors[title?.color as keyof typeof theme.colors],
          ...style
        } as React.CSSProperties
      }
    >
      <ol>
        <li>
          <Link href={`/`} passHref>
            Home
          </Link>
        </li>
        {pathArray?.length > 0 &&
          pathArray.map((breadcrumb) => {
            return (
              breadcrumb.breadcrumb && (
                <li key={breadcrumb.href}>
                  <Link href={breadcrumb.href}>{breadcrumb.breadcrumb}</Link>
                </li>
              )
            )
          })}
      </ol>
    </nav>
  )
}

export default Breadcrumb
