import { BreadcrumbWrapper } from './styles'
import Breadcrumbs from 'nextjs-breadcrumbs'
import theme from 'styles/theme'

export type BreadcrumbProps = {
  color?: keyof typeof theme.colors
}
function Breadcrumb({ color }: BreadcrumbProps) {
  return (
    <BreadcrumbWrapper color={color}>
      <Breadcrumbs
        transformLabel={(title) =>
          title === 'on demand software outsourcing services'
            ? (title = 'on-demand software outsourcing services')
            : title === 'research development'
            ? (title = 'R&D')
            : title
        }
      />
    </BreadcrumbWrapper>
  )
}

export default Breadcrumb
