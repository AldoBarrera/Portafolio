import * as React from 'react'
import { COLORS } from '../generic'

export default interface GridRowProps extends StrictGridRowProps {
  [key: string]: any
}

export interface StrictGridRowProps {
  children?: React.ReactNode
  color?: COLORS
  columnSize?: number
  rowDistribution?: string
  columns?: number
  hasColumns?: boolean
  size?: number
}
