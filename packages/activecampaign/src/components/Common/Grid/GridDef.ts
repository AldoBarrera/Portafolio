import * as React from 'react'
import { CardProps } from 'components/Common/Card'
import { COLORS } from './generic'

export interface GridProps extends StrictGridProps {
  [key: string]: any
}

export interface StrictGridProps {
  centered?: boolean
  children?: React.ReactNode
  color?: COLORS
  columns?: number
  columnMinSizes?: number
  items?: CardProps[]
  gap?: string
}

export default GridProps
