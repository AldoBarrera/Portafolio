import { useState } from 'react'
import * as Style from './styles'
import { ArrowIosDownwardOutline } from '@styled-icons/evaicons-outline/ArrowIosDownwardOutline'
import { ArrowIosUpwardOutline } from '@styled-icons/evaicons-outline/ArrowIosUpwardOutline'
import Link from 'next/link'
import { ButtonProps } from 'components/Common/Button'
import theme from 'styles/theme'
import ToggleVisibility from 'components/Common/ToggleVisibility'

export type NavPropsMobile = {
  iconColor?: keyof typeof theme.colors
}

type SubLinkProps = {
  text: string
  url: string
}

type buttonsType = {
  text: string
  type: ButtonProps
  url?: string
  subLinks?: SubLinkProps[]
}

const secondaryLinks: Array<buttonsType> = [
  {
    text: 'Pipelines',
    url: '#Pipelines',
    type: {
      variant: 'isBasic',
      size: 'medium'
    }
  }
]

function NavMobile({ iconColor }: NavPropsMobile) {
  const [showNavSubMenu, setShowNavSubMenu] = useState({
    ['Our services']: false,
    ['Join our team']: false
  })

  const toggleVisibility = (link: buttonsType) => {
    setShowNavSubMenu({
      ...showNavSubMenu,
      [link.text]: !showNavSubMenu[link.text]
    })
  }

  const renderArrowIcon = (link: buttonsType) => {
    if (link.subLinks) {
      if (showNavSubMenu[link.text]) {
        return <ArrowIosUpwardOutline size={16} />
      } else {
        return <ArrowIosDownwardOutline size={16} />
      }
    }
  }

  return (
    <Style.NavMobileWrapper>
      <Style.NavMobileContent>
        <Style.NavMobileMenuToggle id="menuToggle">
          <Style.NavMobileInput type="checkbox" />

          <Style.IconWrapper>
            <Style.IconHamburgerMenu iconColor={iconColor} />
            <Style.IconCloseCircle />
          </Style.IconWrapper>

          <Style.NavMobileList>
            <Style.NavMobileSecondaryLinks>
              {secondaryLinks.map((link) => (
                <Style.NavItem
                  key={link.text}
                  onClick={() => link.subLinks && toggleVisibility(link)}
                >
                  {link.url && (
                    <Link href={link.url}>
                      <a>{link.text}</a>
                    </Link>
                  )}

                  {!link.url && <span>{link.text}</span>}

                  {renderArrowIcon(link)}

                  <ToggleVisibility open={showNavSubMenu[link.text]}>
                    <Style.NavSubMenu>
                      {link?.subLinks?.map((subLink, index) => (
                        <Style.NavSubItem key={index}>
                          <Link href={subLink.url}>
                            <a>{subLink.text}</a>
                          </Link>
                        </Style.NavSubItem>
                      ))}
                    </Style.NavSubMenu>
                  </ToggleVisibility>
                </Style.NavItem>
              ))}
            </Style.NavMobileSecondaryLinks>
          </Style.NavMobileList>
        </Style.NavMobileMenuToggle>
      </Style.NavMobileContent>
    </Style.NavMobileWrapper>
  )
}

export default NavMobile
