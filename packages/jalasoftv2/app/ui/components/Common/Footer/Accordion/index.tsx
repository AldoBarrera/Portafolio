import { ButtonProps } from '@/app/ui/components/Common/ButtonV2'
import NavItem, {
  NavItemProps
} from '@/app/ui/components/Common/Footer/NavItem'
import css from './Accordion.module.css'

type AccordionProps = {
  links?: ButtonProps[] | NavItemProps[]
  showLinks?: boolean
  isSubItem?: boolean
}
function Accordion({ links, showLinks, isSubItem }: Readonly<AccordionProps>) {
  return (
    <div className={`${showLinks ? css.Showsubmenu : css.Hidesubmenu}`}>
      <ul
        className={css.Submenu}
        style={
          {
            '--submenu-gap': isSubItem ? 0 : '2.4rem'
          } as React.CSSProperties
        }
      >
        {links?.map((item, key) =>
          isSubItem ? (
            <NavItem {...(item as NavItemProps)} key={key} />
          ) : (
            <NavItem item={item as ButtonProps} key={key} />
          )
        )}
      </ul>
    </div>
  )
}

export default Accordion
