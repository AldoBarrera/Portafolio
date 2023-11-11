import { useState } from 'react'
import * as Style from './styles'
import { ArrowIosDownwardOutline } from '@styled-icons/evaicons-outline/ArrowIosDownwardOutline'
import { ArrowIosUpwardOutline } from '@styled-icons/evaicons-outline/ArrowIosUpwardOutline'
import Link from 'next/link'
import theme from 'styles/theme'
import ToggleVisibility from 'components/Common/ToggleVisibility'
import { NavType } from 'components/Common/Nav'

export type NavPropsMobile = {
  iconColor?: keyof typeof theme.colors
  topLinks?: NavType[]
  mainLinks?: NavType[]
}

function NavMobile({ iconColor, topLinks, mainLinks }: NavPropsMobile) {
  const [showNavSubMenu, setShowNavSubMenu] = useState({
    ['Our services']: false,
    ['Join our team']: false
  })

  const toggleVisibility = (link: NavType) => {
    setShowNavSubMenu({
      ...showNavSubMenu,
      [link.label]: !showNavSubMenu[link.label]
    })
  }

  const renderArrowIcon = (link: NavType) => {
    if (link.navItems) {
      if (showNavSubMenu[link.label]) {
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
          <Style.NavMobileInput type="checkbox" aria-label="NavMobile" />
          <Style.IconWrapper>
            <Style.IconHamburgerMenu iconColor={iconColor} />
            <Style.IconCloseCircle />
          </Style.IconWrapper>
          <Style.NavMobileList>
            {mainLinks &&
              mainLinks.map((link) => (
                <Style.NavItem
                  key={link.label}
                  onClick={() => link.navItems && toggleVisibility(link)}
                >
                  {link.url && (
                    <Link href={link.url} prefetch={false}>
                      <a>{link.label}</a>
                    </Link>
                  )}

                  {!link.url && <span>{link.label}</span>}

                  {renderArrowIcon(link)}

                  <ToggleVisibility open={showNavSubMenu[link.label]}>
                    <Style.NavSubMenu>
                      {link?.navItems?.map((subLink, index) => (
                        <Style.NavSubItem key={index}>
                          <Link href={subLink.url} prefetch={false}>
                            <a>{subLink.label}</a>
                          </Link>
                        </Style.NavSubItem>
                      ))}
                    </Style.NavSubMenu>
                  </ToggleVisibility>
                </Style.NavItem>
              ))}
            {topLinks && (
              <Style.NavMobileTopLinks>
                {topLinks.map((link, index) => (
                  <Style.NavItem key={index}>
                    <Link href={link?.url} prefetch={false}>
                      <a id={link?.url}>{link?.label}</a>
                    </Link>
                  </Style.NavItem>
                ))}
              </Style.NavMobileTopLinks>
            )}
          </Style.NavMobileList>
        </Style.NavMobileMenuToggle>
      </Style.NavMobileContent>
    </Style.NavMobileWrapper>
  )
}

export default NavMobile
