import Accordion from '@/app/ui/components/Common/Nav/Accordion'
import { ArrowIosDownwardOutline } from '@styled-icons/evaicons-outline/ArrowIosDownwardOutline'
import { ArrowIosUpwardOutline } from '@styled-icons/evaicons-outline/ArrowIosUpwardOutline'
import Button, { ButtonProps } from '@/app/ui/components/Common/ButtonV2'
import { getText } from '@/utils/app'
import { useState } from 'react'
import css from './NavItem.module.css'

export type NavItemProps = {
  item: ButtonProps
  links?: ButtonProps[]
  isDesktop?: boolean
}

function NavItem({ item, links, isDesktop }: Readonly<NavItemProps>) {
  const [showLinks, setShowLinks] = useState(false)

  return (
    <li
      className={item.variant !== 'navbar' ? css.Box : ''}
      onMouseEnter={() => isDesktop && setShowLinks(true)}
      onMouseLeave={() => isDesktop && setShowLinks(false)}
      onClick={() => !isDesktop && showLinks && setShowLinks(false)}
    >
      <div className={css.Item}>
        <Button
          {...item}
          size={item?.size ?? 'link'}
          variant={item?.variant ?? 'link'}
        >
          {getText(item.label)}
        </Button>
        {links?.length &&
          links.length > 0 &&
          (showLinks ? (
            <ArrowIosUpwardOutline
              size={16}
              onClick={() => setShowLinks(false)}
              color="black"
            />
          ) : (
            <ArrowIosDownwardOutline
              size={16}
              onClick={() => setShowLinks(true)}
              color="black"
            />
          ))}
      </div>
      {links?.length && links.length > 0 && (
        <Accordion links={links} showLinks={showLinks} />
      )}
    </li>
  )
}

export default NavItem
