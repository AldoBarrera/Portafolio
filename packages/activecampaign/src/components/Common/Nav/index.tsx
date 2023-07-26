import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Container from 'components/Common/Container'
import Button, { ButtonProps } from 'components/Common/Button'
import theme from 'styles/theme'

import * as Style from './styles'
import NavMobile from 'components/Common/NavMobile'

export type NavProps = {
  bgColor?: keyof typeof theme.colors
  textColor?: keyof typeof theme.colors
}

type SubLinkProps = {
  text: string
  url: string
  type: ButtonProps
}

type buttonsType = {
  text: string
  type: ButtonProps
  url?: string
  subLinks?: SubLinkProps[]
}

function Nav({ bgColor, textColor }: NavProps) {
  const [scrollDir, setScrollDir] = useState(false)
  const [isStickySet, setIsStickySet] = useState(false)
  const [isInitialPosition, setIsInitialPosition] = useState(true)

  const secondaryLinks: Array<buttonsType> = [
    {
      text: 'Pipelines',
      url: '#Pipelines',
      type: {
        variant: 'isNavBasic',
        size: 'medium',
        textProperties: {
          fontFamily: 'Roboto',
          fontSize: '1.8rem',
          fontWeight: 'normal',
          color: textColor
        }
      }
    }
  ]

  useEffect(() => {
    const threshold = 0
    const heightHeader = 157
    let lastScrollY = window.pageYOffset
    let ticking = false
    const updateScrollDir = () => {
      const offset = window.scrollY
      if (offset > 1) {
        if (offset > heightHeader) {
          setIsInitialPosition(false)
        }
        const scrollY = window.pageYOffset
        if (Math.abs(scrollY - lastScrollY) < threshold) {
          ticking = false
          return
        }
        if (scrollY > lastScrollY) {
          setScrollDir(false)
        } else if (offset > heightHeader) {
          setScrollDir(true)
          setIsStickySet(true)
        }
        lastScrollY = scrollY > 0 ? scrollY : 0
      } else {
        setScrollDir(false)
        setIsInitialPosition(true)
        setIsStickySet(false)
      }
      ticking = false
    }
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollDir)
        ticking = true
      }
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [scrollDir])

  return (
    <>
      <Style.Navbar isSticky={scrollDir} isInitialPosition={isInitialPosition}>
        <Style.NavWrapper
          isSticky={scrollDir}
          isInitialPosition={isInitialPosition}
          bgColor={bgColor}
        >
          <Container>
            <Style.NavLogo
                isSticky={scrollDir}
                isStickySet={isStickySet}
                textColor={textColor}
              >
                <Link href="/">
                    <img src="/img/logo-jalastore.png" />
                </Link>
              </Style.NavLogo>
          </Container>
        </Style.NavWrapper>
        <Style.NavWrapperSecondary
          isSecondary
          isStickySet={isStickySet}
          isSticky={scrollDir}
          isInitialPosition={isInitialPosition}
          bgColor={bgColor}
        >
          <Container>
            <Style.NavWrapperSecondaryButtons isSecondary isSticky={scrollDir}>
              
              <Style.NavMenu>
                {secondaryLinks.map((link) => (
                  <Style.NavItem
                    key={link.text}
                    childCount={link?.subLinks?.length}
                    hasUnderline
                    textColor={textColor}
                  >
                    {link.url ? (
                      <Link href={link.url} passHref>
                        <Button
                          as="a"
                          textContent={link.text}
                          textProperties={link.type.textProperties}
                          hasSublinks={link.subLinks !== undefined}
                          hasUrl={link.url !== undefined}
                          {...link.type}
                        />
                      </Link>
                    ) : (
                      <Button
                        as="a"
                        textContent={link.text}
                        textProperties={link.type.textProperties}
                        hasSublinks={link.subLinks !== undefined}
                        hasUrl={link.url !== undefined}
                        {...link.type}
                      />
                    )}
                    <Style.NavSubMenu>
                      {link?.subLinks?.map((subLink, index) => (
                        <Style.NavSubItem key={index}>
                          <Link href={subLink.url}>
                            <Button
                              as="a"
                              textContent={subLink.text}
                              textProperties={subLink.type.textProperties}
                              {...subLink.type}
                            />
                          </Link>
                        </Style.NavSubItem>
                      ))}
                    </Style.NavSubMenu>
                  </Style.NavItem>
                ))}
              </Style.NavMenu>
            </Style.NavWrapperSecondaryButtons>
          </Container>
        </Style.NavWrapperSecondary>
      </Style.Navbar>
      <Style.NavWrapperMobile
        isSticky={scrollDir}
        textColor={textColor}
        bgColor={bgColor}
      >
        <Container>
          <Style.NavWrapperSecondaryButtons>
            <Style.NavLogo textColor={textColor}>
              <Link href="/">
                <a>
                  <img src="/img/logo-jalastore.png" />
                </a>
              </Link>
            </Style.NavLogo>
            <NavMobile iconColor={textColor} />
          </Style.NavWrapperSecondaryButtons>
        </Container>
      </Style.NavWrapperMobile>
      <Style.EmptyNavWrapper
        isInitialPosition={isInitialPosition}
        bgColor={bgColor}
      />
      <Style.EmptyNavWrapperMobile
        isSticky={scrollDir}
        isInitialPosition={isInitialPosition}
        bgColor={bgColor}
      />
    </>
  )
}

export default Nav
