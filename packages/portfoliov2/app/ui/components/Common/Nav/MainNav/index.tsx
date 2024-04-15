import React from 'react'
import Link from 'next/link'
import Image from '@/app/ui/components/Common/Image'
import { NavType } from '@/app/ui/components/Common/Nav'
import styles from '@/app/ui/components/Common/Nav/MainNav/main-nav.module.css'

function MainNav({ navItems, logo }: NavType) {
  return (
    <header className={styles.Main_Header}>
      <nav className={styles.Main_NavWrapper}>
        {logo && (
          <Link href="/">
            <Image
              src={logo.file.url}
              alt={logo.description}
              priority={true}
              width={141}
              height={47}
            />
          </Link>
        )}
        <ul className={styles.Main__NavMenu}>
          {navItems?.map((link, index) => (
            <li key={index} className={styles.Main__NavItem}>
              {link.url && (
                <Link href={link.url} passHref prefetch={false}>
                  {link.label}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default MainNav
