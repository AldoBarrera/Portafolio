import React from 'react'
import MainNav from '@/app/ui/components/Common/Nav/MainNav'
import mock1 from '@/app/ui/components/Common/Nav/mock'
import { ImageType } from '@/app/ui/components/Common/Image'

export const mockNav = mock1
export type NavType = {
  label?: string
  url?: string
  navItems?: NavType[]
  logo?: ImageType
  style?: any
}

function Nav(props: NavType) {
  return (
    <MainNav {...props} />
  )
}

export default Nav
