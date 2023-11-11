import React from 'react'
import Link from 'next/link'
import Image from 'components/Common/Image'
import NavMobile from 'components/Common/NavMobile'
import { NavType } from 'components/Common/Nav'
import { useScroll } from 'components/Common/Nav/hooks'
import { JALASOFT_LOGO } from 'constants/pages'
import * as Style from './styles'

function Nav(nav: NavType) {
  const [scrollDir, isInitialPosition] = useScroll()
  const mainLinks: Array<NavType> = nav?.navItems

  return (
    <>
      <Style.MobileNavWrapper isSticky={scrollDir}>
        <Style.MobileNavWrapperButtons>
          <Style.MobileNavLogo>
            <Link href="/">
              <a>
                <Image
                  loader={() => JALASOFT_LOGO.src}
                  src={JALASOFT_LOGO.src}
                  sizes={'10vw'}
                  alt={JALASOFT_LOGO.alt}
                  priority={false}
                />
              </a>
            </Link>
          </Style.MobileNavLogo>
          <NavMobile mainLinks={mainLinks} />
        </Style.MobileNavWrapperButtons>
      </Style.MobileNavWrapper>
      <Style.MobileEmptyNavWrapper
        isSticky={scrollDir}
        isInitialPosition={isInitialPosition}
      />
    </>
  )
}

export default Nav
