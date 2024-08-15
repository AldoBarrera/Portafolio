import Button, { ButtonProps } from '@/app/ui/components/Common/ButtonV2'
import { getText } from '@/utils/app'
import css from './FooterItem.module.css'

export type FooterItemProps = {
  item: ButtonProps
  subItems?: FooterItemProps[]
  links?: ButtonProps[]
  isSubItem?: boolean
}

function FooterItem({
  item,
  subItems,
  links,
  isSubItem
}: Readonly<FooterItemProps>) {
  return (
    <li className={css.List}>
      {item?.label && (
        <Button
          {...item}
          size={item?.size ?? 'link'}
          variant={item?.variant ?? 'link'}
        >
          {getText(item.label)?.toUpperCase()}
        </Button>
      )}
      {!isSubItem && <hr></hr>}
      {subItems && subItems?.length > 0 && (
        <ul className={css.Subitem}>
          {subItems?.map((subItem, key) => (
            <FooterItem
              key={key}
              item={subItem?.item}
              subItems={subItem?.subItems}
              links={subItem?.links}
              isSubItem
            />
          ))}
        </ul>
      )}
      {links && links?.length > 0 && (
        <>
          {links?.map((item, key) => (
            <Button
              key={key}
              {...item}
              size={item?.size ?? 'link'}
              variant={item?.variant ?? 'link'}
            >
              {getText(item.label)}
            </Button>
          ))}
        </>
      )}
    </li>
  )
}

export default FooterItem
