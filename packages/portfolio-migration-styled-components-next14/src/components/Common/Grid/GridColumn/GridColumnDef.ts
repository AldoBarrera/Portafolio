import * as React from 'react'
import theme from 'styles/theme'

export type GridColumnProps = {
  children?: React.ReactNode
  color?: keyof typeof theme.colors
  size?: number
  sections?: any[]
  padding?: string
  paddingMobile?: string
}

export default GridColumnProps
