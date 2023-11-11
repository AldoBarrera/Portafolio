import React from 'react'
import Link from 'next/link'
import Button from 'components/Common/Button'
import Image from 'components/Common/Image'
import { NavType } from 'components/Common/Nav'
import { useScroll } from 'components/Common/Nav/hooks'

import * as Style from './styles'

function MainNav({ navItems, logo }: NavType) {
  const [scrollDir, isInitialPosition, isStickySet] = useScroll()
  const mainLinks: Array<NavType> = navItems
  return (
    <Style.MainNavWrapper
      isMain
      isStickySet={isStickySet}
      isSticky={scrollDir}
      isInitialPosition={isInitialPosition}
    >
      <Link href="/">
        <a>
          <Image
            src={logo.file.url}
            alt={logo.description}
            priority={true}
            width={141}
            height={47}
          />
        </a>
      </Link>
      <Style.MainNavMenu>
        {mainLinks.map((link) => (
          <Style.MainNavItem
            key={link.label}
            childCount={link?.navItems?.length}
            hasUnderline
          >
            {link.url ? (
              <Link href={link.url} passHref prefetch={false}>
                <Button
                  as="a"
                  label={link.label}
                  hasSublinks={link.navItems !== undefined}
                  hasUrl={link.url !== undefined}
                  variant={link.variant ? link.variant : 'isNavBasic'}
                  size="medium"
                />
              </Link>
            ) : (
              <Button
                as="a"
                label={link.label}
                hasSublinks={link.navItems !== undefined}
                hasUrl={link.url !== undefined}
                variant="isNavBasic"
                size="medium"
              />
            )}
            <Style.MainNavSubMenu>
              {link?.navItems?.map((subLink, index) => (
                <Style.MainNavSubItem key={index}>
                  <Link href={subLink?.url || '/'} passHref prefetch={false}>
                    <Button
                      as="a"
                      label={subLink.label}
                      variant="isBasic"
                      size="large"
                    />
                  </Link>
                </Style.MainNavSubItem>
              ))}
            </Style.MainNavSubMenu>
          </Style.MainNavItem>
        ))}
      </Style.MainNavMenu>
    </Style.MainNavWrapper>
  )
}

export default MainNav
