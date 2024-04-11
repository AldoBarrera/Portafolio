'use client'
import React from 'react'
import MainNav from 'components/Common/Nav/MainNav'
import MobileNav from 'components/Common/Nav/MobileNav'
import { variantTypes } from 'components/Common/Button/variantsModifiers'
import { ImageType } from 'components/Common/Image'
import { useScroll } from './hooks'

import * as Style from './styles'

export type NavType = {
  label: string
  url?: string
  navItems: NavType[]
  variant?: variantTypes
  logo?: ImageType
  style?: any
}

function Nav(props: NavType) {
  const [scrollDir, isInitialPosition, isStickySet] = useScroll()
  const { navItems, style } = props
  const isMobile = false

  return (
    <>
      {!isMobile ? (
        <>
          <Style.Navbar
            isSticky={scrollDir}
            isInitialPosition={isInitialPosition}
            isStickySet={isStickySet}
            style={style}
          >
            {navItems && <MainNav {...props} />}
          </Style.Navbar>
          <Style.EmptyNavWrapper isInitialPosition={isInitialPosition} />
        </>
      ) : (
        <MobileNav {...props} />
      )}
    </>
  )
}

export default Nav
