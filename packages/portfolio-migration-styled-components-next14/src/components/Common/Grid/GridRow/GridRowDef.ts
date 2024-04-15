import * as React from 'react'
import theme from 'styles/theme'

export default interface GridRowProps extends StrictGridRowProps {
  [key: string]: any
}

export interface StrictGridRowProps {
  children?: React.ReactNode
  color?: keyof typeof theme.colors
  columnSize?: number
  rowDistribution?: string
  columns?: number
  hasColumns?: boolean
  size?: number
}
