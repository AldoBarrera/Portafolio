import { ButtonProps } from '@/app/ui/components/Common/ButtonV2'
import NavItem from '@/app/ui/components/Common/Nav/NavItem'
import css from './Accordion.module.css'

type AccordionProps = {
  links?: ButtonProps[]
  showLinks?: boolean
}
function Accordion({ links, showLinks }: Readonly<AccordionProps>) {
  return (
    <div className={`${showLinks ? css.Showsubmenu : css.Hidesubmenu}`}>
      <ul className={css.Submenu}>
        {links?.map((item, key) => (
          <NavItem item={item} key={key} />
        ))}
      </ul>
    </div>
  )
}

export default Accordion
