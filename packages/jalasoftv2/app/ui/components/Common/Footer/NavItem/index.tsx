'use client'
import Accordion from '@/app/ui/components/Common/Footer/Accordion'
import { ArrowIosDownwardOutline } from '@styled-icons/evaicons-outline/ArrowIosDownwardOutline'
import { ArrowIosUpwardOutline } from '@styled-icons/evaicons-outline/ArrowIosUpwardOutline'
import Button, { ButtonProps } from '@/app/ui/components/Common/ButtonV2'
import { getText } from '@/utils/app'
import { useState } from 'react'
import css from './NavItem.module.css'

export type NavItemProps = {
  item: ButtonProps
  subItems?: NavItemProps[]
  links?: ButtonProps[]
}

function NavItem({ item, subItems, links }: Readonly<NavItemProps>) {
  const [showSubItems, setShowSubItems] = useState(false)
  const [showLinks, setShowLinks] = useState(false)

  return (
    <li className={css.Box}>
      <div className={css.Item}>
        <Button
          {...item}
          size={item?.size ?? 'link'}
          variant={item?.variant ?? 'link'}
        >
          {getText(item.label)}
        </Button>
        {((links?.length && links.length > 0) ||
          (subItems?.length && subItems.length > 0)) &&
          (showLinks || showSubItems ? (
            <ArrowIosUpwardOutline
              size={16}
              onClick={() => {
                subItems?.length &&
                  subItems.length > 0 &&
                  setShowSubItems(false)
                links?.length && links.length > 0 && setShowLinks(false)
              }}
              color="white"
            />
          ) : (
            <ArrowIosDownwardOutline
              size={16}
              onClick={() => {
                subItems?.length && subItems.length > 0 && setShowSubItems(true)
                links?.length && links.length > 0 && setShowLinks(true)
              }}
              color="white"
            />
          ))}
      </div>
      {((links?.length && links.length > 0) ||
        (subItems?.length && subItems.length > 0)) && <hr></hr>}
      {subItems?.length && subItems.length > 0 && (
        <Accordion links={subItems} showLinks={showSubItems} isSubItem />
      )}
      {links?.length && links.length > 0 && (
        <Accordion links={links} showLinks={showLinks} />
      )}
    </li>
  )
}

export default NavItem
