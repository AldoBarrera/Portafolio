import * as React from 'react'
import { COLORS } from './generic'
import { GridColumnProps } from './GridColumn/GridColumnDef'

export interface GridProps extends StrictGridProps {
  [key: string]: any
}

export interface StrictGridProps {
  centered?: boolean
  children?: React.ReactNode
  color?: COLORS
  columnsNumber?: number
  columnMinSizes?: number
  columns?: GridColumnProps[]
  gap?: string
}

export default GridProps
