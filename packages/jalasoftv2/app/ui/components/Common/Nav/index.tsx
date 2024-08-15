'use client'
import { CloseCircleOutline } from '@styled-icons/evaicons-outline/CloseCircleOutline'
import Container, {
  ContainerV3Props
} from '@/app/ui/components/Common/ContainerV3'
import Image, { ImageProps } from '@/app/ui/components/Common/ImageV2'
import Link from 'next/link'
import { Menu } from '@styled-icons/boxicons-regular/Menu'
import NavItem, { NavItemProps } from '@/app/ui/components/Common/Nav/NavItem'
import { useEffect, useState } from 'react'
import css from './Nav.module.css'

type NavProps = {
  logo?: ImageProps
  navItems?: NavItemProps[]
  container?: ContainerV3Props
}

function Nav({ navItems, logo, container }: Readonly<NavProps>) {
  const [showMenu, setShowMenu] = useState(false)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [classes, setClasses] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      if (currentScrollY > lastScrollY) {
        setClasses(`${currentScrollY !== 0 ? css.Scrolldown : ''}`)
      } else {
        setClasses(`${currentScrollY !== 0 ? css.Scrollup : ''}`)
      }
      setLastScrollY(currentScrollY)
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [lastScrollY])

  return (
    <Container
      bgColor="white"
      flex={{
        flexDirection: 'row',
        justifyContent: 'space-between'
      }}
      flexMobile={{
        flexDirection: 'row',
        justifyContent: 'space-between'
      }}
      {...container}
      {...container?.configuration}
      classes={classes}
    >
      <Link href="/" passHref>
        <Image
          image={logo?.image ?? {}}
          width={logo?.width ?? 188}
          height={logo?.height ?? 40}
          mobileConfig={{
            image: logo?.mobileConfig?.image,
            width: logo?.mobileConfig?.width ?? 188,
            height: logo?.mobileConfig?.height ?? 40
          }}
        />
      </Link>
      <nav className={css.Mobile}>
        {!showMenu && (
          <Menu className={css.MenuIcon} onClick={() => setShowMenu(true)} />
        )}
        <ul className={`${css.Menu__Mobile} ${showMenu ? css.Show__Nav : ''}`}>
          <CloseCircleOutline
            className={css.CloseIcon}
            onClick={() => setShowMenu(false)}
          />
          {navItems?.map((item, key) => (
            <NavItem key={key} {...item} />
          ))}
        </ul>
      </nav>
      <nav className={css.Desktop}>
        <ul className={css.Menu__Desktop}>
          {navItems?.map((item, key) => (
            <NavItem key={key} {...item} isDesktop />
          ))}
        </ul>
      </nav>
    </Container>
  )
}

export default Nav
