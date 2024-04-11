import * as React from 'react'
import { GridColumnProps } from './GridColumn/GridColumnDef'
import theme from 'styles/theme'

export type GridProps = {
  centered?: boolean
  children?: React.ReactNode
  color?: keyof typeof theme.colors 
  columnsNumber?: number
  columnMinSizes?: number
  columns?: GridColumnProps[]
  gap?: string
}

export default GridProps
