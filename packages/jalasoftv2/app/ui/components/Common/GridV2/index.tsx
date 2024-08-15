import { ReactNode } from 'react'
import css from './GridV2.module.css'

export type GridProps = {
  children?: ReactNode
  columns?: number
  columnMinSize?: number
  gridColumns?: string
  gap?: string
  classes?: string
}

function buildGridColumns(columns?: number, columnMinSize?: number) {
  if (columns && columnMinSize) {
    return `repeat(
      ${columns},
      minmax(${columnMinSize}px, 1fr)
    )`
  }
  if (columnMinSize && !columns) {
    return `repeat(
      auto-fit,
      minmax(${columnMinSize}px, 1fr)
    )`
  }
  if (!columnMinSize && columns) {
    return `repeat(
      ${columns},
      minmax(300px, 1fr)
    )`
  }
}
function Grid({
  children,
  columns,
  columnMinSize,
  gridColumns,
  gap,
  classes
}: Readonly<GridProps>) {
  return (
    <div
      className={`${css.Container} ${classes}`}
      style={
        {
          '--gridv2-columns':
            gridColumns ?? buildGridColumns(columns, columnMinSize),
          '--gridv2-gap': gap
        } as React.CSSProperties
      }
    >
      {children}
    </div>
  )
}

export default Grid
