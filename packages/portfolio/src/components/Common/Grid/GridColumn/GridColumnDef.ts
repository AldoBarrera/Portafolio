import * as React from 'react'
import { COLORS } from '../generic'

export interface GridColumnProps extends StrictGridColumnProps {
  [key: string]: any
}

export interface StrictGridColumnProps {
  children?: React.ReactNode
  color?: COLORS
  size?: number
  sections?: any[]
  padding?: string
  paddingMobile?: string
}

export default GridColumnProps
